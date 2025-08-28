//in comparision operators issues come when the datatypes are not same 
//generally we should compare the same dtypes
console.log(null > 0)//f
console.log(null == 0)//f
console.log(null >= 0)//t 
// equality and comparision operators works differently,comparision converts null to numbers

//strict check (===)check values and dtype as well
console.log(2 == "2")
console.log(2 === "2")

//looswe check(==)check the values only