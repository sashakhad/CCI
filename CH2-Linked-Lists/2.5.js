//2.5
//You have two numbers represented by a linked list, where each node contains a single digit. The digits are stored in reverse order, such that the 1's digit is at the head of the list. Write a function that adds the two numbers and returns the sum as a linked list.

//EXAMPLE:
//Input: (7 -> 1 -> 6) + (5 - > 9 -> 2). That is, 617 + 295.
//Output: 2 - > 1 -> 9. That is, 912.

//FOLLOW UP:
//Suppose the digits are stored in forward order. Repeat the above problem.
//EXAMPLE:
//Input: (6 -> 1 -> 7) + (2 - > 9 -> 5). That is, 617 + 295.
//Output: 9 - > 1 -> 2. That is, 912.

//TODO: refactor: put comments in appropriate spots, modularize, etc

var sumLists = function(list1, list2){
  //store the numbers in a stack so that they're in the proper order
    //unshift them into an array
  var storeValues = function(list){
    var storage = [];
    var node = list.head
    while(node){
      storage.push(node.value);
      node = node.next;
    }
    return storage.reverse();
  }

  var sumNums = function(a, b){
    return a + b;
  }

  var values1 = storeValues(list1);
  var values2 = storeValues(list2);

  var arrayToNum = function(arr){
    var str = JSON.stringify(arr);
    str = str.replace(/[\[,\]]/g, "");
    var num = JSON.parse(str);
    return num;
  }

  var a = arrayToNum(values1);
  var b = arrayToNum(values2);

  var sum = sumNums(a, b)
  sum = JSON.stringify(sum).split("");


  var newList = new Linkedlist();
  while(sum.length){
    var lastDigit = "" + sum.pop()
    newList.addToTail(lastDigit);
  }

  return newList;

    //stringify the array and replace all the ","s with ""
    //parse the string back into a number
    //store this number in a variable that's to be added after you repeat process on list2
  
  //sum the two numbers

  //convert sum back to linked list
    //stringify the number
    //pop each number off the string and push into an array
    //parse each stringified number back to a number type
    //create a new linked list by iterating over array's values
}


var a = new Linkedlist();
a.addToTail(7)
a.addToTail(1)
a.addToTail(6)
var b = new Linkedlist()
b.addToTail(5)
b.addToTail(9)
b.addToTail(2)