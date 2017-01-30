function loadData() {
    $.ajax({
        url: 'http://api.vschool.io/bnabulsi/todo/',
        type: 'GET',
        //  data: "name=John&location=Boston",
        success: function (data) {
            console.log("data has been loaded");
            //    $.get( "http://api.vschool.io/bnabulsi/todo/", function( data ) {
            for (var i = 0; i < data.length; i++) {
                $("#output").append("<tr><td>" + data[i].title + "</td><td>" + data[i].description + "</td><td>" + data[i].price + "</td><td>" + data[i].imgUrl + "</td><td>" + data[i].completed + "</td><td><button type='button' class='btn btn-info btn-xs glyphicon glyphicon-edit ' id='btnEdit'> Edit Data </button><button type='button' class='btn btn-danger btn-xs glyphicon glyphicon-trash' id='btnDelete'> Delete Data</button></td></tr>");
            }

            //});
        }
    });
}

$(document).ready(function () {
    $("#btnShow").click(function () {
        loadData();
    });
    $("#btnAdd").click(function () {
        var title = $("#title").val();
        var description = $("#description").val();
        var price = $("#price").val();
        var imgUrl = $("#imgUrl").val();
        var completed = $("#chBox").is(":checked");
        var obj = {
            title: title,
            description: description,
            price: price,
            imgUrl: imgUrl,
            completed: completed
        };
        $.ajax({
            url: 'http://api.vschool.io/bnabulsi/todo/',
            type: "POST",
            data: obj,
            success: function () {
                loadData();
                console.log("the data has been Added");
            }
        });

    });
    
    $("#btnDelete").click(function(){
        var id = $(this).attr("_id");
        console.log(id);
        $.ajax({
            url: 'http://api.vschool.io/bnabulsi/todo/' + id,
            type: "DELETE",
            success: function () {
                loadData();
                console.log("the data has been Deleted");
            }
        });
    });

});