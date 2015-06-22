
//for trees with a children property
var BFS = function(tree, target){
  var hasValue = false;
  if(tree.value === target){
    hasValue = true
  } else {
    var queue = new Queue();
    for (var i = 0; i < tree.children.length; i++) {
      queue.enqueue(tree.children[i])
    };
    var child = queue.dequeue()
    while(child){
      BFS(child, target)
      child = queue.dequeue();
    }
  }
  return hasValue;
}

//for trees with left and right properties
var BFS = function(tree, target){
  var hasValue = false;
  var queue = new Queue();
  var findTarget = function(tree, target){
    if(tree.value === target){
      hasValue = true
    } else {
      queue.enqueue(tree.left)
      queue.enqueue(tree.right)
      var child = queue.dequeue()
      while(child){
        findTarget(child, target)
        child = queue.dequeue();
      }
    }
  }
  findTarget(tree, target);
  return hasValue;
}

var Queue = function(){
  var storage = [];
  this.enqueue = function(val){
    storage.push(val);
  }
  this.dequeue = function(){
    return storage.shift();
  }
}