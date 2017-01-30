var phrase = 'slimy smelly solution';
var count = 0;

for (var i = 0; i<phrase.length; i++){
    for(var j=1; j<phrase[i]; j++){
        if(phrase[i] === phrase[j]){
    count++;
        console.log(phrase[i] + count);
}
        else{
            console.log(phrase[i]);
        }
}
}