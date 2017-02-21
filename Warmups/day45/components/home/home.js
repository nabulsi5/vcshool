var app = angular.module("app.home", ["ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider.when("/home", {
        templateUrl: "components/home/home.html",
        controller: "HomeCtrl"
    });
});

app.controller("HomeCtrl", function ($scope) {});