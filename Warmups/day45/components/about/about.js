var app = angular.module("app.About", ["ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider.when("/about", {
        templateUrl: "components/about/about.html",
        controller: "AboutCtrl"
    });
});

app.controller("AboutCtrl", function ($scope) {});