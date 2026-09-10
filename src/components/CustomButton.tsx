import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
  ActivityIndicator,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface CustomButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'outline';
  iconName?: keyof typeof Ionicons.glyphMap;
  loading?: boolean;
}

export default function CustomButton({
  title,
  onPress,
  variant = 'primary',
  iconName,
  loading = false,
}: CustomButtonProps) {
  const isPrimary = variant === 'primary';

  return (
    <TouchableOpacity
      style={[styles.button, isPrimary ? styles.primaryButton : styles.outlineButton]}
      onPress={onPress}
      activeOpacity={0.75}
      disabled={loading}
    >
      {loading ? (
        <ActivityIndicator color={isPrimary ? '#FFFFFF' : '#2563EB'} />
      ) : (
        <View style={styles.inner}>
          {iconName && (
            <Ionicons
              name={iconName}
              size={18}
              color={isPrimary ? '#FFFFFF' : '#2563EB'}
              style={styles.icon}
            />
          )}
          <Text style={[styles.label, isPrimary ? styles.primaryLabel : styles.outlineLabel]}>
            {title}
          </Text>
        </View>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryButton: {
    backgroundColor: '#2563EB',
  },
  outlineButton: {
    backgroundColor: 'transparent',
    borderWidth: 1.5,
    borderColor: '#2563EB',
  },
  inner: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 8,
  },
  label: {
    fontSize: 15,
    fontWeight: '600',
  },
  primaryLabel: {
    color: '#FFFFFF',
  },
  outlineLabel: {
    color: '#2563EB',
  },
});
