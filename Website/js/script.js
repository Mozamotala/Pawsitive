// The two course lengths and their prices, shared by the courses below
const SIX_MONTHS = { duration: "6 months", price: 1500 };
const SIX_WEEKS = { duration: "6 weeks", price: 750 };

// Every course, by its short name (the same as the checkbox values in feescalculator.html).
// "...SIX_MONTHS" copies the duration and price in, so they don't have to be typed out each time
const courses = {
  obedience: { name: "Canine Obedience Training", ...SIX_MONTHS },
  grooming: { name: "Pet Grooming", ...SIX_MONTHS },
  behaviour: { name: "Animal Behaviour", ...SIX_MONTHS },
  business: { name: "Pet Business Management", ...SIX_MONTHS },
  puppy: { name: "Puppy Care", ...SIX_WEEKS },
  firstaid: { name: "Pet First Aid", ...SIX_WEEKS },
  walking: { name: "Basic Dog Walking", ...SIX_WEEKS },
};

// Discount by number of courses: 0-1 = 0%, 2 = 5%, 3 = 10%, 4+ = 15%
// (the position in the list is the number of courses)
const DISCOUNTS = [0, 0, 0.05, 0.1, 0.15];
const VAT = 0.15; // 15% VAT

// Shortcut that finds a spot on the page by its id (the spot is already in the HTML)
const $ = (id) => document.getElementById(id);

// Turns a number into Rand text, e.g. 1500 becomes "R1 500,00"
function money(n) {
  return (
    "R" +
    n.toLocaleString("en-ZA", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
  );
}

// Runs every time a course box is ticked or unticked: works out the totals and fills them in on the page
function updateCalculator() {
  if (!$("subtotal")) return; // stop if this isn't the Pricing page

  // Get the ticked courses and add up their prices
  const items = [
    ...document.querySelectorAll("#courseOptions input[type=checkbox]:checked"),
  ].map((i) => courses[i.value]);
  const subtotal = items.reduce((sum, c) => sum + c.price, 0);

  // Pick the discount using how many courses are ticked (4 or more all get the same discount)
  // e.g. 3 boxes ticked → items.length = 3 → Math.min(3, 4) = 3 → DISCOUNTS[3] = 0.1 → 10%
  const rate = DISCOUNTS[Math.min(items.length, 4)];
  const discount = subtotal * rate;
  const vat = (subtotal - discount) * VAT; // VAT is worked out after the discount

  // Fill in the answers on the page
  $("subtotal").textContent = money(subtotal);
  $("discountRate").textContent = Math.round(rate * 100) + "%"; // find the discount spot and write e.g. "10%" into it
  $("discount").textContent = "-" + money(discount);
  $("vat").textContent = money(vat);
  $("total").textContent = money(subtotal - discount + vat);

  // List the ticked courses, or show "No courses selected yet." if none are ticked
  $("selectedSummary").innerHTML = items.length
    ? items
        .map(
          (c) =>
            `<div class="summary-line"><span>${c.name}</span><strong>${money(c.price)}</strong></div>`,
        )
        .join("")
    : '<div class="text-placeholder">No courses selected yet.</div>';

  // Hide any old error and invoice, because the courses have changed
  $("quoteError").hidden = true;
  $("invoiceView").hidden = true;
}

// Runs once when the page opens: ticks the course named in the web address (if any)
// and works out the starting totals
document.addEventListener("DOMContentLoaded", () => {
  // Pre-tick the course named in the URL, e.g. feescalculator.html#puppy
  const hash = location.hash.slice(1);
  const box =
    courses[hash] &&
    document.querySelector(`#courseOptions input[value="${hash}"]`);
  if (box) box.checked = true;
  updateCalculator();
});

// Gets a list of the courses the user has ticked
function selectedCourses() {
  return [
    ...document.querySelectorAll("#courseOptions input[type=checkbox]:checked"),
  ].map((input) => courses[input.value]);
}

// Checks the email box isn't empty and looks like a real email (true or false)
function isValidEmail(input) {
  return input.value.trim() !== "" && input.checkValidity();
}

// Puts an error message in the error box and makes it show up
function showFormError(id, message) {
  $(id).textContent = message;
  $(id).hidden = false;
}

// Hides the error box again (runs when the user starts typing)
function clearFormError(id) {
  $(id).hidden = true;
}

// Hides the quote error and the old invoice when the user changes their details
function clearQuoteError() {
  clearFormError("quoteError");
  $("invoiceView").hidden = true;
}

// Checks the quote form: a course is ticked, name is filled in, email is valid.
// Gives back the first error it finds, or the person's details if all is good
function validateQuote() {
  const items = selectedCourses();
  const name = $("quoteName").value.trim();
  const email = $("quoteEmail");

  if (!items.length)
    return {
      error:
        "Please select at least one course before requesting a quote or viewing an invoice.",
    };
  if (!name) return { error: "Please enter your full name." };
  if (!isValidEmail(email))
    return { error: "Please enter a valid email address." };

  return { items, name, email: email.value.trim() };
}

// Runs when "Request my quote" is clicked: stops the page reloading, checks the form,
// then shows either the error or the thanks message
function submitQuote(e) {
  e.preventDefault();
  $("quoteMessage").style.display = "none";
  const quote = validateQuote();
  if (quote.error) {
    showFormError("quoteError", quote.error);
    return;
  }

  clearFormError("quoteError");
  $("quoteMessage").style.display = "block";
  showToast("Quote request sent.");
}

// Runs when "Send message" is clicked: stops the page reloading, checks name, email
// and message one by one, then shows either the error or the thanks message
function submitContact(e) {
  e.preventDefault();
  $("contactMessage").style.display = "none";

  if (!$("contactName").value.trim()) {
    showFormError("contactError", "Please enter your full name.");
    return;
  }
  if (!isValidEmail($("contactEmail"))) {
    showFormError("contactError", "Please enter a valid email address.");
    return;
  }
  if (!$("contactText").value.trim()) {
    showFormError("contactError", "Please enter a message.");
    return;
  }

  clearFormError("contactError");
  $("contactMessage").style.display = "block";
  showToast("Message sent.");
}

// Runs when "Preview invoice" is clicked: checks the form, then fills in and shows the invoice
function showInvoice() {
  const quote = validateQuote();
  if (quote.error) {
    showFormError("quoteError", quote.error);
    return;
  }
  clearFormError("quoteError");

  // The maths for the invoice, same as in updateCalculator() above
  const subtotal = quote.items.reduce((sum, course) => sum + course.price, 0);
  const rate = DISCOUNTS[Math.min(quote.items.length, 4)];
  const discount = subtotal * rate;
  const vat = (subtotal - discount) * VAT;
  const total = subtotal - discount + vat;

  // Empty the table first so old rows from a previous preview don't stay
  const rows = $("invoiceItems");
  rows.replaceChildren();

  // For each ticked course, make a new row with two cells (name and price) and add it to the table
  quote.items.forEach((course) => {
    const row = document.createElement("tr");
    const name = document.createElement("td");
    const price = document.createElement("td");
    name.textContent = course.name; // put the course name in the first cell
    price.textContent = money(course.price); // put the price in the second cell
    row.append(name, price); // add both cells to the row
    rows.append(row); // add the row to the invoice table
  });

  // Fill in the person's name and email and all the totals, then show the invoice and scroll to it
  $("invoiceName").textContent = quote.name;
  $("invoiceEmail").textContent = quote.email;
  $("invoiceSubtotal").textContent = money(subtotal);
  $("invoiceDiscountRate").textContent = Math.round(rate * 100) + "%";
  $("invoiceDiscount").textContent = "-" + money(discount);
  $("invoiceVat").textContent = money(vat);
  $("invoiceTotal").textContent = money(total);
  $("invoiceView").hidden = false;
  $("invoiceView").scrollIntoView({ behavior: "smooth", block: "nearest" });
}

// Shows a small pop-up message at the bottom of the screen, then hides it after 3 seconds
function showToast(text) {
  const el = $("toast");
  el.textContent = text;
  el.style.display = "block";
  setTimeout(() => (el.style.display = "none"), 3000);
}

// Opens the mobile menu if it's closed, or closes it if it's open (the ☰ button)
function toggleWebMenu() {
  const menu = $("webMenu");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
}
