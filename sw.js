if(!self.define){let e,s={};const i=(i,a)=>(i=new URL(i+".js",a).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(a,c)=>{const f=e||("document"in self?document.currentScript.src:"")||location.href;if(s[f])return;let n={};const r=e=>i(e,f),d={module:{uri:f},exports:n,require:r};s[f]=Promise.all(a.map((e=>d[e]||r(e)))).then((e=>(c(...e),n)))}}define(["./workbox-55ed8c96"],(function(e){"use strict";e.setCacheNameDetails({prefix:"yft-design-cache"}),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/401-BIkHzDoS.css",revision:"f998d7a33315beebe022d41299b588b0"},{url:"assets/401-BSRHocgn.js",revision:"030bbcd9caceb14cf1bef553b8837358"},{url:"assets/404-BzuWXXOu.js",revision:"2f2cc756d7655abe90d903296d5a753d"},{url:"assets/404-DQrWRSfw.css",revision:"28974868014ebcce41b3949a6fd0010c"},{url:"assets/clipper-lib-Cdu7DM5D.js",revision:"2e58a0a801a6718e5ee80744b0831328"},{url:"assets/element-plus-pT6uyTvv.js",revision:"3922fd0db830b043bd03dfdba01dbf86"},{url:"assets/fabric-Dlz3ta-n.js",revision:"390811954203cfb680f6ff6a1f581f95"},{url:"assets/github-DkJB877D.js",revision:"8bea680830ae1c9fa8b3a9bddefddb79"},{url:"assets/index-aH-0gitw.css",revision:"acf736177192665932ef79fa18524b30"},{url:"assets/index-C_6LyHV6.js",revision:"4cca50faf75d04775cf8e44c4e4fac07"},{url:"assets/index-CqlWEO5J.js",revision:"7cc82a52e1ab056ca0954e105abe82fa"},{url:"assets/index-DHLu7O71.css",revision:"db43eb5c8f6a99b5967138d9d282a294"},{url:"assets/index-j5xWHdxD.js",revision:"81988fad26d15849fac29ca8b9f6d1ff"},{url:"assets/index-LzJ8yNlJ.css",revision:"746a7cb4614eb541e9868bc49a4b010b"},{url:"assets/index-zIMa0XhX.js",revision:"9cbba2c8566904a0d0ef152add362f8f"},{url:"assets/lodash-es-DIelbCxD.js",revision:"8e11f86e452b95080759df1a2a7afb00"},{url:"assets/opentype.js-QlGfLlyt.js",revision:"9514a5efa3a4e9d3fb1d7b8ccb95acc6"},{url:"assets/pixi-_8LqhXwz.js",revision:"f8ca8c6abe322f6ad71d9f1c2fc32c60"},{url:"assets/vue-DLFFAtqN.js",revision:"6383393870422b4e1b96a37086aa98a2"},{url:"assets/workbox-window.prod.es5-CIVDLvzL.js",revision:"d9134a8bccb546c09144189a66f619b6"},{url:"index.html",revision:"02409dddf752b2281852c41ff860dab2"},{url:"img/icons/yft-design-192x192.png",revision:"9e4ff4f2c2ad88ba102bdc924f71a993"},{url:"img/icons/yft-design-512x512.png",revision:"59ad554042e1d1e3e2e5f8b25788f3de"},{url:"manifest.webmanifest",revision:"78ee5d33f4217faa1ba27e4cc2d45b1f"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"interface-cache",plugins:[]}),"GET"),e.registerRoute(/(.*?)\.(js|css|ts)/,new e.CacheFirst({cacheName:"js-css-cache",plugins:[]}),"GET"),e.registerRoute(/(.*?)\.(png|jpe?g|svg|gif|bmp|psd|tiff|tga|eps)/,new e.CacheFirst({cacheName:"image-cache",plugins:[]}),"GET")}));
