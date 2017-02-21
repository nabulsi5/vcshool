var app = angular.module("myApp", []);
app.service("pokeService", function () {
    this.studentsArray = [];
    this.add = function (name) {
        this.studentsArray.push(name);
    }
    this.remove = function (index) {
        this.studentsArray.splice(index, 1);
    }

});

app.controller("mainCtrl", function ($scope, pokeService) {
    $scope.printStd = pokeService.studentsArray;
    $scope.addStd = function () {
        //        var stdName = $scope.std;
        pokeService.add($scope.pok);
        $scope.printStd = pokeService.studentsArray;
        $scope.std = "";
    }
    $scope.remove = function (index) {
        pokeService.remove(index);
        $scope.printStd = pokeService.studentsArray;
    }

});