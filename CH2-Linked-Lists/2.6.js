//Given a circular linked list, implement an algorithm which returns the node at the beginning of the loop.
//Definition:
//Circular linked list: A (corrupt) linked list in which a node's next pointer points to an earlier node, so as to make a loop in the linked list.
//Example:
//Input: A -> B -> C -> D -> E -> C (the same C as earlier)
//Output: C

var startOfLoop = function(list){
  var nodes = [];
  node = list.head;

  //create an array with stringified nodes
  while(node){
    nodes.push(JSON.stringify(node));
    node = node.next;
  }

  //iterate through list to compare
    //check if current node, when stringified, is same as any item in array 
  node = list.head
  while(node){
    for (var i = 0; i < nodes.length; i++) {
      if(JSON.stringify(node) === nodes[i]){
        return node;
      }
    };
  }

  return false;
}