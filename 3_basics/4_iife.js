// IIFE definition - ()()
// function chai(){                   // Basic function calling
//     console.log(`Dilip`);
// }
// chai ()

(function chai(){                    // Calling function using IIFE
    console.log(`Dilip`);
}) ();                              // If we are using two or more iife function together, then have to use ';' after every funtion

(function chaiCode(){                    // Calling function using IIFE
    console.log(`Dilip Patel`);
}) ();

(function chaiHai(price){           // Calling function using IIFE with parameter
    console.log(`My book price is ${price}`);
}) (5)