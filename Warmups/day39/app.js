var app = angular.module("myApp", []);
app.service("studentsServ", function () {
    this.studentsArray = [];
    this.add = function (name) {
        this.studentsArray.push(name);
    }
    this.remove = function(index) {
        this.studentsArray.splice(index, 1);
    }
    
});

app.controller("mainCtrl", function ($scope, studentsServ) {
    $scope.printStd = studentsServ.studentsArray;
    $scope.addStd = function () {
//        var stdName = $scope.std;
        studentsServ.add($scope.std);
        $scope.printStd = studentsServ.studentsArray;
        $scope.std="";
    }
    $scope.remove = function(index) {
        studentsServ.remove(index);
        $scope.printStd = studentsServ.studentsArray;
    }

});