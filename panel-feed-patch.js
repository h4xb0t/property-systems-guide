const applyGuidePatchesBase = window.applyGuidePatches;
window.applyGuidePatches = function applyGuidePatchesWithPanelFeedNote() {
  if (typeof applyGuidePatchesBase === 'function') applyGuidePatchesBase();

  const sections = window.GUIDE?.sections;
  if (!Array.isArray(sections)) return;

  const electrical = sections.find(section => section.id === 'generator-electrical');
  if (electrical) {
    electrical.html = electrical.html
      .replace(
        'This panel also supplies the <b>office/shop and shed</b>.',
        'This panel also supplies the <b>office/shop, shed, and pool equipment</b>.'
      )
      .replace(
        '<h3>Guest house / office / shed</h3>',
        '<h3>Guest house / office / shed / pool</h3>'
      )
      .replace(
        'That panel supplies the guest house as well as the office/shop and shed.',
        'That panel supplies the guest house as well as the office/shop, shed, and pool equipment.'
      );
  }

  const inventory = sections.find(section => section.id === 'inventory');
  if (inventory) {
    inventory.html = inventory.html.replace(
      'Panel also feeds office/shop and shed',
      'Panel also feeds office/shop, shed and pool equipment'
    );
  }

  const buildings = sections.find(section => section.id === 'buildings');
  if (buildings) {
    buildings.html = buildings.html.replace(
      'Whole-panel surge protection in guest-house panel (also feeds office/shop + shed)',
      'Whole-panel surge protection in guest-house panel (also feeds office/shop + shed + pool equipment)'
    );
  }
};
