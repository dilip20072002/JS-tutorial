// Don't use var keyword because it doesn't follow the block scope rules
// For example -
if(true){
    const a = 12
    let b = 13
    var c = 14
}
// console.log(a);
// console.log(b);
// console.log(c);     // only 'c' variable is exicute out of 'if' block scope but it is against to rule

const x = 19
if(true){
    const x = 12
    let y = 13
    var z = 14
   // console.log("x - ", x); 
}
// console.log(x);


// scope use in function
function one(){
    const user = "Dilip"
    function two(){
        const user2 = "Patel"
        // console.log(user);
    }
    // console.log(user2);
    two()
}
one()


// Scope use in "if" statement
if(true){
    const user = "Dilip"
    if(user === "Dilip"){
        const id = 23
        // console.log(user);
    }
    // console.log(id);
}
// console.log(user);



//++++++++++++++++++++++++++++++++++++++ Interesting ++++++++++++++++++++++++++++++++++++++

function addOne(num){
    return num + 1
}
console.log(addOne(5));
// Now, both functions are same and here 'addTwo' called as expression
const addTwo = function(num){
    return num + 2
}
console.log(addTwo(9));


// What if...
console.log(addOne(5));
function addOne(num){
    return num + 1
}
// Now print statement written before the function call, so function 'addTwoNum' showing error like Cannot access 'addTwoNum' before initialization
console.log(addTwoNum(9));
const addTwoNum = function(num){
    return num + 2
}
