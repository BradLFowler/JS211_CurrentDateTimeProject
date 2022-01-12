// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**


// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
console.log(new Date)
const displayDate = () => {
  const currentDate = new Date()

  document.getElementById("display-element").innerHTML = currentDate;
}
 

// Write a JavaScript program to convert a number to a string.
const numToStr = () => {
n = 5;
ntostr = n.toString();
document.getElementById("numtostr").innerHTML = numToStr;
}
console.log(numToStr)
// Write a JavaScript program to convert a string to the number.
const strToNum = () => {
s = "String";
p = Number(s)
document.getElementById("strtonum").innerHTML = strToNum;
}
console.log(strToNum)
// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
  // * Boolean
  // * Null
  // * Undefined
  // * Number
  // * NaN
  // * String
const differentDataTypes = () => {
  b = typeof true;

  z = typeof null;

  u = typeof undefined;

  l = typeof Number;

  e = typeof NaN;

  h = typeof "";

  types = b + " " + z + " " + u + " " + l + " " + e + " " + h;

  document.getElementById("datatypes").innerHTML = differentDataTypes;
}

// Write a JavaScript program that adds 2 numbers together.
const addTwoNumbers = (num1, num2) => {
  
  document.getElementById("addtwonum").innerHTML = addTwoNumbers;

  return num1 + num2;
}
console.log(addTwoNumbers)
// Write a JavaScript program that runs only when 2 things are true.
const twoThingsTrue = () => {
  document.getElementById("twotrue").innerHTML = twoThingsTrue;
  k = 5
  y = 7
  if(k == y){
    true
  }
  else {
    false
  }
}
console.log(twoThingsTrue)
// Write a JavaScript program that runs when 1 of 2 things are true.
const oneOfTwoThingsTrue = () => {
  document.getElementById("oneorothertrue").innerHTML = oneOfTwoThingsTrue
  f = 10
  j = 11
  if(f || j){
    true
  }
  else{
    false
  }
}
console.log(oneOfTwoThingsTrue)
// Write a JavaScript program that runs when both things are not true.  
const bothThingsNotTrue = () => {
  document.getElementById("bothnottrue").innerHTML = bothThingsNotTrue
  v = 8
  c = 9
  if(v !== c){
    true
  }
  else{
    false
  }
}
console.log(bothThingsNotTrue)
// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey, 
// 2. reload VS Code, 
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html` 
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.




// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24
