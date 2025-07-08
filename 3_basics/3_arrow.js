const user = {
    userName: "DIlip",
    price: 5999,
    userDetails: function(){
        console.log(`Hi ${this.userName}, welcome to this page.`);          // using 'this' keyword
        console.log(this); 
    }
}
// user.userDetails()
// user.userName = "Dilip Patel"
// user.userDetails()
// console.log(this);


// ++++++++++++++++++++++++++++++++++++++ Arrow Function ++++++++++++++++++++++++++++++++++++++

// const chai = function(){
//     const name = "Dilip"
//     console.log(name);
// }
// chai()

const chai = () => {
    const name = "Dilip"
    console.log(name);
}
chai()

// const addTwoNum = (num1, num2) => {                     // Basic arrow function(Explicit return)
//     return num1 + num2
// }
// console.log(addTwoNum(3,5));

// const addTwoNum = (num1, num2) => num1 + num2              // Implicit return
// const addTwoNum = (num1, num2) => (num1 + num2)
const addTwoNum = (num1, num2) => {return {username: "Dilip"}}
console.log(addTwoNum(3,5));