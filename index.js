const express = require('express');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const pintura = require('./data/paints.json')
const app = express();

app.engine('handlebars', handlebars({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(express.static('assets'));
app.use(bodyParser.urlencoded());

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/sobre', (req, res) => {
    res.render('sobre');
});


app.get('/galeria', (req, res) => {
    res.render('galeria', { pinturas: pintura });
});

app.get('/contato', (req, res) => {
    res.render('contato');
});

app.listen(3000, () => {
    console.log('Ouvindo porta 3000...');
});