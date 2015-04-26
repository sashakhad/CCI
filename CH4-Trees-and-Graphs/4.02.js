//The code below implements a binary tree. Note that it is not a binary search tree; items are not sorted.

var Tree = function(value){
  //toggleSide is used to determine which side to recurse on when there
  //are no available sides for the .addChild method to add a new node to
  //it switches between the two for a more balanced tree
  //though it is not sorted by value
  this.toggleSide = false;
  this.value = value;
  this.left = null;
  this.right = null
  this.addChild = function(value){
    var node = new Tree(value);
    if(!this.left){
      this.left = node;
    } else if (!this.right){
      this.right = node;
    } else {
        if(this.toggleSide){
          this.toggleSide = !this.toggleSide;
          this.left.addChild(value);
        } else {
          this.toggleSide = !this.toggleSide;
          this.right.addChild(value);
        }
    }
  }
}