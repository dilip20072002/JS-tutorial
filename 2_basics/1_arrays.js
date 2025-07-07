const myArr = [0, 1, 2, 3, 4]
// console.log(myArr[2]);

const cities = ["Delhi", "Noida", "Kolkata"]
// console.log(cities[2]);

const newArr = new Array(0, 1, 2, 3, 5)
// console.log(newArr);
// console.log(newArr[0]);


// +++++++++++++++++++++++++++++++ Array Method ++++++++++++++++++++++++++++++++++

// newArr.push(6)
// newArr.pop()
// console.log(newArr);

// newArr.unshift(8)
// console.log(newArr);
// newArr.shift()
// console.log(newArr);

// console.log(newArr.includes(9));
// console.log(newArr.indexOf(5));
// console.log(newArr.indexOf(9));

// const newArray = newArr.join()
// console.log(newArray);
// console.log(typeof newArray);

// Slice and Splice -

console.log("A", newArr);
const m1 = newArr.slice(1,4)
console.log(m1);

console.log("B", newArr);
const m2 = newArr.splice(1,3)
console.log(m2);

console.log("C", newArr);



// Link of Methods in Array - https://chatgpt.com/share/686b76fe-a094-8008-b89d-93f0e8460cac