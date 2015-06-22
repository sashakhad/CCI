var BFS = function(tree, target){
  var hasValue = false;
  if(tree.value === target){
    hasValue = true
  } else {
    var queue = new Queue();
    for (var i = 0; i < tree.children.length; i++) {
      queue.enqueu(tree.children[i])
    };
    var child = queue.dequeue()
    while(child){
      BFS(child, target)
      child = queue.dequeue();
    }
  }
  return hasValue;
}