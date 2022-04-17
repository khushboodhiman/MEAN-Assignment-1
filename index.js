// Calling Express to create a base object from it i.e. app
const express = require('express');
const path = require('path');
const app = express();

// Used because without this node doesn't executes static files like css and pngs
app.use(express.static(__dirname+'/public'));

// Route with handler which will be executed when route matches the given route in the statement i.e. / or home
app.get('/', function(req, res){

    // sendFile is used to send files when requested and not only text.
   res.sendFile(path.join(__dirname, '/public/home.html'));
});

app.get('/about', function(req, res){
    res.sendFile(path.join(__dirname, '/public/about.html'));
 });


app.listen(3000);