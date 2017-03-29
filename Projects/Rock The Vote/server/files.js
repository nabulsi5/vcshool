/**
 * Created by User on 3/11/2017.
 */

var express = require("express");
var filesRouter = express.Router();
filesRouter.get("/", function(req, res) {
    res.render("index.html");
});
module.exports = filesRouter;
