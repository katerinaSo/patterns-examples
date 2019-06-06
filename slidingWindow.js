// function that accepts an array of integers and integer n.
// it should calculate the maximum sum of n consecutive elements in the array

// examples: ([2,3,5,7,8,3,1],3)
// sum = 2+3+5=10,
// temp = 10-2+7=15
// Math.max(sum,temp)

function MaxSubArraySum(arr, n) {
  let maxSum = 0;
  let tempSum = 0;
  // case array smaller than n
  if (arr.length < n) {
    return null;
  }
  // making first sum of n elements
  for (let i = 0; i < n; i++) {
    maxSum += arr[i];
  }

  tempSum = maxSum;
  // creating new sums by taking first one out and adding next one in from the array
  for (let i = n; i < arr.length; i++) {
    tempSum = tempSum + arr[i] - arr[i - n];
    // choosing maximum from it and assigning it to sum
    maxSum = Math.max(tempSum, maxSum);
  }
  return maxSum;
}
