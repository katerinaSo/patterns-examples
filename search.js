const states = [
  "Alabama",
  "Alaska",
  "American Samoa",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "District of Columbia",
  "Federated States of Micronesia",
  "Florida",
  "Georgia",
  "Guam",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Marshall Islands",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Northern Mariana Islands",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Palau",
  "Pennsylvania",
  "Puerto Rico",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virgin Island",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming"
];

//  states are sorted array
// binary search O(log n)

function binarySearch(arr, val) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);

  while (arr[middle] != val) {
    if ((val, arr[middle])) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
  }
  arr[middle] == val ? middle : -1;
}

// linear search for substring

function naiveSearch(longStr, patternStr) {
  let count = 0;
  for (let i = 0; i < longStr.length; i++) {
    for (let j = 0; j < patternStr.length; j++) {
      if (patternStr[j] !== longStr[i + j]) {
        break;
      }
      if (j === patternStr.length - 1) {
        count++;
      }
    }
  }
  return count;
}
//  better algorithm

function findPattern(str, pattern) {
  let count = 0;
  for (let i = 0; i <= str.length - pattern.length; i++) {
    if (str[i] === pattern[0]) {
      for (let j = 0; j < pattern.length; j++) {
        if (pattern[j] !== str[i + j]) {
          break;
        }
        if (j === pattern.length - 1) {
          count++;
          i = i + j;
        }
      }
    }
  }
  return count;
}

// counts like kmp
function findPattern2(str, pattern) {
  let count = 0;
  for (let i = 0; i <= str.length - pattern.length; i++) {
    if (str[i] === pattern[0]) {
      for (let j = 0; j < pattern.length; j++) {
        if (pattern[j] !== str[i + j]) {
          break;
        }
        if (j === pattern.length - 1) {
          count++;
        }
      }
    }
  }
  return count;
}

// KMP algorithm
function longestPrefix(str) {
  var table = new Array(str.length);
  var maxPrefix = 0;
  table[0] = 0;
  for (var i = 1; i < str.length; i++) {
    while (maxPrefix > 0 && str.charAt(i) !== str.charAt(maxPrefix)) {
      maxPrefix = table[maxPrefix - 1];
    }
    if (str.charAt(maxPrefix) === str.charAt(i)) {
      maxPrefix++;
    }
    table[i] = maxPrefix;
  }
  return table;
}

function kmpMatching(str, pattern) {
  var prefixes = longestPrefix(pattern);
  var matches = [];

  var j = 0;

  var i = 0;
  while (i < str.length) {
    if (str.charAt(i) === pattern.charAt(j)) {
      i++;
      j++;
    }

    if (j === pattern.length) {
      matches.push(i - j);

      j = prefixes[j - 1];
    } else if (str.charAt(i) !== pattern.charAt(j)) {
      if (j !== 0) {
        j = prefixes[j - 1];
      } else {
        i++;
      }
    }
  }

  return matches;
}

/* 
naiveSearch("3333333333333333333333333333333333333333333333
33333333333333333333333333333333333333333333333333333333333
33333333333333333333333333333333333","33333333333333333333")
121


findPattern("333333333333333333333333333333333333333333333333
33333333333333333333333333333333333333333333333333333333333333
333333333333333333333333333333","33333333333333333333")
7


findPattern2("333333333333333333333333333333333333333333333333
33333333333333333333333333333333333333333333333333333333333333
333333333333333333333333333333","33333333333333333333")
121

kmpMatching("33333333333333333333333333333333333333333333333333
333333333333333333333333333333333333333333333333333333333333333
333333333333333333333333333","33333333333333333333")
121
*/
