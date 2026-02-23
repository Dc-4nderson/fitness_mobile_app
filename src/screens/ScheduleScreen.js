import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SIZES, FONTS, SHADOWS, SCHEDULE_DATA } from '../constants';

const { width } = Dimensions.get('window');
const CELL_SIZE = (width - 40 - 6 * 6) / 7;

const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const MONTH_DAYS = [
  [null, null, null, null, null, 3, 4],
  [5, 6, 7, 8, 9, 10, 11],
  [12, 13, 14, 15, 16, 17, 18],
  [19, 20, 21, 22, 23, 24, 25],
  [26, 27, 28, 29, 30, 31, null],
];

const ScheduleScreen = ({ navigation }) => {
  const [selectedDay, setSelectedDay] = useState(8);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => navigation?.goBack?.()}
        >
          <Ionicons name="arrow-back" size={22} color={COLORS.black} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Disana Fitness</Text>
        <TouchableOpacity>
          <Ionicons name="ellipsis-vertical" size={20} color={COLORS.black} />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Calendar */}
        <View style={styles.calendar}>
          {/* Month Header */}
          <View style={styles.monthHeader}>
            <TouchableOpacity>
              <Ionicons name="chevron-back" size={20} color={COLORS.black} />
            </TouchableOpacity>
            <Text style={styles.monthTitle}>December 2026</Text>
            <TouchableOpacity>
              <Ionicons name="chevron-forward" size={20} color={COLORS.black} />
            </TouchableOpacity>
          </View>

          {/* Day Headers */}
          <View style={styles.dayHeaders}>
            {DAYS.map((day) => (
              <Text key={day} style={styles.dayHeader}>{day}</Text>
            ))}
          </View>

          {/* Calendar Grid */}
          {MONTH_DAYS.map((week, weekIndex) => (
            <View key={weekIndex} style={styles.weekRow}>
              {week.map((day, dayIndex) => (
                <TouchableOpacity
                  key={dayIndex}
                  style={[
                    styles.dayCell,
                    day === selectedDay && styles.dayCellSelected,
                    day === 8 && day !== selectedDay && styles.dayCellToday,
                  ]}
                  onPress={() => day && setSelectedDay(day)}
                  disabled={!day}
                >
                  <Text
                    style={[
                      styles.dayText,
                      day === selectedDay && styles.dayTextSelected,
                      !day && styles.dayTextEmpty,
                      [15, 16, 17, 18].includes(day) && styles.dayTextHighlight,
                    ]}
                  >
                    {day || ''}
                  </Text>
                  {[8, 15, 22].includes(day) && (
                    <View style={[
                      styles.dayDot,
                      day === selectedDay && styles.dayDotSelected,
                    ]} />
                  )}
                </TouchableOpacity>
              ))}
            </View>
          ))}
        </View>

        {/* Schedule List */}
        <View style={styles.scheduleSection}>
          <Text style={styles.scheduleTitle}>Today's Schedule</Text>
          
          {SCHEDULE_DATA.map((item, index) => (
            <View key={item.id} style={styles.scheduleCard}>
              <View style={styles.timeColumn}>
                <Text style={styles.timeText}>{item.time}</Text>
              </View>
              <View style={[
                styles.scheduleContent,
                index === 0 && { borderLeftColor: COLORS.primary },
                index === 1 && { borderLeftColor: '#4ECDC4' },
                index === 2 && { borderLeftColor: '#FFB800' },
              ]}>
                <Text style={styles.scheduleItemTitle}>{item.title}</Text>
                <View style={styles.scheduleMeta}>
                  <View style={styles.scheduleMetaItem}>
                    <Ionicons name="time-outline" size={13} color={COLORS.gray} />
                    <Text style={styles.scheduleMetaText}>{item.duration}</Text>
                  </View>
                  <View style={styles.scheduleMetaItem}>
                    <Ionicons name="flame-outline" size={13} color={COLORS.gray} />
                    <Text style={styles.scheduleMetaText}>{item.calories}</Text>
                  </View>
                </View>
                <View style={styles.scheduleTag}>
                  <Text style={styles.scheduleTagText}>{item.type}</Text>
                </View>
              </View>
            </View>
          ))}
        </View>

        <View style={{ height: 100 }} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 56,
    paddingBottom: 16,
    backgroundColor: COLORS.white,
  },
  backBtn: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: COLORS.lightGray,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 18,
    ...FONTS.bold,
    color: COLORS.black,
  },
  calendar: {
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  monthHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  monthTitle: {
    fontSize: 16,
    ...FONTS.bold,
    color: COLORS.black,
  },
  dayHeaders: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  dayHeader: {
    width: CELL_SIZE,
    textAlign: 'center',
    fontSize: 12,
    color: COLORS.gray,
    ...FONTS.semiBold,
  },
  weekRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 4,
  },
  dayCell: {
    width: CELL_SIZE,
    height: CELL_SIZE,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: CELL_SIZE / 2,
  },
  dayCellSelected: {
    backgroundColor: COLORS.primary,
  },
  dayCellToday: {
    borderWidth: 1.5,
    borderColor: COLORS.primary,
  },
  dayText: {
    fontSize: 14,
    color: COLORS.black,
    ...FONTS.medium,
  },
  dayTextSelected: {
    color: COLORS.white,
    ...FONTS.bold,
  },
  dayTextEmpty: {
    color: 'transparent',
  },
  dayTextHighlight: {
    color: COLORS.primary,
    ...FONTS.bold,
  },
  dayDot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: COLORS.primary,
    marginTop: 2,
    position: 'absolute',
    bottom: 6,
  },
  dayDotSelected: {
    backgroundColor: COLORS.white,
  },
  scheduleSection: {
    paddingHorizontal: 20,
    marginTop: 10,
  },
  scheduleTitle: {
    fontSize: 18,
    ...FONTS.bold,
    color: COLORS.black,
    marginBottom: 16,
  },
  scheduleCard: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  timeColumn: {
    width: 70,
    paddingTop: 12,
  },
  timeText: {
    fontSize: 12,
    color: COLORS.gray,
    ...FONTS.medium,
  },
  scheduleContent: {
    flex: 1,
    backgroundColor: COLORS.lightGray,
    borderRadius: 14,
    padding: 16,
    borderLeftWidth: 4,
    borderLeftColor: COLORS.primary,
  },
  scheduleItemTitle: {
    fontSize: 16,
    ...FONTS.bold,
    color: COLORS.black,
    marginBottom: 8,
  },
  scheduleMeta: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 10,
  },
  scheduleMetaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  scheduleMetaText: {
    fontSize: 12,
    color: COLORS.gray,
    ...FONTS.medium,
  },
  scheduleTag: {
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
    backgroundColor: COLORS.white,
  },
  scheduleTagText: {
    fontSize: 11,
    color: COLORS.darkGray,
    ...FONTS.medium,
  },
});

export default ScheduleScreen;
