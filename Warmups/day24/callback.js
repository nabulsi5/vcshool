function openDoor(){
    console.log("Open The door");
}


function putKey(){
    console.log("put The key");
}

function turenOn(callback){
    console.log("Turen on Car");
    callback();
}

function driveCar(){
    console.log("Drive the Car");
}




var myCar = setInterval(function(){
    myTimer() }, 3000);


openDoor();
turenOn(putKey());
driveCar();