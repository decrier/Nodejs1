const express = require('express'); //express-Objekt in einer Konstanten speichern
const app = express(); // Konstante app für den Webserver vorbereiten
const PORT = process.env.PORT || 3000;

app.get('/:yourName', (req, res) => { //Route für das Root-Verzeichnis setzen
    res.send('Dein Name: ' + req.params.yourName);    // Antwort des Servers auf die Anfrage mit dem Parameter
});

app.listen(PORT, _ => {console.log(`Server running on port ${PORT}`)});