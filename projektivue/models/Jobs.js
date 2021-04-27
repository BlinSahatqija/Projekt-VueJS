const mongoose = require('mongoose');

//node.js si middleware mes vue.js dhe databazes
const JobsSchema = mongoose.Schema({
    title: String,
    category: String,
    city: String,
    updated_date:{ type:Date, default:Date.now },
});

module.exports = mongoose.model('Jobs', JobsSchema);