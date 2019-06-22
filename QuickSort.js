// O(n)*O(log n)=O(n*log n)

function quickSort(array) {
  // base case
  if (array.length < 2) return array;
  let pivotIndex = Math.floor(array.length / 2);
  let pivot = array[pivotIndex];
  let less = [];
  let greater = [];
  for (let i in array) {
    // i is a string and pivot index a number that is why we use != instead of !==
    if (i != pivotIndex) {
      array[i] > pivot ? greater.push(array[i]) : less.push(array[i]);
    }
  }
  return [...quickSort(less), pivot, ...quickSort(greater)];
}

console.log(quickSort([2, 6, 7, 3, 4, 1, 8]));
