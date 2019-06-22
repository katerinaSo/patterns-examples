function compareStr(str1, str2) {
  return str2.length - str1.length;
}
function compareNums(num1, num2) {
  return num1 - num2;
}
console.log(["katya", "miki", "robert", "boduspogus"].sort(compareStr));
console.log([2, 5, 12, 78, 56, 15, 12].sort(compareNums));
