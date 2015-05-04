/*
How would you desing a stack which, in addition to push and pop, also has a function min which returns the minimum element? Push, pop, and min should all operate in O(1) time.
*/

var Stack = function(){
  var storage = [];
  var mins = [];

  this.add = function(val){
    if(val < mins[lastIndex(mins)] || mins.length === 0){
      mins.push(val);
      resetMin(mins, this);
    }
    storage.push(val);
  }

  this.remove = function(){
    if(storage[lastIndex(storage)] === mins[lastIndex(mins)]){
      mins.pop();
      resetMin(mins, this);
    }
    return storage.pop()
  }
  this.min = mins[lastIndex(mins)];
}


//////////////////Helper Functions//////////////////////////
var resetMin = function(minsArray, context){
  context.min = minsArray[lastIndex(minsArray)];
}

var lastIndex = function(array){
  return array.length - 1;
}