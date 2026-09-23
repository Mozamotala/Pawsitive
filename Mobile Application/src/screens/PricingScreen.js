import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
import { colors, fonts, radius, shadow } from "../theme";
import { COURSES, discountRateFor, money } from "../data/courses";

export default function PricingScreen({ navigation, route }) {
  const [selectedIds, setSelectedIds] = useState([]);
  const [confirmation, setConfirmation] = useState(null);

  // Arrive here from a "Select This Course" button with a course pre-added.
  useEffect(() => {
    const addCourseId = route.params?.addCourseId;
    if (addCourseId) {
      setSelectedIds((prev) => (prev.includes(addCourseId) ? prev : [...prev, addCourseId]));
    }
  }, [route.params?.addCourseId]);

  const toggle = (id) => {
    setConfirmation(null);
    setSelectedIds((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  };

  const selectedCourses = COURSES.filter((c) => selectedIds.includes(c.id));
  const subtotal = selectedCourses.reduce((sum, c) => sum + c.price, 0);
  const rate = discountRateFor(selectedCourses.length);
  const discountAmt = subtotal * rate;
  const total = subtotal - discountAmt;

  const submitQuote = () => {
    if (selectedCourses.length === 0) return;
    const ref = "PPA-" + Math.floor(100000 + Math.random() * 900000);
    setConfirmation({ ref, total });
  };

  return (
    <SafeAreaView style={styles.screen} edges={["top"]}>
      <Header navigation={navigation} currentScreen="Pricing" />
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.eyebrow}>Multi-Course Discount Structure</Text>
        <Text style={styles.h1}>Academy Fees Calculator</Text>
        <Text style={styles.p}>Tap the courses you're interested in — your total updates instantly.</Text>

        <Text style={styles.sectionLabel}>Your Cart</Text>
        {COURSES.map((c) => {
          const checked = selectedIds.includes(c.id);
          return (
            <TouchableOpacity key={c.id} style={styles.courseRow} onPress={() => toggle(c.id)}>
              <View style={[styles.checkbox, checked && styles.checkboxChecked]}>
                {checked && <Text style={styles.checkboxTick}>✓</Text>}
              </View>
              <Text style={styles.courseName}>{c.name}</Text>
              <Text style={styles.coursePrice}>{money(c.price)}</Text>
            </TouchableOpacity>
          );
        })}

        <View style={styles.discountTable}>
          <Text style={styles.discountTitle}>Discounts</Text>
          <View style={styles.discountRow}><Text style={styles.discountLabel}>1 course</Text><Text style={styles.discountValue}>No discount</Text></View>
          <View style={styles.discountRow}><Text style={styles.discountLabel}>2 courses</Text><Text style={styles.discountValue}>5% off</Text></View>
          <View style={styles.discountRow}><Text style={styles.discountLabel}>3 courses</Text><Text style={styles.discountValue}>10% off</Text></View>
          <View style={styles.discountRow}><Text style={styles.discountLabel}>4+ courses</Text><Text style={styles.discountValue}>15% off</Text></View>
        </View>

        <View style={styles.totalsBox}>
          <View style={styles.totalsRow}><Text style={styles.totalsLabel}>Subtotal</Text><Text style={styles.totalsValue}>{money(subtotal)}</Text></View>
          <View style={styles.totalsRow}>
            <Text style={styles.totalsLabel}>Discount</Text>
            <Text style={styles.totalsValue}>{rate > 0 ? `− ${money(discountAmt)} (${Math.round(rate * 100)}%)` : "R0"}</Text>
          </View>
          <View style={[styles.totalsRow, styles.totalsRowFinal]}>
            <Text style={styles.totalsLabelFinal}>Total</Text>
            <Text style={styles.totalsValueFinal}>{money(total)}</Text>
          </View>
        </View>

        <TouchableOpacity
          style={[styles.payBtn, selectedCourses.length === 0 && styles.payBtnDisabled]}
          disabled={selectedCourses.length === 0}
          onPress={submitQuote}
        >
          <Text style={styles.payBtnText}>Get My Quote</Text>
        </TouchableOpacity>
        <Text style={styles.note}>
          This calculates an estimated quote only. Sarah's team will follow up to confirm your
          booking and take payment via card, Apple Pay, Google Pay or EFT.
        </Text>

        {confirmation && (
          <View style={styles.confirmBox}>
            <Text style={styles.confirmTitle}>Quote request received 🐾</Text>
            <Text style={styles.confirmText}>Reference {confirmation.ref}</Text>
            <Text style={styles.confirmText}>Estimated total: {money(confirmation.total)}</Text>
            <Text style={styles.confirmText}>We'll be in touch within 1 business day.</Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.cream },
  content: { padding: 20, paddingBottom: 60 },
  eyebrow: {
    fontFamily: fonts.subheading,
    fontSize: 11,
    letterSpacing: 1.5,
    color: colors.tanDark,
    fontWeight: "700",
    textTransform: "uppercase",
    marginBottom: 6,
  },
  h1: { fontFamily: fonts.heading, fontSize: 22, fontWeight: "700", color: colors.charcoal },
  p: { fontFamily: fonts.body, fontSize: 14, color: colors.charcoalSoft, marginTop: 8, marginBottom: 22, lineHeight: 20 },
  sectionLabel: { fontFamily: fonts.heading, fontSize: 16, fontWeight: "700", color: colors.charcoal, marginBottom: 12 },
  courseRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    backgroundColor: colors.white,
    borderRadius: radius,
    borderWidth: 1,
    borderColor: colors.powderBlueDark,
    padding: 12,
    marginBottom: 8,
  },
  checkbox: {
    width: 22,
    height: 22,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: colors.tan,
    alignItems: "center",
    justifyContent: "center",
  },
  checkboxChecked: { backgroundColor: colors.tan },
  checkboxTick: { color: colors.white, fontWeight: "700", fontSize: 13 },
  courseName: { flex: 1, fontFamily: fonts.body, fontSize: 14, color: colors.charcoal },
  coursePrice: { fontFamily: fonts.heading, fontSize: 14, fontWeight: "700", color: colors.tanDark },
  discountTable: {
    backgroundColor: colors.white,
    borderRadius: radius,
    borderWidth: 1,
    borderColor: colors.powderBlueDark,
    padding: 14,
    marginTop: 18,
  },
  discountTitle: { fontFamily: fonts.heading, fontSize: 14, fontWeight: "700", color: colors.charcoal, marginBottom: 8 },
  discountRow: { flexDirection: "row", justifyContent: "space-between", paddingVertical: 4 },
  discountLabel: { fontFamily: fonts.body, fontSize: 13, color: colors.charcoalSoft },
  discountValue: { fontFamily: fonts.subheading, fontSize: 13, color: colors.tanDark, fontWeight: "700" },
  totalsBox: { backgroundColor: colors.powderBlue, borderRadius: radius, padding: 18, marginTop: 18 },
  totalsRow: { flexDirection: "row", justifyContent: "space-between", paddingVertical: 6 },
  totalsRowFinal: { borderTopWidth: 2, borderTopColor: colors.white, marginTop: 6, paddingTop: 12 },
  totalsLabel: { fontFamily: fonts.subheading, fontSize: 13, color: colors.charcoal },
  totalsValue: { fontFamily: fonts.subheading, fontSize: 13, color: colors.charcoal, fontWeight: "700" },
  totalsLabelFinal: { fontFamily: fonts.heading, fontSize: 17, fontWeight: "700", color: colors.charcoal },
  totalsValueFinal: { fontFamily: fonts.heading, fontSize: 17, fontWeight: "700", color: colors.charcoal },
  payBtn: { backgroundColor: colors.tan, borderRadius: 999, paddingVertical: 16, alignItems: "center", marginTop: 18 },
  payBtnDisabled: { opacity: 0.5 },
  payBtnText: {
    fontFamily: fonts.subheading,
    color: colors.white,
    fontWeight: "700",
    letterSpacing: 0.5,
    textTransform: "uppercase",
    fontSize: 14,
  },
  note: { fontFamily: fonts.body, fontSize: 12, color: colors.charcoalSoft, marginTop: 12, lineHeight: 17 },
  confirmBox: {
    backgroundColor: colors.white,
    borderWidth: 2,
    borderColor: colors.tan,
    borderRadius: radius,
    padding: 18,
    marginTop: 18,
    ...shadow,
  },
  confirmTitle: { fontFamily: fonts.heading, fontSize: 16, fontWeight: "700", color: colors.charcoal, marginBottom: 8 },
  confirmText: { fontFamily: fonts.body, fontSize: 13.5, color: colors.charcoalSoft, marginBottom: 3 },
});
