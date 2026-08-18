async function loadGuide() {
  const r = await fetch("data/guide-data.js");
  if (!r.ok) throw new Error("Unable to load guide data");
  Function(await r.text())();
  if (typeof window.applyGuidePatches === 'function') window.applyGuidePatches();
}

function boot() {
  const sections = window.GUIDE.sections;
  const nav = document.getElementById('nav');
  const content = document.getElementById('content');
  const search = document.getElementById('search');
  const empty = document.createElement('div');
  empty.className = 'search-empty';
  empty.innerHTML = '<strong>No matching section found.</strong><br>Try a room, building, brand, or system such as “pool”, “Yale”, “garage”, or “thermostat”.';

  function escapeAttr(s) {
    return String(s).replaceAll('&','&amp;').replaceAll('"','&quot;').replaceAll('<','&lt;').replaceAll('>','&gt;');
  }
  nav.innerHTML = sections.map(s => `<a class="nav-link" href="#${s.id}"><span>${s.icon}</span><span>${s.title}</span></a>`).join('');
  content.innerHTML = sections.map(s => `<section id="${s.id}" class="section searchable" data-search="${escapeAttr((s.search || '') + ' ' + s.title)}">${s.html}</section>`).join('');
  content.appendChild(empty);

  function applySearch() {
    const q = search.value.trim().toLowerCase();
    let visible = 0;
    document.querySelectorAll('.searchable').forEach(el => {
      const haystack = (el.dataset.search + ' ' + el.textContent).toLowerCase();
      const match = !q || haystack.includes(q);
      el.classList.toggle('search-hidden', !match);
      if (match) visible++;
    });
    empty.style.display = visible ? 'none' : 'block';
  }
  const menuButton = document.getElementById('menuButton');
  const sidebar = document.getElementById('sidebar');
  function closeMenu() { sidebar.classList.remove('open'); menuButton.setAttribute('aria-expanded', 'false'); }
  function setActiveNav() {
    const hash = location.hash || '#start';
    document.querySelectorAll('.nav-link').forEach(a => a.classList.toggle('active', a.getAttribute('href') === hash));
  }
  search.addEventListener('input', applySearch);
  window.addEventListener('hashchange', () => { setActiveNav(); closeMenu(); });
  setActiveNav();
  menuButton.addEventListener('click', () => {
    const open = sidebar.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(open));
  });
}

loadGuide().then(boot).catch(err => {
  console.error(err);
  document.getElementById('content').innerHTML = '<div class="callout danger"><strong>Guide failed to load.</strong><p>Please refresh the page. If this continues, use the printed property systems binder or the manufacturer support links for the affected equipment.</p></div>';
});
