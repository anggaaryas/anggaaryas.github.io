'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/asset/about_me_icon.png": "5a03fb3e5a4ac253ba8d4c5ee5304c8b",
"assets/asset/blog_icon.png": "73e26007545ed8eee968286ab2ffaff4",
"assets/asset/game_icon.png": "8d968b1eb83f0ff5f24d22dea854ab32",
"assets/asset/graphic_icon.png": "fdf77a32da401417f105f9484029939e",
"assets/asset/note_icon.png": "3a666baefbf37161ba9a344c0d36f1e8",
"assets/asset/password_infinity%2520credit.txt": "46d3b1b2b96da79e96127c652c2f38b8",
"assets/asset/portofolio_icon.png": "102dd3cba864aca794f970de9777a739",
"assets/asset/programming_icon.png": "b643184a6690abacd59023087a29491e",
"assets/asset/sss.png": "4d5ed7881d4ff9060809cd34e1ea4497",
"assets/AssetManifest.bin": "9bcbbc36ba746122c1b0dddf9ced9f19",
"assets/AssetManifest.bin.json": "6cdb0775e058f5581eefbdce78bee770",
"assets/AssetManifest.json": "7702d2b70705799e7e9d104d311c9905",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "db6df0ac7e58c86c4e30f06d5ad148ad",
"assets/google_font/GrandHotel-Regular.ttf": "4c534f3e376249c52bcab0f94333a264",
"assets/google_font/Monoton-Regular.ttf": "d20753b0996b7092460eef623995f880",
"assets/NOTICES": "92eddfa3d127ee0b2898fc9944ea611e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/android-icon-144x144.png": "33a7cfb4dae1abc3f4daa1ce125432f4",
"icons/android-icon-192x192.png": "f352ffcf036e17273e8bb97a95b7c963",
"icons/android-icon-36x36.png": "8dcc11ba1a9f1e80f46837aa12e29f18",
"icons/android-icon-48x48.png": "15cb56d784e34963317336e803a2ec68",
"icons/android-icon-72x72.png": "aa2697d25e33e65acfc1630c97d25278",
"icons/android-icon-96x96.png": "41062e81e959970beed72cedac2527f0",
"icons/apple-icon-114x114.png": "d10c6b97b7d5d510074f53967f44aeda",
"icons/apple-icon-120x120.png": "3ded244a51295d810509984d34de0cc0",
"icons/apple-icon-144x144.png": "33a7cfb4dae1abc3f4daa1ce125432f4",
"icons/apple-icon-152x152.png": "1c6fec6944c7bfd273f6b59a9517b925",
"icons/apple-icon-180x180.png": "334d3b8aadd5be4306373728b38feca8",
"icons/apple-icon-57x57.png": "00f7e8908202619aa31b7537cc7292de",
"icons/apple-icon-60x60.png": "0718c97c80ffb70f116f7c665a2184d3",
"icons/apple-icon-72x72.png": "aa2697d25e33e65acfc1630c97d25278",
"icons/apple-icon-76x76.png": "916008c96d547e1efa496762c19a759e",
"icons/apple-icon-precomposed.png": "800ece26c46d6bb8dd3599f0aef6161b",
"icons/apple-icon.png": "0c11af29f87ae8511e359efa736e31b8",
"icons/browserconfig.xml": "97775b1fd3b6e6c13fc719c2c7dd0ffe",
"icons/favicon-16x16.png": "b86230f0d2bcd215c9b65795790ad0ec",
"icons/favicon-32x32.png": "3cb7c52b15bab7645bccbd512abf88c3",
"icons/favicon-96x96.png": "51b1ce61e9105e12713bdeae47089715",
"icons/favicon.ico": "c7a95fe4929885a57970ad71a054b7a8",
"icons/manifest.json": "e50e6a1c9ed6452635d3211f39501e0d",
"icons/ms-icon-144x144.png": "856e151f58c59d98b865ad0518a754cd",
"icons/ms-icon-150x150.png": "49b8b403a288f64bb3eefcca0194448c",
"icons/ms-icon-310x310.png": "dd8cf6b48d78e7c0e6de92667bb2aa97",
"icons/ms-icon-70x70.png": "e1306f8573a05159aeaefcf3fe161620",
"index.html": "e01ff9bff8212a088e198235310d6a2d",
"/": "e01ff9bff8212a088e198235310d6a2d",
"main.dart.js": "6f953f514b5c0c220caabe2c5410006c",
"manifest.json": "bfcfbb367e6a4544d6f9bd4bc84114bc",
"version.json": "e51507b6f8af804e60fef7ee4c0af910"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
