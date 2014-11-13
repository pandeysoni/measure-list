'use strict';

var test = require('tap').test;
var measures = require('../')();
var data = require('../data.json');

test('get all measure names', function(t) {
  t.equal(measures.getData().length, data.length, 'data list should be the same length as data.json');
  t.type(measures.getData(), Array, 'data list is an array');
  t.type(measures.getData()[0], Object, 'first item in list should be object');
  t.end();
});
