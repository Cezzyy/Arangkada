import React from 'react';
import { SafeAreaView, ScrollView, Text, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import StatusCard from './src/components/StatusCard';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.heading}>StatusCard Preview</Text>

        <StatusCard
          title="Engine Oil Replacement"
          subtitle="Due in 250 km"
          badgeText="URGENT"
          badgeColor="#EF4444"
          iconName="water"
        />
        <StatusCard
          title="Gear Oil Replacement"
          subtitle="Due in 1,200 km"
          badgeText="SOON"
          badgeColor="#F59E0B"
          iconName="construct"
        />
        <StatusCard
          title="Spark Plug Inspection"
          subtitle="Due in 4,500 km"
          badgeText="GOOD"
          badgeColor="#10B981"
          iconName="flash"
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F5F9',
  },
  content: {
    padding: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1E293B',
    marginBottom: 16,
  },
});
