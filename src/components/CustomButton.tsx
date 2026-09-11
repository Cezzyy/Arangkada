import {
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
  ActivityIndicator,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors, FontSize, Spacing } from '../theme/tokens';

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
      activeOpacity={0.8}
      disabled={loading}
    >
      {loading ? (
        <ActivityIndicator color={isPrimary ? Colors.surface : Colors.accent} />
      ) : (
        <View style={styles.inner}>
          {iconName && (
            <Ionicons
              name={iconName}
              size={16}
              color={isPrimary ? Colors.surface : Colors.accent}
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
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: Spacing.lg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryButton: {
    backgroundColor: Colors.accent,
  },
  outlineButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: Colors.accent,
  },
  inner: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: Spacing.sm,
  },
  label: {
    fontSize: FontSize.sm,
    fontWeight: '600',
    letterSpacing: 0.2,
  },
  primaryLabel: {
    color: Colors.surface,
  },
  outlineLabel: {
    color: Colors.accent,
  },
});
