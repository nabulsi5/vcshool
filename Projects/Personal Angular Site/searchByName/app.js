var app = angular.module("app", []);

app.service("moviesService", function ($http) {
    this.getData = function (movieName, name) {
        return $http.get("https://yts.ag/api/v2/list_movies.json?query_term=" + movieName);
    }
});


app.controller("myCtrl", function ($scope, moviesService) {
    $scope.getData = function () {
        moviesService.getData($scope.movieName).then(function (response) {
            $scope.movies = response.data;

        })
    }
    $scope.searchByName = function () {
        moviesService.getData($scope.movieName).then(function (response) {
            $scope.movies = response.data;

        });

    }


});