var Jobs = require('../models/Jobs');
var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();

//CRUD Routes

//GET ALL DATA
router.get('/', function(req, res, next){
    Jobs.find(function(err, jobs){
        if(err) return next(err);
        res.json(jobs);
    });
});

//GET single DATA by ID
router.get('/:id', function(req, res, next){
    Jobs.findById(req.params.id, function(err, post){
        if(err) return next(err);
        res.json(post);
    });
});

//POST CREATE DATA
router.post('/', function(req, res, next) {
    Jobs.create(req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

//UPDATE DATA
router.put('/:id', function(req, res, next) {
    console.log(req.body);
    Jobs.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

//DELETE DATA
router.delete('/:id', function(req, res, next) {
    console.log(req.body);
    Jobs.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

module.exports = router;
