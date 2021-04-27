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

