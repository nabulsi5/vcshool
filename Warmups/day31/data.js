$(document).ready(function () {
    $("#btnAdd").click(function () {
        var shoppingList= $("#shoppingList").val();
        $("#list").append("<li id=" + shoppingList + ">" + shoppingList + " <button class='btn btn-danger btn-xs' id=" + shoppingList +  " onclick=Delete(" + shoppingList + ")> Delete </button></li>");
        $("#shoppingList").val("");
        



    });

});


function Delete(item){
    $(item).remove();
}