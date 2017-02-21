function printText(txt) {
    console.log("* * * * * * * * *");
    for (var i = 0; i < txt.length; i++) {
        console.log("* " + txt[i] + " *");

    }
    console.log("* * * * * * * * *");

}


var list = ["Hello", "World", "in", "a", "frame"];
printText(list);


var size = Math.max(list);
console.log(size);