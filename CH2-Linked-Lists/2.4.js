//2.4
//Write code to partition a linked list around a value x, such that all nodes less than x come before all nodes greater than or equal to x.


//create an array with all the values in the linked list
//sort the values within the array to suit the requirements above
//build a new linked list with the new order

var partitionList = function(x, list){
  var values = collectValues(list);
  var partitionedValues = sortValues(x, values);
  var newList = new Linkedlist();
  for (var i = 0; i < partitionedValues.length; i++) {
    newList.addToTail(partitionedValues[i]);
  };
  return newList;
}

var collectValues = function(list){
  var collection = [];
  var node = list.head;
  while(node){
    collection.push(node.value);
    node = node.next;
  }
  return collection;
}

//"sort" may be a misnomer in this case given that the function only arranges values to fall less than or greater than the x value
var sortValues = function(x, array){
  var partitionedArray = [];
  partitionedArray.push(x);
  for (var i = 0; i < array.length; i++) {
    if(array[i] < x){
      partitionedArray.unshift(array[i]);
    } else {
      partitionedArray.push(array[i]);
    }
  };
  //remove the initial x so the correct number of items are in the list
  for (var i = 0; i < partitionedArray.length; i++) {
    if(partitionedArray[i] === x){
      partitionedArray.splice(i, 1);
    }
  };
  return partitionedArray;
}

