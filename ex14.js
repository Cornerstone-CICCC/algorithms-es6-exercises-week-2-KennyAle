/*
In this activity, we are going to create a function that can calculate which coins we should use when we need to give change.

Change Calculator
We will be given two numbers, the total of a transaction, and the amount of cash given to the cashier. Both of these numbers will be represented as whole numbers in cents. Therefore $10 will be represented as 1000.

Our function calculateChange should return an object which describes the total amount of change for the cashier to give back. Although pennies are not used in circulation, we will still calculate the amount of pennies to give back.

Instruction
Create a function named calculateChange that takes in a total amount of a bill and the total cash given to pay that bill. Return a new object that describes the total amount of change for the cashier to give back. Omit any types of change that you shouldn't give back, i.e. if you don't give back a twenty dollar bill, don't include it in the results.

Valid denominations are as follows:

Twenty dollars
Ten dollars
Five dollars
Two dollars
One dollar
Quarter (25¢)
Dime (10¢)
Nickel (5¢)
Penny (1¢)
*/

const calculateChange = function (total, cash) {
  let change = cash - total
  const denominations = {}

  while (change > 0) {
    if (change >= 2000) {
      change -= 2000
      denominations.twentyDollar = (denominations.twentyDollar || 0) + 1
    } else if (change >= 1000) {
      change -= 1000
      denominations.tenDollar = (denominations.tenDollar || 0) + 1
    } else if (change >= 500) {
      change -= 500
      denominations.fiveDollar = (denominations.fiveDollar || 0) + 1
    } else if (change >= 200) {
      change -= 200
      denominations.twoDollar = (denominations.twoDollar || 0) + 1
    } else if (change >= 100) {
      change -= 100
      denominations.oneDollar = (denominations.oneDollar || 0) + 1
    } else if (change >= 25) {
      change -= 25
      denominations.quarter = (denominations.quarter || 0) + 1
    } else if (change >= 10) {
      change -= 10
      denominations.dime = (denominations.dime || 0) + 1
    } else if (change >= 5) {
      change -= 5
      denominations.nickel = (denominations.nickel || 0) + 1
    } else if (change >= 1) {
      change -= 1
      denominations.penny = (denominations.penny || 0) + 1
    }
  }
  
  return denominations
};

console.log(calculateChange(1787, 2000)); // { twoDollar: 1, dime: 1, penny: 3 }
console.log(calculateChange(2623, 4000)); // { tenDollar: 1, twoDollar: 1, oneDollar: 1, quarter: 3, penny: 2 }
console.log(calculateChange(501, 1000)); // { twoDollar: 2, quarter: 3, dime: 2, penny: 4 }

module.exports = calculateChange;
