var express = require('express');
var uuid = require("uuid");
var app = express();
var port = process.env.Port || 8080;
var validate = require("./validate.js");

var bounties = require('./jsonObject.js');
var bodyParser = require('body-parser');

//setup to handle json
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

app.get('/bounty', function (req, res) {
    console.log(bounties);
    res.status(200).send(bounties);
});
app.post('/bounty', function (req, res) {
    var data = {
        id: uuid.v4(),
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        living: req.body.living,
        bountyAmount: req.body.bountyAmount,
        type: req.body.type
    };
    var didPass = validate(data);
    if (didPass.pass == false) {
        res.status(400).send({
            message: "did Pass failure"
        });
    } else {
        bounties.push(data);
        res.status(200).send(bounties);
    }


});

app.delete("/bounty/:id", function (req, res) {
    console.log(req.params.id);
    var id = req.params.id;
    for (var i = 0; i < bounties.length; i++) {
        if (bounties[i].id == id) {
            bounties.splice(i, 1);
            res.send({
                message: "the bounty has been deleted"
            });
        }


    }
    res.send({
        message: "this id is not matched "
    });
});

app.listen(port, function () {
    console.log('Server is running..' + port);
});