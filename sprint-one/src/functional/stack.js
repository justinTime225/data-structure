var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var key = 0;
  // Implement the methods below
  someInstance.push = function(value) {
    key++;
    storage[key] = value;
  };

  someInstance.pop = function() {
    var item = storage[key];
    delete storage[key];
    key--;
    return item;
  };

  someInstance.size = function() {
    if (key < 0) {
      return 0;
    }
    return key;
  };

  return someInstance;
};
