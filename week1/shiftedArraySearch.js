/**
input : shiftarr, num
output: index of num
**/

// 4, 5, 6, 7, 1, 2, 3

function shiftedArrSearch(shiftArr, num) {
  // your code goes here
  let start = 0;
  let end = shiftArr.length - 1;
  let middleIdx;

  while (start <= end) {
    middleIdx = Math.round((start + end) / 2);
    if (shiftArr[middleIdx] === num) return middleIdx;

    if (shiftArr[start] <= shiftArr[middleIdx]) {
      if (shiftArr[start] <= num && shiftArr[middleIdx] >= num) {
        end = middleIdx - 1;
      } else {
        start = middleIdx + 1;
      }
    } else {
      if (shiftArr[end] >= num && shiftArr[middleIdx] < num) {
        start = middleIdx + 1;
      } else {
        end = middleIdx - 1;
      }
    }
  }

  return -1;
}

// https://en.wikipedia.org/wiki/Binary_search_algorithm
