//var http = require("http");
//var server = http.createServer(function (request, response) {
//    console.log("I have hit the server");
//    response.writeHeader(200, {
//        "Content-type": "text/plain"
//    });
//    response.write("Hello how are you mustfa wake up");
//    response.end();
//});
//server.listen(8080);
//console.log("I am running the server");


var http = require("http");
var fs = require("fs");

var filePath = "index.html";

var server = http.createServer(function (request, response) {
    console.log("I have hit the server");
    fs.readFile(filePath, "binary", function (err, file) {
        if (err) {
            console.log(err);
            response.writeHeader(500, {
                "content-Type": "text/html"
            });
            response.write(err);
            response.end();
        } else {
            response.writeHeader(200, {
                "content-Type": "text/html"
            });
            response.write(file, "binary");
            response.end();
        }
    });
});
server.listen(8080);
console.log("I am running the server");