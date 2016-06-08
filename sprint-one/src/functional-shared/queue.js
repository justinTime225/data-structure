var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = _.extend({}, queueMethods);
  obj.storage = {};
  obj.last = 1;
  obj.count = 1;
  return obj;
};

var queueMethods = {
  enqueue: function(value) {
    this.storage[this.last] = value;
    this.last++;
  },
  dequeue: function() {
    var item = this.storage[this.count];
    delete this.storage[this.count];
    this.count++;
    return item;
  },
  size: function() {
    var val = this.last - this.count;
    return val < 0 ? 0 : val;
  }
};


