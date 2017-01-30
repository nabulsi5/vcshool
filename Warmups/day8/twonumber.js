
function lowerNumber(value1, value2)
{
    if(value1>value2){
        console.log(value2);
    }
    else if(value2>value1){
        console.log(value1);
    }
    else{
        console.log("The number 1 is Eqaul number 2 ");
    }
};


var num1=5;
var num2=3;

lowerNumber(num1,num2);



var res = function(n1,n2){
    console.log(n1+n2);
}

var res = function(n1,n2,n3){
    if(n1>n2 && n1>n3){
        console.log(n1)
    }
    else if (n2>n1 && n2>n3){
        console.log(n2);
    }
    else{
        console.log(n3);
    }
}