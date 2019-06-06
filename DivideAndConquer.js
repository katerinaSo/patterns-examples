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
  while (next < atgs.length) {
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
