import { googleSheets } from 'https://gael-mgn.github.io/js/google-sheets.js';

window.onload = () => {
  setTimeout(() => {
    // Détection de robots
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
      if (formattedParams.length > 0) {
        formattedParams = formattedParams.slice(0, -1); // Supprime dernier saut de ligne
      }

      googleSheets([domain, path, referrer, isMobile, formattedParams], "11cwEfj8x5KkiX9z5081IN25xVCUD49bIaP0ltizI6l8", domain, true);
    }
  }, 4000); // délai 4 secondes après le chargement complet
};
