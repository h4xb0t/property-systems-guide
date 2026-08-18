const applyGuidePatchesBeforeRvPower = window.applyGuidePatches;
window.applyGuidePatches = function applyGuidePatchesWithRvPower() {
  if (typeof applyGuidePatchesBeforeRvPower === 'function') applyGuidePatchesBeforeRvPower();

  const sections = window.GUIDE?.sections;
  if (!Array.isArray(sections)) return;

  const electrical = sections.find(section => section.id === 'generator-electrical');
  if (electrical && !electrical.html.includes('RV-garage power source')) {
    electrical.html += `
      <details class="device" open>
        <summary>RV-garage power source</summary>
        <div class="device-body">
          <div class="device-meta">
            <div class="meta-box"><span>Location</span><b>Guest-house exterior</b></div>
            <div class="meta-box"><span>RV hookup</span><b>30A</b></div>
            <div class="meta-box"><span>Utility outlets</span><b>20A standard outlets</b></div>
            <div class="meta-box"><span>RV garage interior</span><b>Not permanently relocated</b></div>
          </div>
          <p>An exterior RV electrical panel is mounted on the <b>guest-house side facing the RV garage</b>. It provides a <b>30A RV hookup</b> plus <b>standard 20A outlets</b> that can be used for power in the RV garage.</p>
          <div class="callout info"><strong>Current arrangement</strong>The receptacle panel has <b>not been permanently relocated into the RV garage</b>. Power has been brought into the building by routing the connection through an RV-garage window. The available power is therefore immediately usable, but the receptacle panel itself remains outside on the guest-house side.</div>
          <p>If a future owner wants the connection permanently relocated or extended into the RV-garage interior, that should be treated as a separate electrical improvement rather than assuming an interior RV hookup already exists.</p>
        </div>
      </details>
    `;
  }

  const inventory = sections.find(section => section.id === 'inventory');
  if (inventory && !inventory.html.includes('Exterior RV power panel')) {
    inventory.html = inventory.html.replace(
      '<tr><td>RV garage</td><td>Govee H616C LED strip</td><td>Govee Home</td><td>Optional connected lighting</td></tr>',
      '<tr><td>RV garage</td><td>Govee H616C LED strip</td><td>Govee Home</td><td>Optional connected lighting</td></tr>' +
      '<tr><td>Guest-house side facing RV garage</td><td>Exterior RV power panel</td><td>Electrical</td><td>30A RV hookup + 20A standard outlets; currently routed into RV garage through a window</td></tr>'
    );
  }

  const buildings = sections.find(section => section.id === 'buildings');
  if (buildings && !buildings.html.includes('30A RV hookup')) {
    buildings.html = buildings.html.replace(
      '<li>RV-garage Govee H616C strip</li>',
      '<li>RV-garage Govee H616C strip</li><li>RV-garage power available from exterior guest-house-side panel: 30A RV hookup + 20A standard outlets; current connection is routed through a window</li>'
    );
  }
};
