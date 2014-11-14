measure-list
============

Map codes to unit of measure names and vice versa.

# example 

``` js
var measures = require('unitofmeasure')();

console.log(measures.getName('LB')); // Pound
console.log(measures.getCode('Pound')); // LB
```

# methods

Usage:

```
var measures = require('unitofmeasure')();
```
All input is case-insensitive.

## getName(code)
.
Returns the name for that unit of measure.
If not found, it returns `undefined`.

## getCode(name)

Expects the unit of measure name.
Returns the code for that measure.
If not found, it returns `undefined`.

## getNames()

Returns an array of all measure names.

## getCodes()

Returns an array of all measure codes.

## getData()

Returns an array of all measure information, in the same format as it gets imported.

# install

``` cli
npm install unitofmeasure
```

# license

BSD
