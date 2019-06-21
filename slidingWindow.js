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

// function minSubArrayLen returns the minimal length of contiguous subarray of
//  which the sum is greater than or equal to integer passed to the function
// if there is none return 0



function minSubArrayLen(nums, sum) {
  let total = 0;

  let start = 0;

  let end = 0;

  let minLen = Infinity;

  while (start < nums.length) {
    // if current window doesn't add up to the given sum then

    // move the window to right

    if (total < sum && end < nums.length) {
      total += nums[end];

      end++;
    }

    // if current window adds up to at least the sum given then
    // we can shrink the window
    else if (total >= sum) {
      minLen = Math.min(minLen, end - start);

      total -= nums[start];

      start++;
    }

    // current total less than required total but we reach the end, need this or else we'll be in an infinite loop
    else {
      break;
    }
  }

  return minLen === Infinity ? 0 : minLen;
}
