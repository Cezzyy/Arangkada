import { Ionicons } from '@expo/vector-icons';

export interface ServiceAlert {
  id: string;
  serviceName: string;
  dueKm: number;
  status: 'urgent' | 'upcoming' | 'good';
  icon: keyof typeof Ionicons.glyphMap;
}

export interface MaintenanceLog {
  id: string;
  title: string;
  date: string;
  odometer: number;
  cost: number;
  notes: string;
}

export interface BikeProfile {
  model: string;
  plateNumber: string;
  currentOdometer: number;
  year: number;
  fuelCapacity: string;
}
