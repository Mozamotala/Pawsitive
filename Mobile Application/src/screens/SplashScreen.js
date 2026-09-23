import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors, fonts } from "../theme";

export default function SplashScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.cream} />
      <View style={styles.center}>
        <Image source={require("../../assets/logo.png")} style={styles.logo} />
        <Text style={styles.title}>Pawsitive</Text>
        <Text style={styles.subtitle}>PET ACADEMY</Text>
        <Text style={styles.tagline}>KwaZulu-Natal's Premier Force-Free School</Text>
      </View>

      <View style={styles.bottom}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.replace("Home")}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
        <Text style={styles.caption}>Durban, South Africa</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.cream, justifyContent: "space-between" },
  center: { flex: 1, alignItems: "center", justifyContent: "center", paddingHorizontal: 30 },
  logo: { width: 110, height: 110, marginBottom: 18 },
  title: { fontFamily: fonts.heading, fontSize: 30, fontWeight: "700", color: colors.charcoal },
  subtitle: {
    fontFamily: fonts.subheading,
    fontSize: 13,
    letterSpacing: 3,
    color: colors.tanDark,
    marginTop: 2,
    fontWeight: "700",
  },
  tagline: {
    fontFamily: fonts.body,
    fontSize: 15,
    color: colors.charcoalSoft,
    textAlign: "center",
    marginTop: 22,
  },
  bottom: { paddingHorizontal: 30, paddingBottom: 40, alignItems: "center", gap: 12 },
  button: {
    backgroundColor: colors.tan,
    borderRadius: 999,
    paddingVertical: 16,
    alignItems: "center",
    width: "100%",
  },
  buttonText: {
    fontFamily: fonts.subheading,
    color: colors.white,
    fontWeight: "700",
    fontSize: 15,
    letterSpacing: 0.5,
    textTransform: "uppercase",
  },
  caption: { fontFamily: fonts.body, color: colors.charcoalSoft, fontSize: 13 },
});
