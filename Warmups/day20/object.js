var student = function(name, age, tel, marks){
    this.Name=name;
    this.Age=parseInt(age);
    this.Tel=tel;
    this.Marks=marks;
    this.printMarks= function(gradde){
     console.log(this.Name + "passed")
    }
    this.printAge=function(age){
        var d = new Date();
        var date= d.getFullYear();
        age=date-this.Age;
        console.log(age);
    }
}


var studentOne = new student("bilal",1988,"521521","70");

studentOne.printAge();