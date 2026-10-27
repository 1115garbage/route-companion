/**
 * Tactile haptic feedback for Samsung Android devices and browsers
 */
export function triggerHaptic(type: 'tap' | 'skip' | 'next' | 'undo' | 'complete' = 'tap') {
  if (typeof window === 'undefined') return;

  // 1. Prefer native Android Bridge if running inside Android APK wrapper
  try {
    const androidBridge = (window as any).AndroidBridge;
    if (androidBridge && typeof androidBridge.vibrate === 'function') {
      androidBridge.vibrate(type);
      return;
    }
  } catch (err) {
    // Non-blocking
  }

  // 2. Web browser fallback with navigator.vibrate
  if (!('vibrate' in navigator)) return;

  try {
    switch (type) {
      case 'skip':
        navigator.vibrate([60, 40, 80]);
        break;
      case 'next':
        navigator.vibrate(45);
        break;
      case 'undo':
        navigator.vibrate([30, 30, 30]);
        break;
      case 'complete':
        navigator.vibrate([100, 50, 100, 50, 150]);
        break;
      case 'tap':
      default:
        navigator.vibrate(30);
        break;
    }
  } catch (err) {
    // Graceful fallback
  }
}

import { NavManeuver } from './navigationService';

/**
 * Coordinated Speech Queue & Manager
 * Prevents overlapping speech, prevents turn warnings from cutting off
 * customer announcements, and drops obsolete instructions on reroute.
 */
interface SpeechItem {
  id: string;
  text: string;
  priority: 'high' | 'normal';
  createdAt: number;
  maxAgeMs: number;
}

class SpeechCoordinator {
  private queue: SpeechItem[] = [];
  private isSpeaking = false;
  private currentPriority: 'high' | 'normal' | null = null;
  private safetyTimer: any = null;
  private activeUtterance: SpeechSynthesisUtterance | null = null;
  private lastSpokenText = '';
  private lastSpokenTime = 0;

  public speak(item: SpeechItem) {
    const now = Date.now();

    // Prevent immediate duplicate speech within 6 seconds
    if (this.lastSpokenText === item.text && now - this.lastSpokenTime < 6000) {
      return;
    }

    if (item.priority === 'high') {
      // High priority (Customer arrival, next customer, turnaround)
      // Discard any queued lower-priority turn announcements so they don't delay customer info
      this.queue = this.queue.filter((q) => q.priority === 'high');

      // If currently speaking a normal priority turn, stop it immediately
      if (this.isSpeaking && this.currentPriority === 'normal') {
        this.stopCurrent();
      }

      // Add to front of queue
      this.queue.unshift(item);
    } else {
      // Normal priority (Upcoming turn warning)
      // Discard expired items
      this.queue = this.queue.filter((q) => now - q.createdAt < q.maxAgeMs);
      if (this.queue.length >= 2) {
        // Drop oldest normal priority item
        const normalIdx = this.queue.findIndex((q) => q.priority === 'normal');
        if (normalIdx >= 0) this.queue.splice(normalIdx, 1);
      }
      this.queue.push(item);
    }

    this.processQueue();
  }

  public cancelNormalPriority() {
    this.queue = this.queue.filter((item) => item.priority === 'high');
    if (this.isSpeaking && this.currentPriority === 'normal') {
      this.stopCurrent();
    }
  }

  private stopCurrent() {
    if (this.safetyTimer) {
      clearTimeout(this.safetyTimer);
      this.safetyTimer = null;
    }
    this.isSpeaking = false;
    this.currentPriority = null;
    this.activeUtterance = null;

    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      try {
        window.speechSynthesis.cancel();
      } catch (e) {}
    }
  }

  private processQueue() {
    if (this.isSpeaking) return;
    if (this.queue.length === 0) return;

    const now = Date.now();
    // Drop expired items
    while (this.queue.length > 0 && now - this.queue[0].createdAt > this.queue[0].maxAgeMs) {
      this.queue.shift();
    }
    if (this.queue.length === 0) return;

    const item = this.queue.shift()!;
    this.executeSpeak(item);
  }

  private executeSpeak(item: SpeechItem) {
    this.isSpeaking = true;
    this.currentPriority = item.priority;
    this.lastSpokenText = item.text;
    this.lastSpokenTime = Date.now();

    // 1. Android Bridge TTS (native wrapper)
    try {
      const androidBridge = (window as any).AndroidBridge;
      if (androidBridge && typeof androidBridge.speak === 'function') {
        androidBridge.speak(item.text);
        const wordCount = item.text.split(/\s+/).length;
        const estimatedDurationMs = Math.max(1200, wordCount * 360);
        this.safetyTimer = setTimeout(() => {
          this.isSpeaking = false;
          this.currentPriority = null;
          this.processQueue();
        }, estimatedDurationMs);
        return;
      }
    } catch (e) {
      // Fall through to Web Speech API
    }

    // 2. Web browser fallback with SpeechSynthesis
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      this.isSpeaking = false;
      this.currentPriority = null;
      return;
    }

    try {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(item.text);
      utterance.rate = 1.05;
      utterance.pitch = 1.0;
      utterance.volume = 1.0;

      const finish = () => {
        if (this.safetyTimer) {
          clearTimeout(this.safetyTimer);
          this.safetyTimer = null;
        }
        this.isSpeaking = false;
        this.currentPriority = null;
        this.activeUtterance = null;
        // Small 200ms pause between utterances
        setTimeout(() => {
          this.processQueue();
        }, 200);
      };

      utterance.onend = finish;
      utterance.onerror = finish;

      // Chrome safety timeout in case onend fails to fire
      const wordCount = item.text.split(/\s+/).length;
      const maxDurationMs = Math.max(2500, wordCount * 500);
      this.safetyTimer = setTimeout(finish, maxDurationMs);

      this.activeUtterance = utterance;
      window.speechSynthesis.speak(utterance);
    } catch (err) {
      this.isSpeaking = false;
      this.currentPriority = null;
      this.activeUtterance = null;
    }
  }
}

const speechCoordinator = new SpeechCoordinator();

/**
 * Formats advance turn warning at distance (e.g. ~500 ft).
 * Examples:
 * - "Turn left in 500 feet."
 * - "Turn right in 500 feet."
 * - "Bear slightly left in 500 feet."
 * - "Make a sharp right in 500 feet."
 * - "Keep left at fork in 500 feet."
 * - "Enter roundabout in 500 feet."
 * - "Turn left at end of road in 500 feet."
 * - "Take ramp in 500 feet."
 * - "Merge left in 500 feet."
 * - "Continue straight in 500 feet."
 * - "Turn around as soon as possible."
 */
export function formatManeuverAdvanceWarning(maneuver: NavManeuver, distanceFeet: number = 500): string {
  if (!maneuver) return '';
  const mod = (maneuver.modifier || '').toLowerCase().trim();
  const type = (maneuver.type || '').toLowerCase().trim();
  const rawStreet = (maneuver.streetName || '').trim();
  const hasStreet = rawStreet.length > 0 && !rawStreet.toLowerCase().startsWith('unnamed');
  const street = hasStreet ? rawStreet : '';

  // Turnaround maneuver
  if (mod.includes('uturn') || mod.includes('turnaround') || type === 'turnaround') {
    return 'Turn around as soon as possible.';
  }

  // Roundabout / Rotary
  if (type === 'roundabout' || type === 'rotary') {
    return street
      ? `Enter roundabout toward ${street} in ${distanceFeet} feet.`
      : `Enter roundabout in ${distanceFeet} feet.`;
  }

  // Fork
  if (type === 'fork') {
    const side = mod.includes('left') ? 'left' : 'right';
    return street
      ? `Keep ${side} at fork onto ${street} in ${distanceFeet} feet.`
      : `Keep ${side} at fork in ${distanceFeet} feet.`;
  }

  // End of road
  if (type === 'end of road') {
    const side = mod.includes('left') ? 'left' : 'right';
    return street
      ? `Turn ${side} at end of road onto ${street} in ${distanceFeet} feet.`
      : `Turn ${side} at end of road in ${distanceFeet} feet.`;
  }

  // Ramp / Merge
  if (type === 'ramp' || type === 'on ramp' || type === 'off ramp') {
    return street
      ? `Take ramp onto ${street} in ${distanceFeet} feet.`
      : `Take ramp in ${distanceFeet} feet.`;
  }

  if (type === 'merge') {
    const side = mod.includes('left') ? 'left' : 'right';
    return street
      ? `Merge ${side} onto ${street} in ${distanceFeet} feet.`
      : `Merge ${side} in ${distanceFeet} feet.`;
  }

  // Standard turns based strictly on actual maneuver modifier
  switch (mod) {
    case 'right':
      return street
        ? `Turn right onto ${street} in ${distanceFeet} feet.`
        : `Turn right in ${distanceFeet} feet.`;
    case 'left':
      return street
        ? `Turn left onto ${street} in ${distanceFeet} feet.`
        : `Turn left in ${distanceFeet} feet.`;
    case 'slight right':
      return street
        ? `Bear slightly right onto ${street} in ${distanceFeet} feet.`
        : `Bear slightly right in ${distanceFeet} feet.`;
    case 'slight left':
      return street
        ? `Bear slightly left onto ${street} in ${distanceFeet} feet.`
        : `Bear slightly left in ${distanceFeet} feet.`;
    case 'sharp right':
      return street
        ? `Make a sharp right onto ${street} in ${distanceFeet} feet.`
        : `Make a sharp right in ${distanceFeet} feet.`;
    case 'sharp left':
      return street
        ? `Make a sharp left onto ${street} in ${distanceFeet} feet.`
        : `Make a sharp left in ${distanceFeet} feet.`;
    case 'straight':
      return street
        ? `Continue straight on ${street} in ${distanceFeet} feet.`
        : `Continue straight in ${distanceFeet} feet.`;
    default:
      if (type === 'turn') {
        return street
          ? `Turn onto ${street} in ${distanceFeet} feet.`
          : `Turn ahead in ${distanceFeet} feet.`;
      }
      return '';
  }
}

/**
 * Formats closer direct maneuver instruction (no distance spoken).
 * Examples:
 * - "Turn left."
 * - "Turn right."
 * - "Bear slightly left."
 * - "Make a sharp right."
 * - "Keep left at the fork."
 * - "Enter roundabout."
 * - "Turn left at the end of the road."
 * - "Take the ramp."
 * - "Merge left."
 * - "Continue straight."
 */
export function formatManeuverDirectInstruction(maneuver: NavManeuver): string {
  if (!maneuver) return '';
  const mod = (maneuver.modifier || '').toLowerCase().trim();
  const type = (maneuver.type || '').toLowerCase().trim();
  const rawStreet = (maneuver.streetName || '').trim();
  const hasStreet = rawStreet.length > 0 && !rawStreet.toLowerCase().startsWith('unnamed');
  const street = hasStreet ? rawStreet : '';

  // Turnaround maneuver
  if (mod.includes('uturn') || mod.includes('turnaround') || type === 'turnaround') {
    return 'Turn around as soon as possible.';
  }

  // Roundabout / Rotary
  if (type === 'roundabout' || type === 'rotary') {
    return street ? `Enter roundabout toward ${street}.` : 'Enter roundabout.';
  }

  // Fork
  if (type === 'fork') {
    const side = mod.includes('left') ? 'left' : 'right';
    return street ? `Keep ${side} at fork onto ${street}.` : `Keep ${side} at fork.`;
  }

  // End of road
  if (type === 'end of road') {
    const side = mod.includes('left') ? 'left' : 'right';
    return street ? `Turn ${side} at end of road onto ${street}.` : `Turn ${side} at end of road.`;
  }

  // Ramp / Merge
  if (type === 'ramp' || type === 'on ramp' || type === 'off ramp') {
    return street ? `Take ramp onto ${street}.` : 'Take ramp.';
  }

  if (type === 'merge') {
    const side = mod.includes('left') ? 'left' : 'right';
    return street ? `Merge ${side} onto ${street}.` : `Merge ${side}.`;
  }

  // Standard turns based strictly on actual maneuver modifier
  switch (mod) {
    case 'right':
      return street ? `Turn right onto ${street}.` : 'Turn right.';
    case 'left':
      return street ? `Turn left onto ${street}.` : 'Turn left.';
    case 'slight right':
      return street ? `Bear slightly right onto ${street}.` : 'Bear slightly right.';
    case 'slight left':
      return street ? `Bear slightly left onto ${street}.` : 'Bear slightly left.';
    case 'sharp right':
      return street ? `Make a sharp right onto ${street}.` : 'Make a sharp right.';
    case 'sharp left':
      return street ? `Make a sharp left onto ${street}.` : 'Make a sharp left.';
    case 'straight':
      return street ? `Continue straight on ${street}.` : 'Continue straight.';
    default:
      if (type === 'turn') {
        return street ? `Turn onto ${street}.` : 'Turn.';
      }
      return '';
  }
}

/**
 * Universal formatting function (preserves backwards compatibility)
 */
export function formatManeuverSpokenText(maneuver: NavManeuver, distanceFeet?: number): string {
  if (typeof distanceFeet === 'number' && distanceFeet > 180) {
    return formatManeuverAdvanceWarning(maneuver, distanceFeet);
  }
  return formatManeuverDirectInstruction(maneuver);
}

/**
 * Checks whether a NavManeuver is a spoken road turn
 */
export function isTurnManeuver(m: NavManeuver): boolean {
  if (!m) return false;
  const t = (m.type || '').toLowerCase();
  const mod = (m.modifier || '').toLowerCase();
  if (t === 'arrive' || t === 'depart') return false;
  if (mod.includes('left') || mod.includes('right') || mod.includes('uturn') || mod.includes('turnaround')) return true;
  if (t === 'turn' || t === 'fork' || t === 'roundabout' || t === 'rotary' || t === 'end of road' || t === 'merge' || t === 'ramp') return true;
  return false;
}

const DIGIT_WORDS: Record<string, string> = {
  '0': 'zero',
  '1': 'one',
  '2': 'two',
  '3': 'three',
  '4': 'four',
  '5': 'five',
  '6': 'six',
  '7': 'seven',
  '8': 'eight',
  '9': 'nine',
};

/**
 * Converts a house number into digit-by-digit spoken words.
 * Examples:
 * - "6921" -> "six nine two one"
 * - "6589" -> "six five eight nine"
 * - "179" -> "one seven nine"
 * - "6633" -> "six six three three"
 * - "007" -> "zero zero seven"
 * Preserves leading zeros and speaks letter suffixes (e.g. "1402-B" -> "one four zero two B").
 */
export function formatHouseNumberForSpeech(houseNumber: string | undefined | null): string {
  if (!houseNumber) return '';
  const trimmed = houseNumber.trim();
  if (!trimmed || trimmed === '—' || trimmed.toLowerCase() === 'n/a') return '';

  const words: string[] = [];
  for (const char of trimmed) {
    if (DIGIT_WORDS[char]) {
      words.push(DIGIT_WORDS[char]);
    } else if (/[a-zA-Z]/.test(char)) {
      words.push(char.toUpperCase());
    }
  }

  return words.join(' ');
}

/**
 * Text-to-speech announcement for hands-free driving
 * Concise customer-transition announcement: "Next customer, [Name], [digit-by-digit house number]."
 * Examples:
 * - "Next customer, John Smith, six nine two one."
 * - "Next customer, Randi Hickman II, six five eight nine."
 * If house number is unavailable: "Next customer, [Name]."
 * Does NOT announce stop numbers, customer indices, or full street addresses.
 */
export function announceStop(customerName: string, houseNumber?: string, _deprecatedStreetName?: string) {
  if (typeof window === 'undefined') return;

  // Clean customer name to ensure no stop sequence prefix (e.g. "002 - ", "Stop 24 | ", "Customer 24: ") is spoken
  let cleanName = (customerName || '').trim();
  cleanName = cleanName.replace(/^(?:stop\s*#?\d+\s*[-:–—|]\s*|#?0+\d+\s*[-:–—|]\s*)/i, '').trim();
  cleanName = cleanName.replace(/^(?:customer\s*#?\d+\s*[-:–—|:]\s*)/i, '').trim();

  // Convert house number to individual digit-by-digit spoken words (e.g. "6589" -> "six five eight nine", "007" -> "zero zero seven")
  const spokenHouse = formatHouseNumberForSpeech(houseNumber);

  let text = '';
  if (cleanName && spokenHouse) {
    text = `Next customer, ${cleanName}, ${spokenHouse}.`;
  } else if (cleanName) {
    text = `Next customer, ${cleanName}.`;
  } else if (spokenHouse) {
    text = `Next customer, ${spokenHouse}.`;
  } else {
    text = 'Next customer.';
  }

  speechCoordinator.speak({
    id: `stop_${Date.now()}`,
    text,
    priority: 'high',
    createdAt: Date.now(),
    maxAgeMs: 15000,
  });
}

/**
 * Voice guidance for missed stops and turnaround maneuvers (HIGH priority)
 * Preferred exact wording: "Turn around as soon as possible."
 */
let lastTurnaroundSpokenTime = 0;

export function announceTurnaround() {
  if (typeof window === 'undefined') return;

  const now = Date.now();
  // Prevent repeating more than once every 12 seconds
  if (now - lastTurnaroundSpokenTime < 12000) return;
  lastTurnaroundSpokenTime = now;

  const text = 'Turn around as soon as possible.';

  speechCoordinator.speak({
    id: `turnaround_${now}`,
    text,
    priority: 'high',
    createdAt: now,
    maxAgeMs: 8000,
  });
}

/**
 * Spoken voice announcement for advance turn warning with distance (e.g. ~500 ft)
 */
export function announceAdvanceTurn(maneuver: NavManeuver, distanceFeet: number = 500) {
  if (typeof window === 'undefined') return;

  const text = formatManeuverAdvanceWarning(maneuver, distanceFeet);
  if (!text) return;

  speechCoordinator.speak({
    id: `turn_adv_${distanceFeet}_${Date.now()}`,
    text,
    priority: 'normal',
    createdAt: Date.now(),
    maxAgeMs: 6000,
  });
}

/**
 * Spoken voice announcement for closer direct maneuver instruction (NO distance repeated)
 */
export function announceDirectTurn(maneuver: NavManeuver) {
  if (typeof window === 'undefined') return;

  const text = formatManeuverDirectInstruction(maneuver);
  if (!text) return;

  speechCoordinator.speak({
    id: `turn_dir_${Date.now()}`,
    text,
    priority: 'normal',
    createdAt: Date.now(),
    maxAgeMs: 4000,
  });
}

/**
 * Universal announceTurn wrapper (backwards compatible)
 */
export function announceTurn(maneuver: NavManeuver, distanceFeet?: number) {
  if (typeof distanceFeet === 'number' && distanceFeet > 180) {
    announceAdvanceTurn(maneuver, distanceFeet);
  } else {
    announceDirectTurn(maneuver);
  }
}

/**
 * Cancel and flush upcoming turn announcements (e.g. on route recalculation or customer advance)
 */
export function cancelTurnAnnouncements() {
  speechCoordinator.cancelNormalPriority();
}

/**
 * Screen WakeLock manager to prevent screen from dimming/sleeping on phone mount
 */
let wakeLockSentinel: any = null;

export async function requestWakeLock(): Promise<boolean> {
  if (typeof window === 'undefined') return false;

  // If in Android native app, FLAG_KEEP_SCREEN_ON is already set on the Window
  if ((window as any).AndroidBridge) {
    return true;
  }

  if (!('wakeLock' in navigator)) {
    return false;
  }
  try {
    wakeLockSentinel = await (navigator as any).wakeLock.request('screen');
    wakeLockSentinel.addEventListener('release', () => {
      wakeLockSentinel = null;
    });
    return true;
  } catch (err) {
    return false;
  }
}

export function releaseWakeLock() {
  if (wakeLockSentinel) {
    try {
      wakeLockSentinel.release();
    } catch (e) {
      // ignore
    }
    wakeLockSentinel = null;
  }
}

/**
 * Generate navigation URIs for OsmAnd and standard Android map handlers
 */
export function getNavigationLinks(lat: number, lon: number, label: string) {
  const encodedLabel = encodeURIComponent(label || 'Customer Stop');
  
  // Standard geo URI (will open OsmAnd or default Android map app)
  const geoUri = `geo:${lat},${lon}?q=${lat},${lon}(${encodedLabel})`;
  
  // OsmAnd direct intent URI
  const osmandUri = `osmand.navigation:q=${lat},${lon}`;
  
  // Google Maps fallback web link
  const gmapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lon}`;

  return { geoUri, osmandUri, gmapsUrl };
}
