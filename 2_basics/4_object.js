// const myObj = new Object()              // Singleton object

const myObj = {}                       // Non-singleton object
myObj.id = 132
myObj.name = "Dilip"
myObj.isLoggedIn = false
// console.log(myObj);

const newUser = {
    email: "ddilip222002g2mail.com",
    fullName: {
        userFullName: {
            firstName: "Dilip",
            lastName: "Patel"
        }
    }
}

// console.log(newUser.fullName.userFullName.firstName);

const obj1 = { 1:"a", 2:"b"}
const obj2 = { 3:"c", 4:"d"}
const obj3 = { 5:"e", 6:"f"}

// console.log(Object.assign({}, obj1, obj2, obj3));       // console.log(Object.assign(target, source));

// console.log({...obj1, ...obj2, ...obj3});          // mostly use this

const obj = [
    {
        email: "fgeg",
        age: 22
    },
    {
        email: "gdf",
        age: 24
    },
    {
        email: "gfdf",
        age: 42
    },
    {
        email: "fhsg",
        age: 48
    }
]
// console.log(obj[1].email);       // Array of object

console.log(myObj);
console.log(Object.keys(myObj));
console.log(Object.values(myObj));
console.log(Object.entries(myObj));

console.log(myObj.hasOwnProperty("id"));
