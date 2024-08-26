const express = require('express'); //express-Objekt in einer Konstanten speichern
const app = express(); // Konstante app für den Webserver vorbereiten
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.listen(PORT, _ => {console.log(`Server running on port ${PORT}`) });