const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000;
const exphbs  = require('express-handlebars');
require('dotenv').config();
 
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static('public'))
 
app.get('/', function (req, res) {
    res.render('home');
});

app.get('/game', function (req, res) {
    res.render('index');
});
 
app.listen(PORT, function(){
    
}); 