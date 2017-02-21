var app = angular.module("app.contact", ["ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider.when("/contact", {
        templateUrl: "components/about/contact.html",
        controller: "contactCtrl"
    });
});

app.controller("contactCtrl", function ($scope) {});