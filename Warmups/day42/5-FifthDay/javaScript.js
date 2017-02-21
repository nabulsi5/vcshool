/**
 * Created by User on 2/9/2017.
 */
var app=angular.module("myApp",[]);
var config = {
    headers: {
        'X-Mashape-Key': 'ydoXoQrHFfmsh6N8IE3C6r1Osz8ep1MAkh2jsnZZX99BCTLHAm'
    }
};

app.service("fnHttp",function ($http) {
    this.getDtata=function(x){
       return  $http.get("https://yoda.p.mashape.com/yoda?sentence="+x,config);
    }

});



app.controller("myCtrl",function($scope,fnHttp){
$scope.loadp=function(){
  fnHttp.getDtata($scope.inputValue).then(function (x) {
      $scope.show=x.data;

  },function (x) {
      $scope.show="blablabla";
  });

}

});
