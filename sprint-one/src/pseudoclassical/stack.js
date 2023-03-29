// var Stack = function() {
//   // Hey! Rewrite in the new style. Your code will wind up looking very similar,
//   // but try not not reference your old code in writing the new style.
// };

const Stack = function() {
  this.storage = {};
};


Stack.prototype.size = function() {
  return Object.keys(this.storage).length;
};

Stack.prototype.push = function(value) {
  var keyArr = Object.keys(this.storage);
  if (keyArr.length === 0) {
    this.storage[0] = value;
    return;
  }
  this.storage[keyArr.slice(-1)[0] + 1] = value;
  return;
};

Stack.prototype.pop = function() {
  var keyArr = Object.keys(this.storage);
  if (keyArr.length === 0) {
    return;
  }
  var lastInd = keyArr.slice(-1)[0];
  var lastEl = this.storage[lastInd];
  delete this.storage[lastInd];
  return lastEl;
};


