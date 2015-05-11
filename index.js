'use strict';

var Hoek = require('hoek');
var Server = require('./lib/server');
var FirebaseTokenGenerator = require("firebase-token-generator");
var tokenGenerator = new FirebaseTokenGenerator("WwOkVBHbDtD8b6N5V0F5cLlyLQAzOvIPlEepieDw");
var token = tokenGenerator.createToken({uid: "1", some: "arbitrary", data: "here"});

Server.init(function(err, server){
  Hoek.assert(!err, err);
  console.log('--------------------------------------------------------------------------------');
  console.log('Hapi:\n', server.info.uri);
  console.log('Environment:\n', server.app.environment);
  // console.log('Firebase Token:', token)
  console.log('--------------------------------------------------------------------------------');

});
