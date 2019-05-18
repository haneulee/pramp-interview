function findPairsWithGivenDifference(arr, k) {
  // your code goes here
  const len = arr.length;
  let resultArr = [];

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (i !== j && arr[j] - arr[i] === k) {
        resultArr.push([arr[j], arr[i]]);
      }
    }
  }

  return resultArr;
}

function findPairsWithGivenDifference2(arr, k) {
  // your code goes here
  const len = arr.length;
  let resultArr = [];
  let map = {};

  for (var x of arr) {
    map[x - k] = x;
  }

  for (var y of arr) {
    if (!isNaN(map[y])) {
      resultArr.push([map[y], y]);
    }
  }

  return resultArr;
}
