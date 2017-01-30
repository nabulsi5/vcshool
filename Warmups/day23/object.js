
var Car = function(type, model, color) {
  this.carType = type;
  this.carModel = model;
  this.carColor = "red";
    
  this.openDoor = function() {
    console.log("Open the door ");
  }; 
    

    
var Bus = function(type, size) {
  this.busType = type;
  this.busSize = size;
    
  this.drive = function() {
    console.log("Drive the Bus ");
  };     
    
    
  var Train  = function(id, model, speed) {
  this.trainId = 4;
  this.trainModel = model;
  this.trainSpeed = speed;
    
  this.drive = function() {
    console.log("The Train speed is : " +this.trainSpeed);
  };
    
      
  var Plane  = function(id, model, speed) {
  this.trainId = 5;
  this.trainModel = model;
  this.trainSpeed = speed;
    
  this.drive = function() {
    console.log("The Train speed is : ");
  };       
   
      
var newCar = new Car("Fiat", 500);
var newBus = new Bus("honda", 44);
var newTrain = new Train(5, "train44", 44);       
var newPlane = new Plane("Airbus", 200);        