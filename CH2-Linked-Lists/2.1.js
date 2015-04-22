//2.1
//Write code to remove duplicates from an unsorted linked list.

var Linkedlist = require("./2.0.js");

var removeDuplicates = function(list){
  //gather all the values in the list and store them in an object
  var duplicates = {};
  var newList = new Linkedlist()
  var countDuplicates = function(node){
    if(!node){return}
    if(duplicates[node.value]){
      countDuplicates(node.next);
    } else {
      duplicates[node.value] = true;
      newList.addToTail(node.value);
      countDuplicates(node.next);
    }
  }
  countDuplicates(list.head);
  return newList;
}