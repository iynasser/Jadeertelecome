const phoneImg = 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=900&q=80';
const chargerImg = 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?auto=format&fit=crop&w=700&q=80';
const airpodsImg = 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=700&q=80';
const watchImg = 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=700&q=80';

const needs = [
  ['أبغى جوال بالتقسيط', 'تحقق من الأهلية', phoneImg, 'mint'],
  ['أبغى آيفون جديد', 'تسوق الآيفون', phoneImg, 'blue'],
  ['أبغى شاحن سريع', 'شواحن وطاقة', chargerImg, 'violet'],
  ['أبغى هدية جاهزة', 'عروض وبكجات', '', 'peach'],
  ['أبغى حماية لجوالي', 'كفرات وحماية', phoneImg, 'aqua'],
];

const categories = [
  ['الجوالات', '📱', phoneImg], ['المنتجات والطاقة', '🔋', chargerImg], ['حماية الجوال', '🛡️', phoneImg], ['السماعات والساعات', '🎧', airpodsImg], ['أجهزة السيارة والمنزل', '⌚', watchImg], ['المواجهات والبكجات', '🎁', ''], ['كفر وشنطة ضد صدمات', '📲', phoneImg],
];

const products = [
  ['iPhone 17 Pro Max', '512GB | فضي', '8,000', 'أو من 666 ر.س / 12 دفعة', phoneImg, 'الأكثر مبيعاً'],
  ['باقة الحماية الكاملة', 'كفر + حماية شاشة', '238', 'وفر 10%', phoneImg, 'وفر 10%'],
  ['باقة الشحن السريع', 'شاحن + كيبل USB-C', '159', 'وفر 10%', chargerImg, 'وفر 10%'],
  ['باقة السفر الذكية', 'سماعات + ملحقات', '249', 'وفر 10%', airpodsImg, 'وفر 10%'],
  ['باقة دعم الجوال', 'كفر وحماية يومية', '129', 'وفر 10%', phoneImg, 'وفر 10%'],
];

const needsGrid = document.querySelector('#needsGrid');
needsGrid.innerHTML = needs.map(([title, action, img, tone]) => `
  <article class="need ${tone}">
    <h3>${title}</h3>
    ${img ? `<img src="${img}" alt="${title}">` : '<div class="gift">🎁</div>'}
    <button>${action}</button>
  </article>
`).join('');

const categoriesGrid = document.querySelector('#categoriesGrid');
categoriesGrid.innerHTML = categories.map(([title, icon, img]) => `
  <div class="category">
    ${img ? `<img src="${img}" alt="${title}">` : `<div class="category-icon">${icon}</div>`}
    <span>${title}</span>
  </div>
`).join('');

const productsGrid = document.querySelector('#productsGrid');
productsGrid.innerHTML = products.map(([name, sub, price, pay, img, label]) => `
  <article class="product">
    <span class="label">${label}</span>
    <img src="${img}" alt="${name}">
    <h3>${name}</h3>
    <p>${sub}</p>
    <strong>${price} ر.س</strong>
    <small>${pay}</small>
  </article>
`).join('');
