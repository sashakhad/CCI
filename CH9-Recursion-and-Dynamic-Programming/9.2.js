//9.2
//Imagine a robot sittin on the upper left corner of an X by Y grid. The robot can only move in two directions: right and down. How many possible paths are there for the robot to go from (0, 0) to (X, Y)?

//FOLLOW UP
//Imagine certain spots are "off limits," such that the robot cannot step on them. Design an algorithm to find a path for the robot from the top left to the bottom right.

var totalPaths = function(m, n){
  var paths = 0;
  var findPaths = function(x, y){
    if(x === m - 1 && y === n -1){
      return paths++
    }
    if(x >= m) return
    if(y >= n) return
    //check space to the right
    findPaths(x + 1, y);
    //check space below
    findPaths(x, y + 1);
  }
  findPaths(0,0);
  return paths;
}

//You can also do the same thing without a paths counter
var totalPaths = function(m, n){
  var findPaths = function(x, y){
    if(x === m - 1 && y === n -1){
      return 1
    }
    if(x >= m) return 0
    if(y >= n) return 0
    //check space to the right
    return findPaths(x + 1, y) + findPaths(x, y + 1);
    //check space below
  }
  return findPaths(0,0);
}