import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Modal, Pressable, Image } from "react-native";
import { colors, fonts } from "../theme";

const NAV_ITEMS = [
  { label: "Home", screen: "Home" },
  { label: "About", screen: "About" },
  { label: "Courses", screen: "Courses" },
  { label: "Pricing", screen: "Pricing" },
  { label: "Contact", screen: "Contact" },
];

/**
 * Shared header used on every screen: logo + wordmark on the left, a
 * burger button on the right that opens a drop-down nav menu — mirroring
 * the mobile navigation pattern chosen in Phase G (Research Topic 5) of
 * the group's workbook (a fixed header with a burger/drop-down menu,
 * rather than a hamburger hidden behind extra taps).
 */
export default function Header({ navigation, currentScreen, showBack = false }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <View style={styles.wrap}>
      {showBack ? (
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn} hitSlop={10}>
          <Text style={styles.backArrow}>‹</Text>
        </TouchableOpacity>
      ) : (
        <View style={styles.brand}>
          <Image source={require("../../assets/logo.png")} style={styles.logo} />
          <Text style={styles.brandText}>Pawsitive</Text>
        </View>
      )}

      <TouchableOpacity
        style={styles.burger}
        onPress={() => setMenuOpen(true)}
        accessibilityLabel="Open navigation menu"
        hitSlop={10}
      >
        <View style={styles.burgerLine} />
        <View style={styles.burgerLine} />
        <View style={styles.burgerLine} />
      </TouchableOpacity>

      <Modal visible={menuOpen} transparent animationType="fade" onRequestClose={() => setMenuOpen(false)}>
        <Pressable style={styles.backdrop} onPress={() => setMenuOpen(false)}>
          <View style={styles.menuCard}>
            {NAV_ITEMS.map((item) => (
              <TouchableOpacity
                key={item.screen}
                style={[styles.menuItem, currentScreen === item.screen && styles.menuItemActive]}
                onPress={() => {
                  setMenuOpen(false);
                  navigation.navigate(item.screen);
                }}
              >
                <Text
                  style={[
                    styles.menuItemText,
                    currentScreen === item.screen && styles.menuItemTextActive,
                  ]}
                >
                  {item.label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </Pressable>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 14,
    paddingBottom: 14,
    backgroundColor: colors.cream,
    borderBottomWidth: 1,
    borderBottomColor: colors.powderBlueDark,
  },
  brand: { flexDirection: "row", alignItems: "center", gap: 8 },
  logo: { width: 32, height: 32, borderRadius: 16 },
  brandText: { fontFamily: fonts.heading, fontSize: 18, fontWeight: "700", color: colors.charcoal },
  backBtn: { width: 32, height: 32, alignItems: "center", justifyContent: "center" },
  backArrow: { fontSize: 28, color: colors.tanDark, marginTop: -4 },
  burger: {
    width: 40,
    height: 36,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: colors.tan,
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
  },
  burgerLine: { width: 18, height: 2, backgroundColor: colors.tanDark, borderRadius: 1 },
  backdrop: { flex: 1, backgroundColor: "rgba(74,59,42,0.35)", paddingTop: 70, paddingHorizontal: 20 },
  menuCard: {
    backgroundColor: colors.white,
    borderRadius: 14,
    paddingVertical: 8,
    shadowColor: colors.charcoal,
    shadowOpacity: 0.2,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
    elevation: 6,
    alignSelf: "flex-end",
    minWidth: 190,
  },
  menuItem: { paddingVertical: 12, paddingHorizontal: 18 },
  menuItemActive: { backgroundColor: colors.creamDark },
  menuItemText: {
    fontFamily: fonts.subheading,
    fontSize: 15,
    fontWeight: "700",
    color: colors.charcoalSoft,
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  menuItemTextActive: { color: colors.tanDark },
});
