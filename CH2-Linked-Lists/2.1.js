//The code below implements a very basic singly linked list. We will be using it in our algorithms.

var Node = function(value){
  this.value = value;
  this.next = null;
};

var LinkedList = function(value){
  var node = new Node(value);

  this.head = node;

  this.tail = node;

  this.addToTail = function(value){
    var newTail = new Node(value);
    var oldTail = this.tail;
    if(!this.head.next){
      this.head.next = oldTail;
    }
    oldTail.next = newTail;
    this.tail = newTail;

  }
}

//Write code to remove duplicated from an unsorted linked list.
//FOLLOW UP:
//How would you solve this problem if a temporary buffer is not allowed?

//2.2
//Implement an algorithm to find the kth to last element of a singly linked list.




