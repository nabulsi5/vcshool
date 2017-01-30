
var Student = function(name, age, tel, marks){
    this.studentName=name;
    this.studentAge=age;
    this.studentTel=tel;
    this.studentMarks=marks;
    this.printMarks= function(marks){
     console.log(this.studentName + "passed")
    };
    
    this.printAge=function(age){
        console.log("the age of the student is : " + studentAge );
    }
}


var studentOne = new student("bilal","6/13/2010","521521","70");
studentOne.printMarks();
studentOne.printAge(this.studentAge);