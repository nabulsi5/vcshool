var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"];  
var alphabet = "abcdefghijklmnopqrstuvwxyz";  


for(var i=0; i<=alphabet.length; i++){
    alphabet[i]
}


for(var i=0; i<=people.length; i++){
    for(var j=0; j<=alphabet.length; j++){
        console.log(people[i]+alphabet[j].split(""));
    }
}