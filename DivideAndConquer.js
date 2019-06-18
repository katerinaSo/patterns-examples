//  time complexity Log(N)

function binarySearch(arr, val) {
  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    let currentElement = arr[middle];
    if (currentElement < val) {
      min = middle + 1;
    } else if (currentElement > val) {
      max = middle - 1;
    } else {
      return middle;
    }
  }
  return -1;
}

// do numbers 3456 and 6534 same frequiencies? true

// turn nums to strings
// turn strings to objects

function sameFrequencyInNums(num1, num2) {
  let strNum1 = num1.toString();
  let strNum2 = num2.toString();
  if (strNum1.length !== strNum2.length) return false;
  let countNum1 = {};
  let countNum2 = {};

  for (let i = 0; i < strNum1.length; i++) {
    countNum1[str[i]] = (countNum1[strNum1[i]] || 0) + 1;
  }
  for (let i = 0; i < strNum2.length; i++) {
    countNum2[str[i]] = (countNum2[strNum2[i]] || 0) + 1;
  }

  for (let key in countNum1) {
    if (countNum1[key] !== countNum2[key]) return false;
  }

  return true;
}

// frequency counter areThereDuplicates
function areThereDuplicates() {
  let collection = {};
  for (let val in arguments) {
    collection[agruments[val]] = (collection[arguments[val]] || 0) + 1;
  }
  for (let key in collection) {
    if (collection[key] > 1) return true;
  }
  return false;
}

// multiple pointers for areThereDuplicates

function areThereDuplicates2(...args) {
  args.sort((a, b) => a > b);
  let start = 0;
  let next = 1;
  while (next < args.length) {
    if (args[start] === args[next]) {
      return true;
    }
    start++;
    next++;
  }
  return false;
}

function areThereDuplicates3() {
  return new Set(arguments).size !== arguments.length;
}

// SORTED array and num that represents if there is an average in arr matches that num

function averagePair(arr, num) {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    let avg = (arr[start] + arr[end]) / 2;
    if (avg === num) return true;
    else if (avg < num) start++;
    else end--;
  }
  return false;
}

// isSubsequence function to see if characters of first string exist and appear in same order into second string
// time complexity O(N+M)
// space complexity (O(1))
function isSubsequence(str1, str2) {
  let i = 0;
  let j = 0;
  if (!str2) return true;
  while (j < str2.length) {
    if (str2[j] === str1[i]) i++;
    if (i === str1.length) return true;
    j++;
  }
  return false;
}

// recursive solution (space complexity is more than O(1))
function isSubsequence(str1, str2) {
  if (str1.length === 0) return true;
  if (str2.length === 0) return false;
  if (str1[0] === str2[0]) return isSubsequence(str1.slice(1), str2.slice(1));
  return isSubsequence(srt1, srt2.slice(1));
}
