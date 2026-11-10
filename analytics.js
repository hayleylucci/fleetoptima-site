// Site analytics: Google Analytics (visits, sources, PDF downloads) and Microsoft Clarity
// (anonymous session replays and heatmaps). Runs only on the live site, so local previews
// and tests never show up as visits.
(function () {
  if (!/(^|\.)fleetoptima\.org$/.test(location.hostname)) return;

  // Google Analytics 4
  var ga = document.createElement('script');
  ga.async = true;
  ga.src = 'https://www.googletagmanager.com/gtag/js?id=G-CHC5Q6KLE8';
  document.head.appendChild(ga);
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { window.dataLayer.push(arguments); };
  window.gtag('js', new Date());
  window.gtag('config', 'G-CHC5Q6KLE8');

  // Microsoft Clarity
  (function (c, l, a, r, i, t, y) {
    c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments); };
    t = l.createElement(r); t.async = 1; t.src = 'https://www.clarity.ms/tag/' + i;
    y = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t, y);
  })(window, document, 'clarity', 'script', 'zbdavb084v');
})();
