

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

// storage will contains buckets that are accessed constant time
// each bucket will contain arrays 

HashTable.prototype.insert = function(k, v) {
  var updated = false;
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.set(index, [k, v]);
  console.log(this._storage.get(index));

};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  return bucket[1];
  
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


