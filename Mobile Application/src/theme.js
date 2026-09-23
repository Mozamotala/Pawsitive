// Pawsitive Pet Academy — shared design tokens for the mobile app.
// Mirrors the palette and font roles finalised in Phase F / Phase J of the
// group's Task 1 workbook: Cream (primary), Powder Blue (secondary), Tan (accent).
import { Platform } from "react-native";

export const colors = {
  cream: "#FFFDD0",
  creamDark: "#F5EFB8",
  powderBlue: "#B0E0E6",
  powderBlueDark: "#93C9D1",
  tan: "#C68B59",
  tanDark: "#A96F41",
  charcoal: "#4A3B2A",
  charcoalSoft: "#6B5A45",
  white: "#FFFFFF",
  error: "#C25A4A",
};

// Native devices don't ship "Book Antiqua" / "Arial Narrow" / "Calibri", so
// we map each brand font role to the closest built-in system font per
// platform, keeping the same visual roles used on the website (serif
// heading / condensed sans sub-heading / clean sans body).
export const fonts = {
  heading: Platform.select({ ios: "Georgia", android: "serif", default: "Georgia" }),
  subheading: Platform.select({ ios: "Arial", android: "sans-serif-condensed", default: "Arial" }),
  body: Platform.select({ ios: "Helvetica", android: "sans-serif", default: "System" }),
};

export const radius = 16;

export const shadow = {
  shadowColor: colors.charcoal,
  shadowOpacity: 0.12,
  shadowRadius: 10,
  shadowOffset: { width: 0, height: 4 },
  elevation: 3,
};
