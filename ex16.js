/*Caze Maker II
We will still be given an input string to convert. However, this time, we'll also be given a casing style to work with. The following code block will describe all the casing styles to support. We may also receive an array of casing styles, and each of these should be applied.

Instruction
Create a function named makeCaze that will receive an input string and one or more casing options. Return a new string that is formatted based on casing options:

Precedence of each of the casing styles are as follows, values higher in the list should be processed first:

camel, pascal, snake, kebab, title
vowel, consonant
upper, lower
Our function should be able to handle all of these cases.

For more information on casing styles, read Wikipedia's Special Case Styles for a list of various casing examples.

*/

function casing(input, caze) {
  switch (caze) {
    case "camel":
      let camel = input.split(" ")
      let result = camel[0]
      for (let index = 1; index < camel.length; index++) {
        const word = [...camel[index]]
        const [firstLeter, ...rest] = word
        let upperCase = [firstLeter.toUpperCase(), ...rest].join("")
        result += upperCase
      }
      return result;
    case "pascal":
      let pascal = input.split(" ")
      let pascalResult = ""
      for (let index = 0; index < pascal.length; index++) {
        const word = [...pascal[index]]
        const [firstLeter, ...rest] = word
        let upperCase = [firstLeter.toUpperCase(), ...rest].join("")
        pascalResult += upperCase
      }
      return pascalResult;
    case "snake":
      let snake = input.split(" ").join("_")
      return snake
    case "kebab":
      let kebab = input.split(" ").join("-")
      return kebab
    case "title":
      let title = input.split(" ")
      let titleResult = []
      for (let index = 0; index < title.length; index++) {
        const word = [...title[index]]
        const [firstLeter, ...rest] = word
        titleResult.push([firstLeter.toUpperCase(), ...rest].join(""))
      }
      return titleResult.join(" ");
    case "vowel":
      let vowel = input.split("")
      let vowelResult = []
      vowel.forEach(letter => {
        if (letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter == "u") {
          vowelResult.push(letter.toUpperCase())
        } else {
          vowelResult.push(letter)
        }
      });
      return vowelResult.join("")
    case "consonant":
      let consonant = input.split("")
      let consonantResult = []
      consonant.forEach(letter => {
        if (letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter == "u") {
          consonantResult.push(letter)
        } else {
          consonantResult.push(letter.toUpperCase())
        }
      });
      return consonantResult.join("")
    case "upper":
      return input.toUpperCase()
    case "lower":
      return input.toLowerCase()
    default:
      return input
  }
}

const makeCaze = function (input, caze) {
  if (typeof caze !== "string") {
    let result = input
    for (let i = 0; i < caze.length; i++) {
      result = casing(result, caze[i]);
    }
    return result
  } else {
    return casing(input, caze)
  }
};

console.log(makeCaze("this is a string", "camel")); // thisIsAString
console.log(makeCaze("this is a string", "pascal")); // ThisIsAString
console.log(makeCaze("this is a string", "snake")); // this_is_a_string
console.log(makeCaze("this is a string", "kebab")); // this-is-a-string
console.log(makeCaze("this is a string", "title")); // This Is A String
console.log(makeCaze("this is a string", "vowel")); // thIs Is A strIng
console.log(makeCaze("this is a string", "consonant")); // THiS iS a STRiNG
console.log(makeCaze("this is a string", ["upper", "snake"])); // THIS_IS_A_STRING
module.exports = makeCaze;
