// importo express:
const express = require('express');

// inizializzo express all'interno di una variabile:
const app = express();

// inizializzo la porta:
const port = 3000;

// importo il router dei post:
const postRouter = require('./routers/posts.js');

// definisco la rotta standard:
app.get('/', (req, res) => {
    res.send('I miei posts');
});

// utilizzo il router per creare le rotte:
app.use('/posts', postRouter);

// metto in ascolto il server:
app.listen(port, () => {
    console.log(`In ascolto dalla porta ${port}`);
});