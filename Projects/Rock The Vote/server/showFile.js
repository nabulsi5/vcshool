/**
 * Created by User on 3/13/2017.
 */


var express = require("express");
var showRouter = express.Router();
showRouter.get("/", function(req, res) {
    res.render("showAllPost.html");
});
module.exports = showRouter;
