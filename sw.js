importScripts('workbox-sw.prod.v2.1.0.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "bundle.js",
    "revision": "0f678bfbb4d3001ceb5d2fd2df984010"
  },
  {
    "url": "index.html",
    "revision": "6fe2a87f7d8ff33b27327dde5fb0d11d"
  },
  {
    "url": "vendor/custom-elements-es5-adapter.js",
    "revision": "a5043c1d0dd16d84558ee6cc2276212e"
  },
  {
    "url": "vendor/webcomponents-lite.js",
    "revision": "fc5fd8d2c8b27139307536abb8aecda7"
  },
  {
    "url": "vendor/webcomponents-loader.js",
    "revision": "f13bbbbf647b7922575a7894367ddaaf"
  },
  {
    "url": "vendor/webcomponents-sd-ce.js",
    "revision": "b4daa8feea009da29844c0ceffde61dd"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
