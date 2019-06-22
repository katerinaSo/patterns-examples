// not a good sorting algorithm
// O(m*n) for unsorted and O(n) for almost sorted
let array = [2, 4, 7, 1, 1, 2, 9];

let swap = (array, indx1, indx2) => {
  [array[indx1], array[indx2]] = [array[indx2], array[indx1]];
};

// using sort()
console.log(array.sort((a, b) => a - b));

// not using sort() and not using swap function
let bubbleSort = arr => {
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        //   swap
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
};

// not using sort() and using swap function
let bubbleSort2 = arr => {
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
};

// optimization if array is already sorted how to stop atterations
let bubbleSort3 = arr => {
  let noSwaps;
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
};

console.log(bubbleSort(array));
console.log(bubbleSort2(array));
console.log(bubbleSort3(array));
