// var Queue = function() {
//   // Hey! Rewrite in the new style. Your code will wind up looking very similar,
//   // but try not not reference your old code in writing the new style.
// };

const Queue = function() {
  this.storage = {};
};

Queue.prototype.size = function() {
  return Object.keys(this.storage).length;
};

Queue.prototype.enqueue = function(value) {
  var keyArr = Object.keys(this.storage);
  if (keyArr.length === 0) {
    this.storage[0] = value;
    return;
  }
  this.storage[keyArr.slice(-1)[0] + 1] = value;
  return;
};

Queue.prototype.dequeue = function() {
  var keyArr = Object.keys(this.storage);
  if (keyArr.length === 0) {
    return;
  }
  var firstInd = keyArr.slice(0)[0];
  var firstEl = this.storage[firstInd];
  delete this.storage[firstInd];
  return firstEl;
};


