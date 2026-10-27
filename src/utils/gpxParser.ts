import { RouteStop } from '../types/route';

/**
 * Parses structured or pipe-separated waypoint metadata:
 * e.g., "Stop 38 | Customer: Randi Hickman II | Address: 6589 State Route 90"
 * Returns the cleaned delivery address, extracted customer name, and stop sequence if present.
 */
export function parseStructuredAddressText(rawText: string | undefined | null): {
  cleanAddress: string;
  extractedName?: string;
  stopSequence?: number;
} {
  if (!rawText) return { cleanAddress: '' };
  let text = rawText.trim();
  if (!text) return { cleanAddress: '' };

  let extractedName: string | undefined;
  let stopSequence: number | undefined;

  // 1. Check for pipe-separated or key-value metadata fields
  if (text.includes('|') || /(?:customer|address|addr|stop\s*#?\d+)\s*:/i.test(text)) {
    const parts = text.split(/\s*\|\s*/);
    let foundAddress = '';

    for (const part of parts) {
      const p = part.trim();
      if (!p) continue;

      const stopMatch = p.match(/^stop\s*#?(\d+)/i);
      if (stopMatch) {
        stopSequence = parseInt(stopMatch[1], 10);
        continue;
      }

      const custMatch = p.match(/^(?:customer|name)\s*:\s*(.+)$/i);
      if (custMatch) {
        extractedName = custMatch[1].trim();
        continue;
      }

      const addrMatch = p.match(/^(?:address|addr)\s*:\s*(.+)$/i);
      if (addrMatch) {
        foundAddress = addrMatch[1].trim();
        continue;
      }

      // If this part looks like a street address (e.g., starts with a house number)
      if (!foundAddress && /^\d+[A-Za-z]?(?:[-\/][A-Za-z0-9]+)?\s+[A-Za-z]/.test(p)) {
        foundAddress = p;
      }
    }

    if (foundAddress) {
      return { cleanAddress: foundAddress, extractedName, stopSequence };
    }
  }

  // 2. Explicit "Address: ..." substring without pipes
  const inlineAddrMatch = text.match(/(?:^|[;\n])\s*(?:address|addr)\s*:\s*([^;\n|]+)/i);
  if (inlineAddrMatch) {
    const clean = inlineAddrMatch[1].trim();
    return { cleanAddress: clean, extractedName, stopSequence };
  }

  // 3. Strip leading stop-sequence indicators: "Stop 38 | ", "Stop 38 - ", "Stop 38: ", "002 - "
  text = text.replace(/^(?:stop\s*#?\d+\s*[-:–—|]\s*|#?0+\d+\s*[-:–—|]\s*)/i, '').trim();

  // 4. Strip "Customer: Name | " or "Customer: Name - "
  text = text.replace(/^(?:customer|name)\s*:\s*[^|;–-]+(?:[|;–-]\s*)/i, '').trim();

  // 5. Strip "Address: "
  text = text.replace(/^(?:address|addr)\s*:\s*/i, '').trim();

  return { cleanAddress: text, extractedName, stopSequence };
}

/**
 * Cleanly extracts the house or building number from an address string.
 * Supports:
 * - Simple numbers: "123 Main St" -> "123", "6589 State Route 90" -> "6589"
 * - Letter suffixes: "123A Main St" -> "123A"
 * - Hyphenated / sub-numbers: "1402-B Willow Creek Rd", "45/2 Birchwood" -> "1402-B", "45/2"
 * - Structured pipe fields: "Stop 38 | Customer: Randi Hickman II | Address: 6589 State Route 90" -> "6589"
 * - Strips route/stop sequence prefixes like "002 - 123 Main St", "Stop 2: 123 Main St"
 * - Handles suite/unit before or after: "Suite 100, 500 S 6th St" -> "500", "6633 Laraway Rd Apt B" -> "6633"
 * Returns empty string if no valid house number is found.
 */
export function extractHouseNumber(addressText: string | undefined | null): string {
  if (!addressText) return '';
  const parsed = parseStructuredAddressText(addressText);
  let text = (parsed.cleanAddress || addressText).trim();
  if (!text) return '';

  // 1. Ignore coordinate-only or unavailable location placeholders
  if (/^location\s*\(?/i.test(text) || /^lat/i.test(text) || text.toLowerCase() === 'location unavailable') {
    return '';
  }

  // 2. Strip leading stop-sequence indicators like "002 - ", "Stop 002: ", "Stop 2 - ", "#002 - ", "Stop 38 | "
  text = text.replace(/^(?:stop\s*#?\d+\s*[-:–—|]\s*|#?0+\d+\s*[-:–—|]\s*)/i, '').trim();

  // 3. Strip leading "Unit/Apt/Suite" if it precedes the street address:
  // e.g., "Apt 4B, 123 Foster ville Road" -> "123 Foster ville Road"
  const unitPrefixMatch = text.match(/^(?:apt\.?|apartment|unit|suite|ste\.?|room|rm\.?)\s*#?[a-z0-9-]+\s*,\s*(.+)$/i);
  if (unitPrefixMatch) {
    text = unitPrefixMatch[1].trim();
  }

  // 4. Primary: Match house number at the beginning of address (most common and reliable):
  // e.g. "6589 State Route 90", "123 Foster ville Road", "#123 Foster ville Road", "123A Main St", "1402-B Willow Creek Rd"
  const leadingMatch = text.match(/^(?:#|no\.?\s*)?(\d+[A-Za-z]?(?:[-\/][A-Za-z0-9]+)?)\s+([A-Za-z0-9#])/i);
  if (leadingMatch) {
    // Verify it is not a zero-padded stop sequence that survived stripping (like "002")
    if (!/^0+\d+$/.test(leadingMatch[1])) {
      return leadingMatch[1];
    }
  }

  // 5. Look for house number preceding street name / street suffix indicators:
  // e.g. "500 S 6th St", "Suite 100, 500 S 6th St", "6589 State Route 90"
  const streetWithNumMatch = text.match(/(?:^|[,\s])(?:#|no\.?\s*)?(\d+[A-Za-z]?(?:[-\/][A-Za-z0-9]+)?)\s+(?:[NSEW]\.?\s+)?([A-Za-z0-9\s]+?\s+(?:st|street|rd|road|ave|avenue|ln|lane|dr|drive|blvd|boulevard|way|ct|court|cir|circle|pl|place|ter|terrace|pkwy|parkway|hwy|highway|route|rt|state\s*route))\b/i);
  if (streetWithNumMatch) {
    if (!/^0+\d+$/.test(streetWithNumMatch[1])) {
      return streetWithNumMatch[1];
    }
  }

  // 6. Generic pattern: any standalone number with optional letter suffix at start of string
  const startNumMatch = text.match(/^(?:#|no\.?\s*)?(\d+[A-Za-z]?(?:[-\/][A-Za-z0-9]+)?)\b/i);
  if (startNumMatch && !/^0+\d+$/.test(startNumMatch[1])) {
    return startNumMatch[1];
  }

  return '';
}

/**
 * Resolves the genuine house number for a RouteStop.
 * Prioritizes the customer's delivery address data (fullAddress, desc, cmt, address).
 * Explicitly rejects stop sequence numbers (such as "002" or orderIndex).
 * Returns '—' as a fallback if no valid house number is identifiable.
 */
export function getStopHouseNumber(stop: RouteStop | null | undefined, currentIndex?: number): string {
  if (!stop) return '—';

  // 1. Try extracting from delivery address sources first (the true source of truth)
  const addressSources = [
    stop.fullAddress,
    stop.desc,
    stop.cmt,
    stop.streetName,
    stop.notes,
  ];

  for (const source of addressSources) {
    if (source) {
      const extracted = extractHouseNumber(source);
      if (extracted) {
        // Double-check candidate is not simply the stop order index
        const isStopOrderIndex =
          (stop.orderIndex && extracted === String(stop.orderIndex)) ||
          (currentIndex !== undefined && extracted === String(currentIndex + 1));
        
        // If the candidate matches stop order index, verify if the source string actually contains a real address with that same number,
        // or if it was just "Stop X" that was picked up.
        if (isStopOrderIndex) {
          const parsed = parseStructuredAddressText(source);
          // If cleanAddress starts with this number (e.g. Stop 38 at "38 Main St"), it's legitimate
          const matchesRealAddress = new RegExp(`^${extracted}\\b`, 'i').test(parsed.cleanAddress);
          if (matchesRealAddress && !/^stop\s*#?\d+/i.test(source)) {
            return extracted;
          }
          // Otherwise keep looking in other sources
          continue;
        }

        return extracted;
      }
    }
  }

  // 2. If stop.houseNumber was previously set, verify it isn't just a stop sequence number
  if (stop.houseNumber && stop.houseNumber.trim()) {
    const candidate = stop.houseNumber.trim();
    const isStopSequence = 
      /^0+\d+$/.test(candidate) || // leading zeros e.g. "001", "002"
      (stop.orderIndex && candidate === String(stop.orderIndex)) ||
      (currentIndex !== undefined && candidate === String(currentIndex + 1));

    if (!isStopSequence) {
      return candidate;
    }
  }

  // 3. Check customer name only if it contains a street address pattern
  // e.g. "123 Foster ville Road"
  if (stop.name) {
    const extractedFromName = extractHouseNumber(stop.name);
    if (extractedFromName) {
      const isStopSequence = 
        /^0+\d+$/.test(extractedFromName) ||
        (stop.orderIndex && extractedFromName === String(stop.orderIndex)) ||
        (currentIndex !== undefined && extractedFromName === String(currentIndex + 1));
      if (!isStopSequence) {
        return extractedFromName;
      }
    }
  }

  // 4. Fallback when address has no identifiable house number
  return '—';
}

/**
 * Extracts a house/building number and street from an address or text string
 */
export function extractAddressComponents(text: string): { houseNumber: string; streetName: string; fullAddress: string } {
  const clean = (text || '').trim();
  if (!clean) {
    return { houseNumber: '', streetName: '', fullAddress: '' };
  }

  // If this text is coordinate-only or location placeholder, return empty house number
  if (/^location\s*\(?/i.test(clean) || clean.toLowerCase() === 'location unavailable') {
    return { houseNumber: '', streetName: clean, fullAddress: clean };
  }

  // Parse structured / pipe metadata
  const parsed = parseStructuredAddressText(clean);
  let addressText = parsed.cleanAddress || clean;

  // Strip route/stop ordering prefix if present (e.g., "002 - ", "Stop 2: ", "#002 - ", "Stop 38 | ")
  addressText = addressText.replace(/^(?:stop\s*#?\d+\s*[-:–—|]\s*|#?0+\d+\s*[-:–—|]\s*)/i, '').trim();

  // Strip leading Unit/Apt/Suite if it precedes the address:
  const unitPrefixMatch = addressText.match(/^(?:apt\.?|apartment|unit|suite|ste\.?|room|rm\.?)\s*#?[a-z0-9-]+\s*,\s*(.+)$/i);
  if (unitPrefixMatch) {
    addressText = unitPrefixMatch[1].trim();
  }

  const houseNumber = extractHouseNumber(addressText);

  let streetName = addressText;
  if (houseNumber) {
    const index = addressText.indexOf(houseNumber);
    if (index !== -1) {
      const afterHouse = addressText.slice(index + houseNumber.length).trim();
      const commaIndex = afterHouse.indexOf(',');
      if (commaIndex !== -1) {
        streetName = afterHouse.slice(0, commaIndex).trim();
      } else {
        streetName = afterHouse;
      }
    }
  }

  // Strip any trailing unit/apt from streetName (e.g. "Laraway Rd Apt A" -> "Laraway Rd")
  const cleanStreet = streetName.replace(/,\s*(?:apt\.?|unit|ste\.?|suite|room|rm\.?)\s*#?[a-z0-9-]+$/i, '').trim();

  return {
    houseNumber,
    streetName: cleanStreet || streetName || addressText,
    fullAddress: addressText,
  };
}

/**
 * Validates latitude and longitude values
 */
export function isValidCoordinate(lat: number, lon: number): boolean {
  return (
    !isNaN(lat) &&
    !isNaN(lon) &&
    lat >= -90 &&
    lat <= 90 &&
    lon >= -180 &&
    lon <= 180 &&
    !(lat === 0 && lon === 0)
  );
}

/**
 * Helper to get text content of a tag or namespaced tag safely from XML element
 */
function getTagText(parent: Element | null | undefined, tagName: string): string {
  if (!parent || typeof parent.getElementsByTagName !== 'function') return '';
  // 1. Direct getElementsByTagName (e.g. 'name', 'desc', 'cmt')
  const el = parent.getElementsByTagName(tagName)[0];
  if (el?.textContent && el.textContent.trim()) {
    return el.textContent.trim();
  }

  // 2. Namespaced or child matches (e.g. 'osmand:housenumber', 'addr:housenumber')
  const children = parent.children ? Array.from(parent.children) : [];
  for (const child of children) {
    if (child.localName === tagName || (typeof child.nodeName === 'string' && child.nodeName.endsWith(`:${tagName}`))) {
      if (child.textContent?.trim()) return child.textContent.trim();
    }
    // Inspect inside <extensions>
    const subChildren = child.children ? Array.from(child.children) : [];
    for (const sub of subChildren) {
      if (sub.localName === tagName || (typeof sub.nodeName === 'string' && sub.nodeName.endsWith(`:${tagName}`))) {
        if (sub.textContent?.trim()) return sub.textContent.trim();
      }
    }
  }

  return '';
}

/**
 * Parses raw GPX XML and extracts customer stops in the exact order they appear in the file.
 * Safely handles OsmAnd marker extensions, custom namespaces, and distinguishes route sequence numbers from house numbers.
 */
export function parseGPX(gpxContent: string, routeNameDefault = 'Imported Route'): { stops: RouteStop[]; routeName: string } {
  const cleanedContent = (gpxContent || '').replace(/^\uFEFF/, '').trim();
  if (!cleanedContent) {
    throw new Error('File content is empty.');
  }

  let xmlDoc: Document;
  if (typeof DOMParser !== 'undefined') {
    const parser = new DOMParser();
    xmlDoc = parser.parseFromString(cleanedContent, 'text/xml');
  } else {
    throw new Error('DOMParser unavailable in current runtime');
  }

  // Check for XML parsererror
  const parserError = xmlDoc.getElementsByTagName('parsererror')[0];
  if (parserError) {
    throw new Error('Invalid GPX/XML format. Please verify the file contains valid route/waypoint XML.');
  }

  // Extract route/metadata name if present
  let routeName = routeNameDefault;
  const metaEl = xmlDoc.getElementsByTagName('metadata')[0];
  const metaName = metaEl ? getTagText(metaEl, 'name') : '';
  const gpxName = getTagText(xmlDoc.documentElement, 'name');
  if (metaName) {
    routeName = metaName;
  } else if (gpxName) {
    routeName = gpxName;
  }

  // Collect points in exact document order across wpt and rtept elements
  // (Prevents omitting route points or namespaced elements when GPX contains both wpt and rtept)
  const getElements = (tag: string): Element[] => {
    const list1 = Array.from(xmlDoc.getElementsByTagName(tag));
    const list2 = xmlDoc.getElementsByTagNameNS ? Array.from(xmlDoc.getElementsByTagNameNS('*', tag)) : [];
    const combined = [...list1];
    for (const el of list2) {
      if (!combined.includes(el)) combined.push(el);
    }
    return combined;
  };

  const wpts = getElements('wpt');
  const rtepts = getElements('rtept');

  let pointElements: Element[] = [];
  if (wpts.length > 0 || rtepts.length > 0) {
    const combined = [...wpts, ...rtepts];
    // Sort in exact document order
    combined.sort((a, b) => {
      const pos = a.compareDocumentPosition(b);
      if (pos & Node.DOCUMENT_POSITION_FOLLOWING) return -1;
      if (pos & Node.DOCUMENT_POSITION_PRECEDING) return 1;
      return 0;
    });
    pointElements = combined;
  } else {
    pointElements = getElements('trkpt');
  }

  if (pointElements.length === 0) {
    throw new Error('No customer waypoints (<wpt> or <rtept>) found in this GPX file.');
  }

  const stops: RouteStop[] = [];

  pointElements.forEach((pt, index) => {
    // 1. Coordinates parsing & validation
    const latStr = pt.getAttribute('lat');
    const lonStr = pt.getAttribute('lon');
    const parsedLat = latStr ? parseFloat(latStr) : NaN;
    const parsedLon = lonStr ? parseFloat(lonStr) : NaN;

    const hasValidCoords = isValidCoordinate(parsedLat, parsedLon);
    const finalLat = hasValidCoords ? parsedLat : 0;
    const finalLon = hasValidCoords ? parsedLon : 0;

    // 2. Text fields parsing
    const rawName = getTagText(pt, 'name');
    const rawDesc = getTagText(pt, 'desc');
    const rawCmt = getTagText(pt, 'cmt');
    const rawAddress = getTagText(pt, 'address');
    const osmandHouseNum = getTagText(pt, 'housenumber');
    const osmandStreet = getTagText(pt, 'street');

    // 3. Disambiguate customer name, stop sequence, and delivery address:
    let customerName = rawName || `Customer #${index + 1}`;
    let addressCandidate = rawAddress || rawDesc || rawCmt;
    let potentialAddressFromName = '';

    // Check if rawDesc, rawName, or rawCmt has structured metadata:
    // e.g. "Stop 38 | Customer: Randi Hickman II | Address: 6589 State Route 90"
    const structuredDesc = parseStructuredAddressText(rawDesc);
    const structuredName = parseStructuredAddressText(rawName);
    const structuredCmt = parseStructuredAddressText(rawCmt);

    if (structuredDesc.extractedName && (!rawName || rawName.includes('|') || /^(?:stop\s*#?\d+|customer)/i.test(rawName))) {
      customerName = structuredDesc.extractedName;
    } else if (structuredName.extractedName) {
      customerName = structuredName.extractedName;
    }

    if (structuredDesc.cleanAddress && /^\d+[A-Za-z]?\s+[A-Za-z]/.test(structuredDesc.cleanAddress)) {
      addressCandidate = structuredDesc.cleanAddress;
    } else if (structuredName.cleanAddress && /^\d+[A-Za-z]?\s+[A-Za-z]/.test(structuredName.cleanAddress)) {
      addressCandidate = structuredName.cleanAddress;
    } else if (structuredCmt.cleanAddress && /^\d+[A-Za-z]?\s+[A-Za-z]/.test(structuredCmt.cleanAddress)) {
      addressCandidate = structuredCmt.cleanAddress;
    }

    // If rawName has a sequence prefix like "002 - Marcus Vance" or "002 - 123 Foster ville Road":
    if (rawName && (rawName.includes(' - ') || rawName.includes(' – '))) {
      const parts = rawName.split(/\s*[-–]\s*/);
      if (parts.length >= 2) {
        // First part is a stop sequence (e.g. "001", "002", "Stop 1", "#2"):
        if (/^(?:stop\s*)?#?\d+$/i.test(parts[0].trim())) {
          customerName = parts.slice(1).join(' - ').trim();
          // If the remaining part is an address (e.g. "123 Foster ville Road")
          if (/^\d+[A-Za-z]?\s+[A-Za-z]/.test(customerName)) {
            potentialAddressFromName = customerName;
          }
        } else if (/^(?:stop\s*)?#?\d+$/i.test(parts[parts.length - 1].trim())) {
          // Trailing stop sequence e.g. "Marcus Vance - 002"
          customerName = parts.slice(0, parts.length - 1).join(' - ').trim();
        }
      }
    } else if (rawName && /^#?0*\d+$/.test(rawName.trim())) {
      // Name is just a sequence number e.g. "002"
      const num = parseInt(rawName.trim().replace('#', ''), 10);
      customerName = `Customer #${num || (index + 1)}`;
    }

    if (!addressCandidate && potentialAddressFromName) {
      addressCandidate = potentialAddressFromName;
    }

    // Fallback if no addressCandidate exists
    if (!addressCandidate) {
      addressCandidate = hasValidCoords
        ? `Location (${finalLat.toFixed(5)}, ${finalLon.toFixed(5)})`
        : 'Location unavailable';
    }

    // 4. Extract genuine house number and street from the delivery address:
    const { houseNumber: parsedHouseNumber, streetName: parsedStreet, fullAddress } = extractAddressComponents(addressCandidate);
    
    // Explicit OsmAnd housenumber tag check (reject if it's a zero-padded stop sequence)
    let finalHouseNumber = parsedHouseNumber;
    if (!finalHouseNumber && osmandHouseNum && !/^0+\d+$/.test(osmandHouseNum.trim())) {
      finalHouseNumber = osmandHouseNum.trim();
    }

    // If still not found and customerName has a street address pattern
    if (!finalHouseNumber && customerName) {
      const nameExtracted = extractAddressComponents(customerName);
      if (nameExtracted.houseNumber && !/^0+\d+$/.test(nameExtracted.houseNumber)) {
        finalHouseNumber = nameExtracted.houseNumber;
      }
    }

    const finalStreetName = osmandStreet || parsedStreet || '';

    stops.push({
      id: `stop-${index + 1}-${Date.now().toString(36)}-${Math.random().toString(36).substring(2, 6)}`,
      orderIndex: index + 1,
      name: customerName,
      houseNumber: finalHouseNumber,
      fullAddress: fullAddress,
      streetName: finalStreetName,
      lat: finalLat,
      lon: finalLon,
      desc: rawDesc || undefined,
      cmt: rawCmt || undefined,
      status: 'pending',
    });
  });

  return { stops, routeName };
}

/**
 * Generates valid GPX XML from RouteStop array (for export/OsmAnd companion download)
 */
export function exportToGPX(stops: RouteStop[], routeName = 'Customer Route'): string {
  const gpxHeader = `<?xml version="1.0" encoding="UTF-8"?>
<gpx version="1.1" creator="OsmAnd Route Companion" xmlns="http://www.topografix.com/GPX/1/1" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.topografix.com/GPX/1/1 http://www.topografix.com/GPX/1/1/gpx.xsd">
  <metadata>
    <name>${escapeXml(routeName)}</name>
    <desc>Customer route stops in sequential order</desc>
    <time>${new Date().toISOString()}</time>
  </metadata>
`;

  const waypoints = stops.map((stop) => {
    return `  <wpt lat="${stop.lat}" lon="${stop.lon}">
    <name>${escapeXml(stop.name)}</name>
    <desc>${escapeXml(stop.fullAddress)}</desc>
    <cmt>${escapeXml(`House #${stop.houseNumber || 'N/A'} - Status: ${stop.status}`)}</cmt>
  </wpt>`;
  }).join('\n');

  const gpxFooter = `\n</gpx>`;
  return gpxHeader + waypoints + gpxFooter;
}

function escapeXml(unsafe: string): string {
  return (unsafe || '').replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '&': return '&amp;';
      case '\'': return '&apos;';
      case '"': return '&quot;';
      default: return c;
    }
  });
}
