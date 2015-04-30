//Implement a queue

var Queue = function(){
  var storage = [];

  this.enqueue = function(val){
    storage.push(val);
  }

  this.dequeue = function(){
    return storage.shift();
  }
}