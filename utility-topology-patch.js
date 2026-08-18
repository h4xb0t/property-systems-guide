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
        '<p class="section-intro">Current service providers and known service options for the property. Several utilities are split between the main house and guest-house side of the property, so pay close attention to which buildings each account serves.</p>' +
        '<div class="callout warn"><strong>Important: this property does not use one account for every utility</strong>' +
        '<b>Electricity:</b> the main house and guest house are separate electrical service connections and are billed separately. ' +
        '<b>Sewer:</b> the main house and guest house are also on two separately billed sewer accounts; the office/shop shares the guest-house sewer line. ' +
        '<b>Water:</b> one water service supplies the entire property. ' +
        '<b>Natural gas:</b> service is available only at the main house.</div>' +
        '<div class="callout info"><strong>Identifying the guest-house utility account may take a little trial and error</strong>' +
        'The guest house does <b>not</b> have its own distinct mailing address. Depending on the utility company or its records, the guest-house service may appear under the <b>main property address</b>, as <b>Unit B</b>, as <b>Guest House</b>, or as an <b>additional/secondary line or service</b>. When setting up the separately billed guest-house electric or sewer service, verify that the provider has selected the <b>guest-house service rather than the main-house service</b> before completing the account setup. If the description is ambiguous, ask the provider to distinguish the two existing service connections/accounts.</div>'
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
