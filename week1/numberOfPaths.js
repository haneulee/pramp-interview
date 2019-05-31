/**
input : n , destination point
output : number of paths to get there
**/
function recursiveSearch(i, j, n) {
  if (i == n - 1 && j == n - 1) {
    return 1;
  }
  if (i > n - 1) {
    return 0;
  }
  if (i == j) {
    return recursiveSearch(i + 1, j, n);
  } else {
    // 3,2 or 4,1
    return recursiveSearch(i + 1, j, n) + recursiveSearch(i, j + 1, n);
  }
}

function numOfPathsToDest(n) {
  return recursiveSearch(0, 0, n); //3
}

// memoization

// start = 0,0
// in every step the position (i,j) needs to maintain i >= j
// go east or north

// i <= n-1
// destination: n-1, n-1

// “EEENNN”, “EENENN”, “ENEENN”, “ENENEN”, “EENNEN”:
