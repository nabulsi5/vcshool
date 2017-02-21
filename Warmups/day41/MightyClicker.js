var app = angular.module("myApp", []);
app.controller("myController", function ($scope) {
    
  $scope.counter = 100;
    $scope.counters = 100;
    
    $scope.add = function () {
        $scope.counter++;
        $scope.counters--;
    }
    $scope.sub = function () {
        $scope.counter--;
        $scope.counters++;

  }
        $scope.reset = function () {
        $scope.counter=100;
        $scope.counters=100;

  }
    
});