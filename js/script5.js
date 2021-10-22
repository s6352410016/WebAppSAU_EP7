// variable 
var a = 20; // global variable
let x = 1000000; // local variable
const z = 999999; // local variable

{
    let b = 15;
    var c = 99;
    const d = 8888;
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
    console.log(x);
    console.log(z);
    console.log('-------------');

    b = 30;
    a = 100;
    c = 555;
    // d = 1111;
    console.log(a);
    console.log(b);
    console.log(c);
    console.log('-------------');
}

console.log(a);
// console.log(b);
console.log(c);
// console.log(d);
console.log(x);
console.log(z);
console.log('-------------');
