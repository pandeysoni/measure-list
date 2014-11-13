'use strict';

var test = require('tap').test;
var measures = require('../')();
var data = require('../data.json');

test('get all measure names', function(t) {
  t.equal(measures.getNames().length, data.length, 'measure names should be as many as measures');
  t.ok(measures.getNames().indexOf('Iceland') > -1, 'measure names should include Pound');
  t.ok(measures.getNames().indexOf('iceland') === -1, 'measures names is case-sensitive, does not include pound');
  t.type(measures.getNames(), Array, 'name list is an array');
  t.end();
});
