/*
In this exercise, we will be converting a normal string into camelCase text.

Case Maker
We will receive a normal string of words separated with spaces as the input. Our job is to convert these strings into camel cased strings.

Instruction
Create a function named camelCase that will convert a string to camel case, and return the result.
*/

const word = "asd"
console.log(word)
const letters = [...word]
const [upperCase, ...rest] = letters
console.log(upperCase.toUpperCase())
// console.log([letters[0].toUpperCase(), ...letters])

// const camelCase = function (input) {
//   let sentence = input.split(" ")
//   console.log(sentence)
//   for (let index = 1; index < sentence.length; index++) {
//     const element = sentence[index];
//     console.log(element)
//   }
// };

// console.log(camelCase("this is a string")); // thisIsAString
// console.log(camelCase("loopy cornerstone")); //loopyCornerstone
// console.log(camelCase("supercalifragalisticexpialidocious")); // supercalifragalisticexpialidocious

// module.exports = camelCase;
