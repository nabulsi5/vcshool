var uuid = require("uuid");
var animals = [
    {
        id: uuid.v4(),
        name: "Lion",
        age: "21",
        isTasty: false
    },
    {

        id: uuid.v4(),
        name: "Tiger",
        age: "15",
        isTasty: true
    },
    {

        id: uuid.v4(),
        name: "cat",
        age: "4",
        isTasty: true
    },
    {

        id: uuid.v4(),
        name: "dog",
        age: "22",
        isTasty: false
    }
]
module.exports = animals;