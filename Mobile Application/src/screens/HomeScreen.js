import React from "react";
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
import { colors, fonts, radius, shadow } from "../theme";

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.screen} edges={["top"]}>
      <Header navigation={navigation} currentScreen="Home" />
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.eyebrow}>KwaZulu-Natal's Force-Free School</Text>
        <Text style={styles.h1}>Nurturing Happy, Well-Behaved Companions</Text>
        <Text style={styles.p}>
          Structured six-month programmes and focused six-week short courses, taught by
          dedicated KZN professionals using gentle, positive-reinforcement methods.
        </Text>

        <TouchableOpacity style={styles.cta} onPress={() => navigation.navigate("Pricing")}>
          <Text style={styles.ctaText}>Enrol Today</Text>
        </TouchableOpacity>

        <Text style={[styles.sectionLabel, { marginTop: 34 }]}>Explore Our Pathways</Text>

        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate("Courses", { filter: "6-month" })}
        >
          <View style={styles.iconDot}><Text style={{ fontSize: 18 }}>📘</Text></View>
          <View style={{ flex: 1 }}>
            <Text style={styles.cardTitle}>6-Month Programmes</Text>
            <Text style={styles.cardBody}>In-depth training in obedience, grooming & behaviour.</Text>
            <Text style={styles.cardLink}>VIEW MORE →</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate("Courses", { filter: "6-week" })}
        >
          <View style={styles.iconDot}><Text style={{ fontSize: 18 }}>🐾</Text></View>
          <View style={{ flex: 1 }}>
            <Text style={styles.cardTitle}>6-Week Short Courses</Text>
            <Text style={styles.cardBody}>Focused courses for puppy care, first-aid & walking.</Text>
            <Text style={styles.cardLink}>VIEW MORE →</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("About")}>
          <View style={styles.iconDot}><Text style={{ fontSize: 18 }}>⭐</Text></View>
          <View style={{ flex: 1 }}>
            <Text style={styles.cardTitle}>Reviews & Accreditations</Text>
            <Text style={styles.cardBody}>Trusted by families, schools & corporate clients.</Text>
            <Text style={styles.cardLink}>READ MORE →</Text>
          </View>
        </TouchableOpacity>
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
  h1: { fontFamily: fonts.heading, fontSize: 26, fontWeight: "700", color: colors.charcoal, lineHeight: 32 },
  p: { fontFamily: fonts.body, fontSize: 15, color: colors.charcoalSoft, marginTop: 14, lineHeight: 22 },
  cta: {
    backgroundColor: colors.tan,
    borderRadius: 999,
    paddingVertical: 14,
    alignItems: "center",
    marginTop: 22,
  },
  ctaText: {
    fontFamily: fonts.subheading,
    color: colors.white,
    fontWeight: "700",
    letterSpacing: 0.5,
    textTransform: "uppercase",
    fontSize: 14,
  },
  sectionLabel: { fontFamily: fonts.heading, fontSize: 18, fontWeight: "700", color: colors.charcoal, marginBottom: 14 },
  card: {
    flexDirection: "row",
    gap: 14,
    backgroundColor: colors.white,
    borderRadius: radius,
    borderWidth: 1,
    borderColor: colors.powderBlueDark,
    padding: 16,
    marginBottom: 14,
    alignItems: "flex-start",
    ...shadow,
  },
  iconDot: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: colors.powderBlue,
    alignItems: "center",
    justifyContent: "center",
  },
  cardTitle: { fontFamily: fonts.heading, fontSize: 16, fontWeight: "700", color: colors.charcoal, marginBottom: 4 },
  cardBody: { fontFamily: fonts.body, fontSize: 13.5, color: colors.charcoalSoft, marginBottom: 8, lineHeight: 19 },
  cardLink: {
    fontFamily: fonts.subheading,
    fontSize: 12,
    fontWeight: "700",
    color: colors.tanDark,
    letterSpacing: 0.5,
  },
});
