const applyGuidePatchesBeforeUtilityTopology = window.applyGuidePatches;
window.applyGuidePatches = function applyGuidePatchesWithUtilityTopology() {
  if (typeof applyGuidePatchesBeforeUtilityTopology === 'function') applyGuidePatchesBeforeUtilityTopology();

  const sections = window.GUIDE?.sections;
  if (!Array.isArray(sections)) return;

  const utilities = sections.find(section => section.id === 'utilities');
  if (utilities) {
    utilities.search += ' separate bill separate meter service connection main house guest house office shop pool shared sewer shared electric unit b additional line secondary service guest house identification';

    utilities.html = utilities.html
      .replace(
        '<p class="section-intro">Current service providers and known service options for the property. Use the provider links below to establish or manage service.</p>',
        '<p class="section-intro">Current service providers and known service options for the property. A few services are split between the main house and guest-house side, so this quick map is worth reading before opening accounts.</p>' +
        '<div class="utility-topology" aria-label="Utility service layout">' +
          '<div class="utility-topology-head"><div><span class="kicker">Service layout</span><h3>How utilities are divided</h3></div><span class="utility-topology-hint">At a glance</span></div>' +
          '<div class="utility-topology-grid">' +
            '<div class="utility-topology-item"><div class="utility-topology-icon">⚡</div><div class="utility-topology-copy"><div class="utility-topology-title"><b>Electricity</b><span class="utility-count">2 accounts</span></div><p><strong>Main house</strong> is one service. <strong>Guest-house service</strong> is separately billed and also powers the office/shop, shed and pool equipment.</p></div></div>' +
            '<div class="utility-topology-item"><div class="utility-topology-icon">🚽</div><div class="utility-topology-copy"><div class="utility-topology-title"><b>Sewer</b><span class="utility-count">2 bills</span></div><p><strong>Main house</strong> has its own sewer service. The <strong>guest-house sewer line</strong> is separate and is shared with the office/shop.</p></div></div>' +
            '<div class="utility-topology-item"><div class="utility-topology-icon">🚰</div><div class="utility-topology-copy"><div class="utility-topology-title"><b>Water</b><span class="utility-count single">1 service</span></div><p>One Southern Utilities water service supplies the <strong>entire property</strong>.</p></div></div>' +
            '<div class="utility-topology-item"><div class="utility-topology-icon">🔥</div><div class="utility-topology-copy"><div class="utility-topology-title"><b>Natural gas</b><span class="utility-count single">Main house only</span></div><p>CenterPoint natural gas is available at the <strong>main house only</strong>.</p></div></div>' +
          '</div>' +
        '</div>' +
        '<div class="utility-identification-note"><div class="utility-identification-icon">ⓘ</div><div><strong>Finding the guest-house account</strong><p>The guest house has no separate mailing address, so a provider may list its service as <b>Unit B</b>, <b>Guest House</b>, the <b>main property address</b>, or an <b>additional / secondary service</b>. For the separately billed electric and sewer services, confirm you are opening the <b>guest-house service—not the main-house account</b>. If the listing is ambiguous, ask the provider to distinguish the two existing services.</p></div></div>'
      )
      .replace(
        '<p>Water service for the property.</p>',
        '<p><b>One water service/line supplies the entire property.</b> There is not a separate water account for the guest house or office/shop.</p>'
      )
      .replace(
        '<p>Sewer service for the property.</p>',
        '<p><b>There are two separately billed Liberty Utilities sewer services:</b> one for the main house and one for the guest-house side of the property. The <b>office/shop shares the guest-house sewer line</b>; it does not have its own separate sewer account. Because the guest house has no distinct mailing address, the guest-house sewer account may be described differently in Liberty\'s records; verify that the <b>guest-house sewer service</b>, rather than the main-house service, is being selected.</p>'
      )
      .replace(
        '<p>Natural-gas service.</p>',
        '<p><b>Natural-gas service is available only at the main house.</b> The guest house, office/shop, shed and pool are not served by the main-house gas service.</p>'
      )
      .replace(
        '<p><b>Champion Energy</b> has been used for retail electricity service at this property.</p>\n            <p>This address has multiple retail electricity-provider options, so you can shop for a provider/plan rather than being limited to Champion.</p>',
        '<p><b>Champion Energy</b> has been used for retail electricity service at this property.</p>' +
        '<p><b>The main house and guest house are two distinct electrical service connections and are billed separately.</b> The guest-house electrical service/panel also supplies the <b>office/shop, shed and pool equipment</b>; those loads are on the guest-house side rather than the main-house electrical service.</p>' +
        '<p>Because the guest house does not have a separate mailing address, the guest-house electrical service may be shown by a provider as <b>Unit B</b>, <b>Guest House</b>, the <b>same main property address</b>, or an <b>additional/secondary service</b>. Confirm that the correct service connection is selected before completing enrollment.</p>' +
        '<p>Multiple retail electricity-provider options are available for the address, so each applicable service/account can be set up with a chosen retail provider rather than being limited to Champion.</p>'
      );
  }

  const electrical = sections.find(section => section.id === 'generator-electrical');
  if (electrical) {
    electrical.search += ' separate service main house only guest house separate meter pool not generator';
    electrical.html = electrical.html
      .replace(
        '<p class="section-intro">The main house is equipped for portable-generator backup power, and both major electrical panels have whole-panel surge protection.</p>',
        '<p class="section-intro">The main house is equipped for portable-generator backup power, and both major electrical panels have whole-panel surge protection. The <b>main house and guest house are separate electrical service connections</b>.</p>'
      )
      .replace(
        '<div class="callout warn"><strong>50A connection does not mean 50A of continuous generator power</strong>',
        '<div class="callout danger"><strong>The generator interlock backs up the main house only</strong>The main house and guest house are separately billed electrical services. The main-house interlock and FIRMAN generator do <b>not</b> supply the guest house, office/shop, shed, or pool equipment. Those are on the separate guest-house electrical service.</div>' +
        '<div class="callout warn"><strong>50A connection does not mean 50A of continuous generator power</strong>'
      );
  }
};
