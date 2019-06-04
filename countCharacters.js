function toObject(str) {
  let Counts = {};
  for (char of str) {
    if (isAlphaNumeric(char)) {
      char = char.toLowerCase();
      Counts[char] = ++Counts[char] || 1;
    }
  }

  return Counts;
}

function isAlphaNumeric(char) {
  if ((char > "a" && char < "z") || (char > "0" && char < "9")) {
    return true;
  } else {
    return false;
  }
}







// (code > 64 && code < 91) for upper alpha
// (code > 47 && code < 58) && // numeric (0-9)
// (code > 96 && code < 123)  //lower alpha (a-z)

// function alternativeSolution(str){
//     const obj={};
//     [...str.toLowerCase().replace(/\W/g,'')].forEach(
//         c=>(obj[c]=++obj[c]||1)
//     )
//     return obj;

// }
