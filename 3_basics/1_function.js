function myFun(){
    console.log("D");
    console.log("i");
    console.log("l");
    console.log("i");
    console.log("p");
}
myFun()

// function myNewFun(num1, num2){
//     console.log(num1 + num2);  
// }
// myNewFun(3,4)

// or

function myNewFun(num1, num2){
    return num1 + num2 
}
const result = myNewFun(5,6)
// console.log(result);

function user(userName){
    if(!userName){
        console.log("Please enter user name.");
        return
    }
    return `${userName} just logged in`
}
// console.log(user("Dilip"));
// console.log(user(""));

function calculateCartPrice(...price){   // ... use for more parameter in respect of attribute
    return price
}
console.log(calculateCartPrice(299, 3324, 34232, 34232));


 
// ++++++++++++++++++++++++++++++++++++ Object pass in function ++++++++++++++++++++++++++++++++++++

const myObj = {
    name: "Dilip",
    id: 123
}
function objectPassInFunction(anyObject){
    console.log(`My name is ${anyObject.name} and user id is ${anyObject.id}`);
}
objectPassInFunction(myObj)



// ++++++++++++++++++++++++++++++++++++ Array pass in function ++++++++++++++++++++++++++++++++++++

const arr = [12,34,55,45,66]

function valueOfArray(anyArr){
    return anyArr[1]
}
console.log(valueOfArray(arr));
