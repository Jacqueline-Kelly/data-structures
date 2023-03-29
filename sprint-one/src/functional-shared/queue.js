

var queueMethods = {
  enqueue: function (value) {
    var keysArr = Object.keys(this.storage);
    if (keysArr.length === 0) {
      this.storage[0] = value;
    } else {
      this.storage[Number(keysArr.slice(-1)[0]) + 1] = value;
    }
  },

  dequeue: function () {
    var keysArr = Object.keys(this.storage);
    if (keysArr.length === 0) {
      return;
    }
    var firstInd = keysArr[0];
    var firstEl = this.storage[firstInd];
    delete this.storage[String(firstInd)];
    return firstEl;
  },

  size: function () {
    return Object.keys(this.storage).length;
  }
};

var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  _.extend(someInstance, queueMethods);
  return someInstance;
};
