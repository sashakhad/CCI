//4.1
//Implement a function to check if a binary tree is balanced. For the purpose of this question, a balanced tree is defined to be a tree such that the heights of the two subtrees of any node never differ by more than one.

var isBalanced = function(tree){
  var maxDepth = 0;
  var minDepth = 0;
  //traverse to the bottom leaf
  var traverseTree = function(tree, curDepth){
    //update the max and min depths when you're at the bottom of the tree
    if(!tree.left && !tree.right){
      if(curDepth > maxDepth) maxDepth = curDepth;
      if(!minDepth) minDepth = curDepth;
      if(curDepth < minDepth) minDepth = curDepth;
    }
    //while the tree has children, traverse those children  
    if(tree.left){
      curDepth++;
      traverseTree(tree.left, curDepth);
    }
    if(tree.right){
      traverseTree(tree.right, curDepth);
    }
  }
  traverseTree(tree, 0);
  if(maxDepth - minDepth > 1) return false;
  return true;
}