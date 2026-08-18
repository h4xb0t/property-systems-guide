window.applyGuidePatches = function applyGuidePatches() {
  const sections = window.GUIDE?.sections;
  if (!Array.isArray(sections)) return;

  const byId = Object.fromEntries(sections.map(section => [section.id, section]));

  // First-day setup: keep the list focused on systems that materially benefit from setup.
  const quickStart = byId['quick-start'];
  if (quickStart) {
    quickStart.html = quickStart.html
      .replace(
        'Ring, Tapo, Yale Access, ecobee, myQ, Mitsubishi Comfort, Trane Home, Omni/OmniLogic, WYBOT, SmartThings and LG ThinQ.',
        'Ring, Tapo, Yale Access, ecobee, myQ, Mitsubishi Comfort, Trane Home, Omni/OmniLogic and WYBOT.'
      )
      .replace(/\s*<div class="callout good"><strong>Good shortcut<\/strong>[\s\S]*?<\/div>/, '');
  }

  // TDi installed and services both Mitsubishi mini-splits plus the guest-house Trane system.
  const hvac = byId['hvac'];
  if (hvac && !hvac.html.includes('TDi installed both Mitsubishi mini-splits')) {
    hvac.html = hvac.html.replace(
      '<p class="section-intro">All HVAC systems retain local controls. App connectivity is convenient but should never be the only way you know how to operate heating or cooling.</p>',
      '<p class="section-intro">All HVAC systems retain local controls. App connectivity is convenient but should never be the only way you know how to operate heating or cooling.</p>' +
      '<div class="callout good"><strong>Local HVAC service contact</strong><b>TDi Services</b> installed both Mitsubishi mini-splits on the property as well as the guest-house Trane system and is an excellent first call for service or setup questions involving those systems. <a href="tel:+19035978381">903-597-8381</a>.</div>'
    );
  }

  // Utilities belong near the beginning of the owner manual.
  if (!byId['utilities']) {
    const utilities = {
      id: 'utilities',
      icon: '⚡',
      title: 'Utilities & Services',
      search: 'utilities utility sewer water internet fiber cable gas electric electricity trash garbage liberty southern brightspeed optimum centerpoint champion republic monday',
      html: `
        <h2>Utilities & Services</h2>
        <p class="section-intro">Current service providers and known service options for the property. Use the provider links below to establish or manage service.</p>

        <div class="grid">
          <div class="card">
            <div class="card-icon">🚰</div>
            <h3>Water</h3>
            <p><b>Southern Utilities Company</b></p>
            <p>Water service for the property.</p>
            <div class="link-row"><a class="support-link" href="https://southernutilitiescompany.com/" target="_blank" rel="noopener">Southern Utilities ↗</a></div>
          </div>

          <div class="card">
            <div class="card-icon">🚽</div>
            <h3>Sewer</h3>
            <p><b>Liberty Utilities</b></p>
            <p>Sewer service for the property.</p>
            <div class="link-row"><a class="support-link" href="https://libertyutilities.com/" target="_blank" rel="noopener">Liberty Utilities ↗</a></div>
          </div>

          <div class="card">
            <div class="card-icon">🔥</div>
            <h3>Natural Gas</h3>
            <p><b>CenterPoint Energy</b></p>
            <p>Natural-gas service.</p>
            <div class="link-row"><a class="support-link" href="https://www.centerpointenergy.com/en-us/corporate/contact-us" target="_blank" rel="noopener">CenterPoint Energy ↗</a></div>
          </div>

          <div class="card">
            <div class="card-icon">⚡</div>
            <h3>Electricity</h3>
            <p><b>Champion Energy</b> has been used for retail electricity service at this property.</p>
            <p>This address has multiple retail electricity-provider options, so you can shop for a provider/plan rather than being limited to Champion.</p>
            <div class="link-row">
              <a class="support-link" href="https://championenergyservices.com/" target="_blank" rel="noopener">Champion Energy ↗</a>
              <a class="support-link" href="https://www.powertochoose.org/" target="_blank" rel="noopener">Texas Power to Choose ↗</a>
            </div>
          </div>
        </div>

        <details class="device" open>
          <summary>Internet / cable service</summary>
          <div class="device-body">
            <div class="device-meta">
              <div class="meta-box"><span>Main house</span><b>Brightspeed fiber</b></div>
              <div class="meta-box"><span>Main house alternative</span><b>Optimum cable</b></div>
              <div class="meta-box"><span>Office / shop</span><b>Separate Optimum line</b></div>
              <div class="meta-box"><span>Fiber capability</span><b>Multi-gig service</b></div>
            </div>
            <p><b>Brightspeed fiber</b> is currently connected to the main house. Multi-gig fiber service is available, including service tiers up to 5 Gbps and beyond depending on current offerings.</p>
            <p><b>Optimum cable</b> is another connected service option at the main house.</p>
            <p>The <b>office / shop has its own separate Optimum cable line</b>, independent of the main-house connection.</p>
            <div class="callout info"><strong>Useful distinction</strong>The main house and office/shop have separate physical Optimum service connections. Do not assume the office/shop line is simply an extension of the main-house internet service.</div>
            <div class="link-row">
              <a class="support-link" href="https://www.brightspeed.com/" target="_blank" rel="noopener">Brightspeed ↗</a>
              <a class="support-link" href="https://www.optimum.com/internet" target="_blank" rel="noopener">Optimum ↗</a>
            </div>
          </div>
        </details>

        <details class="device" open>
          <summary>Trash service</summary>
          <div class="device-body">
            <div class="device-meta">
              <div class="meta-box"><span>Provider</span><b>Republic Services</b></div>
              <div class="meta-box"><span>Pickup day</span><b>Monday</b></div>
              <div class="meta-box"><span>Regular bulk pickup</span><b>Not included</b></div>
              <div class="meta-box"><span>Experience</span><b>Very reliable</b></div>
            </div>
            <p>Republic Services currently provides trash collection with <b>Monday pickup</b>. Regular service does not include routine bulk-item pickup, so contact Republic separately when a large-item disposal need comes up.</p>
            <p>Service has been extremely reliable.</p>
            <div class="callout info"><strong>Collection schedules can change</strong>Confirm the current pickup day with Republic when establishing the account, especially around holidays.</div>
            <div class="link-row"><a class="support-link" href="https://www.republicservices.com/" target="_blank" rel="noopener">Republic Services ↗</a></div>
          </div>
        </details>
      `
    };

    const quickIndex = sections.findIndex(section => section.id === 'quick-start');
    sections.splice(quickIndex >= 0 ? quickIndex + 1 : 1, 0, utilities);
  }

  // Backup power and whole-panel surge protection.
  if (!sections.some(section => section.id === 'generator-electrical')) {
    const electrical = {
      id: 'generator-electrical',
      icon: '🔋',
      title: 'Generator & Electrical Protection',
      search: 'generator backup power firman h07553 9400 7500 propane gas dual fuel 50a interlock inlet surge protector surge protection mister sparky tdi electrical panel outage',
      html: `
        <h2>Generator & Electrical Protection</h2>
        <p class="section-intro">The main house is equipped for portable-generator backup power, and both major electrical panels have whole-panel surge protection.</p>

        <div class="grid three">
          <div class="card"><div class="card-icon">🔌</div><h3>Main-house backup power</h3><p>The main-house electrical panel has a <b>50A generator interlock setup</b> for safely selecting utility power or the installed generator input. The included portable generator is the FIRMAN H07553 described below.</p></div>
          <div class="card"><div class="card-icon">🛡️</div><h3>Main-house surge protection</h3><p>The main-house panel has <b>whole-panel surge protection installed by Mister Sparky of Tyler</b>.</p></div>
          <div class="card"><div class="card-icon">🛡️</div><h3>Guest-house panel protection</h3><p>The guest-house electrical panel has <b>whole-panel surge protection installed by TDi Services</b>. This panel also supplies the <b>office/shop and shed</b>.</p></div>
        </div>

        <details class="device" open>
          <summary>Included FIRMAN H07553 dual-fuel portable generator</summary>
          <div class="device-body">
            <div class="device-meta">
              <div class="meta-box"><span>Model</span><b>H07553</b></div>
              <div class="meta-box"><span>Gasoline</span><b>9400 start / 7500 run W</b></div>
              <div class="meta-box"><span>Propane</span><b>8450 start / 6750 run W</b></div>
              <div class="meta-box"><span>Output</span><b>120/240V dual fuel</b></div>
            </div>
            <p>The generator has electric start, an 8-gallon gasoline tank, CO Alert, and a 120/240V 14-50R receptacle. It can run the home through the installed generator-interlock system, but it is still a <b>7,500-watt running generator on gasoline</b> (6,750 watts on propane).</p>

            <div class="callout warn"><strong>50A connection does not mean 50A of continuous generator power</strong>The house interlock/connection is rated for 50A, but the generator's own output rating is the limiting factor. FIRMAN rates the H07553 at 7,500 running watts on gasoline and 6,750 running watts on propane. Large 240V loads can exceed that capacity quickly.</div>

            <h4 class="subhead">Safe operating concept</h4>
            <ol class="steps">
              <li><b>Read the FIRMAN manual and the labels on the main-house electrical panel before first use.</b> If the interlock arrangement is unfamiliar, have a licensed electrician demonstrate it once rather than experimenting during an outage.</li>
              <li><b>Operate the generator outdoors only, at least 20 feet from the house,</b> with the exhaust pointed away from the house and other occupied buildings. Never run it in a garage, shed, porch, carport or other enclosed/partially enclosed area.</li>
              <li><b>Use only the installed generator inlet/interlock system.</b> Never connect a portable generator to a normal household receptacle and never bypass the panel interlock.</li>
              <li>Make generator-cord connections with the generator <b>off</b>. Follow the panel's labels so the utility main is OFF and the mechanical interlock physically prevents utility and generator sources from being energized together.</li>
              <li>Start the generator and let it stabilize before placing the house on generator power. Then add circuits/loads gradually rather than turning every appliance on at once.</li>
              <li>Prioritize essential loads. Large electric heating elements, cooking equipment, multiple HVAC systems, pool equipment and other high-draw 240V loads can consume the generator's capacity quickly.</li>
              <li>When utility power returns, remove the generator load using the generator breaker/interlock sequence shown on the panel, restore utility power, then shut down and cool the generator according to the FIRMAN manual.</li>
            </ol>

            <div class="callout danger"><strong>Never backfeed the house</strong>FIRMAN specifically warns against plugging a generator directly into a wall outlet. The installed mechanical interlock is there to prevent the generator and utility supply from energizing the panel at the same time.</div>
            <div class="callout danger"><strong>Carbon monoxide</strong>A portable generator can produce lethal CO very quickly. The generator's CO Alert is an additional safety feature, not permission to operate it close to the house. Keep working CO alarms in the home.</div>
            <div class="callout info"><strong>Fuel/output note</strong>Gasoline provides the highest rated output: 9,400 starting / 7,500 running watts. Propane is rated at 8,450 starting / 6,750 running watts. Never refuel a running or hot generator; shut it down and let it cool first.</div>

            <div class="link-row">
              <a class="support-link" href="https://firmanpowerequipment.com/products/h07553" target="_blank" rel="noopener">FIRMAN H07553 specs & manuals ↗</a>
              <a class="support-link" href="https://firmanpowerequipment.com/blogs/faqs/what-s-the-safest-way-to-connect-my-generator-to-my-home" target="_blank" rel="noopener">FIRMAN home-connection safety ↗</a>
              <a class="support-link" href="https://www.cpsc.gov/Safety-Education/Safety-Education-Centers/Carbon-Monoxide-Information-Center" target="_blank" rel="noopener">CPSC generator/CO safety ↗</a>
            </div>
          </div>
        </details>

        <details class="device" open>
          <summary>Whole-panel surge protection</summary>
          <div class="device-body">
            <p>These surge-protection devices are installed at the electrical panels to help protect circuits and connected equipment from damaging voltage surges. They are <b>not battery backup</b> and do not keep the house powered during an outage.</p>
            <div class="grid">
              <div class="card"><h3>Main house</h3><p>Whole-panel surge protection installed by <b>Mister Sparky of Tyler</b>.</p><p>If the protector's status indicator shows a fault/loss of protection, or there has been a significant electrical event and its condition is uncertain, contact an electrician rather than opening the panel.</p><div class="link-row"><a class="support-link" href="https://www.mistersparky.com/tyler/" target="_blank" rel="noopener">Mister Sparky of Tyler ↗</a><a class="support-link" href="tel:+19032010228">903-201-0228</a></div></div>
              <div class="card"><h3>Guest house / office / shed</h3><p>The surge protector in the <b>guest-house panel</b> was installed by <b>TDi Services</b>. That panel supplies the guest house as well as the office/shop and shed.</p><p>TDi also provides electrical and generator service if help is needed with this panel or backup-power equipment.</p><div class="link-row"><a class="support-link" href="https://www.tdiservicepros.com/" target="_blank" rel="noopener">TDi Services ↗</a><a class="support-link" href="tel:+19035978381">903-597-8381</a></div></div>
            </div>
            <div class="callout info"><strong>Status lights vary by surge-protector model</strong>Use the label/instructions on the installed device to interpret its indicator lights. Do not remove a panel cover to inspect or service a surge protector unless you are qualified to work inside an energized electrical panel.</div>
          </div>
        </details>
      `
    };

    const utilitiesIndex = sections.findIndex(section => section.id === 'utilities');
    sections.splice(utilitiesIndex >= 0 ? utilitiesIndex + 1 : 2, 0, electrical);
  }

  // Add backup-power and surge equipment to the master inventory.
  const inventory = sections.find(section => section.id === 'inventory');
  if (inventory && !inventory.html.includes('FIRMAN H07553')) {
    inventory.html = inventory.html.replace(
      '</tbody></table>',
      '<tr><td>Main-house electrical panel</td><td>50A generator interlock setup</td><td>Manual electrical</td><td>Backup-power connection for included portable generator</td></tr>' +
      '<tr><td>Included with property</td><td>FIRMAN H07553 dual-fuel portable generator</td><td>Gasoline / propane</td><td>9400/7500W gas; 8450/6750W propane; 120/240V</td></tr>' +
      '<tr><td>Main-house electrical panel</td><td>Whole-panel surge protector</td><td>Mister Sparky of Tyler</td><td>Panel-level surge protection</td></tr>' +
      '<tr><td>Guest-house electrical panel</td><td>Whole-panel surge protector</td><td>TDi Services</td><td>Panel also feeds office/shop and shed</td></tr>' +
      '</tbody></table>'
    );
  }

  // Add the electrical systems to the by-building summary.
  const buildings = sections.find(section => section.id === 'buildings');
  if (buildings && !buildings.html.includes('50A generator interlock')) {
    buildings.html = buildings.html.replace(
      '<li>Waterdrop RO system</li>',
      '<li>Waterdrop RO system</li><li>50A generator interlock + included FIRMAN H07553 generator</li><li>Whole-panel surge protection (Mister Sparky)</li>'
    );
    buildings.html = buildings.html.replace(
      '<li>Samsung kitchen appliances</li></ul></div>',
      '<li>Samsung kitchen appliances</li><li>Whole-panel surge protection in guest-house panel (also feeds office/shop + shed)</li></ul></div>'
    );
  }

  // Trinity Valley Pools contact details.
  const pool = sections.find(section => section.id === 'pool');
  if (pool && !pool.html.includes('903-894-7720')) {
    pool.html = pool.html
      .replace(
        '<div class="callout good"><strong>Service contact</strong>Trinity Valley Pools installed the system and has been the preferred contact for questions/service.</div>',
        '<div class="callout good"><strong>Service contact</strong><b>Trinity Valley Pools</b> installed the system and has been the preferred contact for questions/service. <a href="tel:+19038947720">903-894-7720</a>.</div>'
      )
      .replace(
        '<div class="link-row"><a class="support-link" href="https://www.hayward.com/" target="_blank" rel="noopener">Hayward support ↗</a></div>',
        '<div class="link-row"><a class="support-link" href="https://trinityvalleypools.com/" target="_blank" rel="noopener">Trinity Valley Pools ↗</a><a class="support-link" href="tel:+19038947720">903-894-7720</a><a class="support-link" href="https://www.hayward.com/" target="_blank" rel="noopener">Hayward support ↗</a></div>'
      );
  }
};
