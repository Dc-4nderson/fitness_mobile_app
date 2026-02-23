import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SIZES, FONTS, SHADOWS } from '../constants';

const ProfileScreen = ({ navigation }) => {
  const menuItems = [
    { icon: 'person-outline', label: 'Edit Profile', color: COLORS.primary },
    { icon: 'heart-outline', label: 'Favorites', color: '#FF6B6B' },
    { icon: 'card-outline', label: 'Payment Methods', color: '#4ECDC4' },
    { icon: 'notifications-outline', label: 'Notifications', color: '#FFB800' },
    { icon: 'shield-checkmark-outline', label: 'Privacy', color: '#7C4DFF' },
    { icon: 'settings-outline', label: 'Settings', color: COLORS.gray },
    { icon: 'help-circle-outline', label: 'Help & Support', color: '#2196F3' },
    { icon: 'log-out-outline', label: 'Log Out', color: COLORS.primary },
  ];

  const stats = [
    { value: '48', label: 'Workouts' },
    { value: '16.5k', label: 'Calories' },
    { value: '12', label: 'Hours' },
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Profile</Text>
        <TouchableOpacity>
          <Ionicons name="settings-outline" size={22} color={COLORS.black} />
        </TouchableOpacity>
      </View>

      {/* Profile Card */}
      <View style={styles.profileCard}>
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80' }}
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>Thony Gonzalez</Text>
        <Text style={styles.profileEmail}>thonygonzalez@email.com</Text>

        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editButtonText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>

      {/* Stats */}
      <View style={styles.statsContainer}>
        {stats.map((stat, index) => (
          <View key={index} style={styles.statItem}>
            <Text style={styles.statValue}>{stat.value}</Text>
            <Text style={styles.statLabel}>{stat.label}</Text>
          </View>
        ))}
      </View>

      {/* Membership Card */}
      <View style={styles.membershipCard}>
        <View style={styles.membershipHeader}>
          <View>
            <Text style={styles.membershipLabel}>Current Plan</Text>
            <Text style={styles.membershipPlan}>Premium Member</Text>
          </View>
          <View style={styles.membershipBadge}>
            <Ionicons name="diamond" size={18} color={COLORS.white} />
          </View>
        </View>
        <View style={styles.membershipFooter}>
          <Text style={styles.membershipExpiry}>Expires: Jan 15, 2027</Text>
          <TouchableOpacity>
            <Text style={styles.membershipUpgrade}>Upgrade</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Menu Items */}
      <View style={styles.menuSection}>
        {menuItems.map((item, index) => (
          <TouchableOpacity key={index} style={styles.menuItem}>
            <View style={styles.menuLeft}>
              <View style={[styles.menuIcon, { backgroundColor: `${item.color}15` }]}>
                <Ionicons name={item.icon} size={20} color={item.color} />
              </View>
              <Text style={[
                styles.menuLabel,
                item.label === 'Log Out' && { color: COLORS.primary },
              ]}>
                {item.label}
              </Text>
            </View>
            <Ionicons name="chevron-forward" size={18} color={COLORS.mediumGray} />
          </TouchableOpacity>
        ))}
      </View>

      <View style={{ height: 100 }} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 12,
  },
  headerTitle: {
    fontSize: 28,
    ...FONTS.bold,
    color: COLORS.black,
  },
  profileCard: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  profileImage: {
    width: 90,
    height: 90,
    borderRadius: 45,
    marginBottom: 14,
    borderWidth: 3,
    borderColor: COLORS.primary,
  },
  profileName: {
    fontSize: 22,
    ...FONTS.bold,
    color: COLORS.black,
    marginBottom: 4,
  },
  profileEmail: {
    fontSize: 14,
    color: COLORS.gray,
    marginBottom: 16,
  },
  editButton: {
    paddingHorizontal: 24,
    paddingVertical: 10,
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: COLORS.primary,
  },
  editButtonText: {
    fontSize: 14,
    color: COLORS.primary,
    ...FONTS.semiBold,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 20,
    backgroundColor: COLORS.white,
    borderRadius: 16,
    padding: 20,
    ...SHADOWS.medium,
    marginBottom: 20,
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 22,
    ...FONTS.bold,
    color: COLORS.black,
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: COLORS.gray,
    ...FONTS.medium,
  },
  membershipCard: {
    marginHorizontal: 20,
    borderRadius: 16,
    backgroundColor: COLORS.primary,
    padding: 20,
    marginBottom: 24,
  },
  membershipHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  membershipLabel: {
    fontSize: 12,
    color: 'rgba(255,255,255,0.7)',
    ...FONTS.medium,
  },
  membershipPlan: {
    fontSize: 18,
    ...FONTS.bold,
    color: COLORS.white,
    marginTop: 2,
  },
  membershipBadge: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: 'rgba(255,255,255,0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  membershipFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  membershipExpiry: {
    fontSize: 12,
    color: 'rgba(255,255,255,0.7)',
    ...FONTS.medium,
  },
  membershipUpgrade: {
    fontSize: 14,
    color: COLORS.white,
    ...FONTS.bold,
    textDecorationLine: 'underline',
  },
  menuSection: {
    marginHorizontal: 20,
    backgroundColor: COLORS.white,
    borderRadius: 16,
    ...SHADOWS.small,
    overflow: 'hidden',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.lightGray,
  },
  menuLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },
  menuIcon: {
    width: 38,
    height: 38,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuLabel: {
    fontSize: 15,
    ...FONTS.medium,
    color: COLORS.black,
  },
});

export default ProfileScreen;
