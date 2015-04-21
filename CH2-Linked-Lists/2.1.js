//The code below implements a very basic singly linked list. We will be using it in our algorithms.

var Node = function(value){
  this.value = value;
  this.next = null;
};

var Linkedlist = function(value){
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

  this.removeHead = function(){
    var oldHead = this.head;
    var newHead = this.head.next;
    this.head = newHead;
    return oldHead;
  }
}

//2.1
//Write code to remove duplicates from an unsorted linked list.

//iterate through list to make an object that lists all the numbers
  //for each value, note the number of times the value appears in the list
    //for ex,
    //{a: 0, b: 1, c: 2, d: 0}
    //b and c have duplicates -- b appears twice and c appears three times in the list
  //iterate through the list and remove the duplicate items 
    //modify the object to reflect the remaining number of duplicates until there are no duplicates left

Linkedlist.prototype.removeNode = function(node){
  node.value = node.next.value
  node.next = node.next.next
}

Linkedlist.prototype.checkDuplicates = function(node){
  //gather all the values in the list and store them in an object
  var duplicates = {};
  var countDuplicates = function(node){
    console.log(node);
    if(typeof duplicates[node.value] === "number"){
      duplicates[node.value]++;
    } else {
      duplicates[node.value] = 0;
    }
    if(node.next){
      countDuplicates(node.next);
    }
  }
  countDuplicates(this.head);
  return duplicates;
}

Linkedlist.prototype.removeDuplicates = function(){
  var duplicates = this.checkDuplicates();
  var removeFromList = function(node){
    //iterate through object of duplicates
    for(var duplicate in duplicates){
      console.log("duplicates", duplicate, ":", duplicates[duplicate]);
      console.log("node", node)
      //check how many duplicates there are given the current item
      while(duplicates[duplicate] > 0){
        debugger;
        //if the current node's value is a duplicate, remove that node

        if(node.value === duplicate){
          this.removeNode(node);
          console.log("dupe1", duplicates[duplicate])
          duplicates[duplicate]--;
          console.log("dupe2", duplicates[duplicate])
        } else {
        //continue through the list
          if(node.next){
            removeFromList(node.next);
          }
        }
      }
    }
  }
  removeFromList(this.head);
}

//2.2
//Implement an algorithm to find the kth to last element of a singly linked list.


var a = new Linkedlist(1);
a.addToTail(2)
a.addToTail(3)
a.addToTail(4)
a.addToTail(2)

