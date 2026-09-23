import React from "react";
import { View, Text, ScrollView, Image, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
import { colors, fonts, radius, shadow } from "../theme";
import { TEAM } from "../data/courses";

export default function AboutScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.screen} edges={["top"]}>
      <Header navigation={navigation} currentScreen="About" />
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.eyebrow}>Our Story & Philosophy</Text>
        <Text style={styles.h1}>Meet Our Founder & Our Purpose</Text>

        <View style={styles.founderRow}>
          <Image source={require("../../assets/founder.png")} style={styles.avatarLg} />
          <View style={{ flex: 1 }}>
            <Text style={styles.founderName}>Dr. Sarah Naidoo</Text>
            <Text style={styles.founderRole}>FOUNDER</Text>
          </View>
        </View>

        <View style={styles.block}>
          <Text style={styles.h3}>Our Mission</Text>
          <Text style={styles.p}>
            To equip pet owners with practical, compassionate training and care skills
            through structured, expertly taught programmes.
          </Text>
        </View>

        <View style={styles.block}>
          <Text style={styles.h3}>Our Vision</Text>
          <Text style={styles.p}>
            A KwaZulu-Natal where every pet is confidently, kindly and safely cared for at home.
          </Text>
        </View>

        <Text style={[styles.sectionLabel, { marginTop: 30 }]}>Dedicated KZN Professionals</Text>
        <View style={styles.teamRow}>
          {TEAM.map((member) => (
            <View key={member.name} style={styles.teamCard}>
              <View style={styles.avatarSm} />
              <Text style={styles.teamName}>{member.name}</Text>
              <Text style={styles.teamRole}>{member.role}</Text>
            </View>
          ))}
        </View>
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
  h1: { fontFamily: fonts.heading, fontSize: 24, fontWeight: "700", color: colors.charcoal, marginBottom: 20 },
  h3: { fontFamily: fonts.heading, fontSize: 16, fontWeight: "700", color: colors.charcoal, marginBottom: 6 },
  p: { fontFamily: fonts.body, fontSize: 14.5, color: colors.charcoalSoft, lineHeight: 21 },
  founderRow: {
    flexDirection: "row",
    gap: 14,
    alignItems: "center",
    backgroundColor: colors.white,
    borderRadius: radius,
    borderWidth: 1,
    borderColor: colors.powderBlueDark,
    padding: 14,
    marginBottom: 22,
    ...shadow,
  },
  avatarLg: { width: 64, height: 64, borderRadius: 32, backgroundColor: colors.powderBlue },
  founderName: { fontFamily: fonts.heading, fontSize: 16, fontWeight: "700", color: colors.charcoal },
  founderRole: {
    fontFamily: fonts.subheading,
    fontSize: 11,
    color: colors.tanDark,
    letterSpacing: 1,
    fontWeight: "700",
    marginTop: 2,
  },
  block: { marginBottom: 18 },
  sectionLabel: { fontFamily: fonts.heading, fontSize: 18, fontWeight: "700", color: colors.charcoal, marginBottom: 14 },
  teamRow: { flexDirection: "row", flexWrap: "wrap", gap: 12 },
  teamCard: {
    width: "31%",
    backgroundColor: colors.white,
    borderRadius: radius,
    borderWidth: 1,
    borderColor: colors.powderBlueDark,
    padding: 10,
    alignItems: "center",
    ...shadow,
  },
  avatarSm: { width: "100%", aspectRatio: 1, borderRadius: 10, backgroundColor: colors.powderBlue, marginBottom: 8 },
  teamName: { fontFamily: fonts.body, fontSize: 12, fontWeight: "700", color: colors.charcoal, textAlign: "center" },
  teamRole: { fontFamily: fonts.subheading, fontSize: 10, color: colors.charcoalSoft, textAlign: "center", marginTop: 2 },
});
