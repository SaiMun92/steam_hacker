// https://github.com/xDimGG/node-steamapi
var request = require('request');
var express = require('express');
var router = express.Router();
var SteamAPI = require('steamapi');
var steam = new SteamAPI('0693EFD0257BE02F03DF6CF8BC57986D');


// Get all info
router.get('/user-all/:name', async function(req, res) {
    try  {
        let id = await steam.resolve(`https://steamcommunity.com/id/${req.params.name}`);
        console.log(id);
        let summary = await steam.getUserSummary(id);
        let ownedGames = await steam.getUserOwnedGames(id);
        let userFriends = await steam.getUserFriends(id);
        let userBadges = await steam.getUserBadges(id);
        let recentGames = await steam.getUserRecentGames(id);
        
        res.send({
            'summary': summary,
            'ownedGames': ownedGames, 
            'userFriends': userFriends,
            'userBadges': userBadges,
            'recentGames': recentGames,
        });
    } catch (err) {
        console.log("Error occurerd in one of the api calls: ", err);
    }
});


// Get the User
router.get('/user-summary/:name', function(req, res, next) {
    steam.resolve(`https://steamcommunity.com/id/${req.params.name}`).then(id => {
        console.log(typeof id);
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

// this needs id and app id
router.get('/getachievements/:id/:app', function(req, res, next) {
    console.log(req.params.id);
    steam.getUserAchievements(`${req.params.id}, ${req.params.app}`).then(summary => {
        res.send(summary);
    }).catch (err => {
        console.log("Something wrong with get achievements: ", err);
    });
});

router.get('/getbadges/:id', function(req, res, next) {
    steam.getUserBadges(`${req.params.id}`).then(summary => {
        res.send(summary);
    });
});


module.exports = router;