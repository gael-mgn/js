export function googleSheets(values, spreadsheetId, sheetName) {
  const payload = {
    spreadsheetId: spreadsheetId,
    sheetName: sheetName,
    values: values
  };

  const data = encodeURIComponent(JSON.stringify(payload));
  const body = `data=${data}`;

  const url = 'https://script.google.com/macros/s/AKfycbwi4c1mTGs88cuu7Sj-43E3iAkh8kUCTWv9kTDxvpYxCT8H8rB7GpGtZiOE77I0Lwc/exec';

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

/*// Exemple //
const valeurs = ["valeur 1", "valeurs 2", "..."];
const sheetId = "11cwEfj8x5KkiX9z5081IN25xVCUD49bIaP0ltizI6l8";
googleSheets(valeurs, sheetId, "Feuille 1")
*/