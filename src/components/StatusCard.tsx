import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface StatusCardProps {
  title: string;
  subtitle: string;
  badgeText: string;
  badgeColor: string;
  iconName: keyof typeof Ionicons.glyphMap;
}

export default function StatusCard({
  title,
  subtitle,
  badgeText,
  badgeColor,
  iconName,
}: StatusCardProps) {
  return (
    <View style={styles.card}>
      {/* Left: icon */}
      <View style={[styles.iconContainer, { backgroundColor: badgeColor + '20' }]}>
        <Ionicons name={iconName} size={22} color={badgeColor} />
      </View>

      {/* Center: title + subtitle */}
      <View style={styles.textContainer}>
        <Text style={styles.title} numberOfLines={1}>
          {title}
        </Text>
        <Text style={styles.subtitle} numberOfLines={1}>
          {subtitle}
        </Text>
      </View>

      {/* Right: badge */}
      <View style={[styles.badge, { backgroundColor: badgeColor }]}>
        <Text style={styles.badgeText}>{badgeText}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 16,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },
  iconContainer: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
    marginRight: 8,
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1E293B',
    marginBottom: 2,
  },
  subtitle: {
    fontSize: 12,
    color: '#64748B',
  },
  badge: {
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#FFFFFF',
  },
});
