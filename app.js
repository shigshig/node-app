const axios = require('axios');
var express = require("express");
var app = express();

var server = app.listen(8080, function(){
    console.log("Node.js is listening to PORT:" + server.address().port);
});

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get("/", async function(req, res, next){
        try {
        const response = await axios.get('http://localhost:3000/api/v1/');
        console.log(response);
        res.render("index", { name: response.data.name});
    } catch (error) {
        console.error(error);
    }
});