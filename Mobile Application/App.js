import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";

import SplashScreen from "./src/screens/SplashScreen";
import HomeScreen from "./src/screens/HomeScreen";
import AboutScreen from "./src/screens/AboutScreen";
import CoursesScreen from "./src/screens/CoursesScreen";
import CourseDetailScreen from "./src/screens/CourseDetailScreen";
import PricingScreen from "./src/screens/PricingScreen";
import ContactScreen from "./src/screens/ContactScreen";
import { colors } from "./src/theme";

const Stack = createNativeStackNavigator();

// Mobile navigation mirrors the website's five sections (Home, About,
// Courses, Pricing, Contact) but adapts them for a small screen using a
// fixed header + burger/drop-down menu (see src/components/Header.js),
// per Phase G / Phase J of the group's Task 1 workbook. CourseDetail is
// pushed on top of the stack rather than living in the main menu, matching
// the "Individual Detail Page" wireframe.
export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Splash"
          screenOptions={{ headerShown: false, contentStyle: { backgroundColor: colors.cream } }}
        >
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="About" component={AboutScreen} />
          <Stack.Screen name="Courses" component={CoursesScreen} />
          <Stack.Screen name="CourseDetail" component={CourseDetailScreen} />
          <Stack.Screen name="Pricing" component={PricingScreen} />
          <Stack.Screen name="Contact" component={ContactScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
