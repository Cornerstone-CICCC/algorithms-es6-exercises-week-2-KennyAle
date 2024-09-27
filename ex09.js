/*
In this exercise, we will be converting a normal string into camelCase text.

Case Maker
We will receive a normal string of words separated with spaces as the input. Our job is to convert these strings into camel cased strings.

Instruction
Create a function named camelCase that will convert a string to camel case, and return the result.
*/

// const word = "asd"
// const [firstLeter, ...rest] = word
// let upperCase = [firstLeter.toUpperCase(), ...rest].join("")
// console.log(upperCase)

const camelCase = function (input) {
    let sentence = input.split(" ")
    let result = `${sentence[0]}`
    for (let index = 1; index < sentence.length; index++) {
        const word = [...sentence[index]]
        const [firstLeter, ...rest] = word
        let upperCase = [firstLeter.toUpperCase(), ...rest].join("")
        result += upperCase
    }
    return result
};

console.log(camelCase("this is a string")); // thisIsAString
console.log(camelCase("loopy cornerstone")); //loopyCornerstone
console.log(camelCase("supercalifragalisticexpialidocious")); // supercalifragalisticexpialidocious

module.exports = camelCase;
