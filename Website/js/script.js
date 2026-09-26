const courses = {
  obedience: { name: 'Canine Obedience Training', duration: '6 months', price: 1500 },
  grooming: { name: 'Pet Grooming', duration: '6 months', price: 1500 },
  behaviour: { name: 'Animal Behaviour', duration: '6 months', price: 1500 },
  business: { name: 'Pet Business Management', duration: '6 months', price: 1500 },
  puppy: { name: 'Puppy Care', duration: '6 weeks', price: 750 },
  firstaid: { name: 'Pet First Aid', duration: '6 weeks', price: 750 },
  walking: { name: 'Basic Dog Walking', duration: '6 weeks', price: 750 }
};
const selected = new Set();

function money(n) {
  return 'R' + n.toLocaleString('en-ZA', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function discountRate(count) {
  if (count >= 4) return .15;
  if (count === 3) return .10;
  if (count === 2) return .05;
  return 0;
}

function calculate() {
  const items = [...selected].map(k => courses[k]);
  const subtotal = items.reduce((s, c) => s + c.price, 0);
  const rate = discountRate(items.length);
  const discount = subtotal * rate;
  const afterDiscount = subtotal - discount;
  const vat = afterDiscount * .15;
  return { items, subtotal, rate, discount, vat, total: afterDiscount + vat };
}

function updateCalculator() {
  if (!document.getElementById('subtotal')) return;
  document.querySelectorAll('#courseOptions input[type=checkbox]').forEach(i => i.checked ? selected.add(i.value) : selected.delete(i.value));
  const x = calculate();
  document.getElementById('subtotal').textContent = money(x.subtotal);
  document.getElementById('discountRate').textContent = Math.round(x.rate * 100) + '%';
  document.getElementById('discount').textContent = '-' + money(x.discount);
  document.getElementById('vat').textContent = money(x.vat);
  document.getElementById('total').textContent = money(x.total);
  const box = document.getElementById('selectedSummary');
  box.innerHTML = x.items.length
    ? x.items.map(c => `<div class="summary-line"><span>${c.name}</span><strong>${money(c.price)}</strong></div>`).join('')
    : '<div class="text-placeholder">No courses selected yet.</div>';
}

document.addEventListener('DOMContentLoaded', () => {
  const hash = location.hash.replace('#', '');
  if (hash && courses[hash]) {
    selected.add(hash);
    const box = document.querySelector(`#courseOptions input[value="${hash}"]`);
    if (box) box.checked = true;
  }
  updateCalculator();
});

function submitQuote(e) {
  e.preventDefault();
  document.getElementById('quoteMessage').style.display = 'block';
  showToast('Quote request sent.');
}

function submitContact(e) {
  e.preventDefault();
  document.getElementById('contactMessage').style.display = 'block';
  showToast('Message sent.');
}

function showToast(t) {
  const el = document.getElementById('toast');
  el.textContent = t;
  el.style.display = 'block';
  setTimeout(() => el.style.display = 'none', 3000);
}

function toggleWebMenu() {
  const e = document.getElementById('webMenu');
  e.style.display = e.style.display === 'block' ? 'none' : 'block';
}
