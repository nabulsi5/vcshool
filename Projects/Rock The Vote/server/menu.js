var mongoose = require('mongoose');


var Schema = mongoose.Schema;
var friendSchema = new Schema({
    title: String,
    description: String,
    comment : [String],
    like: Number,
    unlike: Number
});

module.exports = mongoose.model('Friend', friendSchema);
