import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import StatusCard from '../components/StatusCard';
import CustomButton from '../components/CustomButton';
import { serviceAlerts, bikeProfile } from '../data/mockData';
import { Colors, FontSize, Spacing } from '../theme/tokens';

const STATUS_COLORS = {
  urgent: Colors.urgent,
  upcoming: Colors.upcoming,
  good: Colors.good,
} as const;

const STATUS_LABELS = {
  urgent: 'Overdue',
  upcoming: 'Soon',
  good: 'On track',
} as const;

export default function DashboardScreen() {
  const handleSyncOdometer = () => {
    Alert.alert(
      'Mileage updated',
      `Odometer set to ${bikeProfile.currentOdometer.toLocaleString()} km.`,
      [{ text: 'Done' }],
    );
  };

  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      {/* Hero */}
      <View style={styles.hero}>
        <Text style={styles.heroReading}>
          {bikeProfile.currentOdometer.toLocaleString()}
        </Text>
        <View style={styles.heroMeta}>
          <Text style={styles.heroUnit}>km</Text>
          <View style={styles.heroDivider} />
          <Text style={styles.heroModel}>{bikeProfile.model}</Text>
        </View>
      </View>

      {/* Rule */}
      <View style={styles.rule} />

      {/* Service schedule */}
      <Text style={styles.sectionLabel}>Service Schedule</Text>
      <View style={styles.listBlock}>
        {serviceAlerts.map((alert) => (
          <StatusCard
            key={alert.id}
            title={alert.serviceName}
            subtitle={`${alert.dueKm.toLocaleString()} km remaining`}
            badgeText={STATUS_LABELS[alert.status]}
            badgeColor={STATUS_COLORS[alert.status]}
            iconName={alert.icon}
          />
        ))}
      </View>

      <CustomButton
        title="Sync odometer"
        onPress={handleSyncOdometer}
        iconName="sync-outline"
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.bg,
  },
  content: {
    paddingHorizontal: Spacing.lg,
    paddingTop: Spacing.xl,
    paddingBottom: 120, // clears the floating tab bar
  },
  hero: {
    marginBottom: Spacing.xl,
  },
  heroReading: {
    fontSize: FontSize.hero,
    fontWeight: '800',
    color: Colors.textPrimary,
    letterSpacing: -2,
    lineHeight: 68,
  },
  heroMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: Spacing.xs,
    gap: Spacing.sm,
  },
  heroUnit: {
    fontSize: FontSize.md,
    fontWeight: '600',
    color: Colors.accent,
  },
  heroDivider: {
    width: 1,
    height: 14,
    backgroundColor: Colors.border,
  },
  heroModel: {
    fontSize: FontSize.sm,
    color: Colors.textSecondary,
    fontWeight: '400',
  },
  rule: {
    height: 1,
    backgroundColor: Colors.border,
    marginBottom: Spacing.lg,
  },
  sectionLabel: {
    fontSize: FontSize.sm,
    color: Colors.textSecondary,
    fontWeight: '500',
    marginBottom: 0,
  },
  listBlock: {
    marginBottom: Spacing.xl,
  },
});
