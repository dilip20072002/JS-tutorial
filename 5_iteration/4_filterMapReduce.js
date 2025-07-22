// Filter -
const arr = ["a", "b", "c", "d", "e"]
const value = arr.forEach((num) => {
    // console.log(num)
    return num               // forEach doesn't retrun the value
})
// console.log(value)

const myNum = [1,2,3,4,5,6,7,8,9]
const value1 = myNum.filter((num) => num > 4)     // 1st way to call filter without use '{}'
// console.log(value1);

const value2 = myNum.filter((num) => {           // 2nd way to call filter with use '{}'
// console.log(value1);
    return num > 4
})
// console.log(value2);

const newNum = []
myNum.forEach((num) => {
    if(num > 4)
    {
        newNum.push(num)
    }
})
// console.log(newNum);

const book = [
    {title: "Book 1", price: 100},
    {title: "Book 2", price: 200},
    {title: "Book 3", price: 300},
]
let bookUser = book.filter((bk) => bk.title === "Book 1") // filter with object
// console.log(bookUser);



// Map -
const x = [1, 2, 3, 4, 5]
const value3 = x.map((num) => num * 2)
// console.log(value3);

const value4 = x.map((num) => num * 3)
                .map((num) => num + 2)
                .filter((num) => num > 5)
// console.log(value4);



// Reduce -
const y = [1, 2, 3, 4, 5]
const value5 = y.reduce(function(acc, num) {
    return acc + num; 
}, 0) // reduce takes two parameters, first is callback function and second is initial value
// console.log(value5);

//or by arrow function
const value6 = y.reduce((acc, num) => acc + num, 0)
// console.log(value6);

// Reduce with object
const books = [
    {title: "Book 1",
     price: 100
    },
    {title: "Book 2",
     price: 200
    },
    {title: "Book 3",
     price: 300
    }
]
const totalPrice = books.reduce((acc, num) => {
    return acc + num.price; // Here we need to return the price of each book
}, 0) // Here we need to return the total price of all books
console.log(totalPrice);