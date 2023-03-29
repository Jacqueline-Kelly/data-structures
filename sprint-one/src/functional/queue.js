var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    var keysArr = Object.keys(storage);
    if (keysArr.length === 0) {
      storage[0] = value;
    } else {
      storage[Number(keysArr.slice(-1)[0]) + 1] = value;
    }
  };

  someInstance.dequeue = function() {
    var keysArr = Object.keys(storage);
    if (keysArr.length === 0) {
      return;
    }
    var firstIndex = String(keysArr.slice(0)[0]);
    var firstEl = storage[firstIndex];
    delete storage[firstIndex];
    return firstEl;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
