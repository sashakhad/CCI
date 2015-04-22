//2.3
//Implement an algorithm to delete a node in the middle of a singly linked list, given only access to that node.
//EXAMPLE
//Input: the node C from the linked list A -> B -> C -> D -> E
//Result: nothing is returned, but the new linked list looks like A -> B -> D -> E

var removeNode = function(node){
  node.value = node.next.value;
  node.next = node.next.next;
}

var findMid = function(list){
  var node = list.head;
  var count = 0;
  while(node){
    count++;
    node = node.next;
  };
  var mid = Math.floor(Math.round(count/2))
  return mid;
}

var removeMidNode = function(list){
  var count = 1;
  var node = list.head;
  var mid = findMid(list);
  while(count !== mid){
    count++;
    node = node.next;
  }
  removeNode(node);
}