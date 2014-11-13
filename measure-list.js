'use strict'

var data = require('./data.json');

/**
 * Precompute measure and code lookups.
 */
var measureMap = {};
var codeMap = {};
data.forEach(function(unitOfMeasure) {
  measureMap[unitOfMeasure.name.toLowerCase()] = unitOfMeasure.code;
  codeMap[unitOfMeasure.code.toLowerCase()] = unitOfMeasure.name;
});

module.exports = MeasureList;
function MeasureList() {
  if (!(this instanceof MeasureList)) return new MeasureList();
};

MeasureList.prototype.getCode = function getCode(name) {
  return measureMap[name.toLowerCase()];
};

MeasureList.prototype.getName = function getName(code) {
  return codeMap[code.toLowerCase()];
};

MeasureList.prototype.getNames = function getNames() {
  return data.map(function(unitOfMeasure) {
    return unitOfMeasure.name;
  });
};

MeasureList.prototype.getCodes = function getCodes() {
  return data.map(function(unitOfMeasure) {
    return unitOfMeasure.code;
  });
};

MeasureList.prototype.getData = function getData() {
  return data;
};
