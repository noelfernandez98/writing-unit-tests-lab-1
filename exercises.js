// Question 1
const isUpperCase = (str) => {
  return str === str.toUpperCase();
};

// Question 2
const removeVowels = (arr) => {
  for (let i = 0; i < arr.length; i++){
    arr[i] = arr[i].replace(/[a,e,i,o,u]/gi, "")
  }
  return arr;
};

// Question 3
const wordCap = (str) => {
  str = str.toLowerCase().split(" ")
  for (let i = 0; i < str.length; i++){
    str[i]= str[i][0].toUpperCase() + str[i].substring(1);
  }
  return str.join(" ")
};

// Question 4
const swapCase = (str) => {
  let newStr =""
  for (let i = 0; i < str.length; i++){
    if (str[i] === str[i].toLowerCase()) {
      newStr += str[i].toUpperCase()
    } else if (str[i] === str[i].toUpperCase()) {
      newStr += str[i].toLowerCase()
    }
  }
  return newStr;
};

// Question 5
const staggeredCase = (str) => {
  let newStr = "";
  let toggle = true;
  for (let i = 0; i < str.length; i++){
    if ((/[a-z]/i).test(str[i])) {
      if (toggle) {
        newStr += str[i].toUpperCase();
      } else {
        newStr += str[i].toLowerCase();
      }
      toggle = !toggle
    } else {
      newStr += str[i];
    }
  }
  return newStr;
};

// Question 6
const wordLengths = (str) => {
  let arr = [];
  if (str == "" || !str) {
    return arr
  }
  str = str.split(" ")
  for (let i = 0; i < str.length; i++){
    str[i].replace(/\W/g, "");
    arr.push(`${str[i]} ${str[i].length}`)
  }
  return arr
};

// Question 7
const searchWord = (str, text) => {
  counter = 0;
  text = text.split(" ")
  console.log(text);
  for (let i = 0; i < text.length; i++){
    text[i] = text[i].replace(/,/g, "");
    if (text[i].toLowerCase() === str) {
      counter ++
    }
  }
  return counter;
};


// The code below ensures that this file can talk to our test file.
module.exports = {
  isUpperCase,
  removeVowels,
  wordCap,
  swapCase,
  staggeredCase,
  wordLengths,
  searchWord,
};
