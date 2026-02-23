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
import { COLORS, SIZES, FONTS, SHADOWS, GYM_DATA } from '../constants';

const { width } = Dimensions.get('window');

const GymDetailScreen = ({ navigation }) => {
  const gym = GYM_DATA;

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Hero Image */}
        <View style={styles.heroContainer}>
          <Image
            source={{ uri: gym.images[0] }}
            style={styles.heroImage}
          />
          <View style={styles.heroOverlay} />
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation?.goBack?.()}
          >
            <Ionicons name="arrow-back" size={22} color={COLORS.white} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.heartButton}>
            <Ionicons name="heart-outline" size={22} color={COLORS.white} />
          </TouchableOpacity>
        </View>

        {/* Content */}
        <View style={styles.content}>
          {/* Rating & Reviews */}
          <View style={styles.ratingRow}>
            <View style={styles.stars}>
              {[1, 2, 3, 4, 5].map((star) => (
                <Ionicons
                  key={star}
                  name={star <= Math.floor(gym.rating) ? 'star' : star - 0.5 <= gym.rating ? 'star-half' : 'star-outline'}
                  size={14}
                  color="#FFB800"
                />
              ))}
            </View>
            <Text style={styles.ratingText}>{gym.rating}</Text>
            <Text style={styles.reviewCount}>({gym.reviews} reviews)</Text>
          </View>

          {/* Gym Name */}
          <Text style={styles.gymName}>{gym.name}</Text>

          {/* Address */}
          <View style={styles.addressRow}>
            <Ionicons name="location-outline" size={16} color={COLORS.gray} />
            <Text style={styles.address}>{gym.address}</Text>
          </View>

          {/* Description */}
          <Text style={styles.description}>
            {gym.description}
            <Text style={styles.readMore}> Read more</Text>
          </Text>

          {/* Amenities */}
          <Text style={styles.amenitiesTitle}>Amenities</Text>
          <View style={styles.amenitiesGrid}>
            {gym.amenities.map((amenity, index) => (
              <View key={index} style={styles.amenityItem}>
                <View style={styles.amenityIcon}>
                  <Ionicons name={amenity.icon} size={20} color={COLORS.primary} />
                </View>
                <Text style={styles.amenityName}>{amenity.name}</Text>
              </View>
            ))}
          </View>

          {/* Gallery */}
          <Text style={styles.galleryTitle}>Gallery</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.gallery}>
            {gym.images.map((img, index) => (
              <Image key={index} source={{ uri: img }} style={styles.galleryImage} />
            ))}
            <View style={styles.galleryMore}>
              <Text style={styles.galleryMoreText}>+5</Text>
            </View>
          </ScrollView>
        </View>
      </ScrollView>

      {/* Bottom Actions */}
      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.mapButton}>
          <Ionicons name="navigate-outline" size={20} color={COLORS.primary} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.scheduleButton}
          onPress={() => navigation?.navigate?.('Schedule')}
        >
          <Text style={styles.scheduleButtonText}>View Schedule</Text>
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
    height: 280,
    position: 'relative',
  },
  heroImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  heroOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.15)',
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
  heartButton: {
    position: 'absolute',
    top: 52,
    right: 20,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    padding: 20,
    marginTop: -20,
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  stars: {
    flexDirection: 'row',
    gap: 2,
  },
  ratingText: {
    fontSize: 14,
    ...FONTS.bold,
    color: COLORS.black,
    marginLeft: 8,
  },
  reviewCount: {
    fontSize: 12,
    color: COLORS.gray,
    marginLeft: 4,
  },
  gymName: {
    fontSize: 24,
    ...FONTS.bold,
    color: COLORS.black,
    marginBottom: 8,
  },
  addressRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  address: {
    fontSize: 13,
    color: COLORS.gray,
    marginLeft: 6,
    flex: 1,
  },
  description: {
    fontSize: 14,
    color: COLORS.darkGray,
    lineHeight: 22,
    marginBottom: 20,
  },
  readMore: {
    color: COLORS.primary,
    ...FONTS.semiBold,
  },
  amenitiesTitle: {
    fontSize: 18,
    ...FONTS.bold,
    color: COLORS.black,
    marginBottom: 14,
  },
  amenitiesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
    marginBottom: 24,
  },
  amenityItem: {
    alignItems: 'center',
    width: (width - 80) / 4,
  },
  amenityIcon: {
    width: 48,
    height: 48,
    borderRadius: 14,
    backgroundColor: COLORS.progressBg,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 6,
  },
  amenityName: {
    fontSize: 11,
    color: COLORS.darkGray,
    ...FONTS.medium,
    textAlign: 'center',
  },
  galleryTitle: {
    fontSize: 18,
    ...FONTS.bold,
    color: COLORS.black,
    marginBottom: 14,
  },
  gallery: {
    marginBottom: 20,
  },
  galleryImage: {
    width: 120,
    height: 90,
    borderRadius: 12,
    marginRight: 10,
  },
  galleryMore: {
    width: 90,
    height: 90,
    borderRadius: 12,
    backgroundColor: COLORS.lightGray,
    justifyContent: 'center',
    alignItems: 'center',
  },
  galleryMoreText: {
    fontSize: 18,
    ...FONTS.bold,
    color: COLORS.gray,
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
  mapButton: {
    width: 50,
    height: 50,
    borderRadius: 14,
    borderWidth: 1.5,
    borderColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scheduleButton: {
    flex: 1,
    height: 50,
    borderRadius: 14,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scheduleButtonText: {
    fontSize: 16,
    ...FONTS.bold,
    color: COLORS.white,
  },
});

export default GymDetailScreen;
