// importo express:
const express = rquire('express');

// importo la classe router:
const router = express.router();

// index:
router.get('/', (res, req) => {
    res.send('Lista dei miei post');
})

// show:
router.get('/:id', (res, req) => {
    res.send('Dettaglio del post ' +req.params.id);
})

// store:
router.post('/', (res, req) => {
    res.send('Inserimento del nuovo post');
})

// update:
router.put('/.id', (res, req) => {
    res.send(`Modifica totale del post ${req.params.id}`);
})

// modify:
router.patch('/.id', (res, req) => {
    res.send(`Modifica parziale del post ${req.params.id}`);
})

// destroy:
router.delete('/.id', (res, req) => {
    res.send(`Cancellazione del post ${req.params.id}`);
})


// esportazione della classe router:
module.exports = router;