/*
In this activity, we will be converting date strings like "2017/12/02", into more English friendly date strings like December 2nd, 2017.

Talking Calendar
We will be given a date as a string (not a Date object). The date will always be formatted as YYYY/MM/DD. We will have to parse the given string and produce a human readable date.

Instruction
Create a function named talkingCalendar that takes in a date string with the format YYYY/MM/DD, and returns a new human readable date that looks like December 2nd, 2017.
*/

const months = [
  'January', 
  'February', 
  'March', 
  'April', 
  'May', 
  'Jun', 
  'July', 
  'August', 
  'September', 
  'October', 
  'November', 
  'December'
]

const talkingCalendar = function (date) {
  let sepDate = date.split("/")
  let day = ""
  if (sepDate[2][1] == 1 && sepDate[2] != 11) {
    day = sepDate[2][0] == 0 ? day = `${sepDate[2][1]}st`: `${sepDate[2]}st`
  } else if (sepDate[2][1] == 2 && sepDate[2] != 12) {
    day = sepDate[2][0] == 0 ? day = `${sepDate[2][1]}nd`: `${sepDate[2]}nd`
  } else if (sepDate[2][1] == 3 && sepDate[2] != 13) {
    day = sepDate[2][0] == 0 ? day = `${sepDate[2][1]}rd`: `${sepDate[2]}rd`
  } else {
    day = `${sepDate[2]}th`
  }
  console.log(day)
  console.log(`${months[sepDate[1] - 1]} ${day}, ${sepDate[0]}`)

};

console.log(talkingCalendar("2017/12/02")); // December 2nd, 2017
console.log(talkingCalendar("2007/11/11")); // November 11th, 2007
console.log(talkingCalendar("1987/08/23")); // August 24th, 1987

module.exports = talkingCalendar;
