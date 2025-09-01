//if-else
//as it is in c
//switch 
let a = 10;
switch (a) {
    case 10:
        console.log("a is 10");
        break;
    case 20:
        console.log("a is 20");
        break;
    default:
        console.log("a is not 10 or 20");
}    

//truthy and falsy values
//falsy values - 0, "", null, undefined, NaN, false,BigInt(0n)
//truthy values - all values other than falsy values,'false'
// ,[],{},{a:10},function(){},new Date(),-10,-1,0.1,Infinity,-Infinity,BigInt(1n)
let b;
if(b){
    console.log("b is truthy");
}else{
    console.log("b is falsy");
}

//ternary operator
let age = 18;
let canVote = (age >= 18) ? "Yes" : "No";
console.log(`Can you vote? ${canVote}`);

//nullish coalescing operator
let user = {
    name: "Aditya",
    age: null
}
let userAge = user.age ?? 18;//?? if user.age is null or undefined then 18 else user.age
console.log(`User age is ${userAge}`);
//in above we can even call soime functions after ??,we can use multiple ?? also

//optional chaining operator
let user1 = {
    name: "Aditya",
    address: {
        city: "New York",
        country: "USA"
    }
}
console.log(user1?.address?.city);//if user1 or address is undefined or null then it will return undefined instead of throwing error
console.log(user1?.contact?.phone);//undefined,not errors