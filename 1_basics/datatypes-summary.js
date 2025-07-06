/*
Primitive data type - String, Number, Boolean, Null, Undefined, Symbol, and BigInt
*/

/*
Non-primitive data type - Array, Object, and Function
*/

// Primitive data type -

const name = "Dilip"
const age = 24
const isPrime = false
const outTemp = null
let email; // Undefined
const id = Symbol('55')
const anotherId = Symbol('55')
console.log(id == anotherId);

const bigNumber = 55732494928982398242n


// Non-primitive data type - 

const arr = ['Delhi', 'Kolkata', 'Bangalore', 'Gurgaon']

let myObj = {
    Name: "Dilip",
    Age: 4,
}

const myFunction = function(){
    console.log("My Name is Dilip Patel");   
}

console.log(typeof id);
console.log(typeof bigNumber);
console.log(typeof arr);
console.log(typeof myObj);
console.log(typeof myFunction);
