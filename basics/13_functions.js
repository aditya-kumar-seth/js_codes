//arrow funcitons

const multiply = (x,y) => x*y //if only one statement is there we can skip {} and return keyword
console.log(multiply(5,6))//30
const square = x => x*x//we dont need to write  return for arrow functions

// functions in a object
const user = {
    name : "Aditya",
    age : "just a number",
    greet : function(){//method
        return `Hello ${this.name}`//this refers to current context
    },
    //shortcut to define method in object
    getAge(){
        return this.age
    }
}
console.log(user.greet())//Hello Aditya
console.log(user.getAge());//semicolon for running invoked function
//IIFE - Immediately invoked function expression
//before iife we must put semicolon fro ending other statement

( function chowmein(){
    console.log("I am invoked immediately")
})();
// //IIFE with arrow function
((name)=>{
    console.log(`hello ${name}`)
})('Aditya')