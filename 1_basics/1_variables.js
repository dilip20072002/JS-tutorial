const accountId = 12345
let accountEmail = "ddilip222002@gmail.com"
var accountPassword = "123456"

// accountId = 23 // not allowed

/* Prefer not to use var
because of issue in block scope and functional scope */

console.log(accountId)
console.table([accountId, accountEmail, accountPassword]);