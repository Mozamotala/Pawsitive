import React from "react";
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
import { colors, fonts, radius, shadow } from "../theme";
import { COURSES, money } from "../data/courses";

function CourseRow({ course, onPress }) {
  return (
    <TouchableOpacity style={styles.row} onPress={onPress}>
      <View style={styles.rowDot} />
      <View style={{ flex: 1 }}>
        <Text style={styles.rowName}>{course.name}</Text>
      </View>
      <Text style={styles.rowPrice}>{money(course.price)}</Text>
    </TouchableOpacity>
  );
}

export default function CoursesScreen({ navigation }) {
  const sixMonth = COURSES.filter((c) => c.category === "6-month");
  const sixWeek = COURSES.filter((c) => c.category === "6-week");

  const goToDetail = (course) => navigation.navigate("CourseDetail", { courseId: course.id });

  return (
    <SafeAreaView style={styles.screen} edges={["top"]}>
      <Header navigation={navigation} currentScreen="Courses" />
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.sectionLabel}>Six-Month Programmes</Text>
        {sixMonth.map((c) => (
          <CourseRow key={c.id} course={c} onPress={() => goToDetail(c)} />
        ))}

        <Text style={[styles.sectionLabel, { marginTop: 26 }]}>Six-Week Short Courses</Text>
        {sixWeek.map((c) => (
          <CourseRow key={c.id} course={c} onPress={() => goToDetail(c)} />
        ))}

        <TouchableOpacity style={styles.cta} onPress={() => navigation.navigate("Pricing")}>
          <Text style={styles.ctaText}>Open the Fees Calculator</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.cream },
  content: { padding: 20, paddingBottom: 60 },
  sectionLabel: { fontFamily: fonts.heading, fontSize: 18, fontWeight: "700", color: colors.charcoal, marginBottom: 14 },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    backgroundColor: colors.white,
    borderRadius: radius,
    borderWidth: 1,
    borderColor: colors.powderBlueDark,
    padding: 14,
    marginBottom: 10,
    ...shadow,
  },
  rowDot: { width: 14, height: 14, borderRadius: 7, backgroundColor: colors.powderBlue },
  rowName: { fontFamily: fonts.body, fontSize: 15, fontWeight: "700", color: colors.charcoal },
  rowPrice: { fontFamily: fonts.heading, fontSize: 15, fontWeight: "700", color: colors.tanDark },
  cta: {
    backgroundColor: colors.tan,
    borderRadius: 999,
    paddingVertical: 15,
    alignItems: "center",
    marginTop: 30,
  },
  ctaText: {
    fontFamily: fonts.subheading,
    color: colors.white,
    fontWeight: "700",
    letterSpacing: 0.5,
    textTransform: "uppercase",
    fontSize: 14,
  },
});
