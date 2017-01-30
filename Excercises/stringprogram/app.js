var readLineSync = require("readLine-sync");
var firstName =readLineSync.question("Enter Your First Name:");
var lastName =readLineSync.question("Enter Your Last Name:");

var fname = firstName.toUpperCase();
var sname = lastName.toUpperCase();



var fullname=firstName.concat("",lastName);


console.log("-------------------------- < your information > --------------------------------")
console.log(fname);
console.log(sname);
console.log("Full Name:"+fullname);
console.log("number of characters is :" + firstName.length);
console.log("number of characters is :" + lastName.length);


