var text="Hello world this is First project";
console.log("text Length is =" + text.length);
text=text.toLowerCase();
console.log(text);
var countVowels=0;
var countLatter=0;


function vowels(txt){
    for(var i=0; i<text.length; i++){
        if(text[i]==="a" || text[i]==="e" || text[i]==="i" || text[i]==="o" || text[i]==="u"){
        countVowels ++ ;
    }
        }
    console.log("The Number of latter Vowels is :" + countVowels);
}


function latter(txt){
    countLatter=text.length-countVowels;
    console.log("The Number of latter  is :" + countLatter);
}


vowels(text);
latter(text);