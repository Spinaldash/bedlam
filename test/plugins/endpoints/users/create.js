/* eslint no-unused-expressions: 0 */
'use strict';

var Chai = require('chai');
var Lab = require('lab');
var Mongoose = require('mongoose');
var Server = require('../../../../lib/server');
var User = require('../../../../lib/models/user');

var lab = exports.lab = Lab.script();
var describe = lab.experiment;
var expect = Chai.expect;
var it = lab.test;
var before = lab.before;
var after = lab.after;

var server;

describe('POST /users', function(){
   before(function(done){
     Server.init(function(err, srvr){
      if(err) {throw err; }
      server = srvr;
      done();
     });
   });

  after(function(done){
    server.stop(function(){
      Mongoose.disconnect(done);
    });
  });

  it('should return an exsiting user', function(done){
    //Sever.inject is simulating a browser hitting the server
    server.inject({method: 'POST', url: '/users', credentials: {_id: 25}}, function(response){
      expect(response.statusCode).to.equal(200);
      expect(response.result).to.equal(25);
      done();
    });
  });

  it('should create a new user', function(done){
    //Sever.inject is simulating a browser hitting the server
    server.inject({method: 'POST', url: '/users', credentials: {firebaseId: 99}}, function(response){
      expect(response.statusCode).to.equal(200);
      expect(response.result.toString()).to.have.length(24);
      done();
    });
  });
});
