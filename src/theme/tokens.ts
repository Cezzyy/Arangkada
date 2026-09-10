export const Colors = {
  // Backgrounds
  bg: '#F0F4FF',
  surface: '#FFFFFF',
  surfaceHigh: '#E8EFFF',

  // Text
  textPrimary: '#0F172A',
  textSecondary: '#64748B',
  textMuted: '#CBD5E1',

  // Blue accent
  accent: '#2563EB',
  accentLight: '#EFF6FF',
  accentMid: '#BFDBFE',

  // Status
  urgent: '#DC2626',
  upcoming: '#D97706',
  good: '#16A34A',

  // Borders
  border: '#E2E8F0',
  borderSubtle: '#F1F5F9',
} as const;

export const FontSize = {
  xs: 11,
  sm: 13,
  base: 15,
  md: 17,
  lg: 20,
  xl: 26,
  '2xl': 34,
  '3xl': 48,
  hero: 64,
} as const;

export const Radius = {
  sm: 6,
  md: 10,
  lg: 16,
  pill: 999,
} as const;

export const Spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  '2xl': 48,
} as const;
