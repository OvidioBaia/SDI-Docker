const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const user = require('./user.route');
const app = express();
//import cors from 'cors' ; 
const cors = require('cors');
const url = 'mongodb://db:27017/dockerteste';
const mongoDB = url;
mongoose.connect(url);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erro na Ligação ao MongoDB'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/', user);

const porta = 3002;

app.listen(porta, () => {
    console.log('Servidor em execução no porta' + porta);
});