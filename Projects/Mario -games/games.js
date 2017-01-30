function bobomb(){
var bobomb = document.getElementById("bobomb").value;
result_bobomb = bobomb*5;
document.getElementById("r1").innerHTML = result_bobomb;
}


function goomba(){
var goomba = document.getElementById("goomba").value;
result_goomba = goomba*7;
document.getElementById("r2").innerHTML = result_goomba;
}


function cheepCheeps(){
var cheepCheeps = document.getElementById("cheepCheeps").value;
result_cheepCheeps = cheepCheeps*11;
document.getElementById("r3").innerHTML = result_cheepCheeps;    
}


var totalBobomb=document.getElementById("r1").value
var totalGoomba=document.getElementById("r2").value
var totalcheepCheeps=document.getElementById("r3").value


function total(){
  var sum=  totalBobomb + totalGoomba + totalcheepCheeps;
    document.getElementById("r4").innerHTML=sum;
}






document.getElementById("bobomb").addEventListener("input", bobomb);
document.getElementById("goomba").addEventListener("input", goomba);
document.getElementById("cheepCheeps").addEventListener("input", cheepCheeps);
document.getElementById("total").addEventListener("input", total);



