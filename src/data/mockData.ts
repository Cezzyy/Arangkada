import { BikeProfile, ServiceAlert, MaintenanceLog } from '../types';

export const bikeProfile: BikeProfile = {
  model: 'Honda Click 125i',
  plateNumber: '778-XYZ',
  currentOdometer: 12450,
  year: 2023,
  fuelCapacity: '5.5 Liters',
};

export const serviceAlerts: ServiceAlert[] = [
  {
    id: '1',
    serviceName: 'Engine Oil Replacement',
    dueKm: 250,
    status: 'urgent',
    icon: 'water',
  },
  {
    id: '2',
    serviceName: 'Gear Oil Replacement',
    dueKm: 1200,
    status: 'upcoming',
    icon: 'construct',
  },
  {
    id: '3',
    serviceName: 'Spark Plug Inspection',
    dueKm: 4500,
    status: 'good',
    icon: 'flash',
  },
];

export const maintenanceHistory: MaintenanceLog[] = [
  {
    id: '1',
    title: 'Fully Synthetic Oil Change',
    date: '2026-08-15',
    odometer: 11500,
    cost: 350,
    notes: 'Replaced drain plug washer',
  },
  {
    id: '2',
    title: 'CVT Cleaning & Regrease',
    date: '2026-06-20',
    odometer: 9800,
    cost: 650,
    notes: 'Torque drive regreased and rollers inspected',
  },
  {
    id: '3',
    title: 'Brake Pad Replacement',
    date: '2026-04-10',
    odometer: 8200,
    cost: 500,
    notes: 'Front and rear OEM brake pads installed',
  },
  {
    id: '4',
    title: 'Gear Oil Replacement',
    date: '2026-02-05',
    odometer: 6000,
    cost: 120,
    notes: 'Standard regular service',
  },
];
