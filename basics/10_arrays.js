// +++++++++++++++ arrays ++++++++++++++++++++++++++
/* 
mix datatype,resizable,indexing from 0,
create a shallow copy (copies sharing same references)


*/

const arr = [0,1,2,3,4,"aditya",true,null]
console.log(arr)
console.log(arr[3])
const arr2 = new Array(1,2,3,4,"arr object")
console.log(arr2)
console.log(typeof arr2)

//methods
arr2.push(22)
arr2.push(32)
arr2.pop()
arr2.shift()
arr2.unshift(55)//time^_^
console.log(arr2)
console.log(arr2.includes(99))
console.log(arr2.indexOf(55))

newArray = arr2.join() //to string
console.log(newArray)

//slice/splice

let arra = [1,2,3,4,5]
let arra1 = arra.slice(1,3)
console.log("slicing",arra, arra1)
let arra2 = arra.splice(2,2)//start,number of elements to take out of arra
//this modifies original arra
console.log("splicing",arra, arra2)


const heros = ["thor",'iron man','spider man']
const dc_heros = ['superman','batman','flash']

console.log(heros.push(dc_heros))//returns new length
heros.pop()
console.log(heros.concat(dc_heros))

//spread
const allHeros = [...heros,...dc_heros]//mostly used as we can pass multiple arrays

console.log(allHeros)
//flat  nd array - 1d array
let a = [1,2,3,[4,5,6],7,[1,[2,3]]]
let a_ = a.flat(Infinity)//depth is upto what dimension 
// you want to flat the array
console.log(a_)

console.log(Array.isArray("Array"))
console.log(Array.from("Array"))
console.log(Array.from({key : "Array"}))//we need to specify key or value 
// from which we want array

console.log(Array.of("Array",2,3,'yoyof'))







