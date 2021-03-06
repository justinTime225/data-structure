

// Instantiate a new graph
var Graph = function() {
  this.vertices = {};
  this.edges = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.vertices[node] = node;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.vertices.hasOwnProperty(node);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  delete this.vertices[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var edge1 = fromNode + '' + toNode;
  var edge2 = toNode + '' + fromNode;
  return this.edges.hasOwnProperty(edge1) || this.edges.hasOwnProperty(edge2);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  var edge = fromNode + '' + toNode;
  this.edges[edge] = [fromNode, toNode];
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var edge = fromNode + '' + toNode;
  delete this.edges[edge];
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var key in this.vertices) {
    cb(this.vertices[key]);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 contains - O(1);
 removeNode - O(1);
 hasEdge - O(1);
 addEdge - O(1);
 removeEdge - O(1);
 forEachNode - O(n);
 */


