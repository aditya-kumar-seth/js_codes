//global function eval execution context
console.log("Hello World")//global execution context
//function execution context
function greet(name){
    console.log(`Hello ${name}`)
}
greet('Aditya')
//execution context for eval function
eval("console.log('I am eval function')")




// +++ phaese of execution context +++
//1.memory Creation phase
//2. Execution phase    
//in memory creation phase memory is allocated to variables and functions
//variables are assigned undefined and functions are assigned whole function body
//in execution phase code is executed line by line
