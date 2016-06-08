var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 1;
  var last = 1;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[last] = value;
    last++;
  };

  someInstance.dequeue = function() {
    var item = storage[count];
    delete storage[count];
    count++;
    return item;
  };

  someInstance.size = function() {
    if (last - count < 0) {
      return 0;
    }
    return last - count;
  };

  return someInstance;
};
