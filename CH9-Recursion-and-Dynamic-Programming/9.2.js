//9.2
//Imagine a robot sittin on the upper left corner of an X by Y grid. The robot can only move in two directions: right and down. How many possible paths are there for the robot to go from (0, 0) to (X, Y)?

//FOLLOW UP
//Imagine certain spots are "off limits," such that the robot cannot step on them. Design an algorithm to find a path for the robot from the top left to the bottom right.

var Grid = function(x, y){
  Array.call(this);
  //create the rows
  for (var i = 0; i < x ; i++) {
    var row = [];
    //create the columns
    for (var j = 0; j < y; j++) {
      row.push(false);
    };
    this.push(row);
  };
}

var robotPaths = function(grid){
  
  var paths = 0;

  var checkPaths = function(x, y){
    //check if you on the bottom right
    debugger;
    if(x === grid.length - 1 && y === grid[0].length - 1){
      paths++;
    }

    //check if the space to the right and bottom of robot has been visited
    //if not, toggle the space and recurse on that spot

    if(!grid[x + 1] && x < grid.length - 1){
      grid.toggle(grid, x + 1, y)
      checkPaths(x + 1, y)
    }

    if(!grid[x][y + 1] && x < grid[0].length - 1){
      grid.toggle(grid, x + 1, y)
      checkPaths(x + 1, y)
    }
  }
  checkPaths(0,0);
  return paths;
}

Grid.prototype = Object.create(Array.prototype);

Grid.prototype.constructor = Grid;

Grid.prototype.toggle = function(grid, x, y){
  grid[x][y] = !grid[x][y];
}