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

}