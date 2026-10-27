export type StopStatus = 'pending' | 'completed' | 'skipped';

export interface RouteStop {
  id: string;
  orderIndex: number; // 1-based exact sequence from GPX
  name: string;
  houseNumber: string;
  fullAddress: string;
  streetName: string;
  lat: number;
  lon: number;
  desc?: string;
  cmt?: string;
  notes?: string;
  status: StopStatus;
  statusTimestamp?: number;
  skipReason?: string;
}

export interface RouteData {
  id: string;
  name: string;
  filename: string;
  stops: RouteStop[];
  currentIndex: number; // 0-based index into stops array
  importedAt: number;
  lastUpdated: number;
}

export interface AppSettings {
  theme: 'amoled-black' | 'high-contrast-day';
  voiceAnnouncement: boolean;
  hapticFeedback: boolean;
  keepScreenAwake: boolean;
  extraLargeText: boolean;
  arrivalRadiusMeters?: number; // Configurable proximity-detection window in meters (default 152.4m / 500ft)
  arrivalConfirmFeet?: number; // Configurable arrival-confirmation threshold in feet (default 150ft)
  turnWarningDistancesFeet?: number[]; // Configurable advance-warning distances in feet (default [500, 200])
}

