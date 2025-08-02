async function log() {
  // Exemple d'utilisation :
  loadExternalScript("https://gael-mgn.github.io/js/google-sheets.js", function () {
  console.log("Script chargé !");
  // Tu peux maintenant utiliser les fonctions/variables définies dans l’autre script
});


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
}