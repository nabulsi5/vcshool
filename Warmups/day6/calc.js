function AddNum(a,b){
    return a+b;
}

function SubNum(a,b){
    return a-b;
}

function MultNum(a,b){
    return a*b;
}

function DivNum(a,b){
    if(b==0){
        return 0;
    }
    
      else  {
    return a/b;
            }
}


var num1=5;
var num2=7;

AddNum(num1,num2);
SubNum(num1,num2);
MultNum(num1,num2);
DivNum(num1,num2);


