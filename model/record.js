const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const recordSchema = new Schema({
    key: String,
    value: String,
    createdAt: Date,
    counts: [Number]
});

// Makes object relational mapping using schema and underlying records collection
const RecordModel = mongoose.model('records', recordSchema);
module.exports = RecordModel;