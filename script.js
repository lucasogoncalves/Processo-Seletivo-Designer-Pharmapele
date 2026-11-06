const products = [
  { id: "BREEZE", accent: "#CCD8BF", panel: "#194440", concept: "Um sopro de liberdade", reference: "Acqua di Gioia", mood: "Mediterrâneo · mineral · leve", elements: "Mar, calcário, linho, limão e hortelã", description: "Frescor construído como experiência mediterrânea: vento, água, pedra e movimento em uma linguagem solar e tátil.", extraction: "Da referência foram absorvidos a costa mediterrânea, a luz solar direta, a relação entre corpo e paisagem, o linho em movimento e a presença de elementos cítricos e minerais.", references: ["referencia (6).jpg", "referencia (7).jpg", "referencia (8).jpg", "referencia (14).jpg", "referencia (20).jpg", "referencia (21).png"] },
  { id: "LOVELY", accent: "#FEBED0", panel: "#501A26", concept: "Delicada & encantadora", reference: "Chance Eau Tendre", mood: "Noturno · pop · coletivo", elements: "Círculos, coral, lilás, flash e parque", description: "Uma feminilidade social e espontânea, traduzida por amizade, movimento, luzes práticas e energia noturna.", extraction: "A pesquisa orientou o uso de círculos, luzes coral e lilás, atmosfera noturna, gestos coletivos e fotografia com flash direto para construir uma feminilidade menos contemplativa.", references: ["referencia (1).jpg", "referencia (4).jpg", "referencia (6).jpg", "referencia (10).jpg", "referencia (14).jpg", "referencia (17).png"] },
  { id: "CHIC", accent: "#E4BE99", panel: "#3C2314", concept: "Elegante & autêntica", reference: "English Pear & Freesia", mood: "Íntimo · maduro · acolhedor", elements: "Pomar, pera, musgo, madeira e seda", description: "Elegância silenciosa e humana, apoiada na luz dourada do pomar e em relações de cuidado entre mulheres.", extraction: "Foram extraídos o pomar como cenário, a luz dourada, a proximidade entre mulheres, os materiais naturais e uma noção de luxo silencioso apoiada em gestos de cuidado.", references: ["referencia (1).jpg", "referencia (4).jpg", "referencia (7).jpg", "referencia (10).jpg", "referencia (12).jpg", "referencia (13).png"] },
  { id: "GLOW", accent: "#FFC391", panel: "#812C18", concept: "Alegre & radiante", reference: "Marc Jacobs Daisy", mood: "Solar · gráfico · espontâneo", elements: "Céu azul, margaridas, papel e campo", description: "Otimismo com acabamento editorial: fotografia documental, cores francas e formas artesanais inspiradas em pétalas.", extraction: "A direção incorpora o céu azul, o campo aberto, a espontaneidade entre amigas, o branco das margaridas e a energia de registros analógicos com enquadramentos imperfeitos.", references: ["referencia (1).jpg", "referencia (5).jpg", "referencia (9).jpg", "referencia (14).jpg", "referencia (18).jpg", "referencia (19).jpg"] }
];

const commonDeliverables = [
  { id: "kv-a", group: "kv", title: "KV lifestyle", meta: "Formato vertical", files: { BREEZE: "01-kv-a-lifestyle-1080x1350.png", LOVELY: "01-kv-a-lifestyle-1080x1350.png", CHIC: "01-kv-a-lifestyle-1080x1350.png", GLOW: "01-kv-a-lifestyle-1080x1350.png" } },
  { id: "kv-b", group: "kv", title: "KV conceitual", meta: "Formato vertical", files: { BREEZE: "02-kv-b-conceitual-1080x1350.jpg", LOVELY: "02-kv-b-conceitual-1080x1350.jpg", CHIC: "02-kv-b-conceitual-1080x1350.jpg", GLOW: "02-kv-b-conceitual-1080x1350.png" } },
  { id: "feed", group: "social", title: "Feed de lançamento", meta: "Social media", files: { BREEZE: "03-feed-1080x1350.jpg", LOVELY: "03-feed-1080x1350.png", CHIC: "03-feed-1080x1350.png", GLOW: "03-feed-1080x1350.png" } },
  { id: "story", group: "social", title: "Story", meta: "Social media", story: true, files: { BREEZE: "04-story-1080x1920 (2).jpg", LOVELY: "04-story-1080x1920.png", CHIC: "04-story-1080x1920.png", GLOW: "04-story-1080x1920.png" } },
  { id: "extra", group: "social", title: "Social extra", meta: "Social media", files: { BREEZE: "05-extra-social-1080x1350.jpg", LOVELY: "05-extra-social-1080x1350.png", CHIC: "05-extra-social-1080x1350.png", GLOW: "05-extra-social-1080x1350.png" } },
  { id: "a4-front", group: "a4", title: "Lâmina de varejo — frente", meta: "Formato A4", files: { BREEZE: "breeze-lamina-varejo_Frente.jpg", LOVELY: "lovely-lamina-varejo_Frente.jpg", CHIC: "chic-lamina-varejo_Frente.jpg", GLOW: "glow-lamina-varejo_Frente.jpg" } },
  { id: "a4-back", group: "a4", title: "Lâmina de varejo — verso", meta: "Formato A4", files: { BREEZE: "breeze-lamina-varejo_Verso.jpg", LOVELY: "lovely-lamina-varejo_Verso.jpg", CHIC: "chic-lamina-varejo_Verso.jpg", GLOW: "glow-lamina-varejo_Verso.jpg" } },
  { id: "a4-mockup", group: "a4", title: "Mockup da lâmina", meta: "Aplicação", files: { BREEZE: "mockup-lamina-breeze.jpg", LOVELY: "mockup-lamina-lovely.jpg", CHIC: "mockup-lamina-chic.jpg", GLOW: "mockup-lamina-glow.jpg" } }
];

const groups = [
  { id: "kv", title: "Key Visual", description: "Conceito e lifestyle", columns: 2 },
  { id: "social", title: "Social Media", description: "Feed, story e conteúdo complementar", columns: 3 },
  { id: "a4", title: "Material A4", description: "Artes exportadas e mockup da aplicação", columns: 3 }
];

const pathFor = (product, item) => `${product.id}/Finalizados/${item.files[product.id]}`;
const deliverablesFor = product => commonDeliverables.filter(item => item.files[product.id]);
const allArt = products.flatMap(product => deliverablesFor(product).map(deliverable => ({ product, deliverable })));
let selectedProduct = "BREEZE";
let lightboxIndex = 0;

function artButton(product, item) {
  const index = allArt.findIndex(entry => entry.product.id === product.id && entry.deliverable.id === item.id);
  return `<button class="art-card ${item.story ? "story" : ""}" type="button" data-lightbox-index="${index}" aria-label="Ampliar ${item.title} de ${product.id}"><img src="${pathFor(product, item)}" alt="${item.title} da campanha ${product.id}" loading="lazy"></button>`;
}

function buildHero() {
  document.querySelector("#hero-products").innerHTML = products.map(product => `<a class="hero-card hero-product-bottle" href="#case" data-select-product="${product.id}" aria-label="Ver campanha ${product.id}"><img src="${product.id}/Finalizados/${product.id.toLowerCase()}-produto.png" alt="Frasco ${product.id}"></a>`).join("");
}

function campaignMarkup(product) {
  const productIndex = products.findIndex(item => item.id === product.id);
  const previous = products[(productIndex - 1 + products.length) % products.length];
  const next = products[(productIndex + 1) % products.length];
  const available = deliverablesFor(product);
  return `<section class="product-panel active" id="panel-${product.id}" style="--panel:${product.accent}; --product-ink:${product.panel}">
    <div class="campaign-intro">
      <nav class="case-tabs campaign-tabs" aria-label="Selecionar fragrância">${products.map(item => `<button class="case-tab ${item.id === selectedProduct ? "active" : ""}" type="button" style="--tab-color:${item.accent}; --tab-accent:${item.panel}; --tab-text:${item.panel}" data-select-product="${item.id}" ${item.id === selectedProduct ? 'aria-current="true"' : ""}>${item.id}</button>`).join("")}</nav>
      <div><p class="eyebrow">Inspirado em:</p><h3>${product.reference}</h3><p>${product.description}</p></div>
      <div class="campaign-meta"><div><span>Conceito</span><strong>${product.concept}</strong></div><div><span>Atmosfera</span><strong>${product.mood}</strong></div><div><span>Elementos</span><strong>${product.elements}</strong></div></div>
      <div class="reference-block"><div class="reference-heading"><strong>Referências da pesquisa</strong><span>${product.references.length} frames usados para orientar atmosfera, luz e composição</span></div><div class="reference-gallery">${product.references.map((file, index) => `<figure><img src="${product.id}/referencia/${file}" alt="Referência visual ${index + 1} da pesquisa de ${product.id}" loading="lazy"><figcaption>Referência ${String(index + 1).padStart(2, "0")}</figcaption></figure>`).join("")}</div></div>
    </div>
    <div class="reference-extraction" style="--accent:${product.accent}"><span>O que foi extraído da referência</span><p>${product.extraction}</p></div>
    <div class="campaign-groups">${groups.map(group => { const items = available.filter(item => item.group === group.id); return items.length ? `<section class="campaign-group"><div class="campaign-group-heading"><h4>${group.title}</h4><span>${group.description}</span></div><div class="campaign-group-grid" style="--columns:${group.columns}">${items.map(item => `<figure class="campaign-item">${artButton(product, item)}<figcaption><strong>${item.title}</strong><span>${item.meta}</span></figcaption></figure>`).join("")}</div></section>` : ""; }).join("")}</div>
    <nav class="case-navigation" aria-label="Navegar entre fragrâncias"><button class="case-nav-button" type="button" data-select-product="${previous.id}"><div><span>Fragrância anterior</span><strong>${previous.id}</strong></div><b>←</b></button><button class="case-nav-button next" type="button" data-select-product="${next.id}"><b>→</b><div><span>Próxima fragrância</span><strong>${next.id}</strong></div></button></nav>
  </section>`;
}

function renderWorkspace() { document.querySelector("#workspace-view").innerHTML = campaignMarkup(products.find(item => item.id === selectedProduct)); }

document.addEventListener("click", event => {
  const selector = event.target.closest("[data-select-product]");
  if (selector) { selectedProduct = selector.dataset.selectProduct; renderWorkspace(); }
  const art = event.target.closest("[data-lightbox-index]");
  if (art) showLightbox(Number(art.dataset.lightboxIndex));
});

function showLightbox(index) {
  lightboxIndex = (index + allArt.length) % allArt.length;
  const { product, deliverable } = allArt[lightboxIndex];
  document.querySelector("#lightbox-product").textContent = product.id;
  document.querySelector("#lightbox-title").textContent = deliverable.title;
  document.querySelector("#lightbox-meta").textContent = deliverable.meta;
  const image = document.querySelector("#lightbox-image");
  image.src = pathFor(product, deliverable);
  image.alt = `${deliverable.title} da campanha ${product.id}`;
  const dialog = document.querySelector("#lightbox");
  if (!dialog.open) dialog.showModal();
}

const dialog = document.querySelector("#lightbox");
document.querySelector("#lightbox-close").addEventListener("click", () => dialog.close());
document.querySelector("#lightbox-prev").addEventListener("click", () => showLightbox(lightboxIndex - 1));
document.querySelector("#lightbox-next").addEventListener("click", () => showLightbox(lightboxIndex + 1));
dialog.addEventListener("click", event => { if (event.target === dialog) dialog.close(); });
document.addEventListener("keydown", event => { if (dialog.open && event.key === "ArrowLeft") showLightbox(lightboxIndex - 1); if (dialog.open && event.key === "ArrowRight") showLightbox(lightboxIndex + 1); });

buildHero();
renderWorkspace();
