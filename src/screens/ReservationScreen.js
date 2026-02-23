import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SIZES, FONTS, SHADOWS } from '../constants';

const ReservationScreen = ({ navigation }) => {
  const [paymentMethod, setPaymentMethod] = useState('visa');

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
        <Text style={styles.headerTitle}>Reservation</Text>
        <View style={{ width: 40 }} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {/* Gym Info */}
        <View style={styles.gymCard}>
          <View style={styles.gymAvatar}>
            <Ionicons name="fitness" size={24} color={COLORS.primary} />
          </View>
          <View style={styles.gymInfo}>
            <Text style={styles.gymName}>Disana Fitness</Text>
            <Text style={styles.gymDate}>Thursday, Dec 17 · 2:00pm</Text>
          </View>
        </View>

        {/* Customer Information */}
        <Text style={styles.sectionTitle}>Customer Information</Text>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Full name</Text>
          <TextInput
            style={styles.input}
            placeholder="Thony Gonzalez"
            placeholderTextColor={COLORS.black}
            editable={false}
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="thonygonzalez@email.com"
            placeholderTextColor={COLORS.black}
            editable={false}
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Phone number</Text>
          <View style={styles.phoneRow}>
            <View style={styles.countryCode}>
              <Text style={styles.countryCodeText}>+1</Text>
              <Ionicons name="chevron-down" size={14} color={COLORS.gray} />
            </View>
            <TextInput
              style={[styles.input, { flex: 1 }]}
              placeholder="557 183 ..."
              placeholderTextColor={COLORS.darkGray}
              editable={false}
            />
          </View>
        </View>

        {/* Payment Method */}
        <Text style={styles.sectionTitle}>Payment method</Text>

        <TouchableOpacity
          style={[styles.paymentOption, paymentMethod === 'visa' && styles.paymentOptionActive]}
          onPress={() => setPaymentMethod('visa')}
        >
          <View style={styles.paymentLeft}>
            <View style={[styles.radio, paymentMethod === 'visa' && styles.radioActive]}>
              {paymentMethod === 'visa' && <View style={styles.radioDot} />}
            </View>
            <View style={styles.visaIcon}>
              <Text style={styles.visaText}>VISA</Text>
            </View>
            <Text style={styles.paymentLabel}>Visa</Text>
          </View>
          <Text style={styles.cardNumber}>•••• 4242</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.paymentOption, paymentMethod === 'mastercard' && styles.paymentOptionActive]}
          onPress={() => setPaymentMethod('mastercard')}
        >
          <View style={styles.paymentLeft}>
            <View style={[styles.radio, paymentMethod === 'mastercard' && styles.radioActive]}>
              {paymentMethod === 'mastercard' && <View style={styles.radioDot} />}
            </View>
            <View style={[styles.visaIcon, { backgroundColor: '#EB001B' }]}>
              <Text style={[styles.visaText, { fontSize: 8 }]}>MC</Text>
            </View>
            <Text style={styles.paymentLabel}>Mastercard</Text>
          </View>
          <Text style={styles.cardNumber}>•••• 8888</Text>
        </TouchableOpacity>

        {/* Total Price */}
        <Text style={styles.sectionTitle}>Total Price</Text>

        <View style={styles.priceRow}>
          <Text style={styles.priceLabel}>Gym x 1 Day</Text>
          <Text style={styles.priceValue}>$25</Text>
        </View>
        <View style={styles.priceRow}>
          <Text style={styles.priceLabel}>Service</Text>
          <Text style={styles.priceValue}>$0</Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.priceRow}>
          <View style={styles.couponRow}>
            <Ionicons name="pricetag-outline" size={16} color={COLORS.primary} />
            <Text style={styles.couponText}>Use coupon</Text>
          </View>
        </View>
        <View style={styles.divider} />
        <View style={styles.priceRow}>
          <Text style={[styles.priceLabel, FONTS.bold, { color: COLORS.black }]}>Total</Text>
          <Text style={[styles.priceValue, FONTS.bold, { fontSize: 18, color: COLORS.primary }]}>$25</Text>
        </View>
      </ScrollView>

      {/* Continue Button */}
      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.continueButton}>
          <Text style={styles.continueText}>Continue</Text>
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
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  gymCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: COLORS.lightGray,
    borderRadius: SIZES.radiusLarge,
    marginBottom: 24,
  },
  gymAvatar: {
    width: 48,
    height: 48,
    borderRadius: 14,
    backgroundColor: COLORS.progressBg,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  gymInfo: {
    flex: 1,
  },
  gymName: {
    fontSize: 16,
    ...FONTS.bold,
    color: COLORS.black,
    marginBottom: 2,
  },
  gymDate: {
    fontSize: 13,
    color: COLORS.gray,
  },
  sectionTitle: {
    fontSize: 16,
    ...FONTS.bold,
    color: COLORS.black,
    marginBottom: 14,
    marginTop: 8,
  },
  formGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 13,
    color: COLORS.gray,
    marginBottom: 6,
    ...FONTS.medium,
  },
  input: {
    height: 48,
    borderRadius: 12,
    backgroundColor: COLORS.lightGray,
    paddingHorizontal: 16,
    fontSize: 15,
    color: COLORS.black,
    ...FONTS.medium,
  },
  phoneRow: {
    flexDirection: 'row',
    gap: 10,
  },
  countryCode: {
    height: 48,
    paddingHorizontal: 14,
    borderRadius: 12,
    backgroundColor: COLORS.lightGray,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  countryCodeText: {
    fontSize: 15,
    ...FONTS.medium,
    color: COLORS.black,
  },
  paymentOption: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 14,
    borderRadius: 12,
    backgroundColor: COLORS.lightGray,
    marginBottom: 10,
  },
  paymentOptionActive: {
    borderWidth: 1.5,
    borderColor: COLORS.primary,
    backgroundColor: COLORS.progressBg,
  },
  paymentLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  radio: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: COLORS.mediumGray,
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioActive: {
    borderColor: COLORS.primary,
  },
  radioDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: COLORS.primary,
  },
  visaIcon: {
    width: 36,
    height: 24,
    borderRadius: 4,
    backgroundColor: '#1A1F71',
    justifyContent: 'center',
    alignItems: 'center',
  },
  visaText: {
    color: COLORS.white,
    fontSize: 10,
    ...FONTS.bold,
  },
  paymentLabel: {
    fontSize: 14,
    ...FONTS.semiBold,
    color: COLORS.black,
  },
  cardNumber: {
    fontSize: 13,
    color: COLORS.gray,
    ...FONTS.medium,
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  priceLabel: {
    fontSize: 14,
    color: COLORS.darkGray,
  },
  priceValue: {
    fontSize: 14,
    color: COLORS.darkGray,
    ...FONTS.semiBold,
  },
  divider: {
    height: 1,
    backgroundColor: COLORS.lightGray,
    marginVertical: 8,
  },
  couponRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  couponText: {
    fontSize: 14,
    color: COLORS.primary,
    ...FONTS.semiBold,
  },
  bottomBar: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    paddingBottom: 36,
    backgroundColor: COLORS.white,
    borderTopWidth: 1,
    borderTopColor: COLORS.lightGray,
  },
  continueButton: {
    height: 54,
    borderRadius: 14,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  continueText: {
    fontSize: 16,
    ...FONTS.bold,
    color: COLORS.white,
  },
});

export default ReservationScreen;
