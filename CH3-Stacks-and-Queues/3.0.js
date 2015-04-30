//Implement a Stack

var Stack = function(){
  var storage = [];

  this.add = function(val){
    storage.push(val);
  }

  this.remove = function(){
    return storage.pop()
  }

  this.peek = function(){
    return storage[storage.length - 1];
  }

}