let numberOfPeople = +prompt("Enter number of people");
let bill = +prompt("Enter bill");
let tip = +prompt("Enter tip");

if (!isNaN(numberOfPeople) && !isNaN(bill) && !isNaN(tip)) {
  function tipCalculator(numberOfPeople, bill, tip) {
    let perHead = numberOfPeople / bill;
    let tipAmount = perHead * tip;
    return perHead + tipAmount;
  }
} else console.log("Invalid Data!");

console.log(
  `Per head cost with tip: ${tipCalculator(numberOfPeople, bill, tip)}`,
);
