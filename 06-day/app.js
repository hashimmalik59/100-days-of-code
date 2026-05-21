let speed = Number(prompt("Enter your speed"));
let isBirthday = Boolean(prompt("Today is your birthday"));

let validSpeed = speed > 0 && !isNaN(speed);

function ticketCalculator(speed, isBirthday) {
  if (validSpeed) {
    if (isBirthday) speed -= 5;
    if (speed > 0 && speed <= 60) return "No Challan";
    if (speed >= 61 && speed <= 80) return "Chota Challan";
    if (speed >= 81) return "Bada Challan";
  } else return "Invalid speed";
}
console.log(ticketCalculator(speed, isBirthday));
