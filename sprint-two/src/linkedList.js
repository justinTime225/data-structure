var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var node = Node(value);
    // if head doesn't exist then make this new node head
    if (!list.head) {
      list.head = node;
      list.tail = node;
    } else {
      list.tail.next = node;
      list.tail = list.tail.next; 
    }
  };

  list.removeHead = function() {
    // if there is only 1 node 
    var item = list.head.value;
    list.head = list.head.next;
    return item;
  };

  list.contains = function(target) {
    for (var node = list.head; node; node = node.next) {
      if (node.value === target) {
        return true;
      }
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 addToTail = O(1);
 removeHead = O(1);
 contains = O(n);
 */
