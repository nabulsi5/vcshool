/**
 * Created by User on 3/11/2017.
 */

var app=angular.module("app",["app.server"]);

app.filter('orderByDayNumber', function() {
    return function(items, field, reverse) {
        var filtered = [];
        angular.forEach(items, function(item) {
            filtered.push(item);
        });
        filtered.sort(function (a, b) {
            return (a[field] < b[field] ? 1 : -1);
        });
        if(reverse) filtered.reverse();
        return filtered;
    };
});

app.controller("Ctrl",function($scope,ApiService){
   $scope.name=ApiService.moussaab;
    $scope.items=[];
var data={
            title:"",
            description:"",
            comment:"",
            like:0,
            unlike:0

}

   /*ApiService.addData(data).then(function(response){
        console.log(response.data);

        $scope.items=response.data;
    },function(response){

        console.log(response);

    });*/
//get data
    ApiService.getData().then(function(response){
        console.log(response.data);
        $scope.items=response.data;
    },function(response){

        console.log(response);

    });

    //delete data

    $scope.removeData=function(id){
        ApiService.deleteData(id).then(function(response){
            console.log("the responsesssssssssssssssssssssss:",response.data);
            if(response.data!=="error delete")//"error delete" get from the server folder api.js fn router.delete(....
            {
                ApiService.getData().then(function(response){
                    console.log(response.data);

                    $scope.items=response.data;
                },function(response){

                    console.log(response);

                });

            }

        },function(response){

            console.log(response);

        });

    }



    //update  updateData(x._id,x.name)
    $scope.updateData=function(id,title,description,comment){
        data.title=title;
        data.description=description;
        data.comment=comment;


        ApiService.updateData(id,data).then(function(response){
            console.log("the responsesssssssssssssssssssssss:",response.data);


        },function(response){

            console.log(response);

        });

    }

    $scope.putData=function () {
        var d={
            title:$scope.inputTitle,
            description:$scope.inputDescription,
            comment:$scope.inputComment,
            like:0,
            unlike:0
        }


        ApiService.addData(d).then(function(response){
            console.log(response.data);
            if(response.data!=="error saving book")//"error delete" get from the server folder api.js fn router.delete(....
            {
                ApiService.getData().then(function(response){
                    console.log(response.data);

                    $scope.items=response.data;
                },function(response){

                    console.log(response);

                });

            }


        },function(response){

            console.log(response);

        });

    }


     $scope.like=function (d) {
     ApiService.getOneData(d).then(function(response){
     //up(d,kl);
         data=response.data;
     data.like++;
     console.log("getone data",response.data);



     },function(response){

     console.log(response);

     }).then(function () {
     ApiService.updateData(d,data).then(function(response){
         if(response.data!='error')
         {//refreshe

             ApiService.getData().then(function(response){
                 console.log(response.data);

                 $scope.items=response.data;
             },function(response){

                 console.log(response);

             });

         }



     },function(response){

     console.log(response);

     });

     });

     }


    $scope.unlike=function (d) {
        ApiService.getOneData(d).then(function(response){
            //up(d,kl);
            data=response.data;
            data.unlike++;
            console.log("getone data",response.data);



        },function(response){

            console.log(response);

        }).then(function () {
            ApiService.updateData(d,data).then(function(response){
                if(response.data!='error')
                {

                    ApiService.getData().then(function(response){
                        console.log(response.data);

                        $scope.items=response.data;
                    },function(response){

                        console.log(response);

                    });

                }



            },function(response){

                console.log(response);

            });

        });

    }






});

