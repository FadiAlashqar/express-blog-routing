// importo express:
const express = require('express');

// inizializzo express all'interno di una variabile:
const app = express();

// inizializzo la porta:
const port = 3000;

// definisco la rotta standard:
app.get('/', (req, res) => {
    res.send('I miei posts');
});

// metto in ascolto il server:
app.listen(port, () => {
    console.log(`In ascolto dalla porta ${port}`);
});