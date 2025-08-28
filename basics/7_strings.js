const name ='Aditya'
const fatherName = "Subhash"
age = 21
console.log(name.length)
console.log("My name is "+name+" and my father's name is "+fatherName+" my age is "+age)
//modern way
console.log(`My name is ${name} and my father's name is ${fatherName} my age is ${age}`)

newName = new String('Aditya Kumar Seth')
console.log(newName)
//string using js objects
console.log(typeof String)

//methods:-
console.log(fatherName.toUpperCase())
console.log(fatherName.charAt(3))
console.log(fatherName.indexOf('S'))
console.log(fatherName.substring(0,4))//slicing
console.log(fatherName.slice(-5,4))


x = "   Adi kumar  "
console.log(x)
console.log(x.trim())//removes extra spaces
//replace
url = 'https://adityakumar%20seth'
// url encoding converts the spaces to %20
console.log(url.replace('%20','_'))

console.log(url.includes('%20','aditya'))
//split
console.log(url.split('/'))