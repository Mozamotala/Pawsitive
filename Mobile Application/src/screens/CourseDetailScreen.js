import React from "react";
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
import { colors, fonts, radius } from "../theme";
import { COURSES, money } from "../data/courses";

export default function CourseDetailScreen({ navigation, route }) {
  const { courseId } = route.params || {};
  const course = COURSES.find((c) => c.id === courseId) || COURSES[0];

  return (
    <SafeAreaView style={styles.screen} edges={["top"]}>
      <Header navigation={navigation} currentScreen="CourseDetail" showBack />
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.media} />
        <Text style={styles.eyebrow}>{course.categoryLabel}</Text>
        <Text style={styles.h1}>{course.name}</Text>

        <View style={styles.pillRow}>
          <View style={styles.pill}><Text style={styles.pillText}>{course.duration}</Text></View>
          <View style={styles.pill}><Text style={styles.pillText}>{money(course.price)}</Text></View>
        </View>

        <Text style={styles.tagline}>{course.tagline}</Text>
        <Text style={styles.p}>{course.description}</Text>

        <View style={styles.list}>
          {course.bullets.map((b) => (
            <View key={b} style={styles.listItem}>
              <Text style={styles.check}>✓</Text>
              <Text style={styles.listText}>{b}</Text>
            </View>
          ))}
        </View>

        <TouchableOpacity
          style={styles.cta}
          onPress={() => navigation.navigate("Pricing", { addCourseId: course.id })}
        >
          <Text style={styles.ctaText}>Select This Course — {money(course.price)}</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.cream },
  content: { padding: 20, paddingBottom: 60 },
  media: { width: "100%", aspectRatio: 4 / 3, borderRadius: radius, backgroundColor: colors.powderBlue, marginBottom: 18 },
  eyebrow: {
    fontFamily: fonts.subheading,
    fontSize: 11,
    letterSpacing: 1.5,
    color: colors.tanDark,
    fontWeight: "700",
    textTransform: "uppercase",
    marginBottom: 6,
  },
  h1: { fontFamily: fonts.heading, fontSize: 22, fontWeight: "700", color: colors.charcoal, marginBottom: 10 },
  pillRow: { flexDirection: "row", gap: 8, marginBottom: 14 },
  pill: { backgroundColor: colors.creamDark, borderRadius: 999, paddingVertical: 6, paddingHorizontal: 14 },
  pillText: { fontFamily: fonts.subheading, fontSize: 12, fontWeight: "700", color: colors.tanDark },
  tagline: { fontFamily: fonts.body, fontSize: 15, fontWeight: "700", color: colors.charcoal, marginBottom: 8 },
  p: { fontFamily: fonts.body, fontSize: 14.5, color: colors.charcoalSoft, lineHeight: 21, marginBottom: 16 },
  list: { marginBottom: 24 },
  listItem: { flexDirection: "row", gap: 8, marginBottom: 10, alignItems: "flex-start" },
  check: { color: colors.tanDark, fontWeight: "700" },
  listText: { fontFamily: fonts.body, fontSize: 14, color: colors.charcoalSoft, flex: 1, lineHeight: 20 },
  cta: { backgroundColor: colors.tan, borderRadius: 999, paddingVertical: 16, alignItems: "center" },
  ctaText: {
    fontFamily: fonts.subheading,
    color: colors.white,
    fontWeight: "700",
    letterSpacing: 0.5,
    textTransform: "uppercase",
    fontSize: 13.5,
  },
});
