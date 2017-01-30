
var Car = function(type, model, color) {
  this.carType = type;
  this.carModel = model;
  this.carColor = color;
    
  this.openDoor = function() {
    console.log("Open the door ");
  }; 
    this.butKey = function() {
    console.log("put the key to turn on car");
  };        
  this.start = function(task) {
    console.log("I turn the key on in the " + this.carType + " car");
      task();
  };
  this.drive = function(speed) {
    console.log("I am driving at " + speed + " kph" + " in the " + this.carColor + " " + this.carType + " car");
  }
}

var oldCar = new Car("Fiat", 500, "white");

oldCar.butKey();
oldCar.start(oldCar.drive);



/*

var Person = function(name) {
  this.name = name || "I dont have a name";
  this.sleep = function() {
    console.log("I am sleeping");
  }
  this.wake = function(task) {
    console.log("I am awake");
    task();
  }
  this.doKungFu = function() {
    console.log("Sweets kicks");
  }
  this.dance = function() {
    console.log("Sweet dance moves");
  }
}

var jameel = new Person("Jameel");
jameel.sleep();
jameel.wake(jameel.dance);*/