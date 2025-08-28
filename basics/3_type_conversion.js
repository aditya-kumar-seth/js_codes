let a = 33
console.log(typeof(a))//number is o/p
b = "33"
console.log(typeof(b))//string
//but while conversion we use first letter capital
c = Number(b)
console.log(typeof(c))

//sometime a invalid number string can be converted to number but the value will be NaN
let x = "23ds"
y= Number(x)
console.log(typeof y)//number
console.log(y)//nan, 0 if x=null

let select = 1
let bool_select = Boolean(select)
console.log(bool_select)