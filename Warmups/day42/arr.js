function add() {
    var arr = [1, 2, 3];
    var arrTwo = ['a', 'b', 'c', 'd', 'e'];
    var res = [];
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arrTwo.length; j++) {
            if (i === j) {
                res.push(arr[i]);
                res.push(arrTwo[j]);
            }
            else if(){
                
            }


        }
    }
    console.log(res);
}


add();