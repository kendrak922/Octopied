const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000;
const exphbs  = require('express-handlebars');
require('dotenv').config();
 
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
 
app.get('/', function (req, res) {
    res.render('index');
});
 
app.listen(PORT);