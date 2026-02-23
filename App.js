import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, TouchableOpacity, StyleSheet, Platform, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from './src/screens/HomeScreen';
import ExploreScreen from './src/screens/ExploreScreen';
import ActivityScreen from './src/screens/ActivityScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import GymDetailScreen from './src/screens/GymDetailScreen';
import ReservationScreen from './src/screens/ReservationScreen';
import ScheduleScreen from './src/screens/ScheduleScreen';
import TrainerScreen from './src/screens/TrainerScreen';
import { COLORS, SHADOWS } from './src/constants';

export default function App() {
  const [screenStack, setScreenStack] = useState([{ name: 'Home' }]);
  const [activeTab, setActiveTab] = useState('Home');

  const navigation = {
    navigate: (name, params) => {
      if (['Home', 'Explore', 'Activity', 'Profile'].includes(name)) {
        setActiveTab(name);
        setScreenStack([{ name, params }]);
      } else {
        setScreenStack((prev) => [...prev, { name, params }]);
      }
    },
    goBack: () => {
      setScreenStack((prev) => {
        if (prev.length > 1) return prev.slice(0, -1);
        return prev;
      });
    },
  };

  const currentScreen = screenStack[screenStack.length - 1];

  const renderScreen = () => {
    switch (currentScreen.name) {
      case 'Home':
        return <HomeScreen navigation={navigation} />;
      case 'Explore':
        return <ExploreScreen navigation={navigation} />;
      case 'Activity':
        return <ActivityScreen navigation={navigation} />;
      case 'Profile':
        return <ProfileScreen navigation={navigation} />;
      case 'GymDetail':
        return <GymDetailScreen navigation={navigation} />;
      case 'Reservation':
        return <ReservationScreen navigation={navigation} />;
      case 'Schedule':
        return <ScheduleScreen navigation={navigation} />;
      case 'Trainer':
        return <TrainerScreen navigation={navigation} />;
      default:
        return <HomeScreen navigation={navigation} />;
    }
  };

  const showTabBar = ['Home', 'Explore', 'Activity', 'Profile'].includes(currentScreen.name);

  const tabs = [
    { name: 'Home', iconActive: 'home', iconInactive: 'home-outline' },
    { name: 'Explore', iconActive: 'compass', iconInactive: 'compass-outline' },
    { name: 'Activity', iconActive: 'stats-chart', iconInactive: 'stats-chart-outline' },
    { name: 'Profile', iconActive: 'person', iconInactive: 'person-outline' },
  ];

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      {renderScreen()}
      {showTabBar && (
        <View style={styles.tabBar}>
          {tabs.map((tab) => {
            const isActive = activeTab === tab.name;
            return (
              <TouchableOpacity
                key={tab.name}
                style={styles.tabItem}
                onPress={() => {
                  setActiveTab(tab.name);
                  setScreenStack([{ name: tab.name }]);
                }}
                activeOpacity={0.7}
              >
                <Ionicons
                  name={isActive ? tab.iconActive : tab.iconInactive}
                  size={22}
                  color={isActive ? COLORS.primary : COLORS.gray}
                />
                <Text style={[
                  styles.tabLabel,
                  { color: isActive ? COLORS.primary : COLORS.gray },
                ]}>
                  {tab.name}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
  tabBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: Platform.OS === 'web' ? 70 : (Platform.OS === 'ios' ? 88 : 70),
    backgroundColor: COLORS.white,
    flexDirection: 'row',
    borderTopWidth: 0,
    ...SHADOWS.large,
    paddingBottom: Platform.OS === 'ios' ? 24 : 8,
    paddingTop: 10,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 3,
  },
  tabLabel: {
    fontSize: 11,
    fontWeight: '600',
  },
});
