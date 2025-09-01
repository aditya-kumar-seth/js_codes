//maps are key value pairs
let map=new Map();
//set key value pairs
map.set('a',1);
map.set('b',2);
map.set('c',3);
//get value by key
console.log(map.get('a'));//1
console.log(map.get('b'));//2
//check if key exists
console.log(map.has('c'));//true
console.log(map.has('d'));//false
//get size of map
console.log(map.size);//3
//delete key value pair
map.delete('b');
console.log(map.has('b'));//false
//iterate over map
for(let [k,val] of map){ //destructuring
    console.log(`${k} : ${val}`);
}
//clear map
map.clear();
console.log(map.size);//0
//map can have any type of key
let map1=new Map();
let obj={name:'Aditya'};
map1.set(obj,25);
console.log(map1.get(obj));//25
let func=function(){};
map1.set(func,'function key');
console.log(map1.get(func));//function key
let arr=[1,2,3];
map1.set(arr,'array key');
console.log(map1.get(arr));//array key
//map can have object as key
let map2=new Map();
let keyObj={id:1};
map2.set(keyObj,{name:'Aditya',age:25});
console.log(map2.get(keyObj));//{ name: 'Aditya', age: 25 }
//map can have function as key
let map3=new Map();
let keyFunc=function(){};
map3.set(keyFunc,{name:'Function Key'});
console.log(map3.get(keyFunc));//{ name: 'Function Key' }
//map can have array as key
let map4=new Map();
