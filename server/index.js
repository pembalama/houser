require('dotenv').config();
const express = require('express');
const massive = require('massive');
// const ctrl = require('./controllers/controller');
// {getHouses, addHouse, removeHouse}

const app = express();

const {CONNECTION_STRING, SERVER_PORT} = process.env;

massive(CONNECTION_STRING)
    .then(dbInstance => {
        app.set('db', dbInstance)
        console.log('Database Connected')
    })
    .catch(error => {
        console.log(error)
})

// app.use(express.json());

// app.get('/api/houses', getHouses);
// app.post('/api/houses', addHouse);

// app.delete('/api/houses/:id', removeHouse);

app.listen(5000, () => console.log(`Running on PORT 5000`));