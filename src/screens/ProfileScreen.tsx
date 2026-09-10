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
}

function SpecRow({ label, value }: SpecRowProps) {
  return (
    <View style={styles.specRow}>
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
      {/* Identity */}
      <View style={styles.identity}>
        <Text style={styles.bikeModel}>{bikeProfile.model}</Text>
        <Text style={styles.bikePlate}>{bikeProfile.plateNumber}</Text>
      </View>

      <View style={styles.rule} />

      {/* Specs */}
      <Text style={styles.sectionLabel}>Specifications</Text>
      <View style={styles.specsBlock}>
        <SpecRow label="Year" value={String(bikeProfile.year)} />
        <SpecRow label="Fuel capacity" value={bikeProfile.fuelCapacity} />
        <SpecRow
          label="Odometer"
          value={`${bikeProfile.currentOdometer.toLocaleString()} km`}
        />
        <SpecRow label="Plate" value={bikeProfile.plateNumber} />
      </View>

      <View style={styles.rule} />

      {/* Receipt */}
      <Text style={styles.sectionLabel}>Service receipt</Text>

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
          <Ionicons name="camera-outline" size={26} color={Colors.textMuted} />
          <Text style={styles.emptyText}>Attach a photo of your last receipt</Text>
        </View>
      )}

      <CustomButton
        title={receiptUri ? 'Replace receipt' : 'Upload receipt'}
        onPress={handlePickImage}
        iconName="camera-outline"
        variant={receiptUri ? 'outline' : 'primary'}
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
    paddingBottom: 120,
  },
  identity: {
    marginBottom: Spacing.xl,
  },
  bikeModel: {
    fontSize: FontSize['2xl'],
    fontWeight: '700',
    color: Colors.textPrimary,
    letterSpacing: -0.5,
    marginBottom: Spacing.xs,
  },
  bikePlate: {
    fontSize: FontSize.md,
    color: Colors.accent,
    fontWeight: '600',
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
  specsBlock: {
    marginBottom: Spacing.xl,
  },
  specRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderSubtle,
  },
  specLabel: {
    fontSize: FontSize.sm,
    color: Colors.textSecondary,
  },
  specValue: {
    fontSize: FontSize.sm,
    color: Colors.textPrimary,
    fontWeight: '600',
  },
  imageContainer: {
    borderRadius: Radius.md,
    overflow: 'hidden',
    aspectRatio: 4 / 3,
    marginTop: Spacing.md,
    marginBottom: Spacing.md,
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
    backgroundColor: 'rgba(255,255,255,0.85)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyReceipt: {
    height: 110,
    borderRadius: Radius.md,
    borderWidth: 1,
    borderColor: Colors.border,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.surface,
    marginTop: Spacing.md,
    marginBottom: Spacing.md,
    gap: Spacing.sm,
  },
  emptyText: {
    fontSize: FontSize.sm,
    color: Colors.textMuted,
  },
});
