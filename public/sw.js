if(!self.define){let e,i={};const a=(a,c)=>(a=new URL(a+".js",c).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,s)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(i[n])return;let t={};const o=e=>a(e,n),f={module:{uri:n},exports:t,require:o};i[n]=Promise.all(c.map((e=>f[e]||o(e)))).then((e=>(s(...e),t)))}}define(["./workbox-50de5c5d"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/NXRKlFsPoXe2mxsdpGFX5/_buildManifest.js",revision:"a8a3664063f05dcbde2ff1fad8f3e068"},{url:"/_next/static/NXRKlFsPoXe2mxsdpGFX5/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/112-81a00de97c33b40c.js",revision:"81a00de97c33b40c"},{url:"/_next/static/chunks/203-d1efda5a96c28578.js",revision:"d1efda5a96c28578"},{url:"/_next/static/chunks/275-39b7218bca29e1b7.js",revision:"39b7218bca29e1b7"},{url:"/_next/static/chunks/369-101af6746594edd7.js",revision:"101af6746594edd7"},{url:"/_next/static/chunks/851-a5ea1de45efd8aa2.js",revision:"a5ea1de45efd8aa2"},{url:"/_next/static/chunks/framework-7a7e500878b44665.js",revision:"7a7e500878b44665"},{url:"/_next/static/chunks/main-5bbb775f9fbc700f.js",revision:"5bbb775f9fbc700f"},{url:"/_next/static/chunks/pages/_app-1fc01606a6e035e3.js",revision:"1fc01606a6e035e3"},{url:"/_next/static/chunks/pages/_error-54de1933a164a1ff.js",revision:"54de1933a164a1ff"},{url:"/_next/static/chunks/pages/feedback-99357a35a8849477.js",revision:"99357a35a8849477"},{url:"/_next/static/chunks/pages/find-486f02dc9031812f.js",revision:"486f02dc9031812f"},{url:"/_next/static/chunks/pages/index-ee2ee6a8de8eee1c.js",revision:"ee2ee6a8de8eee1c"},{url:"/_next/static/chunks/pages/landing-397898ce17acdfb3.js",revision:"397898ce17acdfb3"},{url:"/_next/static/chunks/pages/market/form-88ff0d259c4e2606.js",revision:"88ff0d259c4e2606"},{url:"/_next/static/chunks/pages/my-market-71784d726a0bb56f.js",revision:"71784d726a0bb56f"},{url:"/_next/static/chunks/pages/phone-verification-8e6b31b2691635b4.js",revision:"8e6b31b2691635b4"},{url:"/_next/static/chunks/pages/profile-ee435391679f25e4.js",revision:"ee435391679f25e4"},{url:"/_next/static/chunks/pages/profile/edit-d24e125aef8efe2c.js",revision:"d24e125aef8efe2c"},{url:"/_next/static/chunks/pages/sign-up-4a8aa5a11bc3683f.js",revision:"4a8aa5a11bc3683f"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-87b3a303122f2f0d.js",revision:"87b3a303122f2f0d"},{url:"/_next/static/css/d3e6b109852d0c42.css",revision:"d3e6b109852d0c42"},{url:"/favicomatic/apple-touch-icon-114x114.png",revision:"9baaf7e78d1be9c9656833b701d5708c"},{url:"/favicomatic/apple-touch-icon-120x120.png",revision:"77321e4796536202380ba3a0cc417a2e"},{url:"/favicomatic/apple-touch-icon-144x144.png",revision:"297e29f17cc993477e4a074489174abf"},{url:"/favicomatic/apple-touch-icon-152x152.png",revision:"ec0a9fe6742d3bac7f85396b06710d83"},{url:"/favicomatic/apple-touch-icon-57x57.png",revision:"61f4345ec3eff6cfa8a9b85b7d4f58b7"},{url:"/favicomatic/apple-touch-icon-60x60.png",revision:"884527a40f8f7672111cde943c68141a"},{url:"/favicomatic/apple-touch-icon-72x72.png",revision:"ab573d06a09d1338ff15a39dba1022d2"},{url:"/favicomatic/apple-touch-icon-76x76.png",revision:"4591405a266c60a3c867144766ff811b"},{url:"/favicomatic/favicon-128.png",revision:"b25b2f9a091efd9023cc11bee3f089fb"},{url:"/favicomatic/favicon-16x16.png",revision:"4cc8793ba88a7c997b35700496b81f4d"},{url:"/favicomatic/favicon-196x196.png",revision:"1591eb7fb76e1b8c474e8cc44819ea21"},{url:"/favicomatic/favicon-32x32.png",revision:"129c8eb104518a16517fd5b325241b61"},{url:"/favicomatic/favicon-96x96.png",revision:"040c82f051c4066cc48e05de733a68a6"},{url:"/favicomatic/favicon.ico",revision:"4cf4c941e9dec40ce982256c57548269"},{url:"/favicomatic/icons/icon-128x128.png",revision:"51bc6369d7746b968450eec51a0f2b1d"},{url:"/favicomatic/icons/icon-144x144.png",revision:"e44db51428d0d209acb023b730281d7f"},{url:"/favicomatic/icons/icon-152x152.png",revision:"9755b358a9a4762503ab7d8499b48ee4"},{url:"/favicomatic/icons/icon-192x192.png",revision:"45f4568ff0249552496a2168e5093c4b"},{url:"/favicomatic/icons/icon-384x384.png",revision:"f2dff48fc886177a7bc62bd6f12c55a2"},{url:"/favicomatic/icons/icon-48x48.png",revision:"b6c361af6dfcfac86cad7e5fdfb3d7d7"},{url:"/favicomatic/icons/icon-512x512.png",revision:"2aea970379cba485957758028369ffe3"},{url:"/favicomatic/icons/icon-72x72.png",revision:"52315ee7fc946cda6b59db2f6d7b433a"},{url:"/favicomatic/icons/icon-96x96.png",revision:"75d58e8f6df44d4f678d0ec39ec06d6b"},{url:"/favicomatic/mstile-144x144.png",revision:"297e29f17cc993477e4a074489174abf"},{url:"/favicomatic/mstile-150x150.png",revision:"bbb2e75f9a42ce4e52e75172a9f91d23"},{url:"/favicomatic/mstile-310x150.png",revision:"c53185abdb15ec8d5b1100ee3e29c63f"},{url:"/favicomatic/mstile-310x310.png",revision:"9af9b9275cea30b1504a8c60bd70fc26"},{url:"/favicomatic/mstile-70x70.png",revision:"b25b2f9a091efd9023cc11bee3f089fb"},{url:"/manifest.json",revision:"3ad89a20fce12b250dba2cd4361e8ed5"},{url:"/mock/로고.png",revision:"0609d2ac4146fb72f9fd83f0b5af971d"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:i,event:a,state:c})=>i&&"opaqueredirect"===i.type?new Response(i.body,{status:200,statusText:"OK",headers:i.headers}):i}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const i=e.pathname;return!i.startsWith("/api/auth/")&&!!i.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
