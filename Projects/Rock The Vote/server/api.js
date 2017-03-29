/**
 * Created by User on 3/11/2017.
 */

var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var menu = require('./menu');
mongoose.connect("mongodb://localhost/Schoole");



router.get('/', function (req, res) {
    res.send('happy to be here');



});
router.get('/menu', function (req, res) {
    menu.find(function (err, d) {
        if (err) res.send('error has ocuured');

        else {
            console.log(d);
            res.json(d);
        }

    });
});


router.get('/menu/:id', function (req, res) {
    console.log('getting one book');
    menu.findOne({
        _id: req.params.id
    }, function (err, d) {
        if (err) res.send('error');

        else {
            console.log(d);
            res.json(d);
        }

    });
});

router.post('/menu', function (req, res) {
    var myFriend = new menu({
        title: req.body.title,
        description: req.body.description,
        comment: req.body.comment,
        like: req.body.like,
        unlike: req.body.unlike,

    });

    myFriend.save(function (err, new_friend) {
        if (err) res.send('error saving book');
        else {
            console.log(new_friend);
            res.send(new_friend);
        }

    });

});


router.put('/menu/:id', function (req, res) {

    menu.findOneAndUpdate({
            _id: req.params.id
        }, {
            $set: {
                title: req.body.title,
                description: req.body.description,
                comment: req.body.comment,
                like: req.body.like,
                unlike: req.body.unlike,

            }
        } //,{upsert:true}
        ,
        function (err, friend) {
            if (err) {
                res.send('error');
                console.log('error');
            } else {
                console.log(friend);
                res.send(friend);
            }

        }


    );

});


router.delete('/menu/:id', function (req, res) {

    menu.findOneAndRemove({
            _id: req.params.id
        }, function (err, friend) {
            if (err) res.send("error delete");
            else {
                console.log(friend);
                res.send(friend);
            }

        }


    );

});

module.exports = router;
