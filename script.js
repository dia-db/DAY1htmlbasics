a=5;
var a=9;
console.log(a);
let b=20;
console.log(b);
{
    let b=90;
    console.log(b);
    const t=10
}
console.log(typeof(b));
var st='I am a string';
console.log(typeof(st));
var d=true;
var m;
console.log(typeof(d))
console.log(typeof(m))
var arr1=['orange','apple',10]
console.log(arr1[0])
console.log(arr1.length)
arr1.push('pineapple')
console.log(arr1)
// JAVASCRIPT OBJECTS
let person={
    name:'DHIYA',
    age:21,
    location:'TVM'
}
console.log(person.age)
console.log(person.location)
let arr2=[{
    name:'DHIYA',
    age:21,
    location:'TVM'
},{
    name:'Dilla',
    age:16,
    location:'TVM'
}]
console.log(arr2[1].age)
function add(x,y) {
    var sum=x+y;
    return sum;  
}
var f=add(11,36)
console.log(f)

let p=1
let q=++p
console.log(p)
console.log(q)
var s=10;
var t='10';
if (s>t) {
    console.log('s is greater');
}else if(s==t){
    console.log('both are equal to each other');
}
 else {
    console.log('t is greater');
}
// LOOPING STATEMENTS
var array=[1,2,3,4,5]
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);  
}
for (const key in person) {
   console.log(person[key])
}
for (const i of array) {
    console.log(i)
}