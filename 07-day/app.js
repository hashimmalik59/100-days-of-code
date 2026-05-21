function flipTheCoin() {
  let coin = Math.floor(Math.random() * 2);
  if (coin === 0) return `Tail: ${coin}`;
  else return `Head: ${coin}`;
}
console.log(flipTheCoin());

////////////////////////////

// Aisa MAT karo
// function badFlip() {
//   console.log("Heads");
// }

// let result = badFlip();
// Yahan 'result' ki value 'undefined' hogi, kyunke function ne kuch wapis nahi diya!

// Aisa KARO
// function goodFlip() {
//   return "Heads";
// }

// let result1 = goodFlip(); // Ab tumhare paas "Heads" string aa gaya!
// Ab tum is 'result' variable ke sath jo marzi karo.

// console.log(result);
// console.log(result1);
