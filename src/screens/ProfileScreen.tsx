import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  Alert,
  TouchableOpacity,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Ionicons } from '@expo/vector-icons';
import CustomButton from '../components/CustomButton';
import { bikeProfile } from '../data/mockData';
import { Colors, FontSize, Spacing, Radius } from '../theme/tokens';

interface SpecRowProps {
  label: string;
  value: string;
  iconName: keyof typeof Ionicons.glyphMap;
  last?: boolean;
}

function SpecRow({ label, value, iconName, last = false }: SpecRowProps) {
  return (
    <View style={[styles.specRow, last && styles.specRowLast]}>
      <View style={styles.specIconWrap}>
        <Ionicons name={iconName} size={17} color={Colors.accent} />
      </View>
      <Text style={styles.specLabel}>{label}</Text>
      <Text style={styles.specValue}>{value}</Text>
    </View>
  );
}

export default function ProfileScreen() {
  const [receiptUri, setReceiptUri] = useState<string | null>(null);

  const handlePickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission needed', 'Allow photo library access to attach receipts.');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.8,
    });

    if (!result.canceled && result.assets.length > 0) {
      setReceiptUri(result.assets[0].uri);
    }
  };

  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      {/* Bike identity — plain, like the dashboard hero */}
      <View style={styles.identity}>
        <Text style={styles.bikeModel}>{bikeProfile.model}</Text>
        <Text style={styles.bikePlate}>{bikeProfile.plateNumber}</Text>
      </View>

      {/* Specifications card */}
      <Text style={styles.sectionLabel}>Specifications</Text>
      <View style={styles.specsCard}>
        <SpecRow
          label="Model"
          value={bikeProfile.model}
          iconName="bicycle-outline"
        />
        <SpecRow
          label="Year"
          value={String(bikeProfile.year)}
          iconName="calendar-outline"
        />
        <SpecRow
          label="Fuel capacity"
          value={bikeProfile.fuelCapacity}
          iconName="water-outline"
        />
        <SpecRow
          label="Odometer"
          value={`${bikeProfile.currentOdometer.toLocaleString()} km`}
          iconName="speedometer-outline"
        />
        <SpecRow
          label="Plate"
          value={bikeProfile.plateNumber}
          iconName="card-outline"
          last
        />
      </View>

      {/* Receipt card */}
      <Text style={styles.sectionLabel}>Service receipt</Text>
      <View style={styles.receiptCard}>
        {receiptUri ? (
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: receiptUri }}
              style={styles.receiptImage}
              resizeMode="cover"
            />
            <TouchableOpacity
              style={styles.removeBtn}
              onPress={() => setReceiptUri(null)}
            >
              <Ionicons name="close" size={14} color={Colors.textPrimary} />
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.emptyReceipt}>
            <View style={styles.emptyIcon}>
              <Ionicons name="receipt-outline" size={28} color={Colors.accent} />
            </View>
            <Text style={styles.emptyTitle}>No receipt attached</Text>
            <Text style={styles.emptyText}>Upload a photo of your last service receipt</Text>
          </View>
        )}

        <CustomButton
          title={receiptUri ? 'Replace receipt' : 'Upload receipt'}
          onPress={handlePickImage}
          iconName="camera-outline"
          variant={receiptUri ? 'outline' : 'primary'}
        />
      </View>
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
    paddingTop: Spacing.lg,
    paddingBottom: 120,
    gap: Spacing.sm,
  },

  /* Identity — plain on background */
  identity: {
    paddingTop: Spacing.sm,
    marginBottom: Spacing.lg,
  },
  bikeModel: {
    fontSize: FontSize.xl,
    fontWeight: '800',
    color: Colors.textPrimary,
    letterSpacing: -0.5,
    marginBottom: Spacing.xs,
  },
  bikePlate: {
    fontSize: FontSize.md,
    color: Colors.accent,
    fontWeight: '600',
  },

  /* Section label */
  sectionLabel: {
    fontSize: FontSize.xs,
    color: Colors.textSecondary,
    fontWeight: '600',
    letterSpacing: 0.5,
    marginBottom: Spacing.xs,
    marginTop: Spacing.xs,
  },

  /* Specs card */
  specsCard: {
    backgroundColor: Colors.surface,
    borderRadius: Radius.lg,
    borderWidth: 1,
    borderColor: Colors.border,
    overflow: 'hidden',
    marginBottom: Spacing.md,
  },
  specRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 13,
    paddingHorizontal: Spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  specRowLast: {
    borderBottomWidth: 0,
  },
  specIconWrap: {
    width: 30,
    marginRight: Spacing.sm,
  },
  specLabel: {
    flex: 1,
    fontSize: FontSize.sm,
    color: Colors.textSecondary,
  },
  specValue: {
    fontSize: FontSize.sm,
    color: Colors.textPrimary,
    fontWeight: '600',
  },

  /* Receipt card */
  receiptCard: {
    backgroundColor: Colors.surface,
    borderRadius: Radius.lg,
    borderWidth: 1,
    borderColor: Colors.border,
    padding: Spacing.md,
    marginBottom: Spacing.md,
    gap: Spacing.sm,
  },
  imageContainer: {
    borderRadius: Radius.md,
    overflow: 'hidden',
    aspectRatio: 4 / 3,
    position: 'relative',
  },
  receiptImage: {
    width: '100%',
    height: '100%',
  },
  removeBtn: {
    position: 'absolute',
    top: Spacing.sm,
    right: Spacing.sm,
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: 'rgba(255,255,255,0.9)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyReceipt: {
    paddingVertical: Spacing.xl,
    alignItems: 'center',
    gap: Spacing.xs,
  },
  emptyIcon: {
    width: 56,
    height: 56,
    borderRadius: 999,
    backgroundColor: Colors.accentLight,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Spacing.xs,
  },
  emptyTitle: {
    fontSize: FontSize.base,
    fontWeight: '600',
    color: Colors.textPrimary,
  },
  emptyText: {
    fontSize: FontSize.xs,
    color: Colors.textSecondary,
    textAlign: 'center',
  },
});
