var express = require('express');
var uuid = require("uuid");
var app = express();
var port = process.env.port || 8080;
var validate = require("./validate.js");

var menu = require("./database.js");
var bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());


app.get('/menu/', function (req, res) {
    if (Object.keys(req.query).length === 0) {
        res.status(200).send({
            "message": " --------< menu >-------- ",
            data: menu
        });
    } else {
        var filterOrder = [];
        var query = req.query;
        for (key in query) {
            for (var i = 0; i < menu.length; i++) {
                if (menu[i][key] == query[key]) {
                    filterOrder.push(menu[i]);
                }
            }
        }
        res.status(200).send({
            "messsage": "This is your Order :)",
            data: filterOrder
        });
    }
});



app.listen(port, function () {
    console.log("Server has started on port " + port);
});