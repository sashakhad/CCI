//The code below implements a binary search tree. 

var Tree = function(value){

  this.value = value;
  this.left = null;
  this.right = null;

  this.addChild = function(val){
    var child = new Tree(val);
    if(child.value < this.value){
      if(!this.left){
        this.left = child;
      } else {
        this.left.addChild(child.value);
      }
    } else if(child.value > this.value) {
      if(!this.right){
        this.right = child;
      } else {
        this.right.addChild(child.value);
      }
    }
  }
  this.contains = function(val){
    if(this.value === val){
      return true;
    } else if(val < this.value && this.left){
      return this.left.contains(val);
    } else if(val > this.value && this.right){
      return this.right.contains(val);
    } 
    return false;
  }
}

//For constructing a tree and testing it
// var a = new Tree(5);
// a.addChild(2)
// a.addChild(1)
// a.addChild(3)
// a.addChild(7)
// a.addChild(6)
// a.addChild(9)