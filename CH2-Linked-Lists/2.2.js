//2.2
//Implement an algorithm to find the kth to last element of a singly linked list.

//Count the number of nodes (n) within the linkedlist
//Have a counter to keep track of which node you are on
//Traverse the list up to the (n - k) node
//When you arrive at the node, return it

var kToLast = function(k, list){
  var n = listCount(list);
  if(k < 0){return "ERROR: k must be a positive integer"}
  if(k > n){return "ERROR: k cannot be larger than the number of items in the list"}
  var count = 0;
  var node = list.head;
  while(count !== n - k){
    count++;
    node = node.next;
  }
  return node;
}

var listCount = function(list){
  var count = 0;
  var node = list.head
  while(node){
    count++;
    node = node.next;
  }
  return count;
}