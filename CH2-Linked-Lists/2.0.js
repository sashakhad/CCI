//The code below implements a very basic singly linked list. We will be using it in our algorithms.


var Node = function(value){
  this.value = value;
  this.next = null;
};

var Linkedlist = function(){

  this.addToTail = function(value){

    if(!this.head){
      var node = new Node(value);
      this.head = node;
      this.tail = node;
    } else {
      var newTail = new Node(value);
      var oldTail = this.tail;
      if(!this.head.next){
        this.head.next = oldTail;
      }
      oldTail.next = newTail;
      this.tail = newTail;
    }
  }

  this.removeHead = function(){
    var oldHead = this.head;
    var newHead = this.head.next;
    this.head = newHead;
    return oldHead;
  }
}

var a = new Linkedlist();
a.addToTail(1);
a.addToTail(2);
a.addToTail(3);
a.addToTail(4);
a.addToTail(5);
a.addToTail(6);