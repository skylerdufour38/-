const apps = [
  {
    appName: 'Animal Sounds',
    bundleId: 'com.smartbabyapps.animalsounds',
    version: '2.0',
    platform: 'iOS',
    minOS: '3.1',
    fileSizeMB: 19.8,
    ipaFile: 'Animal Sounds 2.0.ipa',
    bundlePath: 'Payload/Animal Sounds.app',
    archiveType: 'App Store Package'
  },
  {
    appName: 'SoundTouch',
    bundleId: 'com.yourcompany.SoundTouch',
    version: '1.4',
    platform: 'iOS',
    minOS: '3.0',
    fileSizeMB: 155.5,
    ipaFile: 'SoundTouch 1.4.ipa',
    bundlePath: 'Payload/SoundTouch.app',
    archiveType: 'App Store Package'
  },
  {
    appName: 'Tozzle',
    bundleId: 'com.nodeflexion.Tozzle',
    version: '3.7',
    platform: 'iOS',
    minOS: '3.1.3',
    fileSizeMB: 112.6,
    ipaFile: 'Tozzle 3.7.ipa',
    bundlePath: 'Payload/Tozzle.app',
    archiveType: 'App Store Package'
  },
  {
    appName: 'AutismXpress',
    bundleId: 'X7WS995LSR.com.StudioEmotion.AutismXpress',
    version: '1.0',
    platform: 'iOS',
    minOS: '3.1.2',
    fileSizeMB: 7.4,
    ipaFile: 'AutismXpress 1.0.ipa',
    bundlePath: 'Payload/AutismXpress.app',
    archiveType: 'App Store Package'
  },
  {
    appName: 'Lunchbox',
    bundleId: 'com.thup.MonkeyPreschool',
    version: '1.4',
    platform: 'iOS',
    minOS: '3.0',
    fileSizeMB: 13.7,
    ipaFile: 'Lunchbox 1.4.ipa',
    bundlePath: 'Payload/Lunchbox.app',
    archiveType: 'App Store Package'
  },
  {
    appName: 'Peek-a-Zoo',
    bundleId: 'com.duckduckmoosedesign.peekazoo',
    version: '1.1.1',
    platform: 'iOS',
    minOS: '3.0',
    fileSizeMB: 19.1,
    ipaFile: 'Peek-a-Zoo 1.1.1.ipa',
    bundlePath: 'Payload/Peek-a-Zoo.app',
    archiveType: 'App Store Package'
  },
  {
    appName: 'Michigan Nature Sounds',
    bundleId: 'com.yourcompany.MichiganNatureSounds',
    version: '1.0',
    platform: 'iOS',
    minOS: '3.0',
    fileSizeMB: 24.6,
    ipaFile: 'Michigan Nature Sounds 1.0.ipa',
    bundlePath: 'Payload/Michigan Nature Sounds.app',
    archiveType: 'App Store Package'
  },
  {
    appName: 'Peek-a-Zoo',
    bundleId: 'com.tbd.pazCLL',
    version: '1.0',
    platform: 'iOS',
    minOS: '3.0',
    fileSizeMB: 24.6,
    ipaFile: 'Peek-a-Zoo 1.0.ipa',
    bundlePath: 'Payload/Peek-a-Zoo.app',
    archiveType: 'App Store Package'
  },
  {
    appName: 'Artsee',
    bundleId: 'com.britejar.artsee',
    version: '1.1',
    platform: 'iOS',
    minOS: '2.2',
    fileSizeMB: 12.4,
    ipaFile: 'Artsee 1.1.ipa',
    bundlePath: 'Payload/Artsee.app',
    archiveType: 'App Store Package'
  },
  {
    appName: 'Angry Birds',
    bundleId: 'com.rovio.AngryBirdsHalloween',
    version: '1.5.3',
    platform: 'iOS',
    minOS: '3.0',
    fileSizeMB: 16.8,
    ipaFile: 'Angry Birds 1.5.3.ipa',
    bundlePath: 'Payload/Angry Birds.app',
    archiveType: 'App Store Package'
  },
  {
    appName: 'Farm Flip Fun',
    bundleId: 'lv.yapp.farmflipfun',
    version: '1.0',
    platform: 'iOS',
    minOS: '3.0',
    fileSizeMB: 10.6,
    ipaFile: 'Farm Flip Fun 1.0.ipa',
    bundlePath: 'Payload/Farm Flip Fun.app',
    archiveType: 'App Store Package'
  },
  {
    appName: 'Farm Story',
    bundleId: 'com.teamlava.farmstory',
    version: '1.2',
    platform: 'iOS',
    minOS: '3.0',
    fileSizeMB: 19.9,
    ipaFile: 'Farm Story 1.2.ipa',
    bundlePath: 'Payload/Farm Story.app',
    archiveType: 'App Store Package'
  },
  {
    appName: 'Stickers',
    bundleId: 'com.nightanddaystudios.ericcarlestickers',
    version: '1.0',
    platform: 'iOS',
    minOS: '5.0',
    fileSizeMB: 206.1,
    ipaFile: 'Stickers 1.0.ipa',
    bundlePath: 'Payload/Stickers.app',
    archiveType: 'App Store Package'
  },
  {
    appName: 'Forest',
    bundleId: 'com.nightanddaystudios.peekabooforest',
    version: '1.1.0',
    platform: 'iOS',
    minOS: '3.1.3',
    fileSizeMB: 25.6,
    ipaFile: 'Forest 1.1.0.ipa',
    bundlePath: 'Payload/Forest.app',
    archiveType: 'App Store Package'
  },
  {
    appName: 'Virtuoso',
    bundleId: 'com.peterb.virtuosopianofree',
    version: '3.1.2',
    platform: 'iOS',
    minOS: '4.0',
    fileSizeMB: 19.9,
    ipaFile: 'Virtuoso 3.1.2.ipa',
    bundlePath: 'Payload/Virtuoso.app',
    archiveType: 'App Store Package'
  },
  {
    appName: 'ABC Tracer',
    bundleId: 'com.appzoo.ABCTracer',
    version: '1.8',
    platform: 'iOS',
    minOS: '2.2.1',
    fileSizeMB: 20.9,
    ipaFile: 'ABC Tracer 1.8.ipa',
    bundlePath: 'Payload/ABC Tracer.app',
    archiveType: 'App Store Package'
  },
  {
    appName: 'Peek Wild',
    bundleId: 'com.nightanddaystudios.peekaboowild',
    version: '2.0.1',
    platform: 'iOS',
    minOS: '3.1.3',
    fileSizeMB: 9.8,
    ipaFile: 'Peek Wild 2.0.1.ipa',
    bundlePath: 'Payload/Peek Wild.app',
    archiveType: 'App Store Package'
  },
  {
    appName: 'Peekaboo',
    bundleId: 'com.nightanddaystudios.peekaboobarn',
    version: '2.0',
    platform: 'iOS',
    minOS: '2.2',
    fileSizeMB: 3.6,
    ipaFile: 'Peekaboo 2.0.ipa',
    bundlePath: 'Payload/Peekaboo.app',
    archiveType: 'App Store Package'
  },
  {
    appName: 'Finding Sight',
    bundleId: 'my.finding3',
    version: '2.1',
    platform: 'iOS',
    minOS: '3.2',
    fileSizeMB: 34,
    ipaFile: 'Finding Sight 2.1.ipa',
    bundlePath: 'Payload/Finding Sight.app',
    archiveType: 'App Store Package'
  },
  {
    appName: 'ArtikPix',
    bundleId: 'com.rinnapps.artikpix.iap',
    version: '1.2.4',
    platform: 'iOS',
    minOS: '3.1',
    fileSizeMB: 41.4,
    ipaFile: 'ArtikPix 1.2.4.ipa',
    bundlePath: 'Payload/ArtikPix.app',
    archiveType: 'App Store Package'
  }
];

const totalSize = apps.reduce((sum, app) => sum + app.fileSizeMB, 0);
const minOSValues = apps.map((app) => Number(app.minOS.split('.')[0] || 0));
const minimumOS = Math.min(...minOSValues);

const appGrid = document.getElementById('appGrid');
const searchInput = document.getElementById('searchInput');
const totalApps = document.getElementById('totalApps');
const totalSizeEl = document.getElementById('totalSize');
const minOSEl = document.getElementById('minOS');

totalApps.textContent = String(apps.length);
totalSizeEl.textContent = `${totalSize.toFixed(1)} MB`;
minOSEl.textContent = String(minimumOS);

function formatSize(size) {
  return `${Number(size).toFixed(1)} MB`;
}

function appCardMarkup(app) {
  return `
    <article class="app-card">
      <div class="app-card-header">
        <h3 class="app-title">${app.appName}</h3>
        <span class="app-platform">${app.platform}</span>
      </div>

      <ul class="meta-list">
        <li><span>Version</span><strong>${app.version}</strong></li>
        <li><span>Bundle ID</span><strong>${app.bundleId}</strong></li>
        <li><span>Min OS</span><strong>${app.minOS}</strong></li>
        <li><span>IPA</span><strong>${app.ipaFile}</strong></li>
        <li><span>Bundle</span><strong>${app.bundlePath}</strong></li>
      </ul>

      <div class="app-actions">
        <span class="size-pill">${formatSize(app.fileSizeMB)}</span>
        <a class="link-button" href="apps.json" download>Download</a>
      </div>
    </article>
  `;
}

function renderApps(filterText = '') {
  const normalized = filterText.trim().toLowerCase();
  const filtered = apps.filter((app) => {
    if (!normalized) return true;
    return (
      app.appName.toLowerCase().includes(normalized) ||
      app.bundleId.toLowerCase().includes(normalized) ||
      app.ipaFile.toLowerCase().includes(normalized)
    );
  });

  if (!filtered.length) {
    appGrid.innerHTML = '<div class="empty-state">No apps match your search.</div>';
    return;
  }

  appGrid.innerHTML = filtered.map(appCardMarkup).join('');
}

searchInput.addEventListener('input', (event) => {
  renderApps(event.target.value);
});

renderApps();
