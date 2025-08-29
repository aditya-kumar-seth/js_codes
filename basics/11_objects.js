// // $$$$$$$$$$$$$$$$$ objects $$$$$$$$$$$$$$$$$$$$$$$$4
// //singleton is always made from constructors
// //


// //object literals
// const my_symbol = Symbol('key')
// const  user = {
//    'full name' : "Aditya",
//     id : 1,
//     rank : "S",
//     location :"India",
//     [my_symbol] :'Adi2ya 652h'//symbol ka syntax
// }

// // /access 
// console.log(user.id)
// console.log(user['full name'])
// console.log(user[my_symbol])//to access symbol 
// // we need to use sq braces
// // Object.freeze(user)//now further no changes can be made to object


// //methods in objects
// user.greeting = function(){
//     console.log("Hello "+ this['full name'])//this refers to current object
// }

// console.log(user.greeting())



//constructor function
const tinderUser = {} //empty object
//tinderUset is instance of object
//object is instance of class
//class is instance of constructor function
tinderUser.id = "1234"
tinderUser.name = "Aditya"
tinderUser.isLoggedIn = false

const regUser = {
    email:"dsas",
    fullname:{
        userFullName:{
            firstName:"Aditya",
            lastName : "Seth"
        }
    }
}

console.log(regUser.fullname.userFullName.firstName)
//merge two or more objects
const obj1 = {
    key1 : "value1",
    key2 : "value2"}
const obj2 = {
    key3 : "value3",
    key4 : "value4"}
    
const newObj = Object.assign({},obj1,obj2)//merging two objects
console.log(newObj)
const newObj2 = {...obj1,obj2}
console.log(newObj2)