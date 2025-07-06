// +++++++++++++++++++++++++++++++++++++++ Numbers +++++++++++++++++++++++++++++++++++++++

const num = 560
// console.log(num);

const myNum = new Number(555)
// console.log(myNum);
// console.log(myNum.toString());
// console.log(myNum.toString().length);

const numeric = 500
// console.log(numeric.toFixed(2));

const value = 234.689
// console.log(value.toPrecision(4));

const rup = 100000000
// console.log(rup.toLocaleString());
// console.log(rup.toLocaleString("en-IN"));



// +++++++++++++++++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(5));
console.log(Math.abs(-5));
console.log(Math.round(4.6));
console.log(Math.ceil(4.3));
console.log(Math.floor(4.9));
console.log(Math.min(3,4,5));
console.log(Math.max(3,4,5));
console.log(Math.random());  // random means a value between (0 and 1)

// But if there are given some condition, then use this formula -
const min = 10
const max = 20
console.log(Math.floor((Math.random() * (max - min + 1)) + min));
