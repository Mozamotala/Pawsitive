# 🐾 Pawsitive Pet Academy: Website

A responsive website for **Pawsitive Pet Academy**, a pet care and training academy based in Durban, South Africa. The site shows the academy's courses, a fees calculator with multi-course discounts, and quote and contact forms.

**Owner:** Sarah Smith
**Location:** Durban, South Africa

---

## Features

- **Multi-page site:** Home, About Us, Courses, Pricing and Contact pages, with a sticky header and a mobile menu.
- **Course catalogue:** all seven courses from the brief, each with its own detail page showing its purpose and content.
- **Fees calculator:** select any combination of courses to see the subtotal, multi-course discount (5%, 10% or 15%), VAT (15%) and estimated total, updated live.
- **Quote requests:** enter a name and email to request a quote for the selected courses.
- **Contact form:** send a general enquiry to the academy.
- **About Us:** the academy's history, vision, mission and goals.
- **Contact details:** phone, email, address, hours, social links and a map.
- **Responsive:** layouts for desktop, tablet and mobile, with no frameworks.

---

## Tech Stack

- **HTML5 and CSS3**, with no build step
- **Plain JavaScript** for the calculator and forms

---

## Getting Started

### Prerequisites

A modern web browser. No build tools or servers are needed.

### Setup

```bash
git clone https://github.com/EMGPSD/xhaw5112-2026-website-st10510475.git
cd xhaw5112-2026-website-st10510475
```

Open `Website/pages/index.html` in your browser.

---

## Project Structure

```
Website/
├── pages/
│   ├── index.html                    # Home
│   ├── aboutus.html                  # About Us
│   ├── summarypage.html              # Courses summary
│   ├── detailspage.html              # Canine Obedience Training details
│   ├── detailspage-behaviour.html    # Animal Behaviour details
│   ├── detailspage-business.html     # Pet Business Management details
│   ├── detailspage-firstaid.html     # Pet First Aid details
│   ├── detailspage-grooming.html     # Pet Grooming details
│   ├── detailspage-puppy.html        # Puppy Care details
│   ├── detailspage-walking.html      # Basic Dog Walking details
│   ├── feescalculator.html           # Pricing and fees calculator
│   └── contactus.html                # Contact details and form
├── assets/
│   ├── logo.jpg                      # Academy logo
│   ├── logo-badge.png                # Round logo used in the header
│   └── icons/                        # SVG Repo icons in the brand colour
├── styles/
│   └── main.css                      # All styling
└── js/
    └── script.js                     # Fees calculator and forms
```

---

## Customizing

| What | Where |
|---|---|
| Course names, durations and prices | `courses` list in `js/script.js` |
| Discount tiers and VAT | `discountRate` and `calculate` in `js/script.js` |
| Colours and fonts | Variables at the top of `styles/main.css` |
| Page text and course details | The HTML files in `pages/` |
| Icons | `assets/icons/` |

---

## Roadmap

- [ ] Connect the quote and contact forms to a real backend
- [ ] Generate an invoice page from the fees calculator
- [ ] Add SEO and social sharing tags

---

## Contact

For questions about the academy, contact **Sarah Smith**, Pawsitive Pet Academy, Durban, South Africa.
