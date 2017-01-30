var text = 'bookkeeper larry';
var Misfits = "";
var noDuplicates = "";

//for (var i=0 ; i<text.length ; i++ )
//{
//    var temp=text[i];
//    if(temp===text){
//       Misfits+=text[i]; 
//                   }
//    else if (temp != text[0]){
//    noDuplicates+=text[i];
//    }
//
//}
for (var i=0; i< text.length; i++) {
    
    if (noDuplicates[i] != text[i]) {
        noDuplicates[i] = noDuplicates[i] + text[i];
        console.log(noDuplicates);

    } else {
        Misfits[i] = Misfits[i] + text[i];
        console.log(Misfits);

    }
}

console.log(text.indexOf(b));