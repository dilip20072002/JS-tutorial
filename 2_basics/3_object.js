// Singleton - object.create

//Object Literals -

const mySymbol = Symbol("key")

let myUser = {
    name: "Dilip Patel",
    age: 24,
    location: "Ghaziabad",
    email: "ddilip.......gmail.com",
    isLoggedIn: true,
    lastLoginDay: ["Mon", "Tue", "Wed", "Thr", "Fri"],
    "My New Location": "Kolkata",
    [mySymbol]: "Key_Value"       ///Use of symbol in object
}

console.log(myUser.name);
console.log(myUser["My New Location"]);
console.log(myUser[mySymbol]);

myUser.name = "Gaurav"
console.log(myUser["name"]);

// Object.freeze(myUser)           // Freez the object so that can't be updated the object values
myUser.name = "Hitesh"
console.log(myUser["name"]);

console.log(myUser);             // Print whole object

myUser.gretting = function(){
    console.log("Hellow new user");
}
console.log(myUser.gretting());

myUser.grettingTwo = function(){
    console.log(`Hellow new user, ${this.name}`);
}
console.log(myUser.grettingTwo());