const webAppUrl = "https://script.google.com/macros/s/AKfycbwOpW1Ez58xlT_yzfcxadhl5Yk6ymiS4O2fwdtb-BFmqIdOYrYRPaNf_4inQ3PbiUs/exec";

async function getRowData(spreadsheetId, sheetName, targetId) {
  const url = `${webAppUrl}?spreadsheetId=${spreadsheetId}&sheetName=${sheetName}&targetId=${encodeURIComponent(targetId)}`;
  const response = await fetch(url);
  const data = await response.json();

  // Si tu veux afficher le résultat dans ta page :
 // document.getElementById("result").textContent = JSON.stringify(data, null, 2);

  // Et ici, tu peux retourner le tableau pour d’autres traitements
  return data;
}

/*

EXEMPLE


const spreadsheetId = "1sVCmgprkNQLroXlowU-Rp0PlUySAFZ331x3H5t3VT7A";
const sheetName = "users";
const targetId = "gael.maignan@eivp-paris.fr";

getRowData(spreadsheetId, sheetName, targetId)
  .then(data => {
    if (data == { error: "ID introuvable" }) {
      console.log("Utilisateur non inscrit");
    }
    else {
      console.log("mot de passe :", data["mot de passe"])
      //console.log("Tableau de résultats :", data);
    }
  })
  .catch(err => console.error("Erreur :", err));
*/