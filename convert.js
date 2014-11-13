'use strict'

var data = require('./data.json');

/**
 * Precompute name and code lookups.
 */
var nd = [];
data.forEach(function(unitOfMeasure) {

  console.log('  { "code": "%s", "name": "%s" },', unitOfMeasure.Code, unitOfMeasure.Name);
});

//console.log(JSON.stringify(nd));
