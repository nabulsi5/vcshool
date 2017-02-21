var text=[];

function inputText(txt){
    
        var readLineSync = require("readLine-sync");
        var size =readLineSync.question("Please  enter The size of Array:");
  
    for(var i=0; i<=size; i++){
        var readLineSync = require("readLine-sync");
        var text[i] =readLineSync.question("Please  enter words:");
    }
    console.log(text);
}


inputText();