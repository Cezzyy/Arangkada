import {
  View,
  Text,
  FlatList,
  StyleSheet,
} from 'react-native';
import StatusCard from '../components/StatusCard';
import { maintenanceHistory } from '../data/mockData';
import { MaintenanceLog } from '../types';
import { Colors, FontSize, Spacing } from '../theme/tokens';

const BADGE_COLOR = Colors.accent;

export default function HistoryScreen() {
  const totalSpend = maintenanceHistory.reduce((sum, log) => sum + log.cost, 0);

  const renderItem = ({ item }: { item: MaintenanceLog }) => (
    <View style={styles.listBlock}>
      <StatusCard
        title={item.title}
        subtitle={`${item.date} · ${item.odometer.toLocaleString()} km`}
        badgeText={`₱${item.cost}`}
        badgeColor={BADGE_COLOR}
        iconName="checkmark-circle-outline"
      />
    </View>
  );

  return (
    <FlatList
      style={styles.screen}
      contentContainerStyle={styles.content}
      data={maintenanceHistory}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
      renderItem={renderItem}
      ListHeaderComponent={
        <View>
          <View style={styles.header}>
            <Text style={styles.totalAmount}>₱{totalSpend.toLocaleString()}</Text>
            <Text style={styles.totalLabel}>total spent on maintenance</Text>
          </View>
          <View style={styles.rule} />
          <Text style={styles.sectionLabel}>All records</Text>
        </View>
      }
    />
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
    paddingBottom: 120,
  },
  header: {
    marginBottom: Spacing.xl,
  },
  totalAmount: {
    fontSize: FontSize['3xl'],
    fontWeight: '800',
    color: Colors.textPrimary,
    letterSpacing: -1,
    lineHeight: 52,
  },
  totalLabel: {
    fontSize: FontSize.sm,
    color: Colors.textSecondary,
    fontWeight: '400',
    marginTop: Spacing.xs,
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
  listBlock: {},
});
