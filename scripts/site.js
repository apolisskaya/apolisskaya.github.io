const entries = [...document.querySelectorAll('.entry')];
const buttons = [...document.querySelectorAll('[data-type-filter]')];
const category = document.querySelector('#category');
const search = document.querySelector('#search');
let type = 'all';
function filter() {
  let count = 0;
  for (const entry of entries) {
    const show = (type === 'all' || entry.dataset.type === type) &&
      (category.value === 'all' || JSON.parse(entry.dataset.categories).includes(category.value)) &&
      entry.dataset.search.includes(search.value.trim().toLowerCase());
    entry.hidden = !show;
    if (show) count++;
  }
  document.querySelector('#empty').hidden = count !== 0;
  document.querySelector('.filter-status').textContent = `${count} ${count === 1 ? 'entry' : 'entries'} shown`;
}
if (category && search) {
  for (const button of buttons) button.addEventListener('click', () => {
    type = button.dataset.typeFilter;
    for (const b of buttons) {
      b.classList.toggle('active', b === button);
      b.setAttribute('aria-pressed', String(b === button));
    }
    filter();
  });
  category.addEventListener('change', filter);
  search.addEventListener('input', filter);
}
