// "use script";//for newer version js
// //alt(3+1); only for browser
// //undefined value not given just initialised(undefined type)
// //null empty value of a variable (obj type)
// console.log(typeof(null))
// console.log(typeof(undefined))





function declareGlobalInStrict() {
      // This will throw a ReferenceError in strict mode
      strictModeGlobal = "This will cause an error."; 
}
console.log(strictModeGlobal)//this wont be a global variable

function declareGlobalInStrict() {
    // This will throw a ReferenceError in strict mode
    strictModeGlobal2 = "This will cause an error."; 
}
console.log(strictModeGlobal2)//this wont be a global variable

// declareGlobalInStrict(); // Calling this would throw an error