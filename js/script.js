// ── FORMS DATA ──
const loginForm = `
  <div class="form-group">
    <label class="form-label">Correo electrónico</label>
    <input class="form-input" type="email" placeholder="tucorreo@ejemplo.com" required />
  </div>
  <div class="form-group">
    <label class="form-label">Contraseña</label>
    <input class="form-input" type="password" placeholder="••••••••" required />
  </div>
  <button class="modal-submit" onclick="handleLogin(event)">Ingresar a ConnectModa</button>
  <p style="text-align:center;margin-top:1rem;font-size:0.8rem;color:var(--muted)">
    ¿Olvidaste tu contraseña? <a href="#" style="color:var(--accent);cursor:pointer;">Recupérala aquí</a>
  </p>
`;

const registerForm = `
  <div class="form-group">
    <label class="form-label">Nombre completo</label>
    <input class="form-input" type="text" placeholder="Tu nombre" required />
  </div>
  <div class="form-group">
    <label class="form-label">Correo electrónico</label>
    <input class="form-input" type="email" placeholder="tucorreo@ejemplo.com" required />
  </div>
  <div class="form-group">
    <label class="form-label">Tipo de cuenta</label>
    <select class="form-select" required>
      <option value="">Selecciona tu tipo de cuenta</option>
      <option value="usuario">Usuario — Quiero explorar y comprar</option>
      <option value="emprendedor">Emprendedor — Quiero vender mis productos</option>
    </select>
  </div>
  <div class="form-group">
    <label class="form-label">Contraseña</label>
    <input class="form-input" type="password" placeholder="Mínimo 8 caracteres" required />
  </div>
  <button class="modal-submit" onclick="handleRegister(event)">Crear mi cuenta gratis</button>
  <p style="text-align:center;margin-top:0.75rem;font-size:0.75rem;color:var(--muted)">
    Al registrarte aceptas nuestros <a href="#" style="color:var(--accent);cursor:pointer;">términos de uso</a> y <a href="#" style="color:var(--accent);cursor:pointer;">política de privacidad</a>.
  </p>
`;

const registerEmpForm = `
  <div class="form-group">
    <label class="form-label">Nombre del negocio</label>
    <input class="form-input" type="text" placeholder="Ej: Luna Textil" required />
  </div>
  <div class="form-group">
    <label class="form-label">Categoría principal</label>
    <select class="form-select" required>
      <option value="">Selecciona una categoría</option>
      <option value="ropa-mujer">Ropa Mujer</option>
      <option value="ropa-hombre">Ropa Hombre</option>
      <option value="accesorios">Accesorios</option>
      <option value="moda-infantil">Moda Infantil</option>
    </select>
  </div>
  <div class="form-group">
    <label class="form-label">Ciudad</label>
    <input class="form-input" type="text" placeholder="Ej: Valledupar, Cesar" required />
  </div>
  <div class="form-group">
    <label class="form-label">Correo de contacto</label>
    <input class="form-input" type="email" placeholder="negocio@ejemplo.com" required />
  </div>
  <button class="modal-submit" onclick="handleRegisterEmp(event)">Registrar mi emprendimiento</button>
`;

// ── DATA BRANDS ──
const brandsData = [
  {
    id: 1,
    name: 'Luna Textil',
    avatar: '🌙',
    avatarClass: 'av1',
    category: 'Ropa Mujer',
    city: 'Bogotá',
    description: 'Ropa femenina con tejidos artesanales colombianos. Cada prenda cuenta una historia de tradición y contemporaneidad.',
    products: 84,
    rating: 4.9,
    likes: 1200,
    verified: true
  },
  {
    id: 2,
    name: 'Artesa Bags',
    avatar: '🎨',
    avatarClass: 'av2',
    category: 'Accesorios',
    city: 'Medellín',
    description: 'Bolsos y carteras hechos a mano en cuero natural, con diseños únicos inspirados en el arte latinoamericano.',
    products: 56,
    rating: 4.8,
    likes: 890,
    verified: false
  },
  {
    id: 3,
    name: 'Style Cap Co',
    avatar: '🧢',
    avatarClass: 'av3',
    category: 'Accesorios',
    city: 'Cali',
    description: 'Gorras y accesorios deportivos elaborados con materiales premium. Diseños modernos para tu estilo personal.',
    products: 38,
    rating: 4.7,
    likes: 640,
    verified: true
  },
  {
    id: 4,
    name: 'Lentes ArtCraft',
    avatar: '🕶️',
    avatarClass: 'av4',
    category: 'Accesorios',
    city: 'Barranquilla',
    description: 'Lentes de sol artesanales con técnicas de fabricación tradicionales. Protección y estilo garantizado.',
    products: 42,
    rating: 5.0,
    likes: 980,
    verified: true
  },
  {
    id: 5,
    name: 'Estilo Urbano Co',
    avatar: '🔵',
    avatarClass: 'av5',
    category: 'Ropa Hombre',
    city: 'Bucaramanga',
    description: 'Ropa urbana para hombres modernos: camisas, camisetas y pantalones con cortes actuales y tejidos premium.',
    products: 49,
    rating: 4.6,
    likes: 510,
    verified: false
  },
  {
    id: 6,
    name: 'Pequeños Gigantes',
    avatar: '🌸',
    avatarClass: 'av6',
    category: 'Moda Infantil',
    city: 'Pereira',
    description: 'Ropa colorida y cómoda para niños y niñas, con telas suaves libres de químicos y colores naturales.',
    products: 72,
    rating: 4.9,
    likes: 780,
    verified: true
  }
];

// ── DATA PRODUCTS ──
const productsData = [
  {
    id: 1,
    brand: 'Luna Textil',
    name: 'Vestido Boho Edición Verano',
    price: 185000,
    rating: 5,
    reviews: 48,
    category: 'Mujer',
    image: 'p1',
    icon: '👗',
    status: 'nuevo'
  },
  {
    id: 2,
    brand: 'Artesa Bags',
    name: 'Bolso Artesanal Trenzado',
    price: 240000,
    rating: 5,
    reviews: 31,
    category: 'Accesorio',
    image: 'p2',
    icon: '👜',
    status: 'popular'
  },
  {
    id: 3,
    brand: 'Style Cap Co',
    name: 'Gorra Moderna Premium',
    price: 65000,
    rating: 4,
    reviews: 22,
    category: 'Accesorio',
    image: 'p3',
    icon: '🧢',
    status: 'nuevo'
  },
  {
    id: 4,
    brand: 'Lentes ArtCraft',
    name: 'Lentes de Sol Artesanales',
    price: 120000,
    rating: 5,
    reviews: 67,
    category: 'Accesorio',
    image: 'p4',
    icon: '🕶️',
    status: 'popular'
  },
  {
    id: 5,
    brand: 'Estilo Urbano Co',
    name: 'Camisa Lino Premium',
    price: 145000,
    rating: 4,
    reviews: 14,
    category: 'Hombre',
    image: 'p5',
    icon: '👔',
    status: 'nuevo'
  },
  {
    id: 6,
    brand: 'Pequeños Gigantes',
    name: 'Conjunto Infantil Flores',
    price: 78000,
    rating: 5,
    reviews: 39,
    category: 'Infantil',
    image: 'p6',
    icon: '🎀',
    status: 'popular'
  },
  {
    id: 7,
    brand: 'Luna Textil',
    name: 'Chaqueta Tejida Wayuu',
    price: 310000,
    rating: 5,
    reviews: 52,
    category: 'Mujer',
    image: 'p7',
    icon: '🧥',
    status: 'oferta'
  },
  {
    id: 8,
    brand: 'Style Cap Co',
    name: 'Bufanda Artesanal Tejida',
    price: 95000,
    rating: 4,
    reviews: 28,
    category: 'Accesorio',
    image: 'p8',
    icon: '🧣',
    status: 'nuevo'
  }
];

// ── MODAL MANAGEMENT ──
let currentTab = 'login';

function openModal(type) {
  const overlay = document.getElementById('modal-overlay');
  const sub = document.getElementById('modal-sub');
  const tabs = document.getElementById('modal-tabs');
  const area = document.getElementById('modal-form-area');

  overlay.classList.add('open');

  if (type === 'register-emp') {
    sub.textContent = 'Registra tu emprendimiento de moda';
    tabs.style.display = 'none';
    area.innerHTML = registerEmpForm;
  } else if (type === 'register') {
    sub.textContent = 'Únete a ConnectModa hoy';
    tabs.style.display = 'flex';
    switchTab('register');
  } else {
    sub.textContent = 'Bienvenido de vuelta';
    tabs.style.display = 'flex';
    switchTab('login');
  }
  return false;
}

function closeModal() {
  document.getElementById('modal-overlay').classList.remove('open');
}

function handleOverlayClick(e) {
  if (e.target === document.getElementById('modal-overlay')) closeModal();
}

function switchTab(tab) {
  currentTab = tab;
  const tabs = document.querySelectorAll('.modal-tab');
  tabs.forEach((t, i) => {
    t.classList.toggle('active', (i === 0 && tab === 'login') || (i === 1 && tab === 'register'));
  });
  const area = document.getElementById('modal-form-area');
  const sub = document.getElementById('modal-sub');
  if (tab === 'login') {
    sub.textContent = 'Bienvenido de vuelta';
    area.innerHTML = loginForm;
  } else {
    sub.textContent = 'Únete a ConnectModa hoy';
    area.innerHTML = registerForm;
  }
}

function handleLogin(e) {
  e.preventDefault();
  closeModal();
  showToast('✓ Sesión iniciada exitosamente. ¡Bienvenido a ConnectModa!');
}

function handleRegister(e) {
  e.preventDefault();
  closeModal();
  showToast('🎉 ¡Cuenta creada! Revisa tu correo para confirmar tu registro.');
}

function handleRegisterEmp(e) {
  e.preventDefault();
  closeModal();
  showToast('🏪 ¡Emprendimiento registrado! Pronto será verificado por nuestro equipo.');
}

function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 4000);
}

// ── WISHLIST FUNCTIONALITY ──
function wishlist(btn) {
  if (btn.textContent === '🤍') {
    btn.textContent = '❤️';
    btn.style.background = '#ff6b9d';
    showToast('❤️ Producto añadido a tus favoritos');
  } else {
    btn.textContent = '🤍';
    btn.style.background = 'rgba(255,255,255,0.9)';
    showToast('Producto removido de tus favoritos');
  }
}

// ── TAG FUNCTIONALITY ──
function toggleTag(e) {
  if (e.target && e.target.classList.contains('tag-pill')) {
    e.target.classList.toggle('active');
  }
}

// ── FILTER FUNCTIONALITY ──
function setFilter(e, filter) {
  e.preventDefault();
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  e.target.classList.add('active');
  showToast(`Mostrando: ${filter.charAt(0).toUpperCase() + filter.slice(1)}`);
}

// ── CATEGORY FILTER ──
function filterCategory(cat) {
  document.getElementById('main-search').value = cat.replace('-', ' ').toUpperCase();
  document.querySelector('.search-section').scrollIntoView({ behavior: 'smooth' });
  showToast(`🔍 Buscando en categoría: ${cat.replace('-', ' ').toUpperCase()}…`);
}

// ── SEARCH FUNCTIONALITY ──
function handleSearch() {
  const val = document.getElementById('main-search').value.trim();
  const category = document.getElementById('category-filter').value;
  
  if (val) {
    const searchMsg = category ? `🔍 Buscando "${val}" en ${category}…` : `🔍 Buscando: "${val}"…`;
    showToast(searchMsg);
  } else {
    showToast('⚠️ Escribe algo para buscar');
  }
}

// ── DYNAMIC BRANDS RENDERING ──
function renderBrands() {
  const container = document.getElementById('brands-container');
  if (!container) return;

  container.innerHTML = brandsData.map(brand => `
    <div class="brand-card">
      <div class="brand-avatar ${brand.avatarClass}">${brand.avatar}</div>
      <div class="brand-info">
        <div class="brand-category">${brand.category} · ${brand.city}</div>
        <div class="brand-name">
          ${brand.name}
          ${brand.verified ? '<span class="verified-badge">✓ Verificado</span>' : ''}
        </div>
        <div class="brand-desc">${brand.description}</div>
        <div class="brand-meta">
          <div class="brand-stat"><strong>${brand.products}</strong>&nbsp;productos</div>
          <div class="brand-stat">⭐ <strong>${brand.rating}</strong></div>
          <div class="brand-stat">❤️ <strong>${(brand.likes / 1000).toFixed(1)}k</strong></div>
        </div>
      </div>
    </div>
  `).join('');
}

// ── DYNAMIC PRODUCTS RENDERING ──
function renderProducts() {
  const container = document.getElementById('products-grid');
  if (!container) return;

  container.innerHTML = productsData.map(product => {
    const stars = '★'.repeat(Math.floor(product.rating)) + '☆'.repeat(5 - Math.floor(product.rating));
    return `
      <div class="product-card">
        <div class="product-img ${product.image}">
          <button class="wish-btn" onclick="wishlist(this)" title="Añadir a favoritos">🤍</button>
          ${product.icon}
        </div>
        <div class="product-body">
          <div class="product-brand">${product.brand}</div>
          <div class="product-name">${product.name}</div>
          <div class="rating">${stars} (${product.reviews})</div>
          <div class="product-row">
            <div class="product-price">$${product.price.toLocaleString()}</div>
            <div class="product-cat">${product.category}</div>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// ── KEYBOARD EVENT LISTENER ──
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
  if (e.key === 'Enter' && document.getElementById('modal-overlay').classList.contains('open')) {
    const submitBtn = document.querySelector('.modal-submit');
    if (submitBtn) submitBtn.click();
  }
});

// ── SCROLL ANIMATIONS ──
function observeElements() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
}

// ── INITIALIZE ──
document.addEventListener('DOMContentLoaded', () => {
  renderBrands();
  renderProducts();
  observeElements();
});
