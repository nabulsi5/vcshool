var array=[];
var sum=0;
function changeNumber(num){
    var myNum =num.toString();
    for(var i=0; i<myNum.length; i++){
        array.push(parseInt(myNum[i]));
        sum += Math.pow(array[i]);
    }
    console.log(array);
    console.log(sum);
}

changeNumber(441421421);