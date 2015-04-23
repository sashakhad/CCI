//The code below implements a basic tree.

var Tree = function(value){
  this.value = value;
  this.children = [];
  this.addChild = function(value){
    var node = new Tree(value);
    this.children.push(node);
  }
  this.contains = function(value){
    if(this.value === value){
      return true;
    } else if(this.children){
      for (var i = 0; i < this.children.length; i++) {
        if(this.children[i].contains(value)){
          return true;
        }
      };
    }
    return false;
  }
}