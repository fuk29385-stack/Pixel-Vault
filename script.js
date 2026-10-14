"use strict";

const products = [
  { id: "elden-ring", name: "Elden Ring", developer: "FromSoftware", genre: "RPG", year: 2022, price: 3499, rating: 4.9, popularity: 98, badge: "ИГРА ГОДА", badgeStyle: "purple", tags: ["Souls-like", "Открытый мир"], image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa7sTcTbDXqXdAOBIjnxHFyPKl-Brr2MjyAax2K75Vjw&s=10", description: "Отправляйся в Междуземье — огромный мир, полный загадок, могущественных врагов и историй, которые ты напишешь сам." },
  { id: "cyberpunk-2077", name: "Cyberpunk 2077", developer: "CD Projekt Red", genre: "RPG", year: 2020, price: 2799, rating: 4.8, popularity: 96, badge: "ВЫБОР ИГРОКОВ", badgeStyle: "purple", tags: ["RPG", "Киберпанк"], image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdWqq2uJL8jUvdxKcMk1SndnSgd3XVmcAAi_6rF8513Q&s=10", description: "Погрузись в Найт-Сити — мегаполис будущего, где каждое решение меняет историю наёмника V." },
  { id: "black-myth-wukong", name: "Black Myth: Wukong", developer: "Game Science", genre: "Экшен", year: 2024, price: 3199, rating: 4.9, popularity: 94, badge: "ТОП ПРОДАЖ", badgeStyle: "orange", tags: ["Экшен", "Фэнтези"], image: "https://thumb.wikimedia.org/wikipedia/en/thumb/a/a6/Black_Myth_Wukong_cover_art.jpg/250px-Black_Myth_Wukong_cover_art.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail", description: "Стань Избранным и раскрой правду, скрывающуюся за легендарным путешествием на Запад." },
  { id: "hades-2", name: "Hades II", developer: "Supergiant Games", genre: "Инди", year: 2025, price: 1899, rating: 4.9, popularity: 92, badge: "НОВИНКА", badgeStyle: "purple", tags: ["Рогалик", "Мифология"], image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU13ZVB2O-I8mIFIvBwYxVK7MgxpQ8k4GDk-6MShtK9Q&s=10", description: "Сразись с Титаном Времени в новом мифическом рогалике от создателей Hades." },
  { id: "gta-vi", name: "Grand Theft Auto VI", developer: "Rockstar Games", genre: "Экшен", year: 2026, price: 5999, rating: 5.0, popularity: 100, badge: "2026 · ОЖИДАЕМ", badgeStyle: "orange", tags: ["Открытый мир", "Экшен"], image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSpROW72qhJzm126Psbg_Hi5LVD3s96EdWPWO3FFKquc7FdlIzC68H-8c&s=10", description: "Долгожданное возвращение в штат Леонида. Добавь игру в коллекцию и будь готов к новому приключению." },
  { id: "doom-dark-ages", name: "DOOM: The Dark Ages", developer: "id Software", genre: "Экшен", year: 2025, price: 2999, rating: 4.8, popularity: 90, badge: "НОВИНКА", badgeStyle: "", tags: ["Шутер", "Экшен"], image: "https://upload.wikimedia.org/wikipedia/en/7/7f/DOOM%2C_The_Dark_Ages_Game_Cover.jpeg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original", description: "Стань Палачом Рока в мрачной средневековой войне против сил ада." },
  { id: "forza-horizon-5", name: "Forza Horizon 5", developer: "Playground Games", genre: "Гонки", year: 2021, price: 2199, rating: 4.7, popularity: 86, badge: "", badgeStyle: "", tags: ["Гонки", "Открытый мир"], image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3eTRClhbMdrniNJTCO3yQNyplrr3_0EwuxQbmIEFVyA&s=10", description: "Исследуй красочную Мексику и участвуй в крупнейшем фестивале Horizon." },
  { id: "baldurs-gate-3", name: "Baldur's Gate 3", developer: "Larian Studios", genre: "RPG", year: 2023, price: 3299, rating: 5.0, popularity: 97, badge: "ИГРА ГОДА", badgeStyle: "purple", tags: ["RPG", "Фэнтези"], image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDWMNSiUTbd9RK5aWzLsrVEoyOqOdyrIhZSGHCTAUJIBfEytUkRxgyljnt&s=10", description: "Собери отряд, выбери свой путь и отправься в эпическое приключение по миру Dungeons & Dragons." },
  { id: "silksong", name: "Hollow Knight: Silksong", developer: "Team Cherry", genre: "Приключения", year: 2025, price: 1599, rating: 4.9, popularity: 93, badge: "НОВИНКА", badgeStyle: "purple", tags: ["Метроидвания", "Инди"], image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgPFOqucGADO1w1l4eG9DwYT4clWyygO8bzyXS6n80Rw&s=10", description: "Исследуй королевство шелка и песен в продолжении любимой приключенческой игры." },
  { id: "fc-26", name: "EA SPORTS FC 26", developer: "EA Sports", genre: "Спорт", year: 2026, price: 4999, rating: 4.6, popularity: 88, badge: "2026 · НОВИНКА", badgeStyle: "", tags: ["Футбол", "Спорт"], image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMndxQhKYouV4N3Jei7lo0mMJxl5cIWyIkW9SJSTJ7LOipUfT-9lOm878&s=10", description: "Выходи на поле и создай свою футбольную историю в новом сезоне EA SPORTS FC." },
  { id: "minecraft", name: "Minecraft", developer: "Mojang Studios", genre: "Приключения", year: 2011, price: 1299, rating: 4.8, popularity: 95, badge: "КЛАССИКА", badgeStyle: "orange", tags: ["Песочница", "Кооператив"], image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQQuoCKLXvMRkrFU4IZymmfw_QN0P1JUm6nZ-HhNvVGguAT6WB1hhqnLc&s=10", description: "Строй, исследуй и выживай в мире, ограниченном только твоим воображением." },
  { id: "stardew-valley", name: "Stardew Valley", developer: "ConcernedApe", genre: "Инди", year: 2016, price: 699, rating: 4.9, popularity: 89, badge: "ИНДИ-ХИТ", badgeStyle: "purple", tags: ["Симулятор", "Инди"], image: "https://upload.wikimedia.org/wikipedia/en/f/fd/Logo_of_Stardew_Valley.png?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original", description: "Начни новую жизнь на старой ферме, подружись с жителями долины и создай своё уютное место." },
  { id: "resident-evil-4", name: "Resident Evil 4", developer: "Capcom", genre: "Экшен", year: 2023, price: 2499, rating: 4.8, popularity: 87, badge: "", badgeStyle: "", tags: ["Хоррор", "Экшен"], image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA-Ty-EVDyUmr-XdGwdKK9Qx6vApooK3CyOZK6D22kfQ&s=10", description: "Леон Кеннеди отправляется в отдалённую европейскую деревню на поиски дочери президента." },
  { id: "silksong-2", name: "Sea of Stars", developer: "Sabotage Studio", genre: "RPG", year: 2023, price: 1399, rating: 4.7, popularity: 78, badge: "СОВЕТУЕМ", badgeStyle: "orange", tags: ["JRPG", "Инди"], image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8CH2kk7-OedSjcNBCmuRd2QoX2KIuUfLN1-4MvkQO2stVqv12l1XRygQ&s=10", description: "Классическое приключение с современной боевой системой и историей о двух солнцестоящих магах." },
  { id: "alan-wake-2", name: "Alan Wake 2", developer: "Remedy Entertainment", genre: "Приключения", year: 2023, price: 2899, rating: 4.8, popularity: 84, badge: "", badgeStyle: "", tags: ["Хоррор", "Триллер"], image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT08_2uzBoeKjDwYo5XjeIb5p_ziKJt7837fMY7fg8uwg&s=10", description: "Два героя в двух мирах. Психологический триллер, где свет — твой главный инструмент." },
  { id: "no-mans-sky", name: "No Man's Sky", developer: "Hello Games", genre: "Приключения", year: 2016, price: 1799, rating: 4.6, popularity: 80, badge: "", badgeStyle: "", tags: ["Космос", "Песочница"], image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTemFM0_JmjFPabjSVfRabih_EVCLs07u7x3v-pR_VwkNRB2HWiNWzRw0w&s=10", description: "Исследуй бесконечную вселенную, открывай планеты и строй собственную космическую базу." },
  { id: "hades", name: "Hades", developer: "Supergiant Games", genre: "Инди", year: 2020, price: 999, rating: 4.9, popularity: 91, badge: "ИНДИ-ХИТ", badgeStyle: "purple", tags: ["Рогалик", "Экшен"], image: "https://upload.wikimedia.org/wikipedia/en/c/cc/Hades_cover_art.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original", description: "Сражайся с богами подземного мира в стремительном рогалике с неповторимой историей." }
];

const bundles = {
  "Genshin Impact": [{ amount: "300 кристаллов", price: 299 }, { amount: "980 кристаллов", price: 899 }, { amount: "1980 кристаллов", price: 1799 }, { amount: "3280 кристаллов", price: 2899 }, { amount: "6480 кристаллов", price: 5499 }, { amount: "Благословение", price: 449 }],
  Valorant: [{ amount: "475 VP", price: 399 }, { amount: "1000 VP", price: 799 }, { amount: "2050 VP", price: 1599 }, { amount: "3650 VP", price: 2799 }, { amount: "5350 VP", price: 3999 }, { amount: "11000 VP", price: 7999 }],
  Fortnite: [{ amount: "800 V-баксов", price: 599 }, { amount: "1200 V-баксов", price: 899 }, { amount: "2800 V-баксов", price: 1999 }, { amount: "5000 V-баксов", price: 3299 }, { amount: "13500 V-баксов", price: 7999 }, { amount: "Боевой пропуск", price: 799 }],
  "PUBG Mobile": [{ amount: "60 UC", price: 99 }, { amount: "325 UC", price: 449 }, { amount: "660 UC", price: 899 }, { amount: "1800 UC", price: 2199 }, { amount: "3850 UC", price: 4499 }, { amount: "8100 UC", price: 8999 }]
};

const RUB_TO_KZT = 5;
const MAX_WALLET_BALANCE = 50000;
const MAX_TOPUP_AMOUNT = 50000;
const convertRubPriceToKzt = (amount) => Math.round((amount * RUB_TO_KZT) / 100) * 100;
products.forEach((product) => {
  product.price = convertRubPriceToKzt(product.price);
});
Object.values(bundles).flat().forEach((bundle) => {
  bundle.price = convertRubPriceToKzt(bundle.price);
});

const formatPrice = (value) => new Intl.NumberFormat("ru-KZ").format(value) + " ₸";
const readStorage = (key, fallback) => {
  try {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : fallback;
  } catch (error) {
    console.error(`Не удалось прочитать ${key} из localStorage:`, error);
    return fallback;
  }
};
const saveStorage = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (error) {
    console.error(`Не удалось сохранить ${key} в localStorage:`, error);
    showToast("Не удалось сохранить изменения. Проверьте настройки браузера.", "error");
    return false;
  }
};

const storedCart = readStorage("pixelVaultCart", []);
const cart = (Array.isArray(storedCart) ? storedCart : []).filter((entry) => entry && products.some((product) => product.id === entry.id) && Number.isInteger(entry.quantity) && entry.quantity > 0);
const savedAccountKzt = readStorage("pixelVaultAccountKzt", null);
const legacyAccount = savedAccountKzt === null ? readStorage("pixelVaultAccount", null) : null;
const migrateLegacyAccount = savedAccountKzt === null && legacyAccount !== null;
const storedAccount = savedAccountKzt ?? legacyAccount ?? { balance: 0, orders: [] };
const account = storedAccount && typeof storedAccount === "object" ? storedAccount : { balance: 0, orders: [] };
account.balance = Number.isFinite(account.balance) && account.balance >= 0 ? account.balance : 0;
account.orders = Array.isArray(account.orders) ? account.orders : [];
if (migrateLegacyAccount) {
  account.balance = Math.round(account.balance * RUB_TO_KZT);
  account.orders = account.orders.map((order) => ({
    ...order,
    amount: Number.isFinite(Number(order.amount)) ? Math.round(Number(order.amount) * RUB_TO_KZT) : 0
  }));
}
let activeGenre = "";
let selectedBundleIndex = 0;
let showAllProducts = false;

const productGrid = document.querySelector("#product-grid");
const searchInput = document.querySelector("#search-input");
const yearFilter = document.querySelector("#year-filter");
const developerFilter = document.querySelector("#developer-filter");
const genreFilter = document.querySelector("#genre-filter");
const priceFilter = document.querySelector("#price-filter");
const sortSelect = document.querySelector("#sort-select");
const overlay = document.querySelector("#overlay");
const cartPanel = document.querySelector("#cart-panel");
const quickModal = document.querySelector("#quick-modal");
const accountModal = document.querySelector("#account-modal");

function showToast(message, type = "success") {
  const region = document.querySelector("#toast-region");
  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.textContent = message;
  region.append(toast);
  window.setTimeout(() => toast.remove(), 3400);
}

function populateFilters() {
  [...new Set(products.map((product) => product.year))].sort((a, b) => b - a).forEach((year) => {
    const option = document.createElement("option");
    option.value = String(year);
    option.textContent = String(year);
    yearFilter.append(option);
  });
  [...new Set(products.map((product) => product.developer))].sort((a, b) => a.localeCompare(b, "ru")).forEach((developer) => {
    const option = document.createElement("option");
    option.value = developer;
    option.textContent = developer;
    developerFilter.append(option);
  });
  [...new Set(products.map((product) => product.genre))].sort((a, b) => a.localeCompare(b, "ru")).forEach((genre) => {
    const option = document.createElement("option");
    option.value = genre;
    option.textContent = genre;
    genreFilter.append(option);
  });
}

function renderProducts() {
  const query = searchInput.value.trim().toLocaleLowerCase("ru");
  const maxPrice = Number(priceFilter.value);
  const filtered = products.filter((product) => {
    return product.name.toLocaleLowerCase("ru").includes(query)
      && (!yearFilter.value || product.year === Number(yearFilter.value))
      && (!developerFilter.value || product.developer === developerFilter.value)
      && (!genreFilter.value || product.genre === genreFilter.value)
      && (!activeGenre || product.genre === activeGenre)
      && (!priceFilter.value || (Number.isFinite(maxPrice) && product.price <= maxPrice));
  });
  const sorters = {
    popular: (a, b) => b.popularity - a.popularity,
    "price-asc": (a, b) => a.price - b.price,
    "price-desc": (a, b) => b.price - a.price,
    "date-desc": (a, b) => b.year - a.year || b.popularity - a.popularity,
    "date-asc": (a, b) => a.year - b.year || b.popularity - a.popularity
  };
  filtered.sort(sorters[sortSelect.value] || sorters.popular);
  document.querySelector("#results-count").textContent = `Найдено ${filtered.length} ${getNoun(filtered.length, "игра", "игры", "игр")}`;
  document.querySelector("#empty-state").classList.toggle("hidden", filtered.length > 0);
  document.querySelector("#product-grid").classList.toggle("hidden", filtered.length === 0);
  document.querySelector("#show-more").classList.toggle("hidden", filtered.length <= 8);
  document.querySelector("#show-more").innerHTML = showAllProducts ? "Показать меньше <span>↑</span>" : "Показать ещё <span>↓</span>";

  productGrid.replaceChildren(...filtered.slice(0, showAllProducts ? filtered.length : 8).map((product, index) => {
    const card = document.createElement("article");
    card.className = "product-card";
    card.style.animationDelay = `${Math.min(index, 7) * 35}ms`;
    card.innerHTML = `
      <div class="product-cover">
        <img src="${product.image}" alt="Обложка игры ${product.name}" loading="lazy">
        <div class="cover-shade"></div>
        ${product.badge ? `<span class="product-badge ${product.badgeStyle}">${product.badge}</span>` : ""}
        <button class="quick-button" type="button" data-quick="${product.id}" aria-label="Быстрый просмотр ${product.name}">↗</button>
      </div>
      <div class="product-content">
        <div class="product-meta"><span>${product.year} · ${product.genre}</span><span class="product-rating">★ ${product.rating.toFixed(1)}</span></div>
        <h3 title="${product.name}">${product.name}</h3>
        <div class="product-developer">${product.developer}</div>
        <div class="tag-list">${product.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}</div>
        <div class="product-buy-row"><strong class="product-price">${formatPrice(product.price)}</strong><button class="product-buy-button" type="button" data-add="${product.id}" aria-label="Добавить ${product.name} в корзину">+</button></div>
      </div>`;
    return card;
  }));
}

function getNoun(count, one, few, many) {
  const value = Math.abs(count) % 100;
  const last = value % 10;
  if (value > 10 && value < 20) return many;
  if (last > 1 && last < 5) return few;
  if (last === 1) return one;
  return many;
}

function updateCart() {
  saveStorage("pixelVaultCart", cart);
  const count = cart.reduce((total, entry) => total + entry.quantity, 0);
  document.querySelector("#cart-count").textContent = String(count);
  document.querySelector("#panel-cart-count").textContent = String(count);
  const items = document.querySelector("#cart-items");
  items.replaceChildren(...cart.map((entry) => {
    const product = products.find((item) => item.id === entry.id);
    const row = document.createElement("div");
    row.className = "cart-item";
    row.innerHTML = `
      <img src="${product.image}" alt="">
      <div><h3>${product.name}</h3><span>${formatPrice(product.price)} / шт.</span>
        <div class="quantity-control"><button type="button" data-quantity="${product.id}" data-delta="-1" aria-label="Уменьшить количество">−</button><span>${entry.quantity}</span><button type="button" data-quantity="${product.id}" data-delta="1" aria-label="Увеличить количество">+</button></div>
      </div>
      <div class="cart-item-end"><strong>${formatPrice(product.price * entry.quantity)}</strong><button class="remove-item" type="button" data-remove="${product.id}">Удалить</button></div>`;
    return row;
  }));
  const empty = cart.length === 0;
  document.querySelector("#cart-empty").classList.toggle("visible", empty);
  document.querySelector("#cart-summary").classList.toggle("hidden", empty);
  document.querySelector("#cart-total").textContent = formatPrice(cart.reduce((total, entry) => total + products.find((product) => product.id === entry.id).price * entry.quantity, 0));
}

function addToCart(id) {
  const entry = cart.find((item) => item.id === id);
  if (entry) entry.quantity += 1;
  else cart.push({ id, quantity: 1 });
  updateCart();
  showToast(`${products.find((product) => product.id === id).name} добавлена в корзину`);
}

function openLayer(layer) {
  closeLayers(false);
  overlay.classList.add("active");
  layer.classList.add("open");
  layer.setAttribute("aria-hidden", "false");
  document.body.classList.add("no-scroll");
  if (layer === cartPanel) document.querySelector("#cart-button")?.focus();
}

function closeLayers(clearOverlay = true) {
  [cartPanel, quickModal, accountModal].forEach((layer) => {
    layer.classList.remove("open");
    layer.setAttribute("aria-hidden", "true");
  });
  document.querySelector("#main-nav").classList.remove("open");
  document.querySelector(".mobile-menu-toggle").setAttribute("aria-expanded", "false");
  if (clearOverlay) overlay.classList.remove("active");
  document.body.classList.remove("no-scroll");
}

function openQuickView(id) {
  const product = products.find((item) => item.id === id);
  if (!product) return;
  document.querySelector("#quick-content").innerHTML = `
    <img class="quick-cover" src="${product.image}" alt="Обложка игры ${product.name}">
    <div class="quick-info">
      <div class="product-meta"><span>${product.year} · ${product.genre}</span><span class="product-rating">★ ${product.rating.toFixed(1)}</span></div>
      <h2 id="quick-title">${product.name}</h2><div class="product-developer">${product.developer}</div>
      <p>${product.description}</p>
      <div class="quick-detail-line"><span>Разработчик</span><strong>${product.developer}</strong></div>
      <div class="quick-detail-line"><span>Дата выхода</span><strong>${product.year}</strong></div>
      <div class="quick-detail-line"><span>Жанр</span><strong>${product.genre}</strong></div>
      <div class="quick-buy"><strong>${formatPrice(product.price)}</strong><button class="button button-primary" type="button" data-add="${product.id}">В корзину <span>+</span></button></div>
    </div>`;
  openLayer(quickModal);
}

function updateAccount() {
  document.querySelector("#header-balance").textContent = formatPrice(account.balance);
  document.querySelector("#account-balance").textContent = formatPrice(account.balance);
  const walletInput = document.querySelector("#wallet-amount");
  const availableTopup = Math.max(0, Math.min(MAX_TOPUP_AMOUNT, MAX_WALLET_BALANCE - account.balance));
  walletInput.max = String(availableTopup);
  document.querySelector("#wallet-limit").textContent = `Лимит баланса — ${formatPrice(MAX_WALLET_BALANCE)}. Доступно пополнить: ${formatPrice(availableTopup)}.`;
  const list = document.querySelector("#order-list");
  if (account.orders.length === 0) {
    list.innerHTML = '<div class="order-empty">Здесь появятся твои покупки и пополнения.</div>';
    return;
  }
  list.replaceChildren(...account.orders.slice(0, 8).map((order) => {
    const item = document.createElement("div");
    item.className = "order-entry";
    const description = document.createElement("div");
    const title = document.createElement("strong");
    title.textContent = String(order.title || "Покупка");
    const date = document.createElement("span");
    date.textContent = String(order.date || "");
    const amount = document.createElement("strong");
    amount.textContent = formatPrice(Number.isFinite(Number(order.amount)) ? Number(order.amount) : 0);
    description.append(title, date);
    item.append(description, amount);
    return item;
  }));
}

function saveAccount() {
  const saved = saveStorage("pixelVaultAccountKzt", account);
  updateAccount();
  return saved;
}

function renderBundles() {
  const game = document.querySelector("#game-select").value;
  const options = bundles[game];
  selectedBundleIndex = Math.min(selectedBundleIndex, options.length - 1);
  document.querySelector("#coin-options").replaceChildren(...options.map((bundle, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `coin-option${index === selectedBundleIndex ? " selected" : ""}`;
    button.dataset.bundle = String(index);
    button.innerHTML = `<strong>${bundle.amount}</strong><span>${formatPrice(bundle.price)}</span>`;
    return button;
  }));
  document.querySelector("#topup-price").textContent = formatPrice(options[selectedBundleIndex].price);
  const icons = { "Genshin Impact": "✦", Valorant: "◉", Fortnite: "◆", "PUBG Mobile": "▣" };
  document.querySelector("#selected-game-icon").textContent = icons[game];
}

function recordOrder(title, amount) {
  account.orders.unshift({ title, amount, date: new Intl.DateTimeFormat("ru-RU", { dateStyle: "medium", timeStyle: "short" }).format(new Date()) });
}

function payFromWallet(title, amount) {
  if (!Number.isFinite(amount) || amount <= 0) {
    showToast("Не удалось определить сумму покупки.", "error");
    return false;
  }
  if (account.balance < amount) {
    showToast(`Недостаточно средств. Не хватает ${formatPrice(amount - account.balance)}.`, "error");
    return false;
  }

  const previousBalance = account.balance;
  const previousOrders = account.orders;
  account.balance -= amount;
  account.orders = [{ title, amount, date: new Intl.DateTimeFormat("ru-RU", { dateStyle: "medium", timeStyle: "short" }).format(new Date()) }, ...previousOrders];
  if (!saveAccount()) {
    account.balance = previousBalance;
    account.orders = previousOrders;
    updateAccount();
    return false;
  }
  return true;
}

function resetFilters() {
  searchInput.value = "";
  yearFilter.value = "";
  developerFilter.value = "";
  genreFilter.value = "";
  priceFilter.value = "";
  sortSelect.value = "popular";
  activeGenre = "";
  showAllProducts = false;
  document.querySelectorAll(".category-chip").forEach((chip) => chip.classList.toggle("selected", chip.dataset.genre === "Все игры"));
  renderProducts();
}

document.querySelectorAll(".category-chip").forEach((chip) => chip.addEventListener("click", () => {
  activeGenre = chip.dataset.genre === "Все игры" ? "" : chip.dataset.genre;
  genreFilter.value = activeGenre;
  document.querySelectorAll(".category-chip").forEach((item) => item.classList.toggle("selected", item === chip));
  renderProducts();
}));
 [searchInput, yearFilter, developerFilter, priceFilter, sortSelect].forEach((control) => control.addEventListener("input", renderProducts));
genreFilter.addEventListener("change", () => {
  activeGenre = "";
  document.querySelectorAll(".category-chip").forEach((chip) => chip.classList.toggle("selected", chip.dataset.genre === "Все игры" && !genreFilter.value));
  showAllProducts = false;
  renderProducts();
});
document.querySelector("#reset-filters").addEventListener("click", resetFilters);
document.querySelector("#empty-reset").addEventListener("click", resetFilters);
document.querySelector("#show-more").addEventListener("click", () => {
  showAllProducts = !showAllProducts;
  renderProducts();
});
productGrid.addEventListener("click", (event) => {
  const addButton = event.target.closest("[data-add]");
  const quickButton = event.target.closest("[data-quick]");
  if (addButton) addToCart(addButton.dataset.add);
  if (quickButton) openQuickView(quickButton.dataset.quick);
});
document.querySelector("#quick-content").addEventListener("click", (event) => {
  const addButton = event.target.closest("[data-add]");
  if (addButton) addToCart(addButton.dataset.add);
});
document.querySelector("#cart-items").addEventListener("click", (event) => {
  const removeButton = event.target.closest("[data-remove]");
  const quantityButton = event.target.closest("[data-quantity]");
  if (removeButton) {
    const index = cart.findIndex((item) => item.id === removeButton.dataset.remove);
    if (index !== -1) cart.splice(index, 1);
    updateCart();
  }
  if (quantityButton) {
    const entry = cart.find((item) => item.id === quantityButton.dataset.quantity);
    if (entry) entry.quantity += Number(quantityButton.dataset.delta);
    const index = cart.findIndex((item) => item.quantity < 1);
    if (index !== -1) cart.splice(index, 1);
    updateCart();
  }
});

document.querySelectorAll("[data-open-cart]").forEach((button) => button.addEventListener("click", () => openLayer(cartPanel)));
document.querySelectorAll("[data-open-account]").forEach((button) => button.addEventListener("click", () => {
  updateAccount();
  openLayer(accountModal);
}));
document.querySelectorAll("[data-close]").forEach((button) => button.addEventListener("click", () => closeLayers()));
overlay.addEventListener("click", () => closeLayers());
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeLayers();
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
    event.preventDefault();
    searchInput.focus();
    document.querySelector("#catalog").scrollIntoView({ behavior: "smooth" });
  }
});

document.querySelector("#main-nav").addEventListener("click", (event) => {
  if (event.target.closest("a")) closeLayers();
});
document.querySelector(".mobile-menu-toggle").addEventListener("click", (event) => {
  const button = event.currentTarget;
  const isOpen = document.querySelector("#main-nav").classList.toggle("open");
  button.setAttribute("aria-expanded", String(isOpen));
});

document.querySelector("#checkout-button").addEventListener("click", () => {
  if (cart.length === 0) return;
  const total = cart.reduce((sum, entry) => sum + products.find((product) => product.id === entry.id).price * entry.quantity, 0);
  if (!payFromWallet(`Покупка игр (${cart.length})`, total)) return;
  cart.splice(0, cart.length);
  updateCart();
  closeLayers();
  showToast(`Заказ оплачен. Списано ${formatPrice(total)}.`);
});

document.querySelector("#game-select").addEventListener("change", () => {
  selectedBundleIndex = 0;
  renderBundles();
});
document.querySelector("#coin-options").addEventListener("click", (event) => {
  const button = event.target.closest("[data-bundle]");
  if (!button) return;
  selectedBundleIndex = Number(button.dataset.bundle);
  renderBundles();
});
document.querySelector("#topup-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const game = document.querySelector("#game-select").value;
  const bundle = bundles[game][selectedBundleIndex];
  if (!payFromWallet(`${game} · ${bundle.amount}`, bundle.price)) return;
  showToast(`${game} пополнена. Списано ${formatPrice(bundle.price)}.`);
});

document.querySelector("#wallet-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const input = document.querySelector("#wallet-amount");
  const amount = Number(input.value);
  if (!Number.isSafeInteger(amount) || amount < 1000) {
    showToast("Минимальная сумма пополнения — 1 000 ₸.", "error");
    return;
  }
  if (amount > MAX_TOPUP_AMOUNT) {
    showToast(`За один раз можно пополнить не более ${formatPrice(MAX_TOPUP_AMOUNT)}.`, "error");
    return;
  }
  if (account.balance + amount > MAX_WALLET_BALANCE) {
    showToast(`Баланс не может превышать ${formatPrice(MAX_WALLET_BALANCE)}. Доступно пополнить ${formatPrice(MAX_WALLET_BALANCE - account.balance)}.`, "error");
    return;
  }
  const previousBalance = account.balance;
  const previousOrders = account.orders;
  account.balance += amount;
  account.orders = [{ title: "Пополнение кошелька", amount, date: new Intl.DateTimeFormat("ru-RU", { dateStyle: "medium", timeStyle: "short" }).format(new Date()) }, ...previousOrders];
  if (!saveAccount()) {
    account.balance = previousBalance;
    account.orders = previousOrders;
    updateAccount();
    return;
  }
  input.value = "";
  showToast(`Кошелёк пополнен на ${formatPrice(amount)}. Демо-оплата завершена.`);
});

document.querySelector("#newsletter-form").addEventListener("submit", (event) => {
  event.preventDefault();
  showToast("Готово! Ты подписан на новости Pixel Vault.");
  event.currentTarget.reset();
});

document.querySelector("#current-year").textContent = String(new Date().getFullYear());
populateFilters();
renderProducts();
renderBundles();
updateCart();
updateAccount();
if (migrateLegacyAccount) saveAccount();
