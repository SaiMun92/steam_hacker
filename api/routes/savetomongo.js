var express = require('express');
var secret = require('../secret');
const mongoose = require('mongoose');
const User = require('../models/user');

// var router = express.Router();
var app = express();

/* SAVE TO MONGO */
app.post('/save', async (req, res) => {
  try {
    //https://www.thepolyglotdeveloper.com/2019/02/building-rest-api-mongodb-mongoose-nodejs/
    console.log(req.body); // learning how to input data directly
    var user1 = new User({
      username: 'elysia',
      password: 'password123',
    });

    user1.save(function(err) {
      if (err) throw err;
      console.log('User saved successfully');
      res.status(200).send();
    });
  } catch (error) {
    res.status(500).send(error);
  }
}); 

app.get('/allusers', async (req, res) => {
  try {
    User.find({}, function(err, users) {
      if (err) throw err;
      console.log(users);
      res.status(200).send();
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = app;
