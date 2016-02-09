'use strict';

let milli = 1000000;
let sumTen = 0;
let sumTwo = 0;

String.prototype.reverse = function() {
	return this.split('').reverse().join('');
};

let baseTen = function() {
  for (let i =0; i < milli; i++) {
    let iToString = i.toString();
    if ( iToString === iToString.reverse() && (i % 10) === i) {
      sumTen = sumTen + i;
    }
  }
  return sumTen;
}

let baseTwo = function () {
  for (let i =0; i < milli; i++) {
    let iToString = i.toString();
    if ( iToString === iToString.reverse() && (i % 2)  === i) {
      sumTwo = sumTen + i;
    }
  }
  return sumTwo;
}

module.exports = () => {
  return true;
};
