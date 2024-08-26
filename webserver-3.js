const express = require('express'); //express-Objekt in einer Konstanten speichern
const app = express(); // Konstante app für den Webserver vorbereiten
const PORT = process.env.PORT || 3000;

app.get('/html-example', (req, res) => { //Route für das html-example-Verzeichnis setzen
    try{
        res.sendFile('public/example-page.html', { root: __dirname});
    } catch(err) {
        console.log(err);        
    }
});

app.listen(PORT, _ => {console.log(`Server running on port ${PORT}`)});