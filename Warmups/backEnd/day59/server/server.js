var express = require('express');
var uuid = require("uuid");
var app = express();
var port = process.env.port || 8080;
var validate = require("./validate.js");

var menu = require("./database.js");
var bodyParser = require('body-parser');

//packages to handle html
var ejs = require("ejs");
var path = require("path");

//import routes 
var filesRouter = require("./files.js");
var apiRouter = require("./api.js");

//setup server to host static files
app.use(express.static(path.join(__dirname + "\\..\\public")));
app.set("views", __dirname + "\\..\\public\\views");

//setup server to handle html
app.engine("html", ejs.renderFile);
app.set("view engine", "ejs");

app.get("/", function (req, res) {
    res.render("index.html");
});


//routes
app.use(filesRouter);
app.use("/menu", apiRouter);

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