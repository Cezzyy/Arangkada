import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../theme/tokens';

type IconMap = {
  focused: keyof typeof Ionicons.glyphMap;
  unfocused: keyof typeof Ionicons.glyphMap;
};

const ICONS: Record<string, IconMap> = {
  Dashboard: { focused: 'speedometer', unfocused: 'speedometer-outline' },
  History: { focused: 'time', unfocused: 'time-outline' },
  Profile: { focused: 'person', unfocused: 'person-outline' },
};

export default function FloatingTabBar({
  state,
  navigation,
}: BottomTabBarProps) {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.wrapper, { paddingBottom: insets.bottom + 16 }]}>
      <View style={styles.capsule}>
        {state.routes.map((route, index) => {
          const isFocused = state.index === index;
          const icons = ICONS[route.name];

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name as never);
            }
          };

          return (
            <TouchableOpacity
              key={route.key}
              onPress={onPress}
              style={[styles.tab, isFocused && styles.tabActive]}
              activeOpacity={0.75}
            >
              <Ionicons
                name={isFocused ? icons.focused : icons.unfocused}
                size={22}
                color={isFocused ? '#FFFFFF' : Colors.textSecondary}
              />
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    pointerEvents: 'box-none',
  },
  capsule: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.surface,
    borderRadius: 999,
    paddingVertical: 8,
    paddingHorizontal: 10,
    width: '80%',
    shadowColor: '#2563EB',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.15,
    shadowRadius: 20,
    elevation: 12,
  },
  tab: {
    flex: 1,
    height: 52,
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabActive: {
    backgroundColor: Colors.accent,
  },
});
