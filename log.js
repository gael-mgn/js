import { googleSheets } from 'https://gael-mgn.github.io/js/google-sheets.js';

document.addEventListener('DOMContentLoaded', function () {

  // Détection de rebots
  const ua = navigator.userAgent.toLowerCase();
  const bots = ["googlebot", "bingbot", "slurp", "duckduckbot", "baiduspider", "yandexbot", "facebot", "ia_archiver"];
  const isBot = bots.some(bot => ua.includes(bot));
  if (isBot) {
    console.log("Bot détecté, script non exécuté");
    return; // On sort, pas d'exécution
  }

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

    // Récupérer les paramètres de l'URL après le "?"
    const urlParams = new URLSearchParams(window.location.search);
    let formattedParams = "";
    urlParams.forEach((value, key) => {
      formattedParams += `${key} : ${value}\n`;
    });
    // Supprimer le dernier saut de ligne si la chaîne n'est pas vide
    if (formattedParams.length > 0) {
      formattedParams = formattedParams.slice(0, -1);
    }

    googleSheets([domain, path, referrer, isMobile, formattedParams], "11cwEfj8x5KkiX9z5081IN25xVCUD49bIaP0ltizI6l8", domain, true);
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