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
import { COLORS, SIZES, FONTS, SHADOWS, TRAINERS, WORKOUT_PROGRAMS } from '../constants';

const { width } = Dimensions.get('window');

const TrainerScreen = ({ navigation }) => {
  const trainer = TRAINERS[0];

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Hero */}
        <View style={styles.heroContainer}>
          <Image source={{ uri: trainer.image }} style={styles.heroImage} />
          <View style={styles.heroOverlay} />
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation?.goBack?.()}
          >
            <Ionicons name="arrow-back" size={22} color={COLORS.white} />
          </TouchableOpacity>
        </View>

        {/* Content */}
        <View style={styles.content}>
          <Text style={styles.trainerName}>{trainer.name}</Text>

          {/* Tags */}
          <View style={styles.tags}>
            {trainer.specialties.map((tag, index) => (
              <View key={index} style={styles.tag}>
                <Text style={styles.tagText}>{tag}</Text>
              </View>
            ))}
          </View>

          {/* Stats */}
          <View style={styles.stats}>
            <View style={styles.statItem}>
              <Ionicons name="star" size={18} color="#FFB800" />
              <Text style={styles.statValue}>{trainer.rating}</Text>
              <Text style={styles.statLabel}>Rating</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.statItem}>
              <Ionicons name="book" size={18} color={COLORS.primary} />
              <Text style={styles.statValue}>{trainer.courses}</Text>
              <Text style={styles.statLabel}>Courses</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.statItem}>
              <Ionicons name="people" size={18} color="#4ECDC4" />
              <Text style={styles.statValue}>2.1k</Text>
              <Text style={styles.statLabel}>Students</Text>
            </View>
          </View>

          {/* Bio */}
          <Text style={styles.bio}>
            {trainer.bio}
            <Text style={styles.readMore}> Read more</Text>
          </Text>

          {/* Courses Section */}
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Courses</Text>
            <TouchableOpacity>
              <Text style={styles.seeAll}>See All</Text>
            </TouchableOpacity>
          </View>

          {/* Course Cards */}
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {WORKOUT_PROGRAMS.slice(0, 3).map((course) => (
              <TouchableOpacity key={course.id} style={styles.courseCard}>
                <Image source={{ uri: course.image }} style={styles.courseImage} />
                <View style={styles.courseInfo}>
                  <Text style={styles.courseTitle}>{course.title}</Text>
                  <View style={styles.courseMeta}>
                    <Ionicons name="time-outline" size={12} color={COLORS.gray} />
                    <Text style={styles.courseMetaText}>{course.duration}</Text>
                    <Ionicons name="flame-outline" size={12} color={COLORS.gray} />
                    <Text style={styles.courseMetaText}>{course.calories}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>

          {/* Reviews */}
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Reviews</Text>
            <TouchableOpacity>
              <Text style={styles.seeAll}>See All</Text>
            </TouchableOpacity>
          </View>

          {/* Review Cards */}
          {[1, 2].map((review) => (
            <View key={review} style={styles.reviewCard}>
              <View style={styles.reviewHeader}>
                <Image
                  source={{ uri: `https://i.pravatar.cc/150?img=${review + 10}` }}
                  style={styles.reviewAvatar}
                />
                <View style={styles.reviewInfo}>
                  <Text style={styles.reviewName}>{review === 1 ? 'Emma Wilson' : 'Alex Park'}</Text>
                  <View style={styles.reviewStars}>
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Ionicons key={star} name="star" size={12} color="#FFB800" />
                    ))}
                  </View>
                </View>
                <Text style={styles.reviewDate}>2d ago</Text>
              </View>
              <Text style={styles.reviewText}>
                {review === 1
                  ? 'Amazing trainer! Really knows how to push you to your limits while keeping it fun.'
                  : 'Great sessions, very professional and motivating. Highly recommend!'}
              </Text>
            </View>
          ))}
        </View>

        <View style={{ height: 100 }} />
      </ScrollView>

      {/* Bottom Bar */}
      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.chatButton}>
          <Ionicons name="chatbubble-outline" size={22} color={COLORS.primary} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bookButton}
          onPress={() => navigation?.navigate?.('Reservation')}
        >
          <Text style={styles.bookButtonText}>Book Session</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  heroContainer: {
    height: 320,
    position: 'relative',
  },
  heroImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  heroOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.1)',
  },
  backButton: {
    position: 'absolute',
    top: 52,
    left: 20,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    padding: 20,
    marginTop: -24,
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  trainerName: {
    fontSize: 26,
    ...FONTS.bold,
    color: COLORS.black,
    marginBottom: 10,
  },
  tags: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 20,
  },
  tag: {
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
    backgroundColor: COLORS.lightGray,
  },
  tagText: {
    fontSize: 12,
    color: COLORS.darkGray,
    ...FONTS.medium,
  },
  stats: {
    flexDirection: 'row',
    backgroundColor: COLORS.lightGray,
    borderRadius: 16,
    padding: 18,
    marginBottom: 20,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  statItem: {
    alignItems: 'center',
    gap: 4,
  },
  statValue: {
    fontSize: 18,
    ...FONTS.bold,
    color: COLORS.black,
  },
  statLabel: {
    fontSize: 11,
    color: COLORS.gray,
    ...FONTS.medium,
  },
  statDivider: {
    width: 1,
    height: 40,
    backgroundColor: COLORS.mediumGray,
  },
  bio: {
    fontSize: 14,
    color: COLORS.darkGray,
    lineHeight: 22,
    marginBottom: 24,
  },
  readMore: {
    color: COLORS.primary,
    ...FONTS.semiBold,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
  courseCard: {
    width: 160,
    marginRight: 12,
    borderRadius: 14,
    backgroundColor: COLORS.white,
    ...SHADOWS.medium,
    overflow: 'hidden',
    marginBottom: 20,
  },
  courseImage: {
    width: '100%',
    height: 110,
    resizeMode: 'cover',
  },
  courseInfo: {
    padding: 10,
  },
  courseTitle: {
    fontSize: 14,
    ...FONTS.bold,
    color: COLORS.black,
    marginBottom: 6,
  },
  courseMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  courseMetaText: {
    fontSize: 11,
    color: COLORS.gray,
    ...FONTS.medium,
    marginRight: 8,
  },
  reviewCard: {
    backgroundColor: COLORS.lightGray,
    borderRadius: 14,
    padding: 16,
    marginBottom: 12,
  },
  reviewHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  reviewAvatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginRight: 10,
  },
  reviewInfo: {
    flex: 1,
  },
  reviewName: {
    fontSize: 14,
    ...FONTS.semiBold,
    color: COLORS.black,
    marginBottom: 2,
  },
  reviewStars: {
    flexDirection: 'row',
    gap: 2,
  },
  reviewDate: {
    fontSize: 12,
    color: COLORS.gray,
  },
  reviewText: {
    fontSize: 13,
    color: COLORS.darkGray,
    lineHeight: 20,
  },
  bottomBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    paddingBottom: 36,
    backgroundColor: COLORS.white,
    borderTopWidth: 1,
    borderTopColor: COLORS.lightGray,
    gap: 12,
  },
  chatButton: {
    width: 50,
    height: 50,
    borderRadius: 14,
    borderWidth: 1.5,
    borderColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bookButton: {
    flex: 1,
    height: 50,
    borderRadius: 14,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bookButtonText: {
    fontSize: 16,
    ...FONTS.bold,
    color: COLORS.white,
  },
});

export default TrainerScreen;
