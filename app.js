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

  nav.innerHTML = sections.map(s => `<a class="nav-link" href="#${s.id}"><span>${s.icon}</span><span>${s.title}</span></a>`).join('');
  content.innerHTML = sections.map(s => `<section id="${s.id}" class="section">${s.html}</section>`).join('');

  const menuButton = document.getElementById('menuButton');
  const sidebar = document.getElementById('sidebar');

  function closeMenu() {
    sidebar.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  }

  function setActiveNav() {
    const hash = location.hash || '#start';
    document.querySelectorAll('.nav-link').forEach(a => a.classList.toggle('active', a.getAttribute('href') === hash));
  }

  window.addEventListener('hashchange', () => {
    setActiveNav();
    closeMenu();
  });

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
