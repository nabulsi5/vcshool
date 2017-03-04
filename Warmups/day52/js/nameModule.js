//var app = angular.module("nameModule", []);
//app.directive("name", function () {
//    return {
//        restrict: "AE",
//        templateUrl: "js/name.html",
//        link: function (scope, elem, attrs) {
//            elem.bind("click", function () {
//                elem.css("color", "red");
//            });
//        }
//    }
//})


var app = angular.module("nameModule", []);

app.directive("name", function () {
    return {
        scope: {
            title: "=",
            colorOfText: "@"
        },
        restrict: "AE",
        templateUrl: "js/name.html",
        link: function (scope, elem, attrs) {
            console.log("Loaded the directive");
            elem.bind("click", function () {
                scope.title = "hello Diaa"
                scope.$apply();

                elem.css("color", scope.colorOfText);
            });
        }
    }
});