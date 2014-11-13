'use strict';

var test = require('tap').test;
var measures = require('../')();

test('get code from measure name', function(t) {
  t.equal(measures.getCode('Pound'), 'LB', 'name "Pound" should return LB');
  t.equal(measures.getCode('pound'), 'LB', 'name "pound" should return LB');
  t.equal(measures.getCode('POUND'), 'LB', 'name "POUND" should return LB');
  t.type(measures.getCode('Pound'), 'string', 'type of name "Pound" is string');
  t.type(measures.getCode('LB'), 'undefined', 'type of name "LB" is undefined');
  t.type(measures.getCode('FarFarAwayLand'), 'undefined', 'name "FarFarAwayLand" should return undefined');
  t.type(measures.getCode(''), 'undefined', 'empty name should return undefined');
  t.end();
});
