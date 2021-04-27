const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./DB');
const contacts = require('../routes/contacts');
const jobs = require('../routes/jobs');

mongoose.Promise = global.Promise;  
mongoose.connect(config.DB);       

const app = express(); // tu e nis ni instance te expressit, per mi leshu serverin
app.use(bodyParser.json()); //i bojim te dhenat e gatshme mu perdor me json
app.use(cors());
app.use('/jobs', jobs);
app.use('/contacts', contacts);  //pathi contacts
var port = process.env.PORT || 4000;

app.listen(port, function(){
    console.log("NodeJS Serveri online:", port);
});

