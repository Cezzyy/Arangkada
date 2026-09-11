import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors, FontSize, Spacing } from '../theme/tokens';

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
    <View style={styles.row}>
      <Ionicons name={iconName} size={18} color={Colors.textSecondary} style={styles.icon} />
      <View style={styles.text}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
      <Text style={[styles.status, { color: badgeColor }]}>{badgeText}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: Spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  icon: {
    marginRight: Spacing.md,
  },
  text: {
    flex: 1,
  },
  title: {
    fontSize: FontSize.sm,
    fontWeight: '600',
    color: Colors.textPrimary,
    marginBottom: 2,
  },
  subtitle: {
    fontSize: FontSize.xs,
    color: Colors.textSecondary,
  },
  status: {
    fontSize: FontSize.sm,
    fontWeight: '600',
    marginLeft: Spacing.sm,
  },
});
