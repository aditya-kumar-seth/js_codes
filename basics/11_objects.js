// $$$$$$$$$$$$$$$$$ objects $$$$$$$$$$$$$$$$$$$$$$$$4
//singleton is always made from constructors
//

const { use } = require("react")

//object literals
const my_symbol = Symbol('key')
const  user = {
   'full name' : "Aditya",
    id : 1,
    rank : "S",
    location :"India",
    [my_symbol] :'Adi2ya 652h'//symbol ka syntax
}

// /access 
console.log(user.id)
console.log(user['full name'])
console.log(user[my_symbol])//to access symbol 
// we need to use sq braces
Object.freeze(user)//now further 