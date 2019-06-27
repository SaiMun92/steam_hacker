// I've cracked the code!!!!!!!
var request = require('request');
var express = require('express');
var router = express.Router();
var SteamAPI = require('steamapi');
var steam = new SteamAPI('0693EFD0257BE02F03DF6CF8BC57986D');

router.get('/', function(req, res, next) {
    steam.resolve('https://steamcommunity.com/id/icecoolcat').then(id => {
        steam.getUserSummary(id).then(summary => {
            console.log(summary);
            res.send(summary);
            /**
            PlayerSummary {
                avatar: {
                    small: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/7f/7fdf55394eb5765ef6f7be3b1d9f834fa9c824e8.jpg',
                    medium: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/7f/7fdf55394eb5765ef6f7be3b1d9f834fa9c824e8_medium.jpg',
                    large: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/7f/7fdf55394eb5765ef6f7be3b1d9f834fa9c824e8_full.jpg'
                },
                steamID: '76561198146931523',
                url: 'http://steamcommunity.com/id/DimGG/',
                created: 1406393110,
                lastLogOff: 1517725233,
                nickname: 'Dim',
                primaryGroupID: '103582791457347196',
                personaState: 1,
                personaStateFlags: 0,
                commentPermission: 1,
                visibilityState: 3
            }
            */
        });
    });
});

router.get('/recent', function(req, res, next) {
    steam.resolve('https://steamcommunity.com/id/icecoolcat').then(id => {
        steam.getUserRecentGames(id).then(summary => {
            console.log(summary);
            res.send(summary);
        });
    });
});

module.exports = router;