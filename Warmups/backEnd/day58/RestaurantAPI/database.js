var uuid = require("uuid");
var menu = [
    {
        Id: uuid.v4(),
        name: "chicken casadias",
        Cost: 15000,
        type: "appetizer"
    },
    {
        Id: uuid.v4(),
        name: "tawook",
        Cost: 15000,
        type: "main course"
    },
    {
        Id: uuid.v4(),
        name: "cheesecake",
        Cost: 4000,
        type: "dessert"
    },
    {
        Id: uuid.v4(),
        name: "fattouch",
        Cost: 5000,
        type: "appetizer"
    },
    {
        Id: uuid.v4(),
        name: "chicken grill",
        Cost: 20000,
        type: "main course"
    }

];
module.exports = menu;