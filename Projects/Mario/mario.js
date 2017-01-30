
var bobomb, goomba, cheepCheeps=0;
var totalResult = 0;

$("#bobomb").click(function(){
     bobomb = parseInt($("#bobomb").val());
     bobomb = bobomb * 5;
    $("#r1").html(bobomb);
    totalResult = totalResult + bobomb;
    $("#totalResult").html(totalResult); 
});

$("#goomba").click(function(){
  goomba = parseInt($("#goomba").val());
    goomba = goomba * 7;
    $("#r2").html(goomba);
    totalResult = totalResult + goomba;
    $("#totalResult").html(totalResult); 
});


$("#cheepCheeps").click(function(){
    cheepCheeps = parseInt($("#cheepCheeps").val());
    cheepCheeps = cheepCheeps * 11;
    $("#r3").html(cheepCheeps);
    totalResult = totalResult + cheepCheeps;
    $("#totalResult").html(totalResult); 
    
  });




