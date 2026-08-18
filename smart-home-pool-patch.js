const applyGuidePatchesBeforeSmartHomePool = window.applyGuidePatches;
window.applyGuidePatches = function applyGuidePatchesWithSmartHomeAndPool() {
  if (typeof applyGuidePatchesBeforeSmartHomePool === 'function') applyGuidePatchesBeforeSmartHomePool();

  const sections = window.GUIDE?.sections;
  if (!Array.isArray(sections)) return;

  // Holistic smart-home overview: vendor apps are authoritative; Alexa was the house-wide convenience layer.
  if (!sections.some(section => section.id === 'voice-assistants')) {
    const voice = {
      id: 'voice-assistants',
      icon: '🗣️',
      title: 'Alexa & Google Home',
      search: 'alexa echo google home assistant voice control routines smart home skills integrations rooms groups vendor apps matter',
      html: `
        <h2>Alexa & Google Home</h2>
        <p class="section-intro">This home was operated primarily with <b>Amazon Alexa</b> as the whole-house voice and automation layer. The individual manufacturer apps remain the source of truth for setup, firmware, schedules, access codes and advanced settings.</p>

        <div class="callout info"><strong>The easiest mental model</strong><b>Set up the device in its manufacturer app first, then link that service to Alexa or Google Home.</b> Alexa/Google Home are convenience layers on top; they do not replace Ring, Tapo, ecobee, Trane Home, Hayward Omni, etc.</div>

        <div class="grid">
          <div class="card">
            <div class="card-icon">🔊</div>
            <h3>Alexa — how the house was used</h3>
            <p>Alexa was the primary smart-home interface throughout the property. Once devices were online in their own apps, compatible services/skills were linked into Alexa and devices were organized into rooms/groups for simple voice commands and routines.</p>
            <p>Examples include lighting and plugs, thermostat changes, Ring camera viewing on compatible Echo/Fire TV devices, pool controls supported by Hayward Omni, and routines that combine multiple systems.</p>
          </div>
          <div class="card">
            <div class="card-icon">🏠</div>
            <h3>Google Home — a viable alternative</h3>
            <p>Google Home can be used instead for many of the major systems. TP-Link documents Google Home support for Tapo/Kasa; ecobee supports Google Assistant for thermostats; Trane Home supports Google Home; and Hayward documents Alexa/Google Assistant integration for OmniLogic.</p>
            <p><b>Do not assume every Alexa feature has an identical Google Home equivalent.</b> Security-sensitive controls and advanced device functions can vary by platform and model.</p>
          </div>
        </div>

        <details class="device" open>
          <summary>Recommended setup order</summary>
          <div class="device-body">
            <ol class="steps">
              <li>Set up and verify each device in its <b>manufacturer app</b> first.</li>
              <li>Give devices short, obvious names such as <b>Kitchen Lights</b>, <b>Upstairs Thermostat</b>, or <b>Guest Porch</b>.</li>
              <li>In Alexa, enable/link the appropriate manufacturer skill/service and run device discovery. In Google Home, use <b>Works with Google Home</b> or the manufacturer's linking flow.</li>
              <li>Assign devices to rooms/groups. This makes commands such as “turn off the kitchen lights” much more natural.</li>
              <li>Create routines only after individual devices respond reliably.</li>
            </ol>
            <div class="callout good"><strong>Keep names simple</strong>Short, unique one- or two-word device names tend to work best with voice assistants. Avoid several nearly identical device names.</div>
          </div>
        </details>

        <details class="device">
          <summary>What should stay in the manufacturer app?</summary>
          <div class="device-body">
            <ul class="simple">
              <li><b>Locks:</b> user codes, fingerprints, calibration and security administration.</li>
              <li><b>Ring:</b> camera settings, motion zones, recordings and account/device administration.</li>
              <li><b>HVAC:</b> equipment configuration, advanced thresholds and detailed scheduling.</li>
              <li><b>Hayward Omni:</b> pump schedules, speeds, equipment configuration and water-feature setup.</li>
              <li><b>WYBOT:</b> mapping, cleaning modes, schedules, firmware and robot-specific diagnostics.</li>
              <li><b>myQ:</b> treat the myQ app as the primary control/setup path for the garage doors; third-party voice/platform support can change and security restrictions may apply.</li>
            </ul>
          </div>
        </details>

        <details class="device">
          <summary>Matter porch fans</summary>
          <div class="device-body"><p>The guest-house porch fans use <b>Matter</b>, so they can be commissioned into a compatible Alexa or Google Home ecosystem (or another supported Matter platform). The original Matter setup QR codes are in the property systems binder in the main-house attached-garage closet.</p></div>
        </details>

        <div class="link-row">
          <a class="support-link" href="https://www.tp-link.com/us/support/faq/2738/" target="_blank" rel="noopener">Tapo/Kasa + Alexa ↗</a>
          <a class="support-link" href="https://www.tp-link.com/us/support/faq/2779/" target="_blank" rel="noopener">Tapo/Kasa + Google Home ↗</a>
          <a class="support-link" href="https://www.ecobee.com/en-us/smart-home/" target="_blank" rel="noopener">ecobee integrations ↗</a>
          <a class="support-link" href="https://support.tranehome.com/hc/en-us/categories/360003112751-Voice-Assistants" target="_blank" rel="noopener">Trane voice assistants ↗</a>
        </div>
      `
    };

    const appsIndex = sections.findIndex(section => section.id === 'apps');
    sections.splice(appsIndex >= 0 ? appsIndex + 1 : 3, 0, voice);
  }

  // Preserve the current pool schedules and water-feature behavior as a baseline.
  const pool = sections.find(section => section.id === 'pool');
  if (pool && !pool.html.includes('Current pool automation')) {
    pool.html = pool.html.replace(
      '<p class="section-intro">The pool has two separate connected systems: Hayward automation for the equipment pad and the WYBOT S3 robotic cleaner.</p>',
      '<p class="section-intro">The pool has two separate connected systems: Hayward automation for the equipment pad and the WYBOT S3 robotic cleaner.</p>' +
      '<div class="card"><div class="kicker">Current settings</div><h3>Current pool automation</h3>' +
      '<p>These are the schedules currently in use. They are a useful known-good baseline if the system is left unchanged.</p>' +
      '<div class="device-meta">' +
        '<div class="meta-box"><span>2:00–4:00 AM</span><b>Pump · 30%</b></div>' +
        '<div class="meta-box"><span>7:00 AM–12:00 PM</span><b>Pump · 50%</b></div>' +
        '<div class="meta-box"><span>12:00–7:00 PM</span><b>Pump · 85%</b></div>' +
        '<div class="meta-box"><span>12:00 AM daily</span><b>WYBOT cleaning</b></div>' +
      '</div>' +
      '<p><b>Water bubbler:</b> the pool equipment includes an app-controlled diverter/valve that controls the water bubbler. Use the Hayward Omni app to operate that water feature.</p>' +
      '<p><b>WYBOT:</b> the S3 is currently scheduled to clean <b>daily at midnight</b>, with a mix of cleaning types/modes programmed across the week.</p>' +
      '<div class="callout info"><strong>If you change the schedules</strong>WYBOT recommends not running the pool filtration system while the S3 is actively cleaning. The pump currently begins its first scheduled run at <b>2:00 AM</b>; if a midnight cleaning cycle is still active at that time, adjust one of the schedules to avoid overlap.</div>' +
      '</div>'
    );
  }
};
