var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var personSchema = new Schema({
    name: String,
    Cost: Number,
    type: Boolean
});



module.exports = mongoose.model("Person", personSchema);