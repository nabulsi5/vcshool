document.getElementById("btn").addEventListener("click", randowmPassword);


function randNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}



 
function randowmPassword(){
    var str="";
   
    
    for(var i=1; i<8; i++){
   str = str +  String.fromCharCode(randNumber(33,122));
}
   alert(str);
}





//console.log(alphabet);

