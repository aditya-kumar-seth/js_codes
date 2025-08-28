//str3 = str2 + str1 //fro concatenate
console.log(1+"2")
console.log(1+1+"2")
console.log(1+"2"+1)
console.log("1"+3+2)
//all  the above are based on some rules present in js documentations but these are not a good way to write a code in real life
//dont use these type of ambiguity
let x = "12"
console.log(typeof x)
console.log(typeof +x)//+x converts string x into a number