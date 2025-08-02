import { googleSheets } from 'https://gael-mgn.github.io/js/google-sheets.js';

document.addEventListener('DOMContentLoaded', function () {
  if (location.protocol === "file:") {
    console.log("Exécuté en local (file://)");
  } else if (location.hostname === "localhost" || location.hostname === "127.0.0.1") {
    console.log("Exécuté en local (localhost)");
  } else {
    console.log("Exécuté depuis Internet");
    const domain = window.location.hostname;
    const path = window.location.pathname;       // Chemin après le domaine (ex: /page1/test)
    const isMobile = /Mobi|Android/i.test(navigator.userAgent) ? "mobile" : "desktop";
    const referrer = document.referrer;
    googleSheets([domain, path, referrer, isMobile], "11cwEfj8x5KkiX9z5081IN25xVCUD49bIaP0ltizI6l8", domain, true);
    }
});

/*async function log() {

  const script = document.createElement('script');
  script.src = "https://gael-mgn.github.io/js/google-sheets.js";
  script.onload = callback;
  script.onerror = () => console.error("Erreur de chargement du script :", url);
  document.head.appendChild(script);

  if (location.protocol === "file:") {
      console.log("Exécuté en local (file://)");
    } else if (location.hostname === "localhost" || location.hostname === "127.0.0.1") {
      console.log("Exécuté en local (localhost)");
    } else {
      console.log("Exécuté depuis Internet");
      const domain = window.location.hostname;
      const path = window.location.pathname;       // Chemin après le domaine (ex: /page1/test)
      log(domain, path);
    }
  googleSheets([domain, path], "11cwEfj8x5KkiX9z5081IN25xVCUD49bIaP0ltizI6l8", domain);
}*/