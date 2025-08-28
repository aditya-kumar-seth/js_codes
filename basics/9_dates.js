// dates in future we have to use temporal object
// let myDate = new Date()
// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toJSON())

// let newDate = new Date(2025,0,20)
// let newDate = new Date("08-15-1950")//can also give yy-mm-dd
let newDate = new Date("1950-08-15")

// console.log(newDate.toLocaleString())

let myTimeStamp = Date.now()//date in millisecs 
console.log(myTimeStamp)
console.log(newDate.getTime())//show -ve because date reference point is more
console.log(Math.floor(Date.now()/1000))//in secs


newDate = newDate.toLocaleDateString('default',{
    day:'numeric',
    month:'long',
    year:'numeric'
})
console.log(newDate)