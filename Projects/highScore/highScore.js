function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var array=["Professional", "Go to sleep", "Excellent", "Good", "Bad", "Danger of death", "shut up!" ];

var arrayImg=["img/1.png", "img/2.png", "img/3.png", "img/4.png", "img/5.png" ];




$(document).ready(function() {

$("#btn").click(function() {
    var index = getRandomInt(0,array.length-1);
	var index = getRandomInt(0,arrayImg.length-1);
	
    var myTrash = array[index];
	var imageTrash = arrayImg[index];

    var name = $("#myName").val();
	var game = $("#game").val();
	var myDate = $("#date").val();
	var highScore = $("#highScore").val();

   if($("#trash").is(':checked')) {
        $("#myTable").append('<tr><td>' + name + '</td><td>' + game + '</td><td>' + myDate + '</td><td>' + highScore + '</td><td>' + myTrash + '</td></tr>');
    } else {
         $("#myTable").append('<tr><td>' + name + '</td><td>' + game + '</td><td>' + myDate + '</td><td>' + highScore + '</td></tr>');
    }


/*
   if($("#imageTrash").is(':checked')) {
        $("#myTable").append('<tr><td>' + name + '</td><td>' + game + '</td><td>' + myDate + '</td><td>' + highScore + '</td><td>' + '<img src=' + imageTrash + ' width="20%" /> ' + '</td></tr>');
    } else {
         $("#myTable").append('<tr><td>' + name + '</td><td>' + game + '</td><td>' + myDate + '</td><td>' + highScore + '</td></tr>');
    }
*/

  
});
} );

