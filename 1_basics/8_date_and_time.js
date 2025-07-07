let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

let myNewDate = new Date(2025, 0, 8)
// console.log(myNewDate);
// console.log(myNewDate.toDateString());
// console.log(myNewDate.toLocaleString());

// let newDate = new Date(2192, 01, 12, 5, 4)
// let newDate = new Date("2025, 01, 13")
let newDate = new Date("12, 01, 2025")
// console.log(newDate);
// console.log(newDate.toDateString());
// console.log(newDate.toLocaleString());

let newCreateDate = Date.now()
// console.log(newCreateDate);
// console.log(newDate.getTime());
// console.log(Date.now()/1000);
// console.log(Math.floor(Date.now()/1000));

let gotDate = new Date()
console.log(gotDate.getDate());
console.log(gotDate.getDay());
console.log(gotDate.getMonth() + 1);

gotDate.toLocaleString("default", {
    weekday: "long"
})

