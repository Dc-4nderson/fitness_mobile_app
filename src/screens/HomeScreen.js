import React, { useState } from 'react';
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
import { COLORS, SIZES, FONTS, SHADOWS, WORKOUT_PROGRAMS, CATEGORIES } from '../constants';

const { width } = Dimensions.get('window');

const HomeScreen = ({ navigation }) => {
  const [selectedCategory, setSelectedCategory] = useState('All Type');

  const renderChallengeCard = () => (
    <View style={styles.challengeCard}>
      <View style={styles.challengeContent}>
        <Text style={styles.challengeLabel}>Today's Challenge</Text>
        <Text style={styles.challengeTitle}>5 km Run</Text>
        <View style={styles.challengeProgress}>
          <View style={styles.progressCircle}>
            <View style={styles.progressInner}>
              <Text style={styles.progressText}>16/20</Text>
            </View>
            <View style={[styles.progressArc, { transform: [{ rotate: '-45deg' }] }]} />
          </View>
        </View>
      </View>
      <View style={styles.challengeActions}>
        <TouchableOpacity style={styles.playButton}>
          <Ionicons name="play" size={16} color={COLORS.white} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="ellipsis-horizontal" size={20} color={COLORS.white} />
        </TouchableOpacity>
      </View>
    </View>
  );

  const renderCategoryItem = (category) => (
    <TouchableOpacity
      key={category}
      style={[
        styles.categoryChip,
        selectedCategory === category && styles.categoryChipActive,
      ]}
      onPress={() => setSelectedCategory(category)}
    >
      <Text
        style={[
          styles.categoryText,
          selectedCategory === category && styles.categoryTextActive,
        ]}
      >
        {category}
      </Text>
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80' }}
            style={styles.avatar}
          />
          <View style={styles.headerTextContainer}>
            <Text style={styles.greeting}>Hello Thony,</Text>
            <Text style={styles.subtitle}>Ready to workout?</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.searchButton}>
          <Ionicons name="search" size={22} color={COLORS.black} />
        </TouchableOpacity>
      </View>

      {/* Today's Challenge */}
      {renderChallengeCard()}

      {/* Workout Programs */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Workout Programs</Text>
        <TouchableOpacity>
          <Text style={styles.viewAll}>View All</Text>
        </TouchableOpacity>
      </View>

      {/* Categories */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.categoriesScroll}
        contentContainerStyle={styles.categoriesContainer}
      >
        {CATEGORIES.map(renderCategoryItem)}
      </ScrollView>

      {/* Workout Cards */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.workoutList}
      >
        {WORKOUT_PROGRAMS.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.workoutCard}
            onPress={() => navigation?.navigate?.('GymDetail')}
            activeOpacity={0.8}
          >
            <Image source={{ uri: item.image }} style={styles.workoutImage} />
            <View style={styles.workoutOverlay}>
              <Text style={styles.workoutTitle}>{item.title}</Text>
              <View style={styles.workoutMeta}>
                <View style={styles.metaItem}>
                  <Ionicons name="time-outline" size={12} color={COLORS.white} />
                  <Text style={styles.metaText}>{item.duration}</Text>
                </View>
                <View style={styles.metaItem}>
                  <Ionicons name="flame-outline" size={12} color={COLORS.white} />
                  <Text style={styles.metaText}>{item.calories}</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

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
    paddingBottom: 20,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 12,
  },
  headerTextContainer: {
    justifyContent: 'center',
  },
  greeting: {
    fontSize: 22,
    ...FONTS.bold,
    color: COLORS.black,
  },
  subtitle: {
    fontSize: 14,
    color: COLORS.gray,
    marginTop: 2,
  },
  searchButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
    ...SHADOWS.small,
  },
  challengeCard: {
    marginHorizontal: 20,
    borderRadius: SIZES.radiusLarge,
    backgroundColor: COLORS.primary,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  challengeContent: {
    flex: 1,
  },
  challengeLabel: {
    fontSize: 12,
    color: 'rgba(255,255,255,0.8)',
    ...FONTS.medium,
    marginBottom: 4,
  },
  challengeTitle: {
    fontSize: 20,
    ...FONTS.bold,
    color: COLORS.white,
    marginBottom: 8,
  },
  challengeProgress: {
    marginTop: 4,
  },
  progressCircle: {
    width: 56,
    height: 56,
    borderRadius: 28,
    borderWidth: 4,
    borderColor: 'rgba(255,255,255,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  progressInner: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressText: {
    fontSize: 13,
    ...FONTS.bold,
    color: COLORS.white,
  },
  progressArc: {
    position: 'absolute',
    width: 56,
    height: 56,
    borderRadius: 28,
    borderWidth: 4,
    borderColor: COLORS.white,
    borderTopColor: 'transparent',
    borderRightColor: 'transparent',
  },
  challengeActions: {
    alignItems: 'center',
    gap: 16,
  },
  playButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(255,255,255,0.25)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 18,
    ...FONTS.bold,
    color: COLORS.black,
  },
  viewAll: {
    fontSize: 14,
    color: COLORS.primary,
    ...FONTS.semiBold,
  },
  categoriesScroll: {
    marginBottom: 16,
  },
  categoriesContainer: {
    paddingHorizontal: 20,
    gap: 8,
  },
  categoryChip: {
    paddingHorizontal: 18,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: COLORS.white,
    marginRight: 8,
    ...SHADOWS.small,
  },
  categoryChipActive: {
    backgroundColor: COLORS.primary,
  },
  categoryText: {
    fontSize: 13,
    ...FONTS.medium,
    color: COLORS.darkGray,
  },
  categoryTextActive: {
    color: COLORS.white,
  },
  workoutList: {
    paddingHorizontal: 20,
    gap: 14,
    paddingBottom: 8,
  },
  workoutCard: {
    width: (width - 54) / 2,
    height: 200,
    borderRadius: SIZES.radiusLarge,
    overflow: 'hidden',
    marginRight: 14,
    ...SHADOWS.medium,
  },
  workoutImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  workoutOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 12,
    backgroundColor: 'rgba(0,0,0,0.35)',
  },
  workoutTitle: {
    fontSize: 16,
    ...FONTS.bold,
    color: COLORS.white,
    marginBottom: 6,
  },
  workoutMeta: {
    flexDirection: 'row',
    gap: 12,
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  metaText: {
    fontSize: 11,
    color: COLORS.white,
    ...FONTS.medium,
  },
  workoutPrice: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'rgba(255,255,255,0.9)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    alignItems: 'center',
  },
  priceLabel: {
    fontSize: 8,
    color: COLORS.gray,
  },
  priceText: {
    fontSize: 12,
    ...FONTS.bold,
    color: COLORS.primary,
  },
  sessionText: {
    fontSize: 8,
    color: COLORS.gray,
  },
});

export default HomeScreen;
