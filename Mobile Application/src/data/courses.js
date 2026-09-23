// Shared course data — mirrors website/assets/script.js exactly so the
// website and mobile app present identical content, pricing and discounts.

export const COURSES = [
  {
    id: "canine-obedience",
    name: "Canine Obedience Training",
    category: "6-month",
    categoryLabel: "6-Month Programme",
    duration: "6 Months",
    price: 1500,
    tagline: "Our Flagship Canine Obedience Programme",
    description:
      "A structured, positive-reinforcement programme that builds reliable obedience and good manners in dogs of any age, taught in small groups by our qualified trainers.",
    bullets: [
      "Weekly 1-on-1 sessions with a qualified trainer",
      "Official Pawsitive Pet Academy accreditation certificate",
      "Core commands, recall and loose-lead walking",
      "Small class sizes for individual attention",
    ],
  },
  {
    id: "pet-grooming",
    name: "Pet Grooming",
    category: "6-month",
    categoryLabel: "6-Month Programme",
    duration: "6 Months",
    price: 1500,
    tagline: "Professional Grooming, Taught Gently",
    description:
      "A hands-on programme covering everything an owner needs to keep their pet looking and feeling its best, from bathing to breed-specific coat care.",
    bullets: [
      "Bathing, drying and coat-care techniques",
      "Nail, ear and dental hygiene routines",
      "Breed-specific grooming methods",
      "Calm-handling techniques for nervous pets",
    ],
  },
  {
    id: "animal-behaviour",
    name: "Animal Behaviour",
    category: "6-month",
    categoryLabel: "6-Month Programme",
    duration: "6 Months",
    price: 1500,
    tagline: "Understand the Reasons Behind the Behaviour",
    description:
      "A deeper look at animal psychology and body language, helping owners understand, manage and gently reshape everyday behaviour.",
    bullets: [
      "Reading body language and stress signals",
      "Managing anxiety and reactivity",
      "Positive-reinforcement behaviour techniques",
      "Enrichment and home-environment planning",
    ],
  },
  {
    id: "puppy-care",
    name: "Puppy Care",
    category: "6-week",
    categoryLabel: "6-Week Short Course",
    duration: "6 Weeks",
    price: 750,
    tagline: "Everything a New Puppy Owner Needs to Know",
    description:
      "A friendly, practical short course giving new puppy owners the essential knowledge to raise a healthy, well-socialised companion.",
    bullets: [
      "Feeding schedules and nutrition basics",
      "Vaccination and toilet-training guidance",
      "Safe exercise for growing puppies",
      "Early socialisation techniques",
    ],
  },
  {
    id: "pet-first-aid",
    name: "Pet First-Aid",
    category: "6-week",
    categoryLabel: "6-Week Short Course",
    duration: "6 Weeks",
    price: 750,
    tagline: "Be Ready for the Moments That Matter",
    description:
      "Emergency first-aid knowledge every pet owner should have, taught by experienced handlers so you can respond calmly and confidently.",
    bullets: [
      "Handling minor injuries and wounds",
      "Basic CPR for cats and dogs",
      "Poison and heatstroke awareness",
      "Safe emergency transport techniques",
    ],
  },
  {
    id: "basic-dog-walking",
    name: "Basic Dog Walking",
    category: "6-week",
    categoryLabel: "6-Week Short Course",
    duration: "6 Weeks",
    price: 750,
    tagline: "Confident, Safe Walks — Every Time",
    description:
      "A practical short course in safe, professional dog-walking practice, including how to confidently manage multiple dogs at once.",
    bullets: [
      "Equipment and multi-dog handling",
      "Road, leash and public-safety procedures",
      "Reading a dog's on-walk body language",
      "Building a consistent exercise routine",
    ],
  },
];

// Number of courses selected -> discount rate
export function discountRateFor(count) {
  if (count >= 4) return 0.15;
  if (count === 3) return 0.1;
  if (count === 2) return 0.05;
  return 0;
}

export function money(amount) {
  return "R" + amount.toLocaleString("en-US", { maximumFractionDigits: 2 });
}

export const TEAM = [
  { name: "Thabo Cele", role: "Head of Grooming & Hygiene" },
  { name: "Leanne Du Plessis", role: "Senior Canine Behaviourist" },
  { name: "Devon Coundien", role: "Puppy Development Specialist" },
];
