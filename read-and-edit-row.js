// ⚙️ Paramètres
const WEB_APP_URL = "https://script.google.com/macros/s/AKfycby1Q5TYWvMght0eKidd9M5g92-yJgjsKeYGk0_1j4CKcAqo1SkyuN5UW2U1jd_8VcTr/exec"; // ton URL

// 🔍 Récupérer une ligne par ID
async function getRowById(spreadsheetId, sheetName, targetId) {
  const params = new URLSearchParams({
    spreadsheetId,
    sheetName,
    targetId
  });

  const response = await fetch(`${WEB_APP_URL}?${params}`);
  const data = await response.json();
  return data;
}

// ✏️ Mettre à jour une ligne
async function updateRow(spreadsheetId, sheetName, targetId, newValues) {
  const formData = new URLSearchParams({
    spreadsheetId,
    sheetName,
    targetId
  });

  const response = await fetch("https://cors-anywhere-t7kn.onrender.com/"+`${WEB_APP_URL}?${formData}`, {
    method: "POST",
    body: JSON.stringify(newValues),
    headers: { "Content-Type": "application/json" }
  });

  const result = await response.json();
  console.log("Mise à jour :", result);
  return result;
}

/*
const SPREADSHEET_ID = "1sVCmgprkNQLroXlowU-Rp0PlUySAFZ331x3H5t3VT7A"; // ton ID Google Sheet


getRowData(spreadsheetId, "users", "ID")
  .then(data => {
    if (data["error"] == "ID introuvable") {
      console.log("Utilisateur non inscrit");
      return;
    }
    if (data["password"] != cookie_password) {
         console.log("le mot de passe ne correspond pas !", cookie_password, data["password"]);
         return;
    }
    console.log("Connexion réussie !");
    console.log("User:", data);
    loginBtn.textContent = data["pseudo"];    // Affiche "Gaël"
        loginBtn.href = "me.html";      // Redirige vers le profil
  })
  .catch(err => console.error("Erreur :", err));


(async () => {
  // Lire
  const ligne = await getRowById(SPREADSHEET_ID, "users", "gael.maignan@eivp-paris.fr");
  console.log("Résultat :", ligne);
  
  // Modifier
  if (ligne && !ligne.error) {
    ligne.password = "Nouvelle valeur3";
    await updateRow(SPREADSHEET_ID, "users", "gael.maignan@eivp-paris.fr", ligne);
  }
})();

*/