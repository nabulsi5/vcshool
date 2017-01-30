
var quadrant=function(a,b,c){
var delta=b*b-(4*a*c);
if(delta==0)
    {
        console.log("This Eqation has one solution" + -b/(2*a));
    }
else if(delta >0)
    {
        var x1=(-b+ Math.sqrt(delta))/(2*a);
        var x2=(-b - Math.sqrt(delta))/(2*a);
        console.log("This equation has 2 solution" ,[x1,x2]);
    }
else {console.log("No Solution!");}
};

quadrant(13,30,5);



