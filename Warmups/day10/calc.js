document.getElementById("resultBtn").addEventListener("click",sum);

function sum() {
    var nb1= document.getElementById("num1").value;
    var nb2= document.getElementById("num1").value;
    document.getElementById("result").value=Number(nb1)+Number(nb2);
}
