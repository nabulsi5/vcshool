function printArray(arr1, arr2) {
    for (var i = 0; i < arr1.length; i++) {
        for (var j = 0; j < arr2.length; j++) {
            if (arr1[i] != arr2[j]) {
                var res = [];
                res = res.push(arr1[i]);
            }
        }
        return res;

    }
}

var num1 = [1, 2, 3, 4, 5];
var num2 = [1, 3, 6, 7, 8, 9];

printArray(num1, num2);