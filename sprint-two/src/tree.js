var Tree = function(value) {
  var newTree = Object.create(treeMethods);
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var node = Tree(value);
  this.children.push(node);
};

treeMethods.contains = function(target) {
  var found = false;
  var search = function(tree) {
    if (tree.value === target) {
      found = true;
      return;
    } 
    for (var i = 0; i < tree.children.length; i++) {
      search(tree.children[i]);
    }
  };
  search(this);
  return found;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
