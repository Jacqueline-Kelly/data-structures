class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
  }

  size() {
    return Object.keys(this.storage).length;
  }

  enqueue(value) {
    var keyArr = Object.keys(this.storage);
    if (keyArr.length === 0) {
      this.storage[0] = value;
      return;
    }
    this.storage[keyArr.slice(-1)[0] + 1] = value;
    return;
  }

  dequeue() {
    var keyArr = Object.keys(this.storage);
    if (keyArr.length === 0) {
      return;
    }
    var firstInd = keyArr.slice(0)[0];
    var firstEl = this.storage[firstInd];
    delete this.storage[firstInd];
    return firstEl;
  }
}
