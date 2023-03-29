var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    var keysArr = Object.keys(storage);
    if (keysArr.length === 0) {
      storage[0] = value;
      return;
    }
    storage[Number(keysArr.slice(-1)[0]) + 1] = value;
    return;
  };

  someInstance.pop = function() {
    var keysArr = Object.keys(storage);
    if (keysArr.length === 0) {
      return;
    }
    var poppedEl = storage[keysArr.slice(-1)[0]];
    var poppedInd = String(keysArr.slice(-1)[0]);
    delete storage[poppedInd];
    return poppedEl;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
