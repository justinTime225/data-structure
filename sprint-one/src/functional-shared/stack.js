var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = _.extend({}, stackMethods);
  obj.storage = {};
  obj.count = 0;
  return obj;
};

var stackMethods = {
  push: function(value) {
    this.count++;
    this.storage[this.count] = value;
  },
  pop: function() {
    var item = this.storage[this.count];
    delete this.storage[this.count];
    this.count--;
    return item;
  },
  size: function() {
    return this.count < 0 ? 0 : this.count;
  }
};


