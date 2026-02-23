import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
  Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SIZES, FONTS, SHADOWS, TRAINERS, WORKOUT_PROGRAMS, PLACEHOLDER_IMAGES } from '../constants';

const { width } = Dimensions.get('window');

const ExploreScreen = ({ navigation }) => {
  const [searchText, setSearchText] = useState('');

  const popularGyms = [
    {
      id: '1',
      name: 'Disana Fitness',
      location: 'New York, USA',
      rating: 4.5,
      image: PLACEHOLDER_IMAGES.gym,
      distance: '2.5 km',
    },
    {
      id: '2',
      name: 'Elite Gym',
      location: 'Brooklyn, USA',
      rating: 4.8,
      image: PLACEHOLDER_IMAGES.gymInterior,
      distance: '3.1 km',
    },
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Explore</Text>
        <TouchableOpacity style={styles.filterButton}>
          <Ionicons name="options-outline" size={22} color={COLORS.black} />
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View style={styles.searchBar}>
        <Ionicons name="search" size={20} color={COLORS.gray} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search gym, trainer, workout..."
          placeholderTextColor={COLORS.gray}
          value={searchText}
          onChangeText={setSearchText}
        />
        <TouchableOpacity>
          <Ionicons name="mic-outline" size={20} color={COLORS.gray} />
        </TouchableOpacity>
      </View>

      {/* Popular Nearby */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Popular Nearby</Text>
        <TouchableOpacity>
          <Text style={styles.seeAll}>See All</Text>
        </TouchableOpacity>
      </View>

      {popularGyms.map((gym) => (
        <TouchableOpacity
          key={gym.id}
          style={styles.gymCard}
          onPress={() => navigation?.navigate?.('GymDetail')}
          activeOpacity={0.8}
        >
          <Image source={{ uri: gym.image }} style={styles.gymImage} />
          <View style={styles.gymInfo}>
            <Text style={styles.gymName}>{gym.name}</Text>
            <View style={styles.gymLocation}>
              <Ionicons name="location-outline" size={13} color={COLORS.gray} />
              <Text style={styles.gymLocationText}>{gym.location}</Text>
            </View>
            <View style={styles.gymMeta}>
              <View style={styles.ratingBadge}>
                <Ionicons name="star" size={12} color="#FFB800" />
                <Text style={styles.ratingText}>{gym.rating}</Text>
              </View>
              <Text style={styles.distanceText}>{gym.distance}</Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}

      {/* Top Trainers */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Top Trainers</Text>
        <TouchableOpacity>
          <Text style={styles.seeAll}>See All</Text>
        </TouchableOpacity>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.trainersList}>
        {TRAINERS.map((trainer) => (
          <TouchableOpacity
            key={trainer.id}
            style={styles.trainerCard}
            onPress={() => navigation?.navigate?.('Trainer')}
          >
            <Image source={{ uri: trainer.image }} style={styles.trainerImage} />
            <Text style={styles.trainerName}>{trainer.name}</Text>
            <Text style={styles.trainerSpecialty}>{trainer.specialties[0]}</Text>
            <View style={styles.trainerRating}>
              <Ionicons name="star" size={12} color="#FFB800" />
              <Text style={styles.trainerRatingText}>{trainer.rating}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Trending Workouts */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Trending Workouts</Text>
        <TouchableOpacity>
          <Text style={styles.seeAll}>See All</Text>
        </TouchableOpacity>
      </View>

      {WORKOUT_PROGRAMS.map((workout) => (
        <TouchableOpacity key={workout.id} style={styles.trendingCard}>
          <Image source={{ uri: workout.image }} style={styles.trendingImage} />
          <View style={styles.trendingInfo}>
            <Text style={styles.trendingTitle}>{workout.title}</Text>
            <View style={styles.trendingMeta}>
              <Ionicons name="time-outline" size={13} color={COLORS.gray} />
              <Text style={styles.trendingMetaText}>{workout.duration}</Text>
              <Ionicons name="flame-outline" size={13} color={COLORS.gray} />
              <Text style={styles.trendingMetaText}>{workout.calories}</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.trendingAction}>
            <Ionicons name="play-circle" size={36} color={COLORS.primary} />
          </TouchableOpacity>
        </TouchableOpacity>
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
  filterButton: {
    width: 44,
    height: 44,
    borderRadius: 14,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
    ...SHADOWS.small,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    paddingHorizontal: 16,
    height: 48,
    borderRadius: 14,
    backgroundColor: COLORS.white,
    marginBottom: 24,
    ...SHADOWS.small,
    gap: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: COLORS.black,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 14,
    marginTop: 8,
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
  gymCard: {
    flexDirection: 'row',
    marginHorizontal: 20,
    backgroundColor: COLORS.white,
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 14,
    ...SHADOWS.medium,
  },
  gymImage: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
  },
  gymInfo: {
    flex: 1,
    padding: 12,
    justifyContent: 'center',
  },
  gymName: {
    fontSize: 16,
    ...FONTS.bold,
    color: COLORS.black,
    marginBottom: 4,
  },
  gymLocation: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginBottom: 8,
  },
  gymLocationText: {
    fontSize: 12,
    color: COLORS.gray,
  },
  gymMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  ratingBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 8,
    backgroundColor: '#FFF8E1',
  },
  ratingText: {
    fontSize: 12,
    ...FONTS.bold,
    color: COLORS.black,
  },
  distanceText: {
    fontSize: 12,
    color: COLORS.gray,
    ...FONTS.medium,
  },
  trainersList: {
    paddingHorizontal: 20,
    gap: 14,
    paddingBottom: 8,
  },
  trainerCard: {
    width: 130,
    backgroundColor: COLORS.white,
    borderRadius: 16,
    overflow: 'hidden',
    ...SHADOWS.medium,
    marginRight: 14,
    alignItems: 'center',
    paddingBottom: 12,
  },
  trainerImage: {
    width: '100%',
    height: 120,
    resizeMode: 'cover',
    marginBottom: 10,
  },
  trainerName: {
    fontSize: 14,
    ...FONTS.bold,
    color: COLORS.black,
    marginBottom: 2,
  },
  trainerSpecialty: {
    fontSize: 11,
    color: COLORS.gray,
    ...FONTS.medium,
    marginBottom: 6,
  },
  trainerRating: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  trainerRatingText: {
    fontSize: 12,
    ...FONTS.bold,
    color: COLORS.black,
  },
  trendingCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    backgroundColor: COLORS.white,
    borderRadius: 14,
    padding: 10,
    marginBottom: 12,
    ...SHADOWS.small,
  },
  trendingImage: {
    width: 60,
    height: 60,
    borderRadius: 12,
    marginRight: 12,
  },
  trendingInfo: {
    flex: 1,
  },
  trendingTitle: {
    fontSize: 15,
    ...FONTS.bold,
    color: COLORS.black,
    marginBottom: 6,
  },
  trendingMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  trendingMetaText: {
    fontSize: 12,
    color: COLORS.gray,
    ...FONTS.medium,
    marginRight: 8,
  },
  trendingAction: {
    padding: 4,
  },
});

export default ExploreScreen;
