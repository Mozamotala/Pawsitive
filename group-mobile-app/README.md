# 🐾 Pawsitive Pet Academy

A native Android app for **Pawsitive Pet Academy**, a pet care and training academy based in Durban, South Africa. The app provides a course catalogue, a fees calculator, and enquiry forms in a mobile-friendly experience.

**Owner:** Sarah Smith
**Location:** Durban, South Africa

---

## Features

- **Course catalogue**: Browse all seven courses (four six-month programmes and three six-week short courses) with duration and fees.
- **Fees calculator**: Select courses and see the subtotal, multi-course discount, VAT (15%), and estimated total.
- **Quotation requests**: Request a quote for the selected courses from the fees calculator.
- **Contact form**: Submit a general enquiry to the academy.
- **Native navigation**: Bottom tab bar (Home / Courses / Fees / Contact), with About Us and Pricing in the top menu.

---

## Tech Stack

| Component | Details |
|---|---|
| Language | Kotlin |
| Min SDK | 24 (Android 7.0 Nougat) |
| Target SDK | 34 |
| UI | Single activity with a Kotlin fragment and XML layout per screen, using AndroidX AppCompat / Material Components |
| Build system | Gradle (Groovy DSL) |

---

## Getting Started

### Prerequisites

- [Android Studio](https://developer.android.com/studio) (latest stable)
- JDK 17
- An Android emulator or a physical device running Android 7.0+

### Setup

```bash
git clone https://github.com/EMGPSD/xhaw5112-2026-mobile-app-st10510475.git
cd xhaw5112-2026-mobile-app-st10510475
```

1. Open the cloned `xhaw5112-2026-mobile-app-st10510475` folder in Android Studio (**File > Open**).
2. Let Gradle sync. Android Studio will offer to generate the Gradle wrapper automatically if it isn't present; accept the prompt.
3. Run the app on an emulator or connected device with the green **Run ▶** button.

---

## Project Structure

```
app/src/main/
├── java/com/zentrix/pawsitiveacademy/
│   ├── MainActivity.kt          # Hosts the screens, bottom nav and top menu
│   ├── *Page.kt                 # One Kotlin page (fragment) per screen
│   └── model/Course.kt          # Course list, discount and VAT calculation
└── res/
    ├── layout/                  # XML layout for each screen
    ├── values/                  # App name, colors, theme
    └── mipmap-anydpi-v26/       # Adaptive app icon
```

---

## Customizing

| What | Where |
|---|---|
| App name | `app/src/main/res/values/strings.xml` |
| Package / application ID | `app/build.gradle` (`applicationId`) |
| Colors / theme | `app/src/main/res/values/colors.xml`, `themes.xml` |
| App icon | `res/drawable/ic_launcher_*.xml`, or **File > New > Image Asset** |
| Courses, pricing, discount and VAT | `app/src/main/java/com/zentrix/pawsitiveacademy/model/Course.kt` |
| Screen layouts | `app/src/main/res/layout/` |

---

## Building a Release

Use **Build > Generate Signed Bundle / APK** in Android Studio to produce a signed `.aab` (for the Play Store) or `.apk`, creating or reusing a signing key when prompted.

---

## Roadmap

- [ ] Push notifications for quote follow-ups
- [ ] In-app booking / scheduling
- [ ] Payment integration
- [ ] Play Store release

---

## Contact

For questions about the academy itself, contact **Sarah Smith**: Pawsitive Pet Academy, Durban, South Africa.