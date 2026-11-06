(() => {
  const page = window.PRODUCT_PAGE;
  if (!page) return;

  document.title = page.meta.title;
  document.querySelector('meta[name="description"]')?.setAttribute('content', page.meta.description);

  const root = document.documentElement;
  const variableMap = { ink: '--ink', deep: '--deep', deep2: '--deep-2', sage: '--sage', mint: '--mint', mist: '--mist', sand: '--sand', paper: '--paper', gold: '--gold' };
  Object.entries(page.theme).forEach(([key, value]) => root.style.setProperty(variableMap[key], value));

  document.querySelectorAll('[data-field]').forEach((node) => {
    const value = page.fields[node.dataset.field];
    if (value !== undefined) node.innerHTML = value;
  });

  document.querySelectorAll('[data-asset]').forEach((node) => {
    const value = page.assets[node.dataset.asset];
    if (value) node.setAttribute('src', value);
  });

  const benefits = document.querySelector('[data-list="benefits"]');
  benefits.innerHTML = page.benefits.map((item, index) => `
    <article class="benefit-card reveal">
      <span class="benefit-number">0${index + 1}</span>
      <h3>${item.title}</h3>
      <p>${item.text}</p>
    </article>`).join('');

  const notes = document.querySelector('[data-list="notes"]');
  notes.innerHTML = page.notes.map((item, index) => `
    <div class="note-item reveal">
      <span class="num">0${index + 1}</span>
      <strong>${item.name}</strong>
      <span>${item.character}</span>
    </div>`).join('');

  const ritual = document.querySelector('[data-list="ritual"]');
  ritual.innerHTML = page.ritual.map((item, index) => `
    <li class="ritual-step">
      <span class="num">0${index + 1}</span>
      <strong>${item.title}</strong>
      <span>${item.text}</span>
    </li>`).join('');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.13 });

  document.querySelectorAll('.reveal').forEach((node) => observer.observe(node));
})();