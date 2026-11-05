const products = [
  {
    id: "BREEZE",
    accent: "#86cbbf",
    panel: "#075b8d",
    concept: "Um sopro de liberdade",
    reference: "Acqua di Gioia",
    mood: "Mediterrâneo · mineral · leve",
    elements: "Mar, calcário, linho, limão e hortelã",
    description: "Frescor construído como experiência mediterrânea: vento, água, pedra e movimento em uma linguagem solar e tátil.",
    extraction: "Da referência foram absorvidos a costa mediterrânea, a luz solar direta, a relação entre corpo e paisagem, o linho em movimento e a presença de elementos cítricos e minerais.",
    references: ["referencia (6).jpg", "referencia (7).jpg", "referencia (8).jpg", "referencia (14).jpg", "referencia (20).jpg"]
  },
  {
    id: "LOVELY",
    accent: "#ed8eaf",
    panel: "#122d70",
    concept: "Delicada & encantadora",
    reference: "Chance Eau Tendre",
    mood: "Noturno · pop · coletivo",
    elements: "Círculos, coral, lilás, flash e parque",
    description: "Uma feminilidade social e espontânea, traduzida por amizade, movimento, luzes práticas e energia noturna.",
    extraction: "A pesquisa orientou o uso de círculos, luzes coral e lilás, atmosfera noturna, gestos coletivos e fotografia com flash direto para construir uma feminilidade menos contemplativa.",
    references: ["referencia (1).jpg", "referencia (4).jpg", "referencia (6).jpg", "referencia (10).jpg", "referencia (14).jpg"]
  },
  {
    id: "CHIC",
    accent: "#c99a4d",
    panel: "#43522c",
    concept: "Elegante & autêntica",
    reference: "English Pear & Freesia",
    mood: "Íntimo · maduro · acolhedor",
    elements: "Pomar, pera, musgo, madeira e seda",
    description: "Elegância silenciosa e humana, apoiada na luz dourada do pomar e em relações de cuidado entre mulheres.",
    extraction: "Foram extraídos o pomar como cenário, a luz dourada, a proximidade entre mulheres, os materiais naturais e uma noção de luxo silencioso apoiada em gestos de cuidado.",
    references: ["referencia (1).jpg", "referencia (4).jpg", "referencia (7).jpg", "referencia (10).jpg", "referencia (12).jpg"]
  },
  {
    id: "GLOW",
    accent: "#f2c72f",
    panel: "#1671b6",
    concept: "Alegre & radiante",
    reference: "Marc Jacobs Daisy",
    mood: "Solar · gráfico · espontâneo",
    elements: "Céu azul, margaridas, papel e campo",
    description: "Otimismo com acabamento editorial: fotografia documental, cores francas e formas artesanais inspiradas em pétalas.",
    extraction: "A direção incorpora o céu azul, o campo aberto, a espontaneidade entre amigas, o branco das margaridas e a energia de registros analógicos com enquadramentos imperfeitos.",
    references: ["referencia (1).jpg", "referencia (5).jpg", "referencia (9).jpg", "referencia (14).jpg", "referencia (18).jpg"]
  }
];

const deliverables = [
  { id: "kv-a", group: "kv", title: "KV lifestyle", short: "KV A", meta: "1080 × 1350 px", file: "01-kv-a-lifestyle-1080x1350.png" },
  { id: "kv-b", group: "kv", title: "KV conceitual", short: "KV B", meta: "1080 × 1350 px", file: "02-kv-b-conceitual-1080x1350.png" },
  { id: "feed", group: "social", title: "Feed de lançamento", short: "Feed", meta: "1080 × 1350 px", file: "03-feed-1080x1350.png" },
  { id: "story", group: "social", title: "Story", short: "Story", meta: "1080 × 1920 px", file: "04-story-1080x1920.png", story: true },
  { id: "extra", group: "social", title: "Social extra", short: "Extra", meta: "1080 × 1350 px", file: "05-extra-social-1080x1350.png" },
  { id: "a4-front", group: "a4", title: "Lâmina A4 — frente", short: "Frente", meta: "2480 × 3508 px", file: "06-a4-frente-2480x3508.png", a4: true },
  { id: "a4-back", group: "a4", title: "Lâmina A4 — verso", short: "Verso", meta: "2480 × 3508 px", file: "07-a4-verso-2480x3508.png", a4: true }
];

const deliverableGroups = [
  { id: "kv", title: "Key Visual", description: "Conceito e lifestyle", columns: 2 },
  { id: "social", title: "Social Media", description: "Feed, story e conteúdo complementar", columns: 3 },
  { id: "a4", title: "Material A4", description: "Frente e verso para PDV", columns: 2 }
];

const pathFor = (product, deliverable) => `${product.id}/${deliverable.file}`;
const allArt = products.flatMap(product => deliverables.map(deliverable => ({ product, deliverable })));
let lightboxIndex = 0;
let selectedProduct = "BREEZE";

function artButton(product, deliverable, extraClass = "") {
  const index = allArt.findIndex(item => item.product.id === product.id && item.deliverable.id === deliverable.id);
  return `<button class="art-card ${deliverable.story ? "story" : ""} ${extraClass}" type="button" data-lightbox-index="${index}" aria-label="Ampliar ${deliverable.title} de ${product.id}">
    <img src="${pathFor(product, deliverable)}" alt="${deliverable.title} da campanha ${product.id}" loading="lazy">
  </button>`;
}

function buildHero() {
  document.querySelector("#hero-products").innerHTML = products.map(product => {
    const piece = deliverables[1];
    return `<a class="hero-card" href="#case" data-select-product="${product.id}" aria-label="Ver campanha ${product.id}">
      <img src="${pathFor(product, piece)}" alt="Key visual ${product.id}">
      <span>${product.id}</span>
    </a>`;
  }).join("");
}

function campaignMarkup(product, filter = "all") {
  const selected = deliverables;
  const productIndex = products.findIndex(item => item.id === product.id);
  const previous = products[(productIndex - 1 + products.length) % products.length];
  const next = products[(productIndex + 1) % products.length];
  return `<section class="product-panel active" id="panel-${product.id}" style="--panel:${product.panel}">
      <div class="campaign-intro">
        <div>
          <p class="eyebrow">${product.reference}</p>
          <h3>${product.id}</h3>
          <p>${product.description}</p>
        </div>
        <div class="campaign-meta">
          <div><span>Conceito</span><strong>${product.concept}</strong></div>
          <div><span>Atmosfera</span><strong>${product.mood}</strong></div>
          <div><span>Elementos</span><strong>${product.elements}</strong></div>
        </div>
        <div class="reference-block">
          <div class="reference-heading"><strong>Referências da pesquisa</strong><span>5 frames usados para orientar atmosfera, luz e composição</span></div>
          <div class="reference-gallery">
            ${product.references.map((file, index) => `<figure>
              <img src="${product.id}/referencia/${file}" alt="Referência visual ${index + 1} da pesquisa de ${product.id}" loading="lazy">
              <figcaption>Referência ${String(index + 1).padStart(2, "0")}</figcaption>
            </figure>`).join("")}
          </div>
        </div>
      </div>
      <div class="reference-extraction" style="--accent:${product.accent}"><span>O que foi extraído da referência</span><p>${product.extraction}</p></div>
      <div class="campaign-groups">
        ${deliverableGroups.map(group => {
          const groupItems = selected.filter(item => item.group === group.id);
          if (!groupItems.length) return "";
          return `<section class="campaign-group">
            <div class="campaign-group-heading"><h4>${group.title}</h4><span>${group.description}</span></div>
            <div class="campaign-group-grid" style="--columns:${group.columns}">
              ${groupItems.map(deliverable => `<figure class="campaign-item">
                ${artButton(product, deliverable)}
                <figcaption><strong>${deliverable.title}</strong><span>${deliverable.meta}</span></figcaption>
              </figure>`).join("")}
            </div>
          </section>`;
        }).join("")}
      </div>
      <nav class="case-navigation" aria-label="Navegar entre fragrâncias">
        <button class="case-nav-button" type="button" data-select-product="${previous.id}"><div><span>Fragrância anterior</span><strong>${previous.id}</strong></div><b>←</b></button>
        <button class="case-nav-button next" type="button" data-select-product="${next.id}"><b>→</b><div><span>Próxima fragrância</span><strong>${next.id}</strong></div></button>
      </nav>
    </section>`;
}

function renderWorkspace() {
  const view = document.querySelector("#workspace-view");
  const product = products.find(item => item.id === selectedProduct);
  view.innerHTML = campaignMarkup(product);
}

function buildProductNavigation() {
  const tabs = document.querySelector("#case-product-tabs");
  tabs.innerHTML = products.map(product => `<button class="case-tab ${product.id === selectedProduct ? "active" : ""}" type="button" style="--accent:${product.accent}" data-select-product="${product.id}">${product.id}</button>`).join("");
  document.addEventListener("click", event => {
    const button = event.target.closest("[data-select-product]");
    if (!button) return;
    selectedProduct = button.dataset.selectProduct;
    tabs.querySelectorAll(".case-tab").forEach(tab => tab.classList.toggle("active", tab.dataset.selectProduct === selectedProduct));
    renderWorkspace();
  });
}

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

function setupLightbox() {
  const dialog = document.querySelector("#lightbox");
  document.addEventListener("click", event => {
    const target = event.target.closest("[data-lightbox-index]");
    if (target) showLightbox(Number(target.dataset.lightboxIndex));
  });
  document.querySelector("#lightbox-close").addEventListener("click", () => dialog.close());
  document.querySelector("#lightbox-prev").addEventListener("click", () => showLightbox(lightboxIndex - 1));
  document.querySelector("#lightbox-next").addEventListener("click", () => showLightbox(lightboxIndex + 1));
  dialog.addEventListener("click", event => { if (event.target === dialog) dialog.close(); });
  document.addEventListener("keydown", event => {
    if (!dialog.open) return;
    if (event.key === "ArrowLeft") showLightbox(lightboxIndex - 1);
    if (event.key === "ArrowRight") showLightbox(lightboxIndex + 1);
  });
}

buildHero();
buildProductNavigation();
renderWorkspace();
setupLightbox();
