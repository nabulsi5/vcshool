var app = angular.module("myApp", []);

var config = {  
    headers: {
        'X-Mashape-Key': 'ydoXoQrHFfmsh6N8IE3C6r1Osz8ep1MAkh2jsnZZX99BCTLHAm'
    }
};


app.service("myService", function ($http) {
this.getData(x)=function(){
    return $http.get("https://yoda.p.mashape.com/yoda?sentence="+x,config)
}


});  



app.controller("myController", function ($scope) {
    
      $scope.load=Function(){
    myService.getData($scope.inputValue).then(function(response) {
        //First function handles success
        $scope.content = response.data;
    }, function(response) {
        //Second function handles error
        $scope.content = "Something went wrong";
    });
    }
});

/*
var config = {  
    headers: {
        'X-Mashape-Key': 'ydoXoQrHFfmsh6N8IE3C6r1Osz8ep1MAkh2jsnZZX99BCTLHAm'
    }
};


app.service("myService", function ($http) {
this.getData(x)=function(){
    return $http.get("https://yoda.p.mashape.com/yoda?sentence="+x,config)
}


});  

app.controller("myController", function ($scope,myService) {

   $scope.load=Function(){
    myService.getData($scope.inputValue).then(function(response) {
        //First function handles success
        $scope.content = response.data;
    }, function(response) {
        //Second function handles error
        $scope.content = "Something went wrong";
    });
    }
});

*/

