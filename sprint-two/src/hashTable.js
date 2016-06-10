

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

// storage will contains buckets that are accessed constant time
// each bucket will contain arrays 

HashTable.prototype.insert = function(k, v) {
  var updated = false;
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  // if the bucket doesn't exist then create one initialized with [k, v]
  if (!bucket) {
    this._storage.set(index, [[k, v]]);
  } else {
    // bucket exists so we loop over it to find key and set value
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        bucket[i][1] = v;
        updated = true;
      }
    }
    // if updated is false then push new array into bucket
    if (!updated) {
      bucket.push([k, v]);
    }
  }


};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  // bucket is an array of arrays
  // loop over bucket to find the val you need
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      return bucket[i][1];
    }
  }
  
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      bucket.splice(i, 1);
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 insert - O(n);
 retrieve - O(n);
 remove - O(n);
 */


