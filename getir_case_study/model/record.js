const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const recordSchema = new Schema({
    key: String,
    value: String,
    createdAt: Date,
    counts: [Number]
});
const RecordModel = mongoose.model('records', recordSchema);
module.exports = RecordModel;