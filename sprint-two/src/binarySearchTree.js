var BinarySearchTree = function(value) {
  var tree = Object.create(Methods);
  tree.value = value;
  tree.left = null;
  tree.right = null;
  return tree;
};

Methods = {
  insert: function(val) {
    var tree = BinarySearchTree(val);
    // console.log(this.value, tree.value);
    if (this.value > tree.value) {
      // if left doesn't exist assign tree to it
      if (this.left === null) {
        this.left = tree;
      } else {  // left exists 
        this.left.insert(tree.value);
      }

    } else if (this.value < tree.value) {
      if (this.right === null) {
        this.right = tree;
      } else {
        this.right.insert(tree.value);
      }
    }
    
  },
  contains: function(target) {
    var found = false;
    var search = function(tree) {
      if (tree.value === target) {
        found = true;
      }
      if (tree.left) {
        search(tree.left);
      }
      if (tree.right) {
        search(tree.right);
      }
    };
    search(this);
    return found;

  },
  depthFirstLog: function() {}
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
