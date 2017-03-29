/**
 * Created by User on 3/12/2017.
 */

var app =angular.module("app.server",[]);

app.service("ApiService",function ($http) {
    this.moussaab="cklaclsdkc";
    this.getData=function(){
        return $http.get("http://localhost:8080/api/menu");
    }

    this.getOneData=function(id){
        return $http.get("http://localhost:8080/api/menu/"+id);
    }

    this.addData=function(data){
        return $http.post("http://localhost:8080/api/menu/",data);
    }


    this.deleteData=function(id){
        return $http.delete("http://localhost:8080/api/menu/"+id);
    }

    this.updateData=function(id,data)
    {return $http.put("http://localhost:8080/api/menu/"+id,data);}



});
