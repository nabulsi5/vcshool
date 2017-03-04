var app = angular.module("app", []);
app.filter("search", function () {
    return function (input, term) {
        var result = [];
        for (var i = 0; i < input.length; i++) {
            if (input[i].name.indexOf(term) != -1) {
                result.push(input[i])
            }
        }
        return result;
    }
})

app.controller("ctrl", function ($scop) {
    $scop.searchTerm = "";
    $scop.data = [
        {
            name:
        }
    ]
});