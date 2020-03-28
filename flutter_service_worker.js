'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/index.html": "e6e25ef07ab061f3396db68372e4cc59",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "9a62a954b81a1ad45a58b9bcea89b50b",
"/assets/assets/Montserrat-Black.ttf": "e3242149669bebf6afc4b0b5d22ec6ae",
"/assets/assets/image_03.png": "f20b8e3b0532ac3888ef3dcd10c0885c",
"/assets/assets/CustomIcons.ttf": "d8378559e994d7d853d8b554d61abaaf",
"/assets/assets/Montserrat-Bold.ttf": "a3b387c93882604792867736aecd56c8",
"/assets/assets/image_01.png": "54dfd9e48d71249dfb94b379c0b0f9ed",
"/assets/assets/Montserrat-Medium.ttf": "0098f804fc2d06af52650e0b8ed3390c",
"/assets/assets/image_02.png": "c9ea3fa215ff1a6b54b9f9ca5e704898",
"/assets/FontManifest.json": "256f2c56e1d3c84bf9aacdedb126544d",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/AssetManifest.json": "759e01064b0f42a7c7afaeb816899a6e",
"/assets/LICENSE": "964211db6a8b173b1744e68da77ce459",
"/main.dart.js": "7369ce9809e0fbcc9965d0a21ac1c340"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
