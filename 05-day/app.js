let numberOfPeople = +prompt("Enter number of people");
let bill = +prompt("Enter bill");
let tip = +prompt("Enter tip");

if (
  typeof numberOfPeople === "number" &&
  typeof bill === "number" &&
  typeof tip === "number"
) {
  function tipCalculator(numberOfPeople, bill, tip) {
    let perHead = numberOfPeople / bill;
    let tipAmount = perHead * tip;
    return perHead + tipAmount;
  }
} else console.log("Invalid data");

console.log(
  `Per head cost with tip: ${tipCalculator(numberOfPeople, bill, tip)}`,
);
