var omega = '\u03A9';
var alpha = '\u03B1';
var array=[][];

for(var i =1; i<=10; i++){
    for(var j=1; j<=10; j++){
        if(i%2==0 && j%2==0){
            array[i][j].push(omega);
        }
        else{
            array[i][j].push(alpha);
        }
        }
    }
console.log(array.join(" "));