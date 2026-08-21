const applyGuidePatchesBeforeInternetPaths = window.applyGuidePatches;
window.applyGuidePatches = function applyGuidePatchesWithInternetPaths() {
  if (typeof applyGuidePatchesBeforeInternetPaths === 'function') applyGuidePatchesBeforeInternetPaths();

  const sections = window.GUIDE?.sections;
  if (!Array.isArray(sections)) return;

  const utilities = sections.find(section => section.id === 'utilities');
  if (utilities && !utilities.html.includes('Optional Starlink Ethernet path')) {
    utilities.search += ' optimum guest house buried coax office shop rv side box junction handoff starlink ethernet sunroom patio backup internet';

    utilities.html = utilities.html
      .replace(
        '<div class="meta-box"><span>Office / shop</span><b>Separate Optimum line</b></div>',
        '<div class="meta-box"><span>Office / shop</span><b>Buried Optimum extension</b></div>'
      )
      .replace(
        '<p>The <b>office / shop has its own separate Optimum cable line</b>, independent of the main-house connection.</p>',
        '<p>The <b>office / shop has a separate physical Optimum cable run</b>. A <b>property-owned exterior cable junction/handoff box</b> on the RV-garage-facing side of the guest house is the transition point for the buried cable extension that continues out to the office/shop. The box was installed by an electrician and is <b>not Optimum-owned equipment</b>.</p>'
      )
      .replace(
        '<div class="callout info"><strong>Useful distinction</strong>The main house and office/shop have separate physical Optimum service connections. Do not assume the office/shop line is simply an extension of the main-house internet service.</div>',
        '<div class="callout info"><strong>Optimum connection options</strong>The main house has its own Optimum connection. On the RV-garage-facing side of the guest house, the <b>property-owned cable handoff box</b> feeds the buried extension to the office/shop; that same handoff can instead be used to terminate/activate Optimum service at the <b>guest house</b> if preferred. <b>Point this box out to the Optimum technician</b> when establishing service so they can use the desired connection path.</div>' +
        '<div class="card" style="margin-top:16px"><div class="card-icon">🛰️</div><h3>Optional Starlink Ethernet path</h3><p>A dedicated <b>Ethernet cable has already been run through the main-house sunroom wall to the patio</b> for optional Starlink / backup-internet use. This provides an easy wired path between indoor networking equipment and equipment placed outside on the patio.</p><p>The run is completely optional. If Starlink or a patio-side backup connection is not wanted, the cable can be <b>cut back or removed entirely</b> without affecting the normal Brightspeed or Optimum service paths.</p></div>'
      );
  }

  const buildings = sections.find(section => section.id === 'buildings');
  if (buildings) {
    if (!buildings.html.includes('sunroom-to-patio Ethernet')) {
      buildings.html = buildings.html.replace(
        '<li>Waterdrop RO system</li>',
        '<li>Waterdrop RO system</li><li>Optional Starlink / backup-internet sunroom-to-patio Ethernet run</li>'
      );
    }

    if (!buildings.html.includes('Property-owned cable handoff box')) {
      buildings.html = buildings.html.replace(
        '<li>Samsung kitchen appliances</li></ul></div>',
        '<li>Samsung kitchen appliances</li><li>Property-owned cable handoff box on RV-garage-facing exterior side (installed by electrician); feeds the Optimum buried extension and can serve the guest house if preferred</li></ul></div>'
      );
    }

    if (!buildings.html.includes('Optimum buried extension arrives')) {
      buildings.html = buildings.html.replace(
        '<li>Yale Assure Lock 2</li></ul></div>',
        '<li>Yale Assure Lock 2</li><li>Optimum buried extension arrives from the property-owned guest-house-side exterior handoff box</li></ul></div>'
      );
    }
  }
};
