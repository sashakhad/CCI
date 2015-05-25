//9.1
//A child is running up a staircase with n steps, and can hop either 1 step, 2 steps, or 3 steps at a time. Implement a method to count how many possible ways the child can run up the stairs.

var totalPaths = function(stairs){
  var paths = 0;
  var countSteps = function(n){
    if(n === 0) paths++;
    else if(n < 0) return
    else {
      countSteps(n - 1);
      countSteps(n - 2);
      countSteps(n - 3);
    }
  }
  countSteps(stairs);
  return paths;
}

//Another recursive means of solving the problem
//This will, however, have a more limited call stack when proper tail recursion is introduced in ES6
var stairPaths = function(n) {
  debugger
  if (n === 0)    return 1;
  else if (n < 0) return 0;
  return stairPaths(n-1) + stairPaths(n-2) + stairPaths(n-3);
}

// Illustration of how stairPaths would operate
// stairPaths(3) 
  // stairPaths(2) + stairPaths(1) + stairPaths(0)
    // stairPaths(1) + stairPaths(0) + stairPaths(-1)
      // stairPaths(1) + stairPaths(0) + stairPaths(-1)
    // stairPaths(0) + stairPaths(-1) + stairPaths(-2)
// --> 4