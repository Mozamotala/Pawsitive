# 🐾 Pawsitive Pet Academy

Website and native Android app for Pawsitive Pet Academy, a fictional pet care and training academy in Durban, South Africa (client: Sarah Smith). Built by a three-person team for the XHAW5112 Work Integrated Learning (WIL) module at IIE Varsity College Sandton, 2026.

## My role

I was the group's **UI/UX Design Lead** and shared the Quality & Testing and Documentation Steward roles. My build area was **Part 3: the Fees Calculator and Contact Us**, on both the website and the Android app.

- **Design:** designed the logo, then built the 12 low-fidelity wireframes (6 web, 6 mobile) and 13 high-fidelity wireframes (6 desktop, 7 mobile) in Figma.
- **Fees Calculator and Contact Us:** built both pages on the website and in the app, plus the JavaScript for the fees calculator, forms and mobile menu, and the hover effects.
- **Integration:** split the group's combined code into separate pages and XML layouts, fixed a manifest merger error, merged teammates' branches in the mobile app, and added the four missing courses with a detail page for each.
- **Git workflow:** set up the branches on both repositories, wrote the group's step-by-step Git and Pull Request guide, recorded a walkthrough video for a teammate, and reviewed and merged teammates' Pull Requests.
- **Documentation:** compiled the group workbook, timeline and meeting minutes, and put together the 31-slide presentation with a speaking script for each member.
- **This repo:** added the CI and security workflows (Android build, website checks, gitleaks, CodeQL, Dependabot) and combined the two team repositories into one with `git subtree`, keeping their full commit history.

## What it does

- **Course catalogue:** all seven courses (four six-month programmes and three six-week short courses) with duration and fees.
- **Fees calculator:** pick courses and see the subtotal, multi-course discount (5%, 10% or 15%), 15% VAT and estimated total, then request a quote.
- **Contact Us:** contact details, office hours, a map with directions and a message form.
- **Website pages:** About Us, course details, Fees calculator, Contact Us and a Summary page.

## Tech

| Part | Stack |
|---|---|
| Website | HTML, CSS, JavaScript |
| Android app | Kotlin, XML layouts, AndroidX / Material Components, Gradle (min SDK 24, target SDK 34) |
| Design | Figma (low- and high-fidelity wireframes) |
| CI | GitHub Actions (Android build, website checks, gitleaks, CodeQL), Dependabot |

## Repository layout

| Folder | What it is |
|---|---|
| `group-website/` | The group website (HTML/CSS/JS pages) |
| `group-mobile-app/` | The group Android app (Android Studio / Gradle project) |
| `.github/` | CI workflows and Dependabot config |
| `Presentation_Scripts/` | Each member's speaking script for the group presentation |
| `Pawsitive_Full_Presentation_v7.pptx` | The 31-slide group presentation |
| `*.pdf` | Submission documents: workbook, group timeline, meeting minutes and my activity log |

## Run it

**Website:** open any page in `group-website/pages/` in a browser, or serve the folder with a local server (for example the VS Code Live Server extension).

**Mobile app:**

1. Open `group-mobile-app/` in Android Studio.
2. Let Gradle sync.
3. Run on an emulator or a connected device.

## History

Both projects started as separate team repositories and were merged here with `git subtree`, so the original commit history is preserved:

- `xhaw5112-2026-website-st10510475` is now `group-website/`
- `xhaw5112-2026-mobile-app-st10510475` is now `group-mobile-app/`

## Team

| Member | Roles | Build area |
|---|---|---|
| Theolin Chetty | Project Lead, Mobile Application Lead, Technical Integrator, Client Liaison | Part 1: Home and About Us |
| Kelebogile Makhutso Tema | Website Development Lead, Quality & Testing, Documentation Steward | Part 2: Courses, Course Details, Pricing and Course Summary |
| Mohamed Zaeem Motala | UI/UX Design Lead, Quality & Testing, Documentation Steward | Part 3: Fees Calculator and Contact Us |

## Course

XHAW5112, Higher Certificate in Mobile Application and Web Development, Emeris / IIE Varsity College Sandton, 2026.
