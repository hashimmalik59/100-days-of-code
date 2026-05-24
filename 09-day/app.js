let data = [10, 5, 20, 8, 15];
function dataIntegrity(dataArr) {
  let newData = [];
  for (let i = 0; i < dataArr.length; i++) {
    if (dataArr[i] >= 10) newData.push(`${i}: ${dataArr[i]}`);
  }
  return newData;
}
console.log(dataIntegrity(data));

// const newData = data
//   .map((val, i) => ({ val, i }))
//   .filter((item) => item.val >= 10)
//   .map((item) => `${item.i}: ${item.val}`);
// console.log(newData);
