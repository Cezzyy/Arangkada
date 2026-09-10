import React from 'react';
import { ScrollView, Text, StyleSheet, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import StatusCard from './src/components/StatusCard';
import CustomButton from './src/components/CustomButton';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar style="dark" />
        <ScrollView contentContainerStyle={styles.content}>

          <Text style={styles.heading}>StatusCard</Text>
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

          <Text style={[styles.heading, { marginTop: 24 }]}>CustomButton</Text>
          <CustomButton
            title="Sync Odometer"
            onPress={() => Alert.alert('Synced', 'Odometer updated!')}
            iconName="sync"
          />
          <CustomButton
            title="Upload Service Receipt"
            onPress={() => Alert.alert('Picker', 'Gallery would open here')}
            variant="outline"
            iconName="camera"
          />

        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F5F9',
  },
  content: {
    padding: 20,
    paddingBottom: 40,
  },
  heading: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1E293B',
    marginBottom: 16,
  },
});
