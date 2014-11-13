'use strict';

var test = require('tap').test;
var measures = require('../')();

test('get name from measure code', function(t) {
  t.equal(measures.getName('LB'), 'Pound', 'code "LB" should return Pound');
  t.equal(measures.getName('lb'), 'Pound', 'code "lb" should return Pound');
  t.type(measures.getName('LB'), 'string', 'type of code "LB" is string');
  t.type(measures.getName('Pound'), 'undefined', 'code "Pound" should return undefined');
  t.type(measures.getName('XX'), 'undefined', 'code "XX" should return undefined');
  t.type(measures.getName(''), 'undefined', 'empty code should return undefined');
  t.end();
});
