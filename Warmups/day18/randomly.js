function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var Teacher =  function(names){
    var names = names;
    this.teacherName = "";
    this.health = 0;
    this.generate = function(){
        var index = getRandom(0, names.length -1);
        this.teacherName = names[index];
    }
}


var possibleNames=["jacob", "Haiham", "Jameel", "Hiba"];
    for(var i=0; i<100; i++){
        var tempTeacher = new Teacher(possibleNames);
        tempTeacher.generate();
        console.log(tempTeacher.teacherName);
    }


