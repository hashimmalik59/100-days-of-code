// removing white spaces and lowering the user value
let answer = prompt("Left or right").trim().toLowerCase();

// User submits non-emtpy string
if (answer.length > 0) {
  if (answer === "left") {
    answer = prompt("Swin or wait").trim().toLowerCase();

    if (answer === "wait") {
      answer = prompt("Choose the door").trim().toLowerCase();

      if (answer === "yellow") {
        alert("You win!");
      } else {
        if (answer === "red") alert("Burned by fire Game over");
        else if (answer === "blue") alert("Eaten by beasts Game over");
        else alert("Game over");
      }
    } else alert("Attacked by trout Game over");
  } else alert("Fall into a hole Game over");
  // User submits emtpy string
} else alert("Inalid answer");
