import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

import DashboardScreen from './src/screens/DashboardScreen';
import HistoryScreen from './src/screens/HistoryScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import FloatingTabBar from './src/components/FloatingTabBar';
import { Colors } from './src/theme/tokens';

const Tab = createBottomTabNavigator();

const NavTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: Colors.bg,
    card: Colors.surface,
    text: Colors.textPrimary,
    border: Colors.border,
    primary: Colors.accent,
    notification: Colors.urgent,
  },
};

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar style="dark" />
      <NavigationContainer theme={NavTheme}>
        <Tab.Navigator
          tabBar={(props) => <FloatingTabBar {...props} />}
          screenOptions={{
            headerStyle: {
              backgroundColor: Colors.surface,
            },
            headerTitleStyle: {
              fontWeight: '700',
              color: Colors.textPrimary,
              fontSize: 16,
            },
            headerShadowVisible: false,
          }}
        >
          <Tab.Screen name="Dashboard" component={DashboardScreen} />
          <Tab.Screen name="History" component={HistoryScreen} />
          <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
