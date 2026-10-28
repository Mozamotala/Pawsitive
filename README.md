# 🐾 Pawsitive Pet Academy: Website

This is the website for **Pawsitive Pet Academy**, a pet care and training academy in Morningside, Durban. Customers can look at the courses, work out what they will pay with the fees calculator, and ask for a quote or send a message.

**Owner:** Sarah Smith
**Location:** Durban, South Africa
**Module:** XHAW5112 Work Integrated Learning, Meridian Tech Group

---

## What the site does

- **Pages:** Home, About Us, Courses, Pricing (the fees calculator) and Contact Us. The header stays at the top; Courses has a keyboard-accessible drop-down on desktop, and the menu button opens the navigation on smaller screens.
- **Courses:** all seven courses are listed on the Courses page, and every course has its own detail page.
- **Fees calculator:** tick the courses you want and the subtotal, discount, VAT and total update straight away. Preview and print an itemized estimate from the calculator.
- **Quote form:** select at least one course and enter a name and valid email to request a quote.
- **Contact Us:** phone number, email, address, office hours, social media links, a map and a message form with input validation.
- **About Us:** who Sarah is, the academy's mission and vision, and the team.
- **Looks right on any screen:** the layout changes for desktop, tablet and phone. No frameworks are used.

---

## How the fees work

The 6-month courses cost **R1,500** each and the 6-week courses cost **R750** each.

The discount depends on how many courses are ticked:

| Courses ticked | Discount |
|---|---|
| 1 | 0% |
| 2 | 5% |
| 3 | 10% |
| 4 or more | 15% |

The discount comes off the subtotal first. Then **15% VAT** is added to what is left, because VAT is charged on the price the customer actually pays.

Example with Canine Obedience, Pet Grooming, Puppy Care and Pet First Aid:

| Line | Amount |
|---|---|
| Subtotal | R4,500.00 |
| Discount (15%) | -R675.00 |
| After discount | R3,825.00 |
| VAT (15%) | R573.75 |
| **Total** | **R4,398.75** |

The total is only an estimate. Sarah sends the official quote.

---

## Design

We kept the colours and fonts the same as the mobile app so both feel like one brand.

| Colour | Code | Used for |
|---|---|---|
| Cream | `#FFFDD0` | Main backgrounds |
| Powder Blue | `#B0E0E6` | Cards and sections that group information |
| Tan | `#C68B59` | Buttons and other things you click |

Fonts: **Book Antiqua** for headings, **Arial Narrow** for subheadings and **Calibri** for body text. The main colours are set as variables at the top of `main.css`, so they can be changed in one place.

---

## Built with

- **HTML5 and CSS3**, with no build step
- **Plain JavaScript** for the calculator, the forms and the menu

---

## How to run it

You only need a normal web browser. No tools or server are needed.

```bash
git clone https://github.com/EMGPSD/xhaw5112-2026-website-st10510475.git
cd xhaw5112-2026-website-st10510475
```

Then open `Website/index.html` in your browser.

---

## Folder layout

```
Website/
├── index.html                        # Home
├── pages/
│   ├── aboutus.html                  # About Us
│   ├── summarypage.html              # Courses (all seven)
│   ├── detailspage.html              # Canine Obedience Training
│   ├── detailspage-behaviour.html    # Animal Behaviour
│   ├── detailspage-business.html     # Pet Business Management
│   ├── detailspage-firstaid.html     # Pet First Aid
│   ├── detailspage-grooming.html     # Pet Grooming
│   ├── detailspage-puppy.html        # Puppy Care
│   ├── detailspage-walking.html      # Basic Dog Walking
│   ├── feescalculator.html           # Pricing and fees calculator
│   └── contactus.html                # Contact details and message form
├── assets/
│   ├── images/
│   │   ├── logo.jpg                  # Academy logo
│   │   ├── logo-badge.png            # Round logo in the header
│   │   ├── icons/                    # SVG Repo icons in the brand colour
│   │   └── photos/                   # Pexels photos
│   └── style/
│       └── main.css                  # All the styling
├── js/
│   └── script.js                     # Fees calculator, forms and menu
└── README.md
```

---

## Changing things

| What | Where |
|---|---|
| Course names, lengths and prices | `courses` list at the top of `js/script.js` |
| Discount tiers and VAT | `DISCOUNTS` and `VAT` in `js/script.js` |
| Colours | Variables at the top of `assets/style/main.css` |
| Page text and course details | The HTML files in `pages/` |
| Images and icons | `assets/images/` |

---

## How we worked

We used GitHub so the three of us could work on the same site without overwriting each other:

1. Pull `main` first so you have the latest code.
2. Make your own branch and do your work on it.
3. Commit and push to your branch.
4. Open a Pull Request.
5. Someone else reviews it and merges it into `main`.

Pull Requests merged so far:

| PR | What it added |
|---|---|
| #7 | Kelebogile's CSS, which became the first `main.css` |
| #8 | Theolin's Phase 3 CSS for the Home and About Us pages |
| #9 | Mohamed's CSS and JavaScript (hover effects), and the Sheltie photo fix |

---

## Team

| Member | Role |
|---|---|
| Kelebogile Tema | Website development lead |
| Mohamed Motala | UI/UX design lead: logo, wireframes, Fees Calculator and Contact Us pages |
| Theolin Chetty | Mobile app lead |

---

## Links

| What | Link |
|---|---|
| Published website | **To add** once the site is published |
| Group demo video (YouTube, unlisted) | **To add** |
| Presentation (PowerPoint) | **To add** to this repository |
| Mobile app repository | **To add** |
| Figma wireframes | **To add** |

---

## Image credits

The photos in `assets/images/photos/` are free images from [Pexels](https://www.pexels.com/). The icons in `assets/images/icons/` are from [SVG Repo](https://www.svgrepo.com/).

| Image | Used on | Photographer |
|---|---|---|
| `hero-collie.jpg` | Home | Petráš |
| `founder-sarah.jpg` | About Us (owner) | Magdy Talat |
| `trainer-cane-corso.jpg` | About Us (team) | Umut Sarialan |
| `trainer-black-dog.jpg` | About Us (team) | Oliveira |
| `trainer-sheltie.jpg` | About Us (team) | Blue Bird |
| `agility-training.jpg` | Canine Obedience Training details | Huerta |

---

## Still to do

Website (Task 3 marking criteria):

- [x] Add a real `<table>` for the discount tiers on the Pricing page
- [x] Validate quote and contact forms and show a clear error message for missing courses, name, or invalid email
- [x] Add a Courses drop-down menu that works on desktop as well as mobile
- [x] Add an itemized invoice estimate view and print option to the fees calculator
- [ ] Add the academy's verified Facebook and Instagram profile URLs to Contact Us (the placeholder links have been removed until the URLs are provided)
- [ ] Publish the website and add the link above, then check the published version matches this repository
- [ ] Remove the leftover "HTML-only version" comments from the pages and change `R1 500` to `R1,500` (prices are updated; comments were restored as requested)

Repository and hand-in:

- [ ] Merge this README and the tidied pages through a Pull Request that someone else reviews
- [ ] Add the final PowerPoint and the YouTube video link to the repository
- [ ] Check the repository is public and tidy up branches that are no longer needed

---

## Contact

For questions about the academy, contact **Sarah Smith**, Pawsitive Pet Academy, Durban, South Africa.
