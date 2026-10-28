const SIX_MONTHS = { duration: '6 months', price: 1500 };
const SIX_WEEKS = { duration: '6 weeks', price: 750 };

const courses = {
  obedience: { name: 'Canine Obedience Training', ...SIX_MONTHS },
  grooming: { name: 'Pet Grooming', ...SIX_MONTHS },
  behaviour: { name: 'Animal Behaviour', ...SIX_MONTHS },
  business: { name: 'Pet Business Management', ...SIX_MONTHS },
  puppy: { name: 'Puppy Care', ...SIX_WEEKS },
  firstaid: { name: 'Pet First Aid', ...SIX_WEEKS },
  walking: { name: 'Basic Dog Walking', ...SIX_WEEKS }
};

// Discount by number of courses: 0-1 = 0%, 2 = 5%, 3 = 10%, 4+ = 15%
const DISCOUNTS = [0, 0, .05, .10, .15];
const VAT = .15;

const $ = id => document.getElementById(id);

function money(n) {
  return 'R' + n.toLocaleString('en-ZA', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function updateCalculator() {
  if (!$('subtotal')) return;

  const items = [...document.querySelectorAll('#courseOptions input[type=checkbox]:checked')]
    .map(i => courses[i.value]);
  const subtotal = items.reduce((sum, c) => sum + c.price, 0);
  const rate = DISCOUNTS[Math.min(items.length, 4)];
  const discount = subtotal * rate;
  const vat = (subtotal - discount) * VAT;

  $('subtotal').textContent = money(subtotal);
  $('discountRate').textContent = Math.round(rate * 100) + '%';
  $('discount').textContent = '-' + money(discount);
  $('vat').textContent = money(vat);
  $('total').textContent = money(subtotal - discount + vat);
  $('selectedSummary').innerHTML = items.length
    ? items.map(c => `<div class="summary-line"><span>${c.name}</span><strong>${money(c.price)}</strong></div>`).join('')
    : '<div class="text-placeholder">No courses selected yet.</div>';
  $('quoteError').hidden = true;
  $('invoiceView').hidden = true;
}

document.addEventListener('DOMContentLoaded', () => {
  // Pre-tick the course named in the URL, e.g. calculator.html#puppy
  const hash = location.hash.slice(1);
  const box = courses[hash] && document.querySelector(`#courseOptions input[value="${hash}"]`);
  if (box) box.checked = true;
  updateCalculator();
});

function selectedCourses() {
  return [...document.querySelectorAll('#courseOptions input[type=checkbox]:checked')]
    .map(input => courses[input.value]);
}

function isValidEmail(input) {
  return input.value.trim() !== '' && input.checkValidity();
}

function showFormError(id, message) {
  $(id).textContent = message;
  $(id).hidden = false;
}

function clearFormError(id) {
  $(id).hidden = true;
}

function clearQuoteError() {
  clearFormError('quoteError');
  $('invoiceView').hidden = true;
}

function validateQuote() {
  const items = selectedCourses();
  const name = $('quoteName').value.trim();
  const email = $('quoteEmail');

  if (!items.length) return { error: 'Please select at least one course before requesting a quote or viewing an invoice.' };
  if (!name) return { error: 'Please enter your full name.' };
  if (!isValidEmail(email)) return { error: 'Please enter a valid email address.' };

  return { items, name, email: email.value.trim() };
}

function submitQuote(e) {
  e.preventDefault();
  $('quoteMessage').style.display = 'none';
  const quote = validateQuote();
  if (quote.error) {
    showFormError('quoteError', quote.error);
    return;
  }

  clearFormError('quoteError');
  $('quoteMessage').style.display = 'block';
  showToast('Quote request sent.');
}

function submitContact(e) {
  e.preventDefault();
  $('contactMessage').style.display = 'none';

  if (!$('contactName').value.trim()) {
    showFormError('contactError', 'Please enter your full name.');
    return;
  }
  if (!isValidEmail($('contactEmail'))) {
    showFormError('contactError', 'Please enter a valid email address.');
    return;
  }
  if (!$('contactText').value.trim()) {
    showFormError('contactError', 'Please enter a message.');
    return;
  }

  clearFormError('contactError');
  $('contactMessage').style.display = 'block';
  showToast('Message sent.');
}

function showInvoice() {
  const quote = validateQuote();
  if (quote.error) {
    showFormError('quoteError', quote.error);
    return;
  }

  clearFormError('quoteError');
  const subtotal = quote.items.reduce((sum, course) => sum + course.price, 0);
  const rate = DISCOUNTS[Math.min(quote.items.length, 4)];
  const discount = subtotal * rate;
  const vat = (subtotal - discount) * VAT;
  const total = subtotal - discount + vat;
  const rows = $('invoiceItems');
  rows.replaceChildren();

  quote.items.forEach(course => {
    const row = document.createElement('tr');
    const name = document.createElement('td');
    const price = document.createElement('td');
    name.textContent = course.name;
    price.textContent = money(course.price);
    row.append(name, price);
    rows.append(row);
  });

  $('invoiceName').textContent = quote.name;
  $('invoiceEmail').textContent = quote.email;
  $('invoiceSubtotal').textContent = money(subtotal);
  $('invoiceDiscountRate').textContent = Math.round(rate * 100) + '%';
  $('invoiceDiscount').textContent = '-' + money(discount);
  $('invoiceVat').textContent = money(vat);
  $('invoiceTotal').textContent = money(total);
  $('invoiceView').hidden = false;
  $('invoiceView').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function showToast(text) {
  const el = $('toast');
  el.textContent = text;
  el.style.display = 'block';
  setTimeout(() => el.style.display = 'none', 3000);
}

function toggleWebMenu() {
  const menu = $('webMenu');
  menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}
