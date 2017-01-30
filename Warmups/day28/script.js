$("#submit").click(function() {
  $.ajax({
    url: "http://api.vschool.io:6543/pokemon.json",
    success: function(result) {
              var pokemonNumber=parseInt(document.getElementById("number").value);
         document.getElementById("output").innerHTML = data.objects[0].pokemon[pokemonNumber].name;  

      $("#output").html(result.name);
    }
  });
});





//document.getElementById("number").addEventListener("click", function(){
    
var xhr = new XMLHttpRequest();
//console.log("My script has loaded");
xhr.onreadystatechange = function() {
  if(xhr.readyState  == 4 && xhr.status == 200) {
    var strData = xhr.responseText;
    var data = JSON.parse(strData);
      /*
      console.log(data.objects[0].pokemon[0].name);
     for(var i=0; i<data.objects[0].pokemon.length; i++) {
         console.log(data.objects[0].pokemon[i].name);
         */
      var pokemonNumber=parseInt(document.getElementById("number").value);
         document.getElementById("output").innerHTML = data.objects[0].pokemon[pokemonNumber].name;  
    
  } else if(xhr.readyState  == 4 && xhr.status != 200) {
    console.log(xhr.status);
  }
};

xhr.open("GET", "http://api.vschool.io:6543/pokemon.json", true);
xhr.send();
    
    
    
//});
