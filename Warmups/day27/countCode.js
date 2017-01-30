

function countCode(text){
    var count = 0;
    for(var i=0; i<text.length; i++){
            if(text[i] ==='c' && text[i+1]==='o' && text[i+3] === 'e') {
                count++;
            }
    }
    console.log(count);
}
    
countCode("jklsdfhjksdfcode;kljsdlfkcope;jasdf;jcomesdfl;jsd;coee");
countCode("codecomecopecoeecorekljhsadfldhfklsdhflkhsdflksdfl");
countCode("aaacodebbb");
countCode("codexxcode");
countCode("cozexxcope");


    