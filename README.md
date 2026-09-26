# 🐾 Pawsitive Pet Academy

A native Android app for **Pawsitive Pet Academy**, a pet care and training academy based in Durban, South Africa. The app wraps the academy's course catalogue, transparent fees calculator, and enquiry forms in a mobile-friendly experience built on top of the existing web platform.

**Owner:** Sarah Smith
**Location:** Durban, South Africa

---

## Features

- **Course catalogue** — Six-month courses (Canine Obedience Training, Pet Grooming Diploma) and a six-week Puppy Care Module, each with duration and fees.
- **Fees calculator** — Select any combination of courses and see the subtotal, multi-course discount (5% / 10% / 15%), VAT (15%), and estimated total update instantly.
- **Quotation requests** — Submit a name and email to request a formal quote based on the selected courses.
- **Contact form** — Send a general enquiry directly to the academy.
- **Offline-first** — The app runs entirely on-device; no internet connection is required to browse courses or use the calculator.
- **Native navigation** — Bottom tab bar (Home / Courses / Fees / Contact) and standard Android back-button behaviour.

---

## Screenshots

| Home | Courses | Fees Calculator | Contact |
|---|---|---|---|
| _add screenshot_ | _add screenshot_ | _add screenshot_ | _add screenshot_ |

> Replace the placeholders above with actual screenshots before publishing.

---

## Tech Stack

| Component | Details |
|---|---|
| Language | Kotlin |
| Min SDK | 24 (Android 7.0 Nougat) |
| Target SDK | 34 |
| UI | WebView-based shell over an embedded HTML/CSS/JS front end, with AndroidX AppCompat / Material Components and SwipeRefreshLayout for pull-to-refresh |
| Build system | Gradle (Groovy DSL) |

---

## Getting Started

### Prerequisites

- [Android Studio](https://developer.android.com/studio) (latest stable)
- JDK 17
- An Android emulator or a physical device running Android 7.0+

### Setup

```bash
git clone https://github.com/<your-username>/pawsitive-pet-academy-app.git
cd pawsitive-pet-academy-app
```

1. Open the project folder in Android Studio (**File → Open**).
2. Let Gradle sync — Android Studio will offer to generate the Gradle wrapper automatically if it isn't present; accept the prompt.
3. Run the app on an emulator or connected device with the green **Run ▶** button.

---

## Project Structure

```
app/src/main/
├── assets/
│   └── index.html           # Course info, calculator logic, and forms (HTML/CSS/JS)
├── java/.../MainActivity.kt # WebView host: JS/DOM storage, pull-to-refresh, back navigation
└── res/
    ├── layout/              # WebView + SwipeRefreshLayout screen
    ├── values/              # App name, colors, theme
    └── mipmap-anydpi-v26/   # Adaptive app icon
```

---

## Customizing

| What | Where |
|---|---|
| App name | `app/src/main/res/values/strings.xml` |
| Package / application ID | `app/build.gradle` (`applicationId`) |
| Colors / theme | `app/src/main/res/values/colors.xml`, `themes.xml` |
| App icon | `res/drawable/ic_launcher_*.xml`, or **File → New → Image Asset** |
| Courses, pricing, copy | `app/src/main/assets/index.html` |
| Point at a live server instead of the bundled file | `LOCAL_URL` in `MainActivity.kt` |

---

## Building a Release

Use **Build → Generate Signed Bundle / APK** in Android Studio to produce a signed `.aab` (for the Play Store) or `.apk`, creating or reusing a signing key when prompted.

---

## Roadmap

- [ ] Push notifications for quote follow-ups
- [ ] In-app booking / scheduling
- [ ] Payment integration
- [ ] Play Store release

---

## License

Add your chosen license here (e.g. MIT) — see [choosealicense.com](https://choosealicense.com/) if you're unsure which one fits.

---

## Contact

For questions about the academy itself, contact **Sarah Smith** — Pawsitive Pet Academy, Durban, South Africa.