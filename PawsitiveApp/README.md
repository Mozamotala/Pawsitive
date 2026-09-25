# Pawsitive Pet Academy — Android app

Native Android app (Kotlin, no WebView) for the Pawsitive Pet Academy
XHAW5112 site. Each screen is a Fragment swapped into a single
container behind a bottom navigation bar (Home, Courses, Fees, Contact)
plus an overflow menu item (About Us), matching the group website's
page structure.

## Screens

| Screen | Fragment | Layout |
|---|---|---|
| Home | `HomeFragment.kt` | `fragment_home.xml` |
| About Us | `AboutFragment.kt` | `fragment_about.xml` |
| Courses | `CoursesFragment.kt` | `fragment_courses.xml` |
| Course Details | `CourseDetailFragment.kt` | `fragment_course_detail.xml` |
| Pricing + Fees Calculator | `CalculatorFragment.kt` | `fragment_calculator.xml` |
| Contact Us | `ContactFragment.kt` | `fragment_contact.xml` |

Shared course data and pricing logic live in
`app/src/main/java/.../model/Course.kt`.

## How to open it

1. Open Android Studio → **File > Open** → select this `PawsitiveApp` folder.
2. Let Gradle sync (first sync needs internet to fetch dependencies).
3. Press the green **Run ▶** button with an emulator or a physical device
   connected.

## Customizing

- **App name**: `app/src/main/res/values/strings.xml`
- **Package/application ID**: `com.zentrix.pawsitiveacademy`, set in
  `app/build.gradle` (`applicationId`).
- **Brand colors**: `app/src/main/res/values/colors.xml`.
- **Course data / pricing rules**: `app/src/main/java/.../model/Course.kt`.

## Building a signed APK / AAB for the Play Store

Use **Build > Generate Signed Bundle / APK** in Android Studio once you're
ready to distribute it.
