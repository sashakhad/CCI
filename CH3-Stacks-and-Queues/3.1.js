//Describe how you could use a single array to implement three stacks

//You can partition 3 separate sections of the array to be designated for the three difference stacks
//There will be a starting and ending point for each of the three stacks
//These starting points will essentially be indices of the array

var storage = [];

//The current implementation does not account for the starting and ending points of different stacks 
//colliding with one another. You may need to store the starts and ends in a globally accessibile 
//function or variable so that the stacks can have knowledge of each others' starting and ending points.


var adjustIndices = function(start, end){
  for(var stack in stacks){
    if(stacks[stack].start === end){
      //some adjustment here
    }
    if(stacks[stack].end === start){
      //some adjustment here
    }
  }
}

var stacks = {}
var stackID = 0;
var setID = function(stack){
  stacks[stackID] = stack;
  stackID++;
}

var Stack = function(start, end){
  this.ID = stackID;
  setID(this);
  this.start = start;
  this.end = end;
  this.add = function(val){
    storage.splice(end, 0, val);
    this.end++;
  }

  this.remove = function(){
    storage.splice(end, 1)
    this.end--;
  }
}