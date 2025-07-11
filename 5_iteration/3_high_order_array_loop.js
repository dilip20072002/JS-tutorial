// 'for of' loop for array -
let arr = [1, 2, 3, 4, 5]
for(const i of arr){
    console.log(`My array is ${i}`);
}

// 'for of' loop for string -
let myString = ["a", "b", "c"]
for(const j of myString){
    console.log(`My String is ${j}`);
}

// 'for of' loop for maps -
const map = new Map()
map.set("name", "Dilip")
map.set("Location", "Ghaziabad")
map.set("Home Town", "Hardoi")
// console.log(map);

for(const [key, value] of map){
    console.log(key, " -> ", value);   
}

// 'for in' loop for object -
const myObj = {
    IT: "Information Technology",
    CS: "Computer Science",
    ME: "Mechanical Engineer"
}
for (const key in myObj) {
    console.log(`${key} represent as ${myObj[key]}`);
}

// 'forEach' loop -
const coding = ["cpp", "Java", "Python", "JS", "c#"]
coding.forEach(function (val) {                     // We can write val, item, num or anything
    // console.log(val);
})

coding.forEach((val) => {
    // console.log(val);
})

function printme(val) {
    // console.log(val);
}
coding.forEach(printme)

coding.forEach((value, index, arr) => {
    // console.log(value, index, arr);
})

const myArray = [
    {
        programmingLanguage: "Java",
        fileName: "java"
    },
    {
        programmingLanguage: "Python",
        fileName: "py"
    },
    {
        programmingLanguage: "Java Script",
        fileName: "js"
    }
]
myArray.forEach((val) => {
    console.log(val.fileName);
    
})