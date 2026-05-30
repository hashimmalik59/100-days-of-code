let matrix = [
  [1, 2],
  [3, 4],
  [5, 6],
];

let target = 4;

let found = false;

for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    if (target === matrix[i][j]) {
      console.log(`Found at row: ${i}, col: ${j} | ${matrix[i][j]}`);
      found = true;
      if (found) break;
    }
  }
}

// const userData = {
//   name: "Hashim",
//   age: 24,
//   isStudent: true,
// };

// const personDetail = ({ name, age }) => {
//   return `My name is ${name} and my age is ${age}`;
// };
// console.log(personDetail(userData));

// const numsArr = [1, 2, 3, 4, 5];

// const [index1, index2] = numsArr;

// console.log(index1, index2);
