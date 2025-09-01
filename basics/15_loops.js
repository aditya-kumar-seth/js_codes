//loop in js is similar to other programming languages
//for loop
for(let i=0;i<5;i++){
    console.log(i);
}
//while loop
let j=0;
while(j<5){
    console.log(j);
    j++;
}
//do while loop
let k=0;
do{
    console.log(k);
    k++;
}while(k<5);
//for...in loop
let obj={a:1,b:2,c:3};
for(let key in obj){
    console.log(key,obj[key]);
}
//for...of loop
let arr=[1,2,3,4,5];
for(let value of arr){
    console.log(value);
}
//break and continue
for(let i=0;i<10;i++){
    if(i===5){
        break;//exit the loop
    }
    console.log(i);
}
for(let i=0;i<10;i++){
    if(i%2===0){
        continue;//skip the even numbers
    }
    console.log(i);
}
//nested loops
for(let i=0;i<3;i++){
    for(let j=0;j<3;j++){
        console.log(`i=${i},j=${j}`);
    }
}
//labeled loops
outer: for(let i=0;i<3;i++){
    inner: for(let j=0;j<3;j++){
        if(i===1 && j===1){
            break outer;//break the outer loop
        }
        console.log(`i=${i},j=${j}`);
    }
}
