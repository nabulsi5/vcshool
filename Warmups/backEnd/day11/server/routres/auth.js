var express = require("express");
var authRouter = express.Router();

var User = require("../models/userSchema.js");
var jwt = require("jsonwebtoken");
var config = require("../config.js");
authRouter.post("/signup", function(req, res){
    User.find({username:req.body.username}, function(err, data){
        if(err){
            res.status(500).send(err);
        } else if(data.length > 0 ){
            res.status(400).send({"message": "usrename is not corect"})
        }else{
            var newUser = new User (req.body);
            newUser.save(function(err, data){
                if(err){
                   res.status(500).send(err);  
                }else{
                    res.status(200).send({massge: "success" , data:data});
                }
            });
        }
        
    });
});
authRouter.post("/signin", function(req, res){
  User.findOne({username:req.body.username}, function(err,user){
      if(err){
         res.status(500).send(err);  
      }else if (user == undefined){
          res.status(400).send({"message": "usrename is dose corect"});
      }
      else if(req.body.password !== user.password){
          res.status(400).send({"message": "password is dose corect"}); 
      }else{
         var token = jwt.sign(user.toObject(),config.secret, {expiresIn: "1h"}); 
          res.status(200).send({massge: "success" , token:token});
      }
  })  
});
module.exports = authRouter;