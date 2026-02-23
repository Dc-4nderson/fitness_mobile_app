import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SIZES, FONTS, SHADOWS } from '../constants';

const { width } = Dimensions.get('window');

const ActivityScreen = ({ navigation }) => {
  const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const weekActivity = [60, 40, 80, 45, 75, 90, 30];

  const recentActivity = [
    {
      id: '1',
      title: 'Morning Yoga',
      type: 'Yoga',
      duration: '30 min',
      calories: '120 kcal',
      date: 'Today, 7:00 AM',
      icon: 'body-outline',
      color: '#4ECDC4',
    },
    {
      id: '2',
      title: 'HIIT Cardio',
      type: 'Cardio',
      duration: '45 min',
      calories: '350 kcal',
      date: 'Today, 5:30 PM',
      icon: 'flash-outline',
      color: COLORS.primary,
    },
    {
      id: '3',
      title: 'Boxing Class',
      type: 'Boxing',
      duration: '60 min',
      calories: '450 kcal',
      date: 'Yesterday, 6:00 PM',
      icon: 'fitness-outline',
      color: '#FFB800',
    },
    {
      id: '4',
      title: 'Pilates',
      type: 'Pilates',
      duration: '40 min',
      calories: '200 kcal',
      date: 'Yesterday, 8:00 AM',
      icon: 'body-outline',
      color: '#7C4DFF',
    },
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Activity</Text>
        <TouchableOpacity style={styles.calendarBtn}>
          <Ionicons name="calendar-outline" size={22} color={COLORS.black} />
        </TouchableOpacity>
      </View>

      {/* Weekly Summary Card */}
      <View style={styles.summaryCard}>
        <View style={styles.summaryHeader}>
          <Text style={styles.summaryTitle}>This Week</Text>
          <View style={styles.summaryBadge}>
            <Ionicons name="trending-up" size={14} color={COLORS.success} />
            <Text style={styles.summaryBadgeText}>+12%</Text>
          </View>
        </View>

        {/* Bar Chart */}
        <View style={styles.chartContainer}>
          {weekDays.map((day, index) => (
            <View key={day} style={styles.chartBar}>
              <View style={styles.barContainer}>
                <View
                  style={[
                    styles.bar,
                    {
                      height: `${weekActivity[index]}%`,
                      backgroundColor: index === 5 ? COLORS.primary : COLORS.progressBg,
                    },
                  ]}
                />
              </View>
              <Text style={[
                styles.barLabel,
                index === 5 && { color: COLORS.primary, ...FONTS.bold },
              ]}>
                {day}
              </Text>
            </View>
          ))}
        </View>

        {/* Summary Stats */}
        <View style={styles.summaryStats}>
          <View style={styles.summaryStatItem}>
            <View style={[styles.summaryStatDot, { backgroundColor: COLORS.primary }]} />
            <Text style={styles.summaryStatLabel}>Workouts</Text>
            <Text style={styles.summaryStatValue}>6</Text>
          </View>
          <View style={styles.summaryStatItem}>
            <View style={[styles.summaryStatDot, { backgroundColor: '#FFB800' }]} />
            <Text style={styles.summaryStatLabel}>Calories</Text>
            <Text style={styles.summaryStatValue}>2,450</Text>
          </View>
          <View style={styles.summaryStatItem}>
            <View style={[styles.summaryStatDot, { backgroundColor: '#4ECDC4' }]} />
            <Text style={styles.summaryStatLabel}>Minutes</Text>
            <Text style={styles.summaryStatValue}>285</Text>
          </View>
        </View>
      </View>

      {/* Goals Progress */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Goals</Text>
      </View>

      <View style={styles.goalsRow}>
        <View style={styles.goalCard}>
          <View style={styles.goalCircle}>
            <Text style={styles.goalPercent}>75%</Text>
          </View>
          <Text style={styles.goalLabel}>Steps</Text>
          <Text style={styles.goalValue}>7,500 / 10,000</Text>
        </View>
        <View style={styles.goalCard}>
          <View style={[styles.goalCircle, { borderColor: '#FFB800' }]}>
            <Text style={[styles.goalPercent, { color: '#FFB800' }]}>60%</Text>
          </View>
          <Text style={styles.goalLabel}>Calories</Text>
          <Text style={styles.goalValue}>1,800 / 3,000</Text>
        </View>
        <View style={styles.goalCard}>
          <View style={[styles.goalCircle, { borderColor: '#4ECDC4' }]}>
            <Text style={[styles.goalPercent, { color: '#4ECDC4' }]}>90%</Text>
          </View>
          <Text style={styles.goalLabel}>Water</Text>
          <Text style={styles.goalValue}>2.7 / 3.0 L</Text>
        </View>
      </View>

      {/* Recent Activity */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Recent Activity</Text>
        <TouchableOpacity>
          <Text style={styles.seeAll}>See All</Text>
        </TouchableOpacity>
      </View>

      {recentActivity.map((activity) => (
        <View key={activity.id} style={styles.activityCard}>
          <View style={[styles.activityIcon, { backgroundColor: `${activity.color}15` }]}>
            <Ionicons name={activity.icon} size={22} color={activity.color} />
          </View>
          <View style={styles.activityInfo}>
            <Text style={styles.activityTitle}>{activity.title}</Text>
            <Text style={styles.activityDate}>{activity.date}</Text>
          </View>
          <View style={styles.activityStats}>
            <Text style={styles.activityDuration}>{activity.duration}</Text>
            <Text style={styles.activityCalories}>{activity.calories}</Text>
          </View>
        </View>
      ))}

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
  calendarBtn: {
    width: 44,
    height: 44,
    borderRadius: 14,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
    ...SHADOWS.small,
  },
  summaryCard: {
    marginHorizontal: 20,
    backgroundColor: COLORS.white,
    borderRadius: 20,
    padding: 20,
    ...SHADOWS.medium,
    marginBottom: 24,
  },
  summaryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  summaryTitle: {
    fontSize: 18,
    ...FONTS.bold,
    color: COLORS.black,
  },
  summaryBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    backgroundColor: '#E8F5E9',
  },
  summaryBadgeText: {
    fontSize: 12,
    color: COLORS.success,
    ...FONTS.bold,
  },
  chartContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    height: 120,
    marginBottom: 20,
  },
  chartBar: {
    alignItems: 'center',
    flex: 1,
  },
  barContainer: {
    height: 100,
    width: 20,
    justifyContent: 'flex-end',
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: COLORS.lightGray,
  },
  bar: {
    width: '100%',
    borderRadius: 10,
  },
  barLabel: {
    fontSize: 11,
    color: COLORS.gray,
    marginTop: 6,
    ...FONTS.medium,
  },
  summaryStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  summaryStatItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  summaryStatDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  summaryStatLabel: {
    fontSize: 12,
    color: COLORS.gray,
    ...FONTS.medium,
  },
  summaryStatValue: {
    fontSize: 14,
    ...FONTS.bold,
    color: COLORS.black,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 14,
  },
  sectionTitle: {
    fontSize: 18,
    ...FONTS.bold,
    color: COLORS.black,
  },
  seeAll: {
    fontSize: 14,
    color: COLORS.primary,
    ...FONTS.semiBold,
  },
  goalsRow: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    gap: 12,
    marginBottom: 24,
  },
  goalCard: {
    flex: 1,
    backgroundColor: COLORS.white,
    borderRadius: 16,
    padding: 14,
    alignItems: 'center',
    ...SHADOWS.small,
  },
  goalCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 4,
    borderColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  goalPercent: {
    fontSize: 14,
    ...FONTS.bold,
    color: COLORS.primary,
  },
  goalLabel: {
    fontSize: 13,
    ...FONTS.semiBold,
    color: COLORS.black,
    marginBottom: 2,
  },
  goalValue: {
    fontSize: 10,
    color: COLORS.gray,
    ...FONTS.medium,
  },
  activityCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    backgroundColor: COLORS.white,
    borderRadius: 14,
    padding: 14,
    marginBottom: 10,
    ...SHADOWS.small,
  },
  activityIcon: {
    width: 48,
    height: 48,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  activityInfo: {
    flex: 1,
  },
  activityTitle: {
    fontSize: 15,
    ...FONTS.bold,
    color: COLORS.black,
    marginBottom: 4,
  },
  activityDate: {
    fontSize: 12,
    color: COLORS.gray,
    ...FONTS.medium,
  },
  activityStats: {
    alignItems: 'flex-end',
  },
  activityDuration: {
    fontSize: 13,
    ...FONTS.semiBold,
    color: COLORS.black,
    marginBottom: 2,
  },
  activityCalories: {
    fontSize: 11,
    color: COLORS.gray,
    ...FONTS.medium,
  },
});

export default ActivityScreen;
