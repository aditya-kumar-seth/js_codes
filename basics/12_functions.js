

// ++++++++++++++++ functions +++++++++++++++++//syntax 

//function definition   
function addTwoNumbers(num1,num2){//num1 and num2 are parameters
    console.log(num1+num2)
}
const add2 = function(num1,num2){//function expression  hoisting nahi hoti
    return num1+num2
}
console.log(add2(4,5))//9
addTwoNumbers(2,3)
const res = addTwoNumbers(5,6)//5 and 6 are arguments
console.log("result :" ,res)//it will print undefined as function does not return anything



function login(username = "User" ){
    // if(username === undefined){
    //     return "Please enter username"
    // }
    return `${username} logged in successfully `
}
console.log(login())




//rest operators
function sumAll(...nums){//nums is array of all arguments passed
    let sum = 0
    for(let i of nums){
        sum += i
    }
    return sum
}
console.log(sumAll(1,2,3,4,5,6,7,8,9,10))//55
//obj in funciton
const obj = {
    name:"Aditya",
    age:21  
}
function greet(user){//or we can  
    return `Hello ${user.name} `
}
console.log(greet(obj))//Hello Aditya

// +++++++++++ when we declare a variable using var it is function scoped
// +++++++++++ when we declare a variable using let or const it is block scoped
if(true){
    var a = 10
    let b = 20
    const c = 30
}

