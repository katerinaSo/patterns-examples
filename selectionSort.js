array = [3, 5, 1, 8, 3, 5, 6, 1];

function selectionSort(arr) {
  // defined swap function
  let swap = (array, indx1, indx2) => {
    [array[indx1], array[indx2]] = [array[indx2], array[indx1]];
  };
  //   finding minimum every time
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (j = i + 1; j < arr.length; j++) {
      if (arr[lowest] > arr[j]) {
        lowest = j;
      }
    }
    if (i !== lowest) swap(arr, i, lowest);
  }

  return arr;
}

console.log(selectionSort(array));
