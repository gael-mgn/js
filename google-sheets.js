  export async function googleSheets(values, spreadsheetId, sheetName, date = false) {
  const payload = {
    spreadsheetId: spreadsheetId,
    sheetName: sheetName,
    values: values,
    addDate : date
  };

  const data = encodeURIComponent(JSON.stringify(payload));
  const body = `data=${data}`;

  const url = 'https://script.google.com/macros/s/AKfycbxbmFfS3x79tVT5sGyn4WFRI31lfEIacKXa43BAGxEPVj0uG4AQvOd8Q62_UHs4VjI/exec';

  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: body
    });

    const text = await res.text();
    console.log('Réponse du script :', text);
    return text;
  } catch (err) {
    console.error('Erreur lors de l\'envoi :', err);
    return null;
  }
}

// Exemple //
/*const valeurs = ["aaaaa", "valeur 1", "valeurs 2", "..."];
const sheetId = "11cwEfj8x5KkiX9z5081IN25xVCUD49bIaP0ltizI6l8";
googleSheets(valeurs, sheetId, "Feuille 1", true);*/
/*export async function googleSheets(values, spreadsheetId, sheetName, date = false) {
  const payload = {
    spreadsheetId: spreadsheetId,
    sheetName: sheetName,
    values: values,
    addDate: date
  };

  const data = encodeURIComponent(JSON.stringify(payload));
  const body = `data=${data}`;

  const url = 'https://script.google.com/macros/s/AKfycbyPLvXywUlryG-BlVVgG4Od6FyWtwjUsPZJjws4fAHCGMSVkKah0Y0yfX3nsxBVDQ/exec';

  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: body
    });

    const text = await res.text();
    console.log('Réponse du script :', text);
    return text;
  } catch (err) {
    console.error('Erreur lors de l\'envoi :', err);
    return null;
  }
}
*/
/*// Exemple //
const valeurs = ["valeur 1", "valeurs 2", "..."];
const sheetId = "11cwEfj8x5KkiX9z5081IN25xVCUD49bIaP0ltizI6l8";
googleSheets(valeurs, sheetId, "Feuille 1")
*/