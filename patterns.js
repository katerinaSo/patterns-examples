//frequency;

arr1 = [2, 3, 4];
arr2 = [4, 16, 9];

const theSame = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }

  let counter1 = {};
  let counter2 = {};

  for (let val of arr1) {
    counter1[val] = (counter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    counter2[val] = (counter2[val] || 0) + 1;
  }

  for (let key in counter1) {
    if (!(key ** 2 in counter2)) {
      return false;
    }
    if (counter2[key ** 2] !== counter1[key]) {
      return false;
    }
    return true;
  }
};
theSame(arr1, arr2); //true

// anagrams

const validAnagram = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }

  counter1 = {};
  counter2 = {};

  for (val of str1) {
    counter1[val] = (counter1[val] || 0) + 1;
  }
  for (val of str2) {
    counter2[val] = (counter2[val] || 0) + 1;
  }

  for (let key in counter1) {
    if (!(key in counter2) || counter1[key] !== counter2[key]) {
      return false;
    }
  }
  return true;
};
validAnagram("rtyu", "utyr");



