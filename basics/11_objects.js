// // $$$$$$$$$$$$$$$$$ objects $$$$$$$$$$$$$$$$$$$$$$$$4
//singleton is always made from constructors
//


//object literals
const my_symbol = Symbol('key')
const  user = {
   'full name' : "Aditya",
    id : 1,
    rank : "S",
    location :"India",
    [my_symbol] :'Adi2ya 652h'//symbol ka syntax
}

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
const newObj2 = {...obj1,...obj2}//merging two objects using spread operator
console.log(newObj2)
//destructuring of objects
const {key1,key2:k2} = obj1//after this k2 will be used to access key2and key1 will be used to access key1
console.log(key1,k2)

console.log(Object.entries(obj1))//gives array of arrays of key value pairs
console.log(Object.keys(obj1))//gives array of keys
console.log(Object.values(obj1))//gives array of values

//optional chaining
console.log(regUser?.fullname?.userFullName?.firstName)//if any of the property is not present it will return undefined instead of error
//if we use . instead of ? it will give error if any property is not present

//for in loop
for(let key in obj1){
    console.log("key is ",key)
    console.log("value is ",obj1[key])
}

//to check if key is present in object or not
console.log('key1' in obj1)//true
console.log('key5' in obj1)//false

//delete operator
delete obj1.key1
console.log(obj1)

//nested objects
const users = {
    aditya : {
        fullName : "Aditya Seth",
        skills : ['python','js']
    },
    aman : {   
        fullName : "Aman Kumar",
        skills : ['python','js','c++']
    }
}
console.log(users.aman.skills[2])

//to get number of keys in object
console.log(Object.keys(users).length)//2

//to get object from array of objects based on some property
const userArray = [
    {id:1, name:'Aditya'},
    {id:2, name:'Aman'},
    {id:3, name:'Ankit'}
]
//find user with id 2
const user2 = userArray.find((x) => x.id === 2)
console.log(user2)//{id:2, name:'Aman'} 












