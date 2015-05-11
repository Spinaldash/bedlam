'use strict';

var Chai = require('chai');
var Lab = require('lab');
var Mongoose = require('mongoose');
var Sinon = require('sinon');
var Server = require('../lib/server');
var Version = require('../lib/plugins/endpoints/version');

var lab = exports.lab = Lab.script();
var describe = lab.experiment;
var expect = Chai.expect;
var it = lab.test;

describe('server.js', function(){
  it('should add 2 and 2', function(done){
    var sum = add(2, 2);
    expect(sum).to.equal(4);
    done();
  });
});


function add(x, y){
  return x + y;
}
