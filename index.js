// Write a function called 'divide' that takes two parameters: a numerator and a denominator.
const input = require('readline-sync');

let numerator = Number(input.question("Enter numerator:"));
let denominator=Number(input.question("Enter denominator:"));

// Your function should return the result of numerator / denominator.

// However, if the denominator is zero you should throw the error, "Attempted to divide by zero."

// Code your divide function here:
function divide (a,b)
{
  let result=0;
  if(denominator===0){
    throw SyntaxError("Attempted to divide by zero.");
  }
  else{
  result=numerator/denominator;
  return result;
  }
}
console.log(divide(numerator,denominator));