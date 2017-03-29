var express = require('express');
var path = require('path');

var ejs = require("ejs");
var app = express();
var bodyParser = require('body-parser');
var port = process.env.port || 8080;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static(path.join(__dirname + "\\..\\public")));
app.set("views", __dirname + "\\..\\public\\views");

app.engine("html", ejs.renderFile);
app.set("view engine", "ejs");


var filesRouter = require("./files.js");
var showRouter = require("./showFile.js");
var apiRouter = require("./api.js");
app.use(filesRouter);
app.use("/show", showRouter);
app.use("/api", apiRouter);



app.listen(port, function () {
    console.log('app listening on port' + port);
});