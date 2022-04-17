// Calling Express to create a base object from it i.e. app
const express = require('express');
const path = require('path');
const app = express();

// QUESTION 2
// Used because without this node doesn't executes static files like css and pngs
app.use(express.static(__dirname+'/public'));

// QUESTION 1
// Route with handler which will be executed when route matches the given route in the statement i.e. / or home
app.get('/', function(req, res){

    // sendFile is used to send files when requested and not only text.
   res.sendFile(path.join(__dirname, '/public/home.html'));
});

app.get('/about', function(req, res){
    res.sendFile(path.join(__dirname, '/public/about.html'));
});

// QUESTION 3
// Set EJS as templating engine
app.set('view engine', 'ejs');

var clients = ['Google', 'Facebook', 'Ryaz', 'Demo Butler', 'Rana Dev'];

app.get('/contact', (req, res) => {
    res.render('contact', {data: clients});
})

app.listen(3000);