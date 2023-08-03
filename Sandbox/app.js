const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const app = express();

//Use the body-parser middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json());

app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {

    try{
       res.render('home.ejs');

    } catch(err){

        res.send('Server error.  Please try again later.');

    }

});

app.post('/login', function(req, res){

    //shorthand: const {username, password} = req.body;

    const username = req.body.username;
    const password = req.body.password;

    console.log(username, password); 
    //Check username and password
    res.send('Logged in successfully');

})



const port = 3000;

app.listen(port, () =>{

console.log(`Successfully connected to http://localhost:${port}`);

})