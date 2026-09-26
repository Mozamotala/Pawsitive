# Pawsitive Pet Academy — Android app

Native Android app (Kotlin, no WebView) for the Pawsitive Pet Academy
XHAW5112 site. Each screen is a Fragment swapped into a single
container behind a bottom navigation bar (Home, Courses, Fees, Contact)
plus overflow menu items (About Us, Pricing), matching the group website's
page structure.

## Screens

| Screen | Fragment | Layout |
|---|---|---|
| Home | `HomeFragment.kt` | `fragment_home.xml` |
| About Us | `AboutFragment.kt` | `fragment_about.xml` |
| Courses | `CoursesFragment.kt` | `fragment_courses.xml` |
| Course Details | `CourseDetailFragment.kt` | `fragment_course_detail.xml` |
| Pricing | `PricingFragment.kt` | `fragment_pricing.xml` |
| Fees Calculator | `CalculatorFragment.kt` | `fragment_calculator.xml` |
| Contact Us | `ContactFragment.kt` | `fragment_contact.xml` |

Shared course data and pricing logic live in
`app/src/main/java/.../model/Course.kt`.

## How to open it

1. Open Android Studio → **File > Open** → select this project folder.
2. Let Gradle sync (first sync needs internet to fetch dependencies).
3. Press the green **Run ▶** button with an emulator or a physical device
   connected.

## Customizing

- **App name**: `app/src/main/res/values/strings.xml`
- **Package/application ID**: `com.zentrix.pawsitiveacademy`, set in
  `app/build.gradle` (`applicationId`).
- **Brand colors**: `app/src/main/res/values/colors.xml`.
- **Course data / pricing rules**: `app/src/main/java/.../model/Course.kt`.

## Icons

All icons are Android vector drawables in `app/src/main/res/drawable/`,
filled black and tinted at runtime by `res/color/nav_item_color.xml`
(brown when selected, muted grey otherwise).

| Icon | File | Used for |
|---|---|---|
| House | `ic_home.xml` | Home tab |
| Paw | `ic_courses.xml` | Courses tab |
| Money | `ic_fees.xml` | Fees tab |
| Envelope | `ic_contact.xml` | Contact tab |
| Info | `ic_about.xml` | About Us menu item |
| Price tag | `ic_pricing.xml` | Pricing menu item |
| Paw (white) | `ic_launcher_foreground.xml` | App launcher icon |

The launcher icon is an adaptive icon (`mipmap-anydpi-v26/ic_launcher.xml`
and `ic_launcher_round.xml`), with the white paw on the brown
`ic_launcher_background.xml`. Both variants share the same foreground,
so changing `ic_launcher_foreground.xml` updates both.

### Icon credits

| Icon | Source | Author | License |
|---|---|---|---|
| Home 389 | [SVG Repo](https://www.svgrepo.com/svg/535437/home) | Noah Jacobus | Public Domain |
| Paw 3 | [SVG Repo](https://www.svgrepo.com/svg/479104/paw-3) | Icooon Mono | Public Domain |
| Money 584 | [SVG Repo](https://www.svgrepo.com/svg/500409/money) | Tienda Nube | MIT |

## Building a signed APK / AAB for the Play Store

Use **Build > Generate Signed Bundle / APK** in Android Studio once you're
ready to distribute it.
