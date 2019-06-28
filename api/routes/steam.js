// https://github.com/xDimGG/node-steamapi
var request = require('request');
var express = require('express');
var router = express.Router();
var SteamAPI = require('steamapi');
var steam = new SteamAPI('0693EFD0257BE02F03DF6CF8BC57986D');

// Get the User
router.get('/user-summary/:name', function(req, res, next) {
    steam.resolve(`https://steamcommunity.com/id/${req.params.name}`).then(id => {
        steam.getUserSummary(id).then(summary => {
            res.send(summary);
        });
    }).catch(err => {
        console.log(err);
        res.send("oops no such user!");
    });
});

router.get('/recent/:id', function(req, res, next) {
    steam.getUserRecentGames(`${req.params.id}`).then(summary => {
        res.send(summary);
    });
});

router.get('/ownedgames/:id', function(req, res, next) {
    steam.getUserOwnedGames(`${req.params.id}`).then(summary => {
        res.send(summary);
    });
});

router.get('/getfriends/:id', function(req, res, next) {
    steam.getUserFriends(`${req.params.id}`).then(summary => {
        res.send(summary);
    });
});

router.get('/getachievements/:id', function(req, res, next) {
    steam.getUserAchievements(`${req.params.id}`).then(summary => {
        res.send(summary);
    });
});

router.get('/getbadges/:id', function(req, res, next) {
    steam.getUserBadges(`${req.params.id}`).then(summary => {
        res.send(summary);
    });
});


module.exports = router;