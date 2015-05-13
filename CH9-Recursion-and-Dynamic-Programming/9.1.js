//9.1
//A child is running up a staircase with n steps, and can hop either 1 step, 2 steps, or 3 steps at a time. Implement a method to count how many possible ways the child can run up the stairs.

var totalPaths = function(stairs){
  var paths = 0;
  var countSteps = function(n){
    if(n === 0){
      paths++;
    } else if(n < 0){
      //do nothing
    } else {
      countSteps(n - 1);
      countSteps(n - 2);
      countSteps(n - 3);
    }
  }
  countSteps(stairs);
  return paths;
}