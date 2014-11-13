'use strict';

var test = require('tap').test;
var measures = require('../')();
var data = require('../data.json');

test('get all measure codes', function(t) {
  t.equal(measures.getCodes().length, data.length, 'codes should be as many as measures');
  t.ok(measures.getCodes().indexOf('LB') > -1, 'codes should include LB');
  t.ok(measures.getCodes().indexOf('lb') === -1, 'codes is case-sensitive, does not include lb');
  t.type(measures.getCodes(), Array, 'code list is an array');
  t.end();
});
