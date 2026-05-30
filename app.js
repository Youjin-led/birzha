const registryBase = 'https://www1.fips.ru/registers-doc-view/fips_servlet?DB=RUTM&DocNumber=';
const cartKey = 'znakvsem-cart-v1';
const favoritesKey = 'znakvsem-favorites-v1';
const customKey = 'znakvsem-custom-v1';

const sourceTrademarks = [
  { id: '1063814', classes: [17, 19, 35, 36, 37, 39], price: 'от 90 тыс. за каждый класс', minPrice: 90000, discount: true, business: ['строительство', 'недвижимость', 'услуги'] },
  { id: '1089437', classes: [3, 5, 9, 11, 18, 25, 28, 30, 35, 42], price: 'от 250 тыс. руб. за класс', minPrice: 250000, discount: true, business: ['косметика', 'одежда', 'маркетплейсы', 'IT'] },
  { id: '2024725226', classes: [44, 45], price: 'от 140 тыс. за класс', minPrice: 140000, discount: false, business: ['медицина', 'юридические услуги'] },
  { id: '1113022', classes: [4, 5, 6, 9, 10, 11, 14, 17, 18, 19, 21, 23, 25, 26, 27, 29, 30, 31, 32, 33, 34, 35], price: 'от 100 000 руб. за класс', minPrice: 100000, discount: false, business: ['маркетплейсы', 'товары', 'электроника'] },
  { id: '1112709', classes: [7, 9, 12], price: 'от 100 000 руб. за класс', minPrice: 100000, discount: false, business: ['техника', 'транспорт'] },
  { id: '1111040', classes: [3, 7, 8, 9, 11, 12, 16, 21, 35, 42, 44, 45], price: 'от 100 000 руб. за класс', minPrice: 100000, discount: false, business: ['косметика', 'товары для дома', 'IT'] },
  { id: '1019012', classes: [2, 4, 7, 9, 10, 11, 12, 18, 21, 23, 24, 25, 29, 30, 31, 32, 33, 34, 37, 42, 43], price: 'от 100 000 руб. за класс', minPrice: 100000, discount: false, business: ['еда', 'одежда', 'техника', 'рестораны'] },
  { id: '1025932', classes: [3, 8, 12, 21, 25], price: 'от 100 000 руб. за класс', minPrice: 100000, discount: false, business: ['косметика', 'одежда', 'товары для дома'] },
  { id: '1034847', classes: [3], price: 'от 100 000 руб. за класс', minPrice: 100000, discount: false, business: ['косметика'] },
  { id: '1025451', classes: [3, 9, 42], price: 'от 100 000 руб. за класс', minPrice: 100000, discount: false, business: ['косметика', 'IT'] },
  { id: '1104685', classes: [11, 21, 24, 25], price: 'от 100 000 руб. за класс', minPrice: 100000, discount: false, business: ['товары для дома', 'одежда'] },
  { id: '1096071', classes: [1, 2, 3, 4, 7, 8, 9, 11, 12, 16, 18, 21, 24, 25, 29, 30, 31, 32, 33], price: '350 000 руб.', minPrice: 350000, discount: false, business: ['еда', 'одежда', 'товары', 'маркетплейсы'] },
  { id: '972991', classes: [3, 7, 9, 21, 25], price: 'от 100 000 руб. за класс', minPrice: 100000, discount: false, business: ['косметика', 'одежда', 'товары для дома'] },
  { id: '970982', classes: [1, 2, 4, 8, 9, 10, 11, 14, 16, 18, 21, 22, 23, 24, 28, 29, 31, 32, 34], price: 'от 100 000 руб. за класс', minPrice: 100000, discount: false, business: ['товары', 'еда', 'техника'] },
  { id: '1002509', classes: [1, 2, 3, 5, 6, 8, 10, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 31, 32], price: 'от 100 000 руб. за класс', minPrice: 100000, discount: false, business: ['товары', 'одежда', 'медицина'] },
  { id: '972459', classes: [3, 8, 21], price: 'от 100 000 руб. за класс', minPrice: 100000, discount: false, business: ['косметика', 'товары для дома'] },
  { id: '971753', classes: [3, 12, 14, 16, 18, 21, 35], price: 'от 100 000 руб. за класс', minPrice: 100000, discount: false, business: ['косметика', 'аксессуары', 'маркетплейсы'] },
  { id: '971330', classes: [1, 2, 3, 5, 7, 8, 9, 12, 14, 16, 18, 21, 23, 24, 25, 29, 31, 32, 33], price: 'от 100 000 руб. за класс', minPrice: 100000, discount: false, business: ['еда', 'одежда', 'товары'] },
  { id: '971529', classes: [2, 3, 7, 8, 9, 12, 14, 21, 23, 24, 25, 29, 30, 31, 32, 33, 35], price: 'от 100 000 руб. за класс', minPrice: 100000, discount: false, business: ['еда', 'одежда', 'маркетплейсы'] },
  { id: '970741', classes: [2, 7, 8, 9, 11, 14, 21, 29, 30, 31, 32, 33], price: 'от 100 000 руб. за класс', minPrice: 100000, discount: false, business: ['еда', 'техника', 'товары для дома'] },
  { id: '994332', classes: [1, 2, 3, 9, 12, 14, 18, 23, 24, 25, 35], price: 'от 100 000 руб. за класс', minPrice: 100000, discount: false, business: ['одежда', 'маркетплейсы', 'косметика'] },
  { id: '1038656', classes: [3, 11, 25], price: 'от 100 000 руб. за класс', minPrice: 100000, discount: false, business: ['косметика', 'одежда'] },
  { id: '969608', classes: [1, 4, 6, 7, 8, 9, 10, 14, 17, 18, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 31, 32, 33, 34], price: 'от 100 000 руб. за класс', minPrice: 100000, discount: false, business: ['товары', 'еда', 'одежда'] },
  { id: '994011', classes: [3, 7, 8, 9, 10, 11, 12, 18, 21, 23, 24, 25, 29, 30, 31, 32, 33, 35, 37, 43], price: 'от 100 000 руб. за класс', minPrice: 100000, discount: false, business: ['еда', 'рестораны', 'маркетплейсы'] },
  { id: '969606', classes: [1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 16, 20, 21, 22, 23, 24, 28, 29, 30, 31, 32, 33, 34], price: 'от 100 000 руб. за класс', minPrice: 100000, discount: false, business: ['еда', 'товары', 'медицина'] },
  { id: '969190', classes: [1, 2, 3, 4, 5, 6, 8, 10, 14, 16, 18, 20, 21, 22, 23, 24, 28, 29], price: 'от 100 000 руб. за класс', minPrice: 100000, discount: false, business: ['товары', 'косметика', 'аксессуары'] },
  { id: '1088573', classes: [2, 3, 6, 7, 8, 10, 12, 15, 20, 22, 23, 26, 29, 30, 32, 33, 34, 36, 38, 39, 40, 43, 44, 45], price: 'от 100 000 руб. за класс', minPrice: 100000, discount: false, business: ['еда', 'услуги', 'медицина', 'логистика'] },
  { id: '1064987', classes: [2, 3, 7, 8, 9, 10, 11, 12, 18, 20, 21, 24, 25, 31, 32, 33, 34, 35, 37, 43], price: 'от 100 000 руб. за класс', minPrice: 100000, discount: false, business: ['еда', 'одежда', 'маркетплейсы', 'рестораны'] },
  { id: '919273', classes: [5, 13, 15, 18, 19, 23, 26, 27, 28, 31, 36, 38, 40, 45], price: 'от 100 000 руб. за класс', minPrice: 100000, discount: false, business: ['медицина', 'финансы', 'услуги'] },
  { id: '906596', classes: [1, 2, 6, 8, 10, 13, 15, 16, 17, 19, 22, 23, 24, 26, 27, 28, 29, 31, 32, 33, 37, 38, 39, 40, 41, 44], price: 'от 100 000 руб. за класс', minPrice: 100000, discount: false, business: ['еда', 'строительство', 'логистика', 'обучение'] }
];

const state = {
  search: '',
  classFilter: '',
  discountFilter: '',
  businessFilter: '',
  sort: 'default',
  page: 1,
  perPage: 24,
  favorites: loadList(favoritesKey),
  cart: loadList(cartKey)
};

const grid = document.querySelector('[data-grid]');
const template = document.querySelector('[data-card-template]');
const resultCount = document.querySelector('[data-result-count]');
const classFilter = document.querySelector('[data-class-filter]');
const businessFilter = document.querySelector('[data-business-filter]');
const searchInput = document.querySelector('[data-search]');
const discountFilter = document.querySelector('[data-discount-filter]');
const sortSelect = document.querySelector('[data-sort]');
const cartCount = document.querySelector('[data-cart-count]');
const modal = document.querySelector('[data-modal]');
const cartItems = document.querySelector('[data-cart-items]');
const selectedInput = document.querySelector('[data-selected-input]');
const pagination = document.querySelector('[data-pagination]');

function loadList(key) {
  try {
    return JSON.parse(localStorage.getItem(key)) || [];
  } catch {
    return [];
  }
}

function saveList(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function allTrademarks() {
  const custom = loadList(customKey);
  return [...sourceTrademarks, ...custom].map((item, index) => ({
    title: item.title || `Знак №${item.id}`,
    registry: item.registry || `${registryBase}${encodeURIComponent(item.id)}`,
    order: index + 1,
    ...item
  }));
}

function transliterate(value) {
  const map = {
    а: 'a', б: 'b', в: 'v', г: 'g', д: 'd', е: 'e', ё: 'e', ж: 'zh', з: 'z', и: 'i', й: 'i',
    к: 'k', л: 'l', м: 'm', н: 'n', о: 'o', п: 'p', р: 'r', с: 's', т: 't', у: 'u', ф: 'f',
    х: 'h', ц: 'c', ч: 'ch', ш: 'sh', щ: 'sch', ы: 'y', э: 'e', ю: 'yu', я: 'ya'
  };
  return value.toLowerCase().replace(/[ъь]/g, '').split('').map((char) => map[char] || char).join('');
}

function normalize(value) {
  return `${value}`.toLowerCase().replace(/ё/g, 'е');
}

function matchesSearch(item, query) {
  if (!query) return true;
  const haystack = [
    item.title,
    item.id,
    item.price,
    item.business.join(' '),
    item.classes.join(' ')
  ].join(' ');
  const normalizedHaystack = normalize(haystack);
  const translitHaystack = transliterate(haystack);
  const normalizedQuery = normalize(query);
  const translitQuery = transliterate(query);
  return normalizedHaystack.includes(normalizedQuery) || translitHaystack.includes(translitQuery);
}

function filteredTrademarks() {
  const list = allTrademarks().filter((item) => {
    const classMatch = !state.classFilter || item.classes.includes(Number(state.classFilter));
    const discountMatch = state.discountFilter !== 'discount' || item.discount;
    const businessMatch = !state.businessFilter || item.business.includes(state.businessFilter);
    return classMatch && discountMatch && businessMatch && matchesSearch(item, state.search);
  });

  if (state.sort === 'price-asc') {
    list.sort((a, b) => a.minPrice - b.minPrice);
  }
  if (state.sort === 'classes-desc') {
    list.sort((a, b) => b.classes.length - a.classes.length);
  }
  return list;
}

function renderFilters() {
  const classes = [...new Set(allTrademarks().flatMap((item) => item.classes))].sort((a, b) => a - b);
  const businesses = [...new Set(allTrademarks().flatMap((item) => item.business))].sort((a, b) => a.localeCompare(b, 'ru'));

  classFilter.insertAdjacentHTML('beforeend', classes.map((item) => `<option value="${item}">${item}</option>`).join(''));
  businessFilter.insertAdjacentHTML('beforeend', businesses.map((item) => `<option value="${item}">${item}</option>`).join(''));
}

function renderCatalog() {
  const list = filteredTrademarks();
  const pageCount = Math.max(1, Math.ceil(list.length / state.perPage));
  if (state.page > pageCount) state.page = pageCount;
  const start = (state.page - 1) * state.perPage;
  const visible = list.slice(start, start + state.perPage);
  grid.innerHTML = '';
  resultCount.textContent = `Показано: ${visible.length} из ${list.length}; всего в базе ${allTrademarks().length}`;

  if (!visible.length) {
    grid.innerHTML = '<p class="empty">По этим фильтрам ничего не найдено.</p>';
    pagination.innerHTML = '';
    return;
  }

  visible.forEach((item) => {
    const node = template.content.firstElementChild.cloneNode(true);
    const favoriteButton = node.querySelector('[data-favorite]');
    const inFavorites = state.favorites.includes(item.id);

    node.querySelector('[data-logo]').textContent = item.id.slice(-4);
    node.querySelector('[data-title]').textContent = item.title;
    node.querySelector('[data-registry]').href = item.registry;
    node.querySelector('[data-classes]').innerHTML = item.classes.map((value) => `<span>${value}</span>`).join('');
    node.querySelector('[data-business]').textContent = item.business.join(', ');
    node.querySelector('[data-price]').textContent = item.price;
    node.querySelector('[data-discount]').textContent = item.discount ? 'скидка' : '';
    favoriteButton.classList.toggle('is-active', inFavorites);
    favoriteButton.textContent = inFavorites ? '♥' : '♡';

    favoriteButton.addEventListener('click', () => toggleFavorite(item.id));
    node.querySelector('[data-add-cart]').addEventListener('click', () => addToCart(item.id));
    node.querySelector('[data-details]').addEventListener('click', () => addToCart(item.id, true));
    grid.appendChild(node);
  });
  renderPagination(pageCount);
}

function renderPagination(pageCount) {
  pagination.innerHTML = '';
  if (pageCount < 2) return;
  for (let index = 1; index <= pageCount; index += 1) {
    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = index;
    button.classList.toggle('is-active', index === state.page);
    button.addEventListener('click', () => {
      state.page = index;
      renderCatalog();
      document.querySelector('#catalog').scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
    pagination.appendChild(button);
  }
}

function toggleFavorite(id) {
  state.favorites = state.favorites.includes(id)
    ? state.favorites.filter((item) => item !== id)
    : [...state.favorites, id];
  saveList(favoritesKey, state.favorites);
  renderCatalog();
}

function addToCart(id, open = false) {
  if (!state.cart.includes(id)) {
    state.cart.push(id);
    saveList(cartKey, state.cart);
  }
  updateCart();
  if (open) openCart();
}

function removeFromCart(id) {
  state.cart = state.cart.filter((item) => item !== id);
  saveList(cartKey, state.cart);
  updateCart();
}

function updateCart() {
  cartCount.textContent = state.cart.length;
  const items = allTrademarks().filter((item) => state.cart.includes(item.id));
  selectedInput.value = items.map((item) => `${item.title}: ${item.registry}`).join('\n');
  cartItems.innerHTML = items.length
    ? items.map((item) => `
      <div class="cart-item">
        <div>
          <strong>${item.title}</strong>
          <div>${item.price}; МКТУ: ${item.classes.join(', ')}</div>
        </div>
        <button type="button" data-remove="${item.id}">Убрать</button>
      </div>
    `).join('')
    : '<p>Добавьте один или несколько товарных знаков в заявку.</p>';

  cartItems.querySelectorAll('[data-remove]').forEach((button) => {
    button.addEventListener('click', () => removeFromCart(button.dataset.remove));
  });
}

function openCart() {
  updateCart();
  modal.hidden = false;
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  modal.hidden = true;
  document.body.style.overflow = '';
}

function bindControls() {
  searchInput.addEventListener('input', (event) => {
    state.search = event.target.value.trim();
    state.page = 1;
    renderCatalog();
  });
  classFilter.addEventListener('change', (event) => {
    state.classFilter = event.target.value;
    state.page = 1;
    renderCatalog();
  });
  discountFilter.addEventListener('change', (event) => {
    state.discountFilter = event.target.value;
    state.page = 1;
    renderCatalog();
  });
  businessFilter.addEventListener('change', (event) => {
    state.businessFilter = event.target.value;
    state.page = 1;
    renderCatalog();
  });
  sortSelect.addEventListener('change', (event) => {
    state.sort = event.target.value;
    state.page = 1;
    renderCatalog();
  });
  document.querySelector('[data-reset]').addEventListener('click', () => {
    state.search = '';
    state.classFilter = '';
    state.discountFilter = '';
    state.businessFilter = '';
    state.sort = 'default';
    state.page = 1;
    searchInput.value = '';
    classFilter.value = '';
    discountFilter.value = '';
    businessFilter.value = '';
    sortSelect.value = 'default';
    renderCatalog();
  });
  document.querySelector('[data-open-cart]').addEventListener('click', openCart);
  document.querySelector('[data-close-cart]').addEventListener('click', closeCart);
  modal.addEventListener('click', (event) => {
    if (event.target === modal) closeCart();
  });
}

function bindForms() {
  document.querySelector('[data-lead-form]').addEventListener('submit', (event) => {
    event.preventDefault();
    document.querySelector('[data-lead-status]').textContent = 'Заявка собрана локально. Следующий шаг - подключить отправку в PatentVsem.';
  });

  document.querySelector('[data-place-form]').addEventListener('submit', (event) => {
    event.preventDefault();
    event.currentTarget.reset();
    document.querySelector('[data-place-status]').textContent = 'Заявка на размещение собрана локально.';
  });

  document.querySelector('[data-admin-form]').addEventListener('submit', (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const item = {
      id: form.get('certificate').trim(),
      title: form.get('title').trim(),
      classes: form.get('classes').split(',').map((value) => Number(value.trim())).filter(Boolean),
      price: form.get('price').trim(),
      minPrice: Number((form.get('price').match(/\d+/) || ['100000'])[0]) || 100000,
      discount: form.get('discount') === 'on',
      business: form.get('business').split(',').map((value) => value.trim()).filter(Boolean),
      registry: `${registryBase}${encodeURIComponent(form.get('certificate').trim())}`
    };
    const custom = loadList(customKey).filter((stored) => stored.id !== item.id);
    custom.push(item);
    saveList(customKey, custom);
    event.currentTarget.reset();
    document.querySelector('[data-admin-status]').textContent = 'Знак добавлен в локальный каталог.';
    classFilter.querySelectorAll('option:not(:first-child)').forEach((option) => option.remove());
    businessFilter.querySelectorAll('option:not(:first-child)').forEach((option) => option.remove());
    renderFilters();
    renderCatalog();
  });
}

renderFilters();
bindControls();
bindForms();
updateCart();
renderCatalog();
