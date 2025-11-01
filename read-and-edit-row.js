// ⚙️ Paramètres
const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbxj7jon9Xj0PyD5iJWXbWks1iGIs0owyvh2H1aMHGsS4nDUGtjXRZja02r1AILzylls/exec"; // ton URL

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



// ⚙️ Paramètres (votre WEB_APP_URL existant)

// ➕ Ajouter une nouvelle ligne
// newRowObj : objet { "ID": "...", "Nom": "...", "Email": "...", ... }
// si vous ne fournissez pas la colonne ID (première colonne), le serveur générera un UUID
async function addRow(spreadsheetId, sheetName, newRowObj) {
  const params = new URLSearchParams({
    spreadsheetId,
    sheetName,
    action: 'append'
  });

  const url = `${WEB_APP_URL}?${params.toString()}`;

  // Si vous avez besoin du proxy CORS (comme pour updateRow), gardez la même logique.
  const proxyPrefix = "https://cors-anywhere-t7kn.onrender.com/"; // votre proxy
  const response = await fetch(proxyPrefix + url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newRowObj)
  });

  const result = await response.json();
  console.log("append result:", result);
  return result; // { success: true, action: 'append', row: N, id: 'uuid' }
}





async function deleteRow(spreadsheetId, sheetName, targetId) {
  const params = new URLSearchParams({
    spreadsheetId,
    sheetName,
    action: 'delete',
    targetId
  });

  const url = `${WEB_APP_URL}?${params.toString()}`;

  const proxyPrefix = "https://cors-anywhere-t7kn.onrender.com/";
  const response = await fetch(proxyPrefix + url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({})
  });

  const result = await response.json();
  console.log("delete result:", result);
  return result;
}





/*
(async () => {
  // Lire
  const ligne = await getRowById(SPREADSHEET_ID, "users", "gael.maignan@eivp-paris.fr");
  console.log("Résultat :", ligne);
  
  // Modifier
  if (ligne && !ligne.error) {
    //ligne.password = "Nouvelle valeur2";
    await updateRow(SPREADSHEET_ID, "users", "gael.maignan@eivp-paris.fr", ligne);
  }
  await addRow(SPREADSHEET_ID, "users", {email:"test@gael-maignan.fr", pseudo:"gael", password:"abc"});

  await deleteRow(SPREADSHEET_ID, "users", "contact2@gael-maignan.fr")
})();
*/