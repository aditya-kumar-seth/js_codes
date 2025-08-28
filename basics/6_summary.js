// primitive(7) :-String,number,Boolean,null,undefined,Symbol,BigInt
// (the variables are call by value 
// means they are not send original data they send 
// the copy of data)

// reference /NonPrimitive:Array,Objects,Functions
//non premitive variables have dt 'function' and Function has dt 'Object Function'

//js is a dynimic type language
const score =199
console.log(typeof score)

//symbols
a = Symbol('132')
b = Symbol('132')
console.log(a === b)//false

// +++++++++++++++ memory +++++++++++++++++++++++
//stack (Premitive) , Heap(Non-Premitive)