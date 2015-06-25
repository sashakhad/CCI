//4.3
//Given a sorted (increasing order) array with unique integer elements, write an algorithm to create a binary search tree with minimal height.

var minHeightTree = function(arr){
  //find element whose value is in the middle of the other numbers
    //because the array is already sorted, we only need to find the middle element
  var mid = arr.splice(Math.floor(arr.length/2), 1);

  var tree = new Tree(mid);

  //from there, we have that number as the root of the tree, we add the rest of the elements to the tree
  for (var i = 0; i < arr.length; i++) {
    tree.addChild(arr[i]);
  };

  return tree;
}

[0,1,2,3,4,5]
