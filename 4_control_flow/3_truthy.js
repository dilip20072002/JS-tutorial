const user = ""
if(user){
    console.log("Logged in successfully");
}
else{
    console.log("Error");
}
//Falsy values - 
// 0, -0, "", false, Null, Undefined, NaN, BigInt '0n'

// Truthy values - 
// [], "0", " ", 'false', {}, function(){}

//How to check array and object are empty -
const arr = []
if(arr.length === 0)
{
    console.log("Array is empty");
}

const obj = {}
if(Object.keys(obj).length === 0){
    console.log("Object is empty");
}


// Nullish Coalescing Operator (??) null, undefined

let val
// // val = 5 ?? 10
// val = null ?? 10
// val = undefined ?? 10
val = 5 ?? 10 ?? 15
console.log(val);


// Ternary Operator - (condition ? true : false)

const num = 100
num >= 50 ? console.log("More than 50") : console.log("Less than 50");