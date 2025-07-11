const arr = ["a", "b", "c"]
for(let i=0; i<arr.length; i++){
    console.log(arr[i]);   
}

for(let i=0; i<10; i++){
    console.log(`Outer loop with value ${i}`);
    for(let j=0; j<10; j++){
        console.log(`Inner loop with value ${j} presented`);
    }
}

for(let i=0; i<10; i++){
    if(i == 6){
        console.log("Find 6 value");
    }
    console.log(i);
    
}


// Break and Continue -

for(let i=0; i<20; i++){
    if(i == 4){
        console.log("Detected 4");
        break;
    }
    console.log(`Value of i is ${i}`);
}

for(let i=0; i<20; i++){
    if(i == 4){
        console.log("Detected 4");
        continue;
    }
    console.log(`Value of i is ${i}`);
}