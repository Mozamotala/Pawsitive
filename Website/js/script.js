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
}

document.addEventListener('DOMContentLoaded', () => {
  // Pre-tick the course named in the URL, e.g. calculator.html#puppy
  const hash = location.hash.slice(1);
  const box = courses[hash] && document.querySelector(`#courseOptions input[value="${hash}"]`);
  if (box) box.checked = true;
  updateCalculator();
});

function submitForm(e, messageId, toastText) {
  e.preventDefault();
  $(messageId).style.display = 'block';
  showToast(toastText);
}

const submitQuote = e => submitForm(e, 'quoteMessage', 'Quote request sent.');
const submitContact = e => submitForm(e, 'contactMessage', 'Message sent.');

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
