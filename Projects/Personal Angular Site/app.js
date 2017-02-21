var app = angular.module("myApp", []);

app.service("moveService", function ($http) {
    this.search = function (title, year) {
        return $http.get("http://www.omdbapi.com/?t=" + title + "&y=" + year);
    }
});


app.controller("mainCtrl", function ($scope, pokeService) {


});