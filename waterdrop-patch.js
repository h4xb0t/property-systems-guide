const applyGuidePatchesBeforeWaterdrop = window.applyGuidePatches;
window.applyGuidePatches = function applyGuidePatchesWithWaterdropMaintenance() {
  if (typeof applyGuidePatchesBeforeWaterdrop === 'function') applyGuidePatchesBeforeWaterdrop();

  const sections = window.GUIDE?.sections;
  if (!Array.isArray(sections)) return;

  const appliances = sections.find(section => section.id === 'appliances');
  if (!appliances || appliances.html.includes('The faucet is your filter-life indicator')) return;

  appliances.html = appliances.html.replace(
    '<p>For filter replacement/service, identify the Waterdrop X Series 1600G consumables by the system label and use Waterdrop\'s maintenance instructions.</p>',
    '<div class="callout info"><strong>The faucet is your filter-life indicator</strong>The Waterdrop smart faucet displays filter status/life along with water-quality information. When a filter is nearing the end of its usable life, use the faucet status as the primary maintenance reminder rather than replacing filters purely by the calendar.</div>' +
    '<p><b>Typical X16 / 1600 GPD filter intervals:</b> Waterdrop lists approximately <b>6 months for F2</b>, <b>12 months for F1A</b>, and <b>24 months for the X16-F3 RO filter</b>. Actual life varies with water quality and usage, so follow the faucet/filter-status indication when it calls for replacement.</p>' +
    '<p>Replacement filters are simple cartridge changes under the sink. Match the filter designation shown by the system/faucet to the correct X Series replacement before ordering.</p>' +
    '<div class="link-row"><a class="support-link" href="https://www.waterdropfilter.com/collections/ro-system-replacement-filters-x-series" target="_blank" rel="noopener">Waterdrop X Series replacement filters ↗</a><a class="support-link" href="https://www.waterdropfilter.com/products/undersink-reverse-osmosis-system-x16" target="_blank" rel="noopener">Waterdrop X16 system information ↗</a></div>'
  );
};
