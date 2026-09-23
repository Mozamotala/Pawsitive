import React, { useState } from "react";
import { View, Text, ScrollView, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
import { colors, fonts, radius, shadow } from "../theme";

export default function ContactScreen({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const submit = () => {
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
    const nextErrors = {
      name: name.trim().length === 0,
      email: !emailOk,
      message: message.trim().length === 0,
    };
    setErrors(nextErrors);
    if (nextErrors.name || nextErrors.email || nextErrors.message) {
      setSent(false);
      return;
    }
    setSent(true);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <SafeAreaView style={styles.screen} edges={["top"]}>
      <Header navigation={navigation} currentScreen="Contact" />
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.eyebrow}>Academy Location</Text>
        <Text style={styles.h1}>12 Forest Hills Drive, Durban</Text>
        <View style={styles.mapPlaceholder}>
          <Text style={styles.mapText}>Map — 12 Forest Hills Drive, Durban</Text>
        </View>
        <Text style={styles.contactLine}>+27 31 555 0192</Text>
        <Text style={styles.contactLine}>hello@pawsitivepetacademy.co.za</Text>

        <Text style={[styles.eyebrow, { marginTop: 30 }]}>We'd Love to Hear From You</Text>
        <Text style={styles.h2}>Send Us a Message</Text>

        <View style={styles.field}>
          <Text style={styles.label}>Full Name</Text>
          <TextInput
            style={[styles.input, errors.name && styles.inputError]}
            value={name}
            onChangeText={setName}
            placeholder="e.g. Sipho Ndlovu"
            placeholderTextColor={colors.charcoalSoft}
          />
          {errors.name && <Text style={styles.errorText}>Please enter your name.</Text>}
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>Email Address</Text>
          <TextInput
            style={[styles.input, errors.email && styles.inputError]}
            value={email}
            onChangeText={setEmail}
            placeholder="e.g. you@example.com"
            placeholderTextColor={colors.charcoalSoft}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          {errors.email && <Text style={styles.errorText}>Please enter a valid email address.</Text>}
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>Your Message</Text>
          <TextInput
            style={[styles.input, styles.textarea, errors.message && styles.inputError]}
            value={message}
            onChangeText={setMessage}
            placeholder="How can we help you and your pet?"
            placeholderTextColor={colors.charcoalSoft}
            multiline
            numberOfLines={5}
          />
          {errors.message && <Text style={styles.errorText}>Please enter a message.</Text>}
        </View>

        <TouchableOpacity style={styles.sendBtn} onPress={submit}>
          <Text style={styles.sendBtnText}>Send Message</Text>
        </TouchableOpacity>

        {sent && (
          <View style={styles.confirmBox}>
            <Text style={styles.confirmTitle}>Message sent 🐾</Text>
            <Text style={styles.confirmText}>
              Thanks for reaching out — a member of our team will reply within 1 business day.
            </Text>
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
  h1: { fontFamily: fonts.heading, fontSize: 20, fontWeight: "700", color: colors.charcoal, marginBottom: 14 },
  h2: { fontFamily: fonts.heading, fontSize: 18, fontWeight: "700", color: colors.charcoal, marginBottom: 16 },
  mapPlaceholder: {
    width: "100%",
    aspectRatio: 4 / 3,
    borderRadius: radius,
    backgroundColor: colors.powderBlue,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },
  mapText: { fontFamily: fonts.subheading, fontSize: 12, color: colors.charcoalSoft, paddingHorizontal: 20, textAlign: "center" },
  contactLine: { fontFamily: fonts.body, fontSize: 14, color: colors.charcoalSoft, marginBottom: 2 },
  field: { marginBottom: 16 },
  label: {
    fontFamily: fonts.subheading,
    fontSize: 12,
    fontWeight: "700",
    color: colors.charcoalSoft,
    textTransform: "uppercase",
    letterSpacing: 0.5,
    marginBottom: 6,
  },
  input: {
    borderWidth: 1.5,
    borderColor: colors.powderBlueDark,
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontFamily: fonts.body,
    fontSize: 14,
    color: colors.charcoal,
    backgroundColor: colors.white,
  },
  textarea: { minHeight: 100, textAlignVertical: "top" },
  inputError: { borderColor: colors.error },
  errorText: { color: colors.error, fontSize: 12, marginTop: 4, fontFamily: fonts.body },
  sendBtn: { backgroundColor: colors.tan, borderRadius: 999, paddingVertical: 16, alignItems: "center", marginTop: 6 },
  sendBtnText: {
    fontFamily: fonts.subheading,
    color: colors.white,
    fontWeight: "700",
    letterSpacing: 0.5,
    textTransform: "uppercase",
    fontSize: 14,
  },
  confirmBox: {
    backgroundColor: colors.white,
    borderWidth: 2,
    borderColor: colors.tan,
    borderRadius: radius,
    padding: 18,
    marginTop: 18,
    ...shadow,
  },
  confirmTitle: { fontFamily: fonts.heading, fontSize: 16, fontWeight: "700", color: colors.charcoal, marginBottom: 6 },
  confirmText: { fontFamily: fonts.body, fontSize: 13.5, color: colors.charcoalSoft, lineHeight: 19 },
});
