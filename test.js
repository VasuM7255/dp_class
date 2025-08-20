const greet = require('./app.js');

if (greet() === "Hello from DevOps!") 
    {
    console.log("Test passed!");
    process.exit(0);
    }
    else
    {
    console.log("Test failed!");
    process.exit(1);
    }