require('dotenv').config();
const express = require('express');
const massive = require('massive');
const {getHouses, addHouse, deleteHouse} = require('./controller');


const app = express();

const { SERVER_PORT, CONNECTION_STRING } = process.env;

massive(CONNECTION_STRING)
    .then(dbInstance => {
        app.set('db', dbInstance)
        console.log('Database Connected')
    })
    .catch(error => {
        console.log(error)
})

app.use(express.json());

app.get('/api/houses', getHouses);
app.post('/api/houses', addHouse);

app.delete('/api/houses/:id', deleteHouse);

app.listen(SERVER_PORT, () => {
    console.log(`Server is listening on port ${SERVER_PORT}.`);
})