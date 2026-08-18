window.GUIDE = {
  sections: [
    {
      id: 'start', icon: '🏠', title: 'Start Here', search: 'welcome quick start first day apps binder garage closet wifi manual controls owner manual',
      html: `
        <div class="hero">
          <div class="eyebrow">Welcome home</div>
          <h1>Smart Home & Property Systems Guide</h1>
          <p>This home includes connected lighting, locks, HVAC controls, security cameras, pool equipment, appliances and other smart systems. You do <b>not</b> need to be technical to use them. Start with the important systems and only reset equipment when troubleshooting actually requires it.</p>
          <div class="hero-actions">
            <a class="button" href="#quick-start">First-day setup</a>
            <a class="button secondary" href="#inventory">Full inventory</a>
            <a class="button secondary" href="#troubleshooting">Something not connecting?</a>
          </div>
        </div>
        <div class="grid three">
          <div class="card"><div class="card-icon">📁</div><h3>Where the important stuff is</h3><p>The <b>main-house attached-garage closet</b> contains the property systems binder, Matter setup codes for the guest-house porch fans, and the manual power cable adapter for the WYBOT S3 pool robot.</p></div>
          <div class="card"><div class="card-icon">🖐️</div><h3>Most systems still work manually</h3><p>Lights, HVAC, appliances, fans, garage doors and locks retain normal physical controls. Smart setup adds remote control and automation; it is not required for ordinary day-to-day operation.</p></div>
          <div class="card"><div class="card-icon">⚠️</div><h3>Do not reset everything</h3><p>Some systems store useful configuration or may be associated with an online account. Follow the device-specific setup and troubleshooting guidance before using a factory reset.</p></div>
        </div>
        <div class="callout info"><strong>Recommended order</strong>Set up Wi-Fi first, then security/access, HVAC, garage doors and pool equipment. Lighting, fans and connected appliances can wait.</div>
      `
    },
    {
      id: 'quick-start', icon: '🚀', title: 'First-Day Setup', search: 'quick start apps setup order wifi first day',
      html: `
        <h2>First-Day Setup</h2>
        <p class="section-intro">If you only read one section, use this one. The house is fully usable without connecting every app on day one.</p>
        <div class="card"><ol class="steps">
          <li><b>Get your home Wi-Fi working.</b> Have the Wi-Fi name and password handy. Many smart-home products prefer or require 2.4 GHz during setup.</li>
          <li><b>Install the core apps:</b> Ring, Tapo, Yale Access, ecobee, myQ, Mitsubishi Comfort, Trane Home, Omni/OmniLogic, WYBOT, SmartThings and LG ThinQ.</li>
          <li><b>Connect security and access:</b> Ring cameras/doorbell, Yale locks and Tapo DL110 locks.</li>
          <li><b>Connect HVAC:</b> both ecobee thermostats, both Mitsubishi mini-splits and the guest-house Trane thermostat.</li>
          <li><b>Connect garage doors:</b> the two LiftMaster openers through myQ.</li>
          <li><b>Connect the pool systems:</b> Hayward Omni control and WYBOT S3.</li>
          <li><b>Then do convenience items:</b> Kasa/Tapo switches, plugs, fans, Samsung/LG appliances, Govee lighting and optional smart lights.</li>
        </ol></div>
        <div class="callout good"><strong>Good shortcut</strong>If a replacement router uses the <em>same Wi-Fi network name and password</em> as the prior network, many devices may reconnect automatically. With a new name/password, expect to reconfigure many Wi-Fi devices.</div>
      `
    },
    {
      id: 'apps', icon: '📱', title: 'Apps You May Need', search: 'apps ring tapo kasa yale ecobee myq mitsubishi comfort trane omni wybot smartthings thinq govee dreo',
      html: `
        <h2>Apps You May Need</h2>
        <p class="section-intro">You do not need all of these unless you want smart control of every device. The manufacturer app is usually the easiest place to perform initial setup and troubleshooting.</p>
        <div class="app-list">
          <div class="app-pill"><b>Ring</b><span>Exterior cameras + doorbell</span></div>
          <div class="app-pill"><b>Tapo</b><span>TP-Link locks, plugs and supported Kasa/Tapo controls</span></div>
          <div class="app-pill"><b>Yale Access</b><span>Yale Assure Lock 2 locks</span></div>
          <div class="app-pill"><b>ecobee</b><span>Main-house thermostats + room sensors</span></div>
          <div class="app-pill"><b>myQ</b><span>Both LiftMaster garage doors</span></div>
          <div class="app-pill"><b>Mitsubishi Comfort</b><span>Attached-garage + office/shop mini-splits</span></div>
          <div class="app-pill"><b>Trane Home</b><span>Guest-house thermostat</span></div>
          <div class="app-pill"><b>Omni / OmniLogic</b><span>Hayward pool automation</span></div>
          <div class="app-pill"><b>WYBOT</b><span>WYBOT S3 pool robot</span></div>
          <div class="app-pill"><b>Samsung SmartThings</b><span>Samsung kitchen appliances; optional</span></div>
          <div class="app-pill"><b>LG ThinQ</b><span>Main-house washer + dryer; optional</span></div>
          <div class="app-pill"><b>Govee Home</b><span>RV-garage LED strip</span></div>
          <div class="app-pill"><b>Dreo</b><span>Master-bedroom smart fan; optional</span></div>
        </div>
      `
    },
    {
      id: 'inventory', icon: '🧾', title: 'Full Inventory', search: 'inventory property main house guest house shop office shed rv garage devices list',
      html: `
        <h2>Full Smart / Connected Equipment Inventory</h2>
        <p class="section-intro">Master list of connected equipment included with the property, grouped by location.</p>
        <table class="inventory"><thead><tr><th>Location</th><th>Device</th><th>App / Ecosystem</th><th>Notes</th></tr></thead><tbody>
          <tr><td>Exterior / property-wide</td><td>9× Ring devices</td><td>Ring</td><td>1 Wired Doorbell 4K Pro + 8 floodlight cameras; all exterior</td></tr>
          <tr><td>Main house kitchen</td><td>Kasa KP200 smart outlet</td><td>Tapo / Kasa</td><td>Countertop left of sink</td></tr>
          <tr><td>Main house</td><td>Kasa smart dimmer switches</td><td>Tapo / Kasa</td><td>Kitchen, living room, kitchen dining, formal dining, sunroom, downstairs bedroom, hallway, guest bath, master bath, upstairs bedroom</td></tr>
          <tr><td>Main house</td><td>Kasa motion switches</td><td>Tapo / Kasa</td><td>Laundry room, pantry, garage closet</td></tr>
          <tr><td>Main house master bedroom</td><td>Dreo smart fan(s)</td><td>Dreo</td><td>Optional app control</td></tr>
          <tr><td>Main house master bedroom</td><td>Tapo DL110 lock</td><td>Tapo</td><td>Smart lock</td></tr>
          <tr><td>Main-house attached garage</td><td>Mitsubishi MSZ-GX18NL-U1 mini-split</td><td>Mitsubishi Comfort</td><td>Newer unit with built-in Wi-Fi</td></tr>
          <tr><td>Main-house attached garage</td><td>Good Earth smart light</td><td>Good Earth</td><td>Optional smart feature; normal switching works without app</td></tr>
          <tr><td>Main-house attached garage</td><td>2× Tapo smart plugs</td><td>Tapo</td><td>Additional lighting</td></tr>
          <tr><td>Pool</td><td>WYBOT S3 pool robot</td><td>WYBOT</td><td>Important pool-maintenance device</td></tr>
          <tr><td>Pool equipment pad</td><td>Hayward TriStar VS950 Omni package / OmniHub</td><td>Omni / OmniLogic</td><td>Primary pool automation/control system</td></tr>
          <tr><td>Main-house garage</td><td>LiftMaster 83650-267MC opener</td><td>myQ</td><td>Smart garage-door control</td></tr>
          <tr><td>Main house upstairs HVAC</td><td>ecobee Smart Thermostat Enhanced</td><td>ecobee</td><td>Upstairs system</td></tr>
          <tr><td>Main house downstairs HVAC</td><td>ecobee Smart Thermostat Premium</td><td>ecobee</td><td>Downstairs system</td></tr>
          <tr><td>Main house</td><td>3× ecobee SmartSensors</td><td>ecobee</td><td>Living room, sunroom, master bedroom</td></tr>
          <tr><td>Main house exterior doors</td><td>3× Yale Assure Lock 2</td><td>Yale Access</td><td>Front, back, sunroom; Wi-Fi + Bluetooth</td></tr>
          <tr><td>Main house kitchen</td><td>Samsung refrigerator, microwave, range/oven</td><td>SmartThings</td><td>Optional connected features</td></tr>
          <tr><td>Main house laundry</td><td>LG WM8900HBA.ABLEEUS washer</td><td>LG ThinQ</td><td>Optional connected features</td></tr>
          <tr><td>Main house laundry</td><td>LG DLGX8901B.ABLEEUS dryer</td><td>LG ThinQ</td><td>Optional connected features</td></tr>
          <tr><td>Main house kitchen</td><td>Waterdrop X Series 1600G RO system</td><td>Not connected</td><td>Feeds sink + refrigerator ice/water; fridge filter intentionally removed/disabled</td></tr>
          <tr><td>Office / shop</td><td>Kasa dimmers + bathroom motion switch</td><td>Tapo / Kasa</td><td>Lighting controls</td></tr>
          <tr><td>Office / shop</td><td>Mitsubishi MSZ-GS12NA-U1 mini-split</td><td>Mitsubishi Comfort</td><td>Legacy external Wi-Fi interface with indicator lights</td></tr>
          <tr><td>Office / shop garage</td><td>LiftMaster 83650-267MC opener</td><td>myQ</td><td>Smart garage-door control</td></tr>
          <tr><td>Office / shop</td><td>Yale Assure Lock 2</td><td>Yale Access</td><td>Wi-Fi + Bluetooth</td></tr>
          <tr><td>Guest house porch</td><td>Matter-based smart fans</td><td>Matter</td><td>Setup codes are in attached-garage closet binder</td></tr>
          <tr><td>Guest house</td><td>2× Tapo DL110 locks</td><td>Tapo</td><td>Front + side doors</td></tr>
          <tr><td>Guest house</td><td>Tapo and/or Kasa dimmer switches</td><td>Tapo recommended</td><td>Multiple rooms</td></tr>
          <tr><td>Guest house HVAC</td><td>Trane TSYS2C60A2VVUGA thermostat</td><td>Trane Home</td><td>Alexa skill supported; TDi Services familiar with system</td></tr>
          <tr><td>Guest house kitchen</td><td>Samsung refrigerator, microwave, range/oven</td><td>SmartThings</td><td>Optional connected features</td></tr>
          <tr><td>Shed</td><td>Smart-capable hanging shop light</td><td>Unknown</td><td>Smart feature not currently configured</td></tr>
          <tr><td>RV garage</td><td>Govee H616C LED strip</td><td>Govee Home</td><td>Optional connected lighting</td></tr>
        </tbody></table>
      `
    },
    {
      id: 'ring', icon: '📹', title: 'Ring Cameras & Doorbell', search: 'ring camera exterior floodlight doorbell driveway front yard shed shop walnut patio guest house security ownership account',
      html: `
        <h2>Ring Exterior Security</h2>
        <p class="section-intro">There are nine Ring devices and all of them are exterior.</p>
        <div class="grid">
          <div class="card"><h3>Device locations</h3><ul class="simple">
            <li>Main entrance — Wired Doorbell 4K Pro</li><li>Front yard — Floodlight Cam Pro 2nd Gen</li><li>Driveway — Floodlight Cam Pro 2nd Gen</li><li>Guest-house porch — Floodlight Cam Pro</li><li>Main-house master bedroom, guest-house side — Floodlight Cam Pro</li><li>Main-house master bedroom, patio side — Floodlight Cam Pro</li><li>Side yard facing Walnut — Floodlight Cam Pro</li><li>Shop / office front — Floodlight Cam Pro</li><li>Shed — Floodlight Cam Pro</li>
          </ul></div>
          <div class="card"><h3>Setup</h3><ol class="steps"><li>Install the Ring app and sign in/create a Ring account.</li><li>Choose <b>Set Up a Device</b> and follow the QR-code/setup prompts.</li><li>Name each camera by its physical location above so alerts are easy to understand.</li><li>If Ring reports that a device is already registered to another account, use Ring's official ownership/takeover process rather than repeatedly factory-resetting the camera.</li></ol></div>
        </div>
        <div class="callout warn"><strong>Ownership is account-level</strong>Removing power, deleting the app or canceling a subscription does not necessarily make a Ring device available to a different account. Use Ring's ownership support flow if setup reports an existing registration.</div>
        <div class="link-row"><a class="support-link" href="https://ring.com/support/articles/k8jn9/transfer-device-ownership" target="_blank" rel="noopener">Ring ownership help ↗</a><a class="support-link" href="https://ring.com/support" target="_blank" rel="noopener">Ring support ↗</a></div>
      `
    },
    {
      id: 'locks', icon: '🔐', title: 'Smart Locks', search: 'locks yale assure lock 2 tapo dl110 front back sunroom shop master guest house bluetooth wifi reset pin code',
      html: `
        <h2>Smart Locks</h2>
        <p class="section-intro">The property uses two lock ecosystems. Smart setup is optional for basic locking/unlocking, but new access codes should be created before relying on the locks.</p>
        <details class="device" open><summary>Yale Assure Lock 2 — four locks</summary><div class="device-body">
          <div class="device-meta"><div class="meta-box"><span>App</span><b>Yale Access</b></div><div class="meta-box"><span>Connectivity</span><b>Wi-Fi + Bluetooth</b></div><div class="meta-box"><span>Locations</span><b>Main front/back/sunroom + shop</b></div><div class="meta-box"><span>Manual use</span><b>Yes</b></div></div>
          <h4 class="subhead">Setup</h4><ol class="steps"><li>Install Yale Access and sign in/create an account.</li><li>Stand near the lock with Bluetooth enabled and use Yale Access to add the lock.</li><li>Create new PIN codes and confirm the door locks/unlocks locally before relying on remote control.</li><li>If the lock is still configured with unknown users or cannot be enrolled, use a factory reset.</li></ol>
          <h4 class="subhead">Factory reset in the app</h4><p>While near the lock, open Yale Access → the lock → Settings → select the device → <b>Factory Reset</b> → <b>Reset Lock</b>.</p>
          <h4 class="subhead">Hardware recovery if the app cannot reset it</h4><ol class="steps"><li>Remove the battery cover and remove one battery.</li><li>Press and hold the reset button.</li><li>Reinsert the battery while still holding reset and continue holding for approximately one minute.</li><li>Release, replace the cover, wait about one minute, then begin setup in Yale Access.</li></ol>
          <div class="callout danger"><strong>Security note</strong>A factory reset deletes existing owner/guest information and access credentials. Only use it when you intend to re-enroll the lock.</div>
          <div class="link-row"><a class="support-link" href="https://support.shopyalehome.com/en_us/how-to-factory-reset-your-assure-lock-2-BJwB9go0q" target="_blank" rel="noopener">Yale factory reset ↗</a></div>
        </div></details>
        <details class="device" open><summary>Tapo DL110 — three locks</summary><div class="device-body">
          <div class="device-meta"><div class="meta-box"><span>App</span><b>Tapo</b></div><div class="meta-box"><span>Locations</span><b>Main master + guest-house front/side</b></div><div class="meta-box"><span>Connectivity</span><b>Bluetooth + Wi-Fi</b></div><div class="meta-box"><span>Manual use</span><b>Yes</b></div></div>
          <h4 class="subhead">Setup</h4><ol class="steps"><li>Install Tapo and sign in/create a TP-Link ID.</li><li>Remove the interior battery cover and make sure the lock's Wi-Fi switch is enabled if remote control is desired.</li><li>To enter setup mode, hold the reset button about <b>5 seconds</b> until the lock announces it is ready for setup and the status light flashes red/green.</li><li>In Tapo, tap <b>+</b> → Add Device → Door Locks → DL110 and follow the Bluetooth/Wi-Fi prompts.</li><li>Calibrate the door sensor when prompted and create new access credentials.</li></ol>
          <h4 class="subhead">Full factory reset</h4><p>With the interior battery cover removed, press and hold the reset button for <b>at least 10 seconds</b>. Then restart setup in Tapo.</p>
          <div class="link-row"><a class="support-link" href="https://www.tp-link.com/us/support/faq/4178/" target="_blank" rel="noopener">Tapo lock setup/reset ↗</a><a class="support-link" href="https://www.tp-link.com/us/support/download/tapo-dl110/" target="_blank" rel="noopener">DL110 manuals ↗</a></div>
        </div></details>
      `
    },
    {
      id: 'hvac', icon: '🌡️', title: 'Heating & Cooling', search: 'hvac ecobee thermostat premium enhanced sensors mitsubishi comfort MSZ-GX18NL MSZ-GS12NA Trane TSYS2C60A2VVUGA TDI',
      html: `
        <h2>Heating & Cooling</h2>
        <p class="section-intro">All HVAC systems retain local controls. App connectivity is convenient but should never be the only way you know how to operate heating or cooling.</p>
        <details class="device" open><summary>Main house — ecobee thermostats + sensors</summary><div class="device-body">
          <div class="device-meta"><div class="meta-box"><span>Upstairs</span><b>Smart Thermostat Enhanced</b></div><div class="meta-box"><span>Downstairs</span><b>Smart Thermostat Premium</b></div><div class="meta-box"><span>Sensors</span><b>Living, sunroom, master</b></div><div class="meta-box"><span>App</span><b>ecobee</b></div></div>
          <h4 class="subhead">Setup</h4><ol class="steps"><li>Install ecobee and sign in/create an account.</li><li>At each thermostat, follow the on-screen registration prompts and add the thermostat to the home.</li><li>Confirm the three room sensors appear and are assigned to the intended thermostat/comfort settings.</li><li>Test heating/cooling setpoint changes locally before changing schedules or advanced thresholds.</li></ol>
          <div class="callout warn"><strong>Do not casually factory-reset HVAC configuration</strong>If a thermostat works locally but app registration is the only problem, use ecobee's ownership/moving guidance first. A full reset can require re-entering HVAC equipment details.</div>
          <div class="link-row"><a class="support-link" href="https://support.ecobee.com/s/articles/How-to-move-your-ecobee-devices-and-transfer-ownership?language=en_US" target="_blank" rel="noopener">ecobee ownership/setup help ↗</a><a class="support-link" href="https://www.ecobee.com/en-us/installation/" target="_blank" rel="noopener">ecobee setup ↗</a></div>
        </div></details>
        <details class="device" open><summary>Main-house attached garage — Mitsubishi MSZ-GX18NL-U1</summary><div class="device-body">
          <div class="device-meta"><div class="meta-box"><span>App</span><b>Mitsubishi Comfort</b></div><div class="meta-box"><span>Wi-Fi</span><b>Built in</b></div><div class="meta-box"><span>Model</span><b>MSZ-GX18NL-U1</b></div><div class="meta-box"><span>Manual control</span><b>Remote/controller</b></div></div>
          <ol class="steps"><li>Install Mitsubishi Comfort and create an account.</li><li>Make sure the indoor unit is powered and the phone is connected to the home's Wi-Fi.</li><li>Use the guided <b>Add/Set up a zone</b> workflow for a built-in-Wi-Fi unit.</li><li>Name the zone “Attached Garage” and verify mode, setpoint and fan changes are reflected by the unit.</li></ol>
          <div class="link-row"><a class="support-link" href="https://www.mitsubishicomfort.com/comfort-app" target="_blank" rel="noopener">Mitsubishi Comfort app/setup ↗</a></div>
        </div></details>
        <details class="device" open><summary>Office / shop — Mitsubishi MSZ-GS12NA-U1</summary><div class="device-body">
          <div class="device-meta"><div class="meta-box"><span>App</span><b>Mitsubishi Comfort</b></div><div class="meta-box"><span>Wi-Fi</span><b>External legacy interface</b></div><div class="meta-box"><span>Model</span><b>MSZ-GS12NA-U1</b></div><div class="meta-box"><span>Visual clue</span><b>Adapter has indicator lights</b></div></div>
          <p>This unit uses the same Mitsubishi Comfort app, but its Wi-Fi is provided by the older external interface attached to the indoor unit.</p>
          <ol class="steps"><li>Install Mitsubishi Comfort and start the add-zone workflow.</li><li>Follow the app path for a system using a wireless interface/adapter rather than built-in Wi-Fi.</li><li>Use the adapter's indicator lights during troubleshooting; first confirm the mini-split itself works from its local remote.</li><li>If the app cannot discover the adapter after network changes, use Mitsubishi's guided support before performing a hardware reset.</li></ol>
          <div class="link-row"><a class="support-link" href="https://www.mitsubishicomfort.com/comfort-app" target="_blank" rel="noopener">Mitsubishi Comfort app/setup ↗</a></div>
        </div></details>
        <details class="device" open><summary>Guest house — Trane TSYS2C60A2VVUGA thermostat</summary><div class="device-body">
          <div class="device-meta"><div class="meta-box"><span>App</span><b>Trane Home</b></div><div class="meta-box"><span>Model</span><b>TSYS2C60A2VVUGA</b></div><div class="meta-box"><span>Voice</span><b>Alexa skill</b></div><div class="meta-box"><span>Service</span><b>TDi Services</b></div></div>
          <h4 class="subhead">Connect to Wi-Fi</h4><ol class="steps"><li>At the thermostat, open <b>Menu → Settings → Network</b>.</li><li>Select <b>Connect to WiFi Network</b>.</li><li>Select the home Wi-Fi and enter the password exactly; passwords are case-sensitive.</li><li>Open Trane Home and follow its device-enrollment flow.</li></ol>
          <h4 class="subhead">If it is disconnected</h4><p>First cycle Wi-Fi off/on in the thermostat's Network menu. If needed, reboot the thermostat only while the HVAC system is idle. A normal reboot does not erase prior thermostat settings.</p>
          <div class="callout good"><strong>Installer/service contact</strong>TDi Services, Tyler: <a href="tel:+19035978381">903-597-8381</a>. They are familiar with this system.</div>
          <div class="link-row"><a class="support-link" href="https://support.tranehome.com/hc/en-us/articles/4403492320909-Reconnecting-a-Thermostat-After-Changing-Internet-Router-ISP-or-Network-Password" target="_blank" rel="noopener">Trane Wi-Fi reconnection ↗</a><a class="support-link" href="https://www.tdiservicepros.com/contact" target="_blank" rel="noopener">TDi contact ↗</a></div>
        </div></details>
      `
    },
    {
      id: 'lighting', icon: '💡', title: 'Lighting, Switches & Fans', search: 'kasa tapo dimmer motion switch kp200 smart plug matter porch fan dreo good earth shed govee h616c rv garage light',
      html: `
        <h2>Lighting, Switches & Fans</h2>
        <p class="section-intro">These are convenience systems. Confirm the physical switch/light works first, then worry about app control.</p>
        <details class="device" open><summary>Kasa / Tapo wall switches and KP200 outlet</summary><div class="device-body">
          <div class="badges"><span class="badge important">Convenience system</span><span class="badge manual">Physical controls work normally</span></div>
          <p><b>Main-house dimmers:</b> kitchen, living room, kitchen dining area, formal dining room, sunroom, downstairs bedroom, hallway, guest bath, master bath, upstairs bedroom.</p>
          <p><b>Main-house motion switches:</b> laundry room, pantry, garage closet.</p>
          <p><b>Office/shop:</b> smart dimmers in the office area + motion switch in bathroom.</p>
          <p><b>Guest house:</b> a mix of Tapo and Kasa dimmers. The recommended app is <b>Tapo</b>.</p>
          <p><b>KP200:</b> smart outlet on the kitchen countertop left of the sink.</p>
          <h4 class="subhead">Setup</h4><ol class="steps"><li>In Tapo, tap <b>+</b> and add the appropriate switch/outlet type.</li><li>Follow the app's pairing flow and connect the device to Wi-Fi.</li><li>If one switch is offline after a router change, reset/reconfigure only that device rather than resetting every switch.</li></ol>
          <h4 class="subhead">Typical Kasa wall-switch recovery</h4><p>Many Kasa wall switches have small <b>RESTART</b> and <b>RESET</b> controls. On the common HS200 family, holding RESET about 5 seconds enters app-config mode; holding about 10 seconds performs a factory reset. Installed dimmer models vary, so check the device label/manual before assuming those timings apply.</p>
          <div class="link-row"><a class="support-link" href="https://www.tp-link.com/us/support/faq/1258/" target="_blank" rel="noopener">Kasa wall-switch reset example ↗</a><a class="support-link" href="https://www.tp-link.com/us/support/faq/2631/" target="_blank" rel="noopener">Tapo/Kasa after Wi-Fi change ↗</a></div>
        </div></details>
        <details class="device" open><summary>2× Tapo smart plugs — attached garage lights</summary><div class="device-body"><ol class="steps"><li>Power on the plug.</li><li>For a soft reset that retains settings, hold its power/control button about <b>5 seconds</b>.</li><li>For a full factory reset, hold the power/control button about <b>10 seconds</b>.</li><li>Open Tapo → + → Add Device and configure the plug on the home Wi-Fi.</li></ol><div class="link-row"><a class="support-link" href="https://www.tp-link.com/us/support/faq/2612/" target="_blank" rel="noopener">TP-Link plug reset guide ↗</a></div></div></details>
        <details class="device"><summary>Guest-house porch — Matter smart fans</summary><div class="device-body"><p>The original Matter setup QR codes are in the <b>property systems binder in the main-house attached-garage closet</b>.</p><ol class="steps"><li>Choose a Matter controller/app such as Apple Home, Google Home, Alexa or SmartThings.</li><li>Select Add Matter Device / Add Device.</li><li>Scan the correct Matter QR code from the binder and follow the prompts.</li><li>If a fan is already commissioned to another smart-home fabric and will not add, use the fan manufacturer's reset procedure before scanning the code again.</li></ol><div class="callout info"><strong>Keep the QR codes</strong>They are setup credentials for the fans. Store them with the property systems binder.</div></div></details>
        <details class="device"><summary>Dreo smart fan(s) — main-house master bedroom</summary><div class="device-body"><p>Optional smart functionality. Use the Dreo app if remote/app control is desired. Normal fan controls remain available without smart setup.</p></div></details>
        <details class="device"><summary>Good Earth garage light + shed smart-capable light</summary><div class="device-body"><p>Both are low-priority smart features. The Good Earth garage fixture can be placed into pairing/reset mode by rapidly cycling wall power on compatible models, but the exact installed fixture model is not recorded. Use normal wall-switch operation unless smart control is specifically desired, and confirm the model before relying on a reset sequence.</p><p>The shed hanging shop light is not currently configured as a smart device; no setup is required for ordinary use.</p></div></details>
        <details class="device"><summary>Govee H616C — RV garage</summary><div class="device-body"><p>Install Govee Home, add the H616C strip, and follow the in-app Bluetooth/Wi-Fi setup prompts. Smart control is optional.</p></div></details>
      `
    },
    {
      id: 'pool', icon: '🏊', title: 'Pool Systems', search: 'pool hayward tristar vs950 omni omnihub wybot s3 robot docking retrieve manual power cable adapter solar charging filter trinity valley pools',
      html: `
        <h2>Pool Systems</h2>
        <p class="section-intro">The pool has two separate connected systems: Hayward automation for the equipment pad and the WYBOT S3 robotic cleaner.</p>
        <details class="device" open><summary>Hayward TriStar VS950 Omni package / OmniHub</summary><div class="device-body">
          <div class="device-meta"><div class="meta-box"><span>Purpose</span><b>Pool equipment control</b></div><div class="meta-box"><span>App</span><b>Omni / OmniLogic</b></div><div class="meta-box"><span>Pump</span><b>TriStar VS950</b></div><div class="meta-box"><span>Installer</span><b>Trinity Valley Pools</b></div></div>
          <p>The Omni platform is the primary smart-control layer for the pool equipment. Depending on the installed configuration, it can control pump speed/schedules and other connected pool functions.</p>
          <h4 class="subhead">Setup</h4><ol class="steps"><li>Install Hayward's current Omni/OmniLogic app and create an account.</li><li>Use the app/system registration workflow to add the installed Omni controller.</li><li>If the controller reports that it is already associated with another account or registration details are unclear, contact <b>Trinity Valley Pools</b> before factory-resetting the automation panel.</li><li>After setup, verify existing schedules and pump behavior before editing them. Photograph or note the schedule first.</li></ol>
          <div class="callout danger"><strong>Do not factory-reset the pool automation casually</strong>The controller contains configuration describing installed pool equipment and schedules. An account-registration problem is not the same as a bad equipment configuration.</div>
          <div class="callout good"><strong>Service contact</strong>Trinity Valley Pools installed the system and has been the preferred contact for questions/service.</div>
          <div class="link-row"><a class="support-link" href="https://www.hayward.com/" target="_blank" rel="noopener">Hayward support ↗</a></div>
        </div></details>
        <details class="device" open><summary>WYBOT S3 pool robot</summary><div class="device-body">
          <div class="device-meta"><div class="meta-box"><span>Importance</span><b>Important pool maintenance</b></div><div class="meta-box"><span>App</span><b>WYBOT</b></div><div class="meta-box"><span>Manual power cable</span><b>Attached-garage closet</b></div><div class="meta-box"><span>Primary charging</span><b>Dock / solar system</b></div></div>
          <h4 class="subhead">Normal use</h4><ol class="steps"><li>Keep the charging dock in its established pool position whenever possible; dock position affects mapping and coverage.</li><li>Pair the S3 while it is docked, connect it to Wi-Fi and configure the pool in the WYBOT app.</li><li>Start cleaning from the app or supported dock controls.</li><li>Rinse debris from the filter basket after cleaning.</li></ol>
          <h4 class="subhead">Retrieve the robot</h4><p>Use the app's docking/recall function or the physical recall control on the dock when available. If the robot cannot return normally, use WYBOT's manual retrieval procedure shown in its S3 support material; do not pull the unit by a random cable or moving component.</p>
          <h4 class="subhead">Manual wired charging / power</h4><p>The separate <b>AC/manual power cable adapter is stored in the main-house attached-garage closet</b>. Use it when solar/dock charging is insufficient or troubleshooting requires direct power.</p>
          <h4 class="subhead">If mapping or scheduling stops working</h4><ul class="simple"><li>Confirm the dock has stable Wi-Fi.</li><li>Confirm the robot is seated/charging correctly.</li><li>If a map is lost after re-pairing, use WYBOT's <b>Remapping</b> function.</li><li>Do not relocate the dock after mapping unless you are prepared to remap.</li></ul>
          <div class="callout info"><strong>Operating note</strong>WYBOT recommends not running the pool filtration system while the S3 is actively cleaning.</div>
          <div class="link-row"><a class="support-link" href="https://www.wybotpool.com/pages/s3-use-guide" target="_blank" rel="noopener">WYBOT S3 use guide ↗</a><a class="support-link" href="https://www.wybotpool.com/pages/support-video" target="_blank" rel="noopener">WYBOT support videos ↗</a></div>
        </div></details>
      `
    },
    {
      id: 'garage', icon: '🚗', title: 'Garage Doors', search: 'liftmaster 83650-267MC myq garage door opener main shop office reset ownership account',
      html: `
        <h2>Garage Doors / myQ</h2>
        <p class="section-intro">There are two LiftMaster 83650-267MC openers with myQ: one at the main-house garage and one at the office/shop garage.</p>
        <details class="device" open><summary>LiftMaster 83650-267MC — 2 openers</summary><div class="device-body">
          <div class="device-meta"><div class="meta-box"><span>App</span><b>myQ</b></div><div class="meta-box"><span>Main-house garage</span><b>1 opener</b></div><div class="meta-box"><span>Office/shop garage</span><b>1 opener</b></div><div class="meta-box"><span>Manual function</span><b>Wall/remotes</b></div></div>
          <h4 class="subhead">Setup</h4><ol class="steps"><li>Install myQ and sign in/create an account.</li><li>Choose Add Device / Garage Door Opener and follow the app prompts for each opener.</li><li>Name them “Main House Garage” and “Office / Shop Garage.”</li><li>Test app control while also confirming the wall controls and remotes operate normally.</li></ol>
          <div class="callout danger"><strong>Avoid a full opener factory reset unless needed</strong>A factory reset can remove remotes, keypads, HomeLink connections and myQ accessories, requiring them to be programmed again.</div>
          <h4 class="subhead">If myQ says the opener belongs to another account</h4><p>Use myQ's account/device support process first. Use a full myQ factory reset only if account registration cannot be resolved and you are prepared to reprogram remotes/keypads.</p>
          <div class="link-row"><a class="support-link" href="https://support.chamberlaingroup.com/s/article/How-to-Delete-a-Device-From-a-myQ-Account" target="_blank" rel="noopener">myQ account/device help ↗</a><a class="support-link" href="https://support.chamberlaingroup.com/s/article/How-to-Factory-Reset-a-myQ-Device" target="_blank" rel="noopener">myQ factory-reset guide ↗</a></div>
        </div></details>
      `
    },
    {
      id: 'appliances', icon: '🧺', title: 'Appliances & Water', search: 'samsung smartthings fridge refrigerator microwave range oven lg thinq washer wm8900hba dryer dlgx8901b waterdrop reverse osmosis ro filter ice maker',
      html: `
        <h2>Appliances & Water</h2>
        <p class="section-intro">Connected appliance features are optional. Do not delay normal appliance use because an app has not been configured.</p>
        <details class="device" open><summary>Samsung SmartThings appliances — main house + guest house</summary><div class="device-body">
          <p>Both kitchens include Samsung smart-capable refrigerator, microwave and range/oven equipment. These are <b>nice-to-have</b> connected features.</p>
          <ol class="steps"><li>Install SmartThings and sign in/create a Samsung account.</li><li>Open Devices → <b>+</b> → Add Device.</li><li>Use <b>Scan QR code</b>, <b>Scan nearby</b>, or choose the appropriate Samsung appliance category.</li><li>Follow the appliance-specific prompt to place that appliance into connection mode.</li><li>If an appliance is already registered to another Samsung account, follow SmartThings' ownership/moving prompts rather than repeatedly resetting it.</li></ol>
          <div class="callout info"><strong>Range safety</strong>Remote-control capabilities vary by range type/model. Samsung may require Smart Control to be enabled locally, and gas ranges cannot be remotely ignited.</div>
          <div class="link-row"><a class="support-link" href="https://www.samsung.com/us/support/answer/ANS10002639/" target="_blank" rel="noopener">SmartThings add/manage devices ↗</a><a class="support-link" href="https://www.samsung.com/us/support/answer/ANS10002317/" target="_blank" rel="noopener">Samsung range + SmartThings ↗</a></div>
        </div></details>
        <details class="device" open><summary>LG ThinQ washer + dryer — main house</summary><div class="device-body">
          <div class="device-meta"><div class="meta-box"><span>Washer</span><b>WM8900HBA.ABLEEUS</b></div><div class="meta-box"><span>Dryer</span><b>DLGX8901B.ABLEEUS</b></div><div class="meta-box"><span>App</span><b>LG ThinQ</b></div><div class="meta-box"><span>Smart setup</span><b>Optional</b></div></div>
          <ol class="steps"><li>Install LG ThinQ and sign in/create an LG account.</li><li>Tap <b>+</b> and scan the product QR code, or choose Add Device without QR and select the appliance type.</li><li>Power on the appliance and follow ThinQ's prompt to enable appliance Wi-Fi.</li><li>Select the home network and complete registration.</li></ol>
          <p>LG commonly uses 2.4 GHz Wi-Fi during ThinQ setup.</p>
          <div class="link-row"><a class="support-link" href="https://www.lg.com/us/support/getting-started-with-lg-thinq" target="_blank" rel="noopener">LG ThinQ setup ↗</a><a class="support-link" href="https://www.lg.com/us/support/product/lg-WM8900HBA.ABLEEUS" target="_blank" rel="noopener">Washer support/manual ↗</a></div>
        </div></details>
        <details class="device" open><summary>Waterdrop X Series 1600G reverse-osmosis system</summary><div class="device-body">
          <div class="badges"><span class="badge manual">Not an IoT device</span><span class="badge important">Important maintenance note</span></div>
          <p>The under-sink Waterdrop RO system supplies filtered water at the kitchen and also feeds the refrigerator's water/ice supply.</p>
          <div class="callout good"><strong>The refrigerator filter is intentionally removed/disabled</strong>This is not a missing-maintenance item. The refrigerator receives already-filtered RO water from the Waterdrop system, so the in-fridge filter does not need to be replaced in the normal way.</div>
          <p>For filter replacement/service, identify the Waterdrop X Series 1600G consumables by the system label and use Waterdrop's maintenance instructions.</p>
        </div></details>
      `
    },
    {
      id: 'buildings', icon: '🏘️', title: 'By Building', search: 'main house guest house office shop shed rv garage building location',
      html: `
        <h2>Find Equipment by Building</h2>
        <p class="section-intro">A quick room/building view when you know where you are standing but not what ecosystem you are looking at.</p>
        <div class="grid">
          <div class="card"><h3>Main house</h3><ul class="simple"><li>Kasa dimmers + motion switches + KP200 outlet</li><li>Dreo master-bedroom fan(s)</li><li>Tapo DL110 master-bedroom lock</li><li>Attached-garage Mitsubishi MSZ-GX18NL-U1</li><li>Good Earth garage light + 2 Tapo plugs</li><li>Main garage LiftMaster/myQ</li><li>Upstairs/downstairs ecobee thermostats + 3 sensors</li><li>3 Yale locks</li><li>Samsung kitchen appliances</li><li>LG washer/dryer</li><li>Waterdrop RO system</li></ul></div>
          <div class="card"><h3>Office / shop</h3><ul class="simple"><li>Kasa dimmers</li><li>Kasa bathroom motion switch</li><li>Mitsubishi MSZ-GS12NA-U1 with external Wi-Fi interface</li><li>LiftMaster/myQ garage opener</li><li>Yale Assure Lock 2</li></ul></div>
          <div class="card"><h3>Guest house</h3><ul class="simple"><li>Matter smart porch fans</li><li>2 Tapo DL110 locks</li><li>Tapo/Kasa dimmer switches</li><li>Trane TSYS2C60A2VVUGA thermostat</li><li>Samsung kitchen appliances</li></ul></div>
          <div class="card"><h3>Exterior / pool / outbuildings</h3><ul class="simple"><li>9 Ring exterior devices around property</li><li>Hayward TriStar VS950 Omni pool system</li><li>WYBOT S3 pool robot</li><li>Shed smart-capable hanging light</li><li>RV-garage Govee H616C strip</li></ul></div>
        </div>
      `
    },
    {
      id: 'troubleshooting', icon: '🛠️', title: 'Troubleshooting', search: 'troubleshooting offline wifi 2.4ghz 5ghz password reset app bluetooth power reboot network smart device not connect',
      html: `
        <h2>General Smart-Home Troubleshooting</h2>
        <p class="section-intro">Most “smart device is broken” problems are actually power, Wi-Fi, account registration or pairing-state problems. Work from least destructive to most destructive.</p>
        <div class="card"><h3>Use this order</h3><ol class="steps">
          <li><b>Confirm the device works manually.</b> A light switch should switch. A thermostat should control HVAC locally. A garage door should operate from its wall control.</li>
          <li><b>Confirm power.</b> Check breakers, batteries, wall switches, GFCIs and power adapters.</li>
          <li><b>Confirm the phone is on the intended home Wi-Fi and Bluetooth is enabled.</b></li>
          <li><b>Check account registration.</b> A device associated with another online account may reject setup even though Wi-Fi is perfect.</li>
          <li><b>Try a normal reboot or setup-mode reset.</b> Prefer a non-destructive restart before factory reset.</li>
          <li><b>Factory-reset only the affected device</b> after checking that doing so will not erase important configuration or paired accessories.</li>
        </ol></div>
        <div class="grid">
          <div class="card"><h3>2.4 GHz vs. 5 GHz</h3><p>Many IoT devices use 2.4 GHz because it reaches farther and has broad compatibility. If setup repeatedly fails, connect the phone to a 2.4 GHz-capable SSID and temporarily avoid aggressive band-steering/isolation features.</p></div>
          <div class="card"><h3>New router?</h3><p>Recreating the old SSID and password can allow many devices to reconnect without individual reconfiguration. With a new network name/password, expect to re-pair devices that cannot change credentials in-app.</p></div>
          <div class="card"><h3>Device says “already registered”</h3><p>This is often an account-registration problem, not a hardware failure. Use the manufacturer's ownership/account-recovery process before assuming a factory reset is required.</p></div>
          <div class="card"><h3>HVAC works, app does not</h3><p>Do not disturb equipment wiring/configuration merely to fix app access. Reconnect network/account access first; use the installer/service company if the HVAC configuration itself is unclear.</p></div>
        </div>
      `
    },
    {
      id: 'print', icon: '🖨️', title: 'Printable QR Card', search: 'print qr card start here website binder url owner guide',
      html: `
        <h2>Printable “Start Here” Card</h2>
        <p class="section-intro">The QR code below opens the live Property Systems Guide. Keep a printed copy with the property systems binder in the main-house attached-garage closet.</p>
        <div class="print-actions"><button class="button print-card-button" type="button" onclick="document.body.classList.add('print-card-mode'); window.print(); document.body.classList.remove('print-card-mode');">🖨️ Print this card</button><a class="button print-card-link" href="https://h4xb0t.github.io/property-systems-guide/" target="_blank" rel="noopener">↗ Open live guide</a></div>
        <div class="print-card">
          <div class="kicker">Property owner guide</div>
          <h3>Smart Home & Property Systems Guide</h3>
          <p class="print-lead">Setup, operation, troubleshooting and reset guidance for the connected systems and equipment included with this property.</p>
          <a class="qr-link" href="https://h4xb0t.github.io/property-systems-guide/" aria-label="Open the Property Systems Guide"><img class="qr-code" src="property-guide-qr.svg" alt="QR code for the Property Systems Guide" /></a>
          <p class="scan-label"><b>Scan to open the complete guide</b></p>
          <p class="print-url">h4xb0t.github.io/property-systems-guide/</p>
          <div class="print-rule"></div>
          <p><b>Start with “First-Day Setup” before factory-resetting any equipment.</b></p>
          <p>Important manuals, Matter setup codes and the WYBOT manual power adapter are stored in the <b>main-house attached-garage closet</b>.</p>
          <p>Most systems continue to work manually even if you choose not to connect them to an app.</p>
          <p class="print-foot"><small>Property Systems Guide · Updated August 2026</small></p>
        </div>
        <style>
          .print-actions { display:flex; flex-wrap:wrap; gap:10px; margin:0 0 18px; }
          .print-card-button { border:0; cursor:pointer; background:#0f172a; color:#fff; }
          .print-card-link { border:1px solid #dbe2ea; }
          .print-card { max-width:680px; border:2px solid #1c2d48; background:#fff; border-radius:20px; padding:32px; margin:18px 0; }
          .print-card h3 { font-size:1.7rem; line-height:1.15; margin:4px 0 8px; }
          .print-lead { color:#526076; max-width:560px; }
          .qr-link { display:block; width:max-content; margin:24px auto 8px; }
          .qr-code { display:block; width:210px; height:210px; }
          .scan-label, .print-url { text-align:center; margin:6px 0; }
          .print-url { font-family:ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; font-size:.78rem; overflow-wrap:anywhere; color:#526076; }
          .print-rule { height:1px; background:#dbe2ea; margin:24px 0; }
          .print-foot { margin-top:24px; color:#627086; }
          @page { size: Letter portrait; margin: 0.55in; }
          @media print {
            body.print-card-mode .section { display:none !important; }
            body.print-card-mode #print { display:block !important; margin:0 !important; }
            body.print-card-mode #print > h2, body.print-card-mode #print > .section-intro, body.print-card-mode #print > .print-actions, body.print-card-mode .topbar, body.print-card-mode .sidebar, body.print-card-mode footer { display:none !important; }
            body.print-card-mode .layout { display:block !important; }
            body.print-card-mode .content { max-width:none !important; padding:0 !important; margin:0 !important; }
            body.print-card-mode { background:#fff !important; }
            body.print-card-mode .print-card { display:block !important; width:7in !important; max-width:7in !important; min-height:8.8in; margin:0 auto !important; padding:.5in !important; border:2px solid #1c2d48 !important; border-radius:.18in !important; box-shadow:none !important; break-inside:avoid; }
            body.print-card-mode .qr-code { width:2.25in !important; height:2.25in !important; }
            body.print-card-mode a { color:inherit !important; text-decoration:none !important; }
          }
        </style>
      `
    }
  ]
};
