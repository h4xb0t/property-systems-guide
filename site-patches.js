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

  // TDi installed and services the Mitsubishi mini-splits as well as the guest-house Trane system.
  const hvac = byId['hvac'];
  if (hvac && !hvac.html.includes('TDi installed both Mitsubishi mini-splits')) {
    hvac.html = hvac.html.replace(
      '<p class="section-intro">All HVAC systems retain local controls. App connectivity is convenient but should never be the only way you know how to operate heating or cooling.</p>',
      '<p class="section-intro">All HVAC systems retain local controls. App connectivity is convenient but should never be the only way you know how to operate heating or cooling.</p>' +
      '<div class="callout good"><strong>Local HVAC service contact</strong><b>TDi Services</b> installed both Mitsubishi mini-splits on the property as well as the guest-house Trane system and is an excellent first call for service or setup questions involving those systems. <a href="tel:+19035978381">903-597-8381</a>.</div>'
    );
  }

  // Utilities belong near the beginning of the owner manual because they are more important on move-in day than optional connected appliances.
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
            <div class="callout info"><strong>Collection schedules can change</strong>Confirm the current pickup day with Republic when establishing the new account, especially around holidays.</div>
            <div class="link-row"><a class="support-link" href="https://www.republicservices.com/" target="_blank" rel="noopener">Republic Services ↗</a></div>
          </div>
        </details>
      `
    };

    const quickIndex = sections.findIndex(section => section.id === 'quick-start');
    sections.splice(quickIndex >= 0 ? quickIndex + 1 : 1, 0, utilities);
  }
};
