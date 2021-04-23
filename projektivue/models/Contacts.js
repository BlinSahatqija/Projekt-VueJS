const mongoose = require('mongoose');

//node.js si middleware mes vue.js dhe databazes
const ContactsSchema = mongoose.Schema({
    name: String,
    lastname: String,
    country: String,
    description: String,
    updated_date:{ type:Date, default:Date.now },
});

module.exports = mongoose.model('Contacts', ContactsSchema);