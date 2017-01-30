  var counter = 0;
  var repeat = setInterval(function() {
    counter++;
    if(counter <= 20) {
        $("#count").html("00:00:" + counter);
      
    }
   if(counter === 20) {
       $("#count").html("The end of the world has come upon us");
       clearInterval(repeat);
   }
    
  }, 1000);





