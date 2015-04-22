//2.7
//Implement a function to check if a linked list is a palindrome.

var isPalindrome = function(list){
  var values = [];
  var backwards = [];
  var node = list.head;
  while(node){
    values.push(node.value);
    node = node.next;
  }
  for (var i = values.length - 1; i >= 0; i--) {
    backwards.push(values[i]);
  };
  console.log(values, backwards);
  if(JSON.stringify(values) === JSON.stringify(backwards)){
    return true;
  } else {
    return false;
  }
}