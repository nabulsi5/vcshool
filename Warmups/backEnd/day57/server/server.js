var express = require("express");
var uuid = require("uuid");
var bodyParser = require("body-parser");
var animals = require("./data.js");
var validate = require("./Object.js");
var app = express();
var port = process.env.Port || 8080;
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.get("/data", function (req, res) {
   var ifExist = false;
  if(Object.keys(req.query).length === 0) {
    res.status(200).send(animals);  
  } else {
        var fillterArray = [];
      console.log(req.query);
      var myFilter = req.query
  for (key in myFilter){
       for (var i = 0; i < animals.length; i++){
        if(myFilter[key] == animals[i][key]){
            ifExist = true;
          console.log(animals[i][key]);
            fillterArray.push(animals[i]);   
        }  
    }
      
  }
      if(ifExist == false) {
          res.status(400).send({message: "not found"})
      } else {
          console.log(fillterArray);
  res.status(200).send(fillterArray);
      }
  }
})
app.get("/data/:id", function (req, res) {
    for(var i= 0; i < data.length; i++) {
      if(animals[i].id == req.params.id){
      res.status(200).send({success: true});
      }else{
      res.status(400).send({message: false});  
    }
    }
    
})
app.post("/data", function (req, res) {
       var data = {
            id: uuid.v4(),
            name: req.body.name,
            age: req.body.age,
            isTasty: req.body.isTasty,
        }
        var isValidate = validate(animals);
    if(isValidate.pass == false){
        res.status(400).send({message: isValidate.message})
    }else{
         animals.push(data);
        res.status(200).send({message: "seccess"})
    }
  
      
});
app.delete("/data/:id", function(req, res){
 var id = req.params.id;
  for(var i= 0; i < data.length; i++) {
      if(animals[i].id == req.params.id){
          animals.splice(i,1)
         res.status(200).send({success: true});
      }
  } res.status(404).send({"message": "success"}); 
})
app.put ("/data/:id", function (req, res){
    req.params.id
  for (var i = 0; i < animals.length; i++){
      if(req.params.id == animals[i].id){
         animals[i].id= req.params.id;
      animals[i].name == req.body.name;
      animals[i].age == req.body.age;
      animals[i].isTasty == req.body.isTasty;
      res.status(200).send({"message":"database has been updated"})  
      }
//      else{
//    res.status(400)send({"message": "no such item with id"});
//      }
//      
  }
})
app.listen(port, function () {
    console.log("my port is" + port);
});