//4.5
//Implement a function to check if a binary tree is a binary search tree.

var isBinaryTree = function(tree){

  var isBinary = true;
  //if left exists
    //check if left is less than parent
      //if so, recurse on left
  if(tree.left){
    if(tree.left.value < tree.value){
      return isBinaryTree(tree.left)
    } else {
      return !isBinary;
    }
  }

  //if right exists
    //check if right is greater than parent
      //if so, recurse on right
  if(tree.right){
    if(tree.right.value > tree.value){
      return isBinaryTree(tree.right)
    } else {
      return !isBinary;
    }
  }

  return isBinary;
}