const express = require('express'); //express-Objekt in einer Konstanten speichern
const app = express(); // Konstante app für den Webserver vorbereiten
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => { //Route für das Root-Verzeichnis setzen
    res.send('Unser erster Node.js Webserver');    // Antwort des Servers auf die Anfrage
});

app.listen(PORT, _ => {console.log(`Server running on port ${PORT}`)});