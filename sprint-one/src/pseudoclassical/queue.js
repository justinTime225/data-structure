var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.last = 1;
  this.count = 1;
};


Queue.prototype.enqueue = function(value) {
  this.storage[this.last] = value;
  this.last++;
};
Queue.prototype.dequeue = function() {
  var item = this.storage[this.count];
  delete this.storage[this.count];
  this.count++;
  return item;
};
Queue.prototype.size = function() {
  var result = this.last - this.count;
  return result < 0 ? 0 : result;
};