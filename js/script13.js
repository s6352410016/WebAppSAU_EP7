function funA(){
    console.log("aaa");
}
funA();

function funcB(){
    console.log(111);
    return 123;
    console.log(222);
    return 345;
    console.log(333);
    return 789;
}
console.log(funcB() + 123);

let x = () => {
    console.log(555);
    return 999;
}
console.log(x());

function funcC(x , y){
    let z = x * 3
    console.log(y(z));
}
funcC(10, (wow) => {
    console.log(wow * 3);
    return wow + wow + wow;
});
funcC(100, function sau(){
    return x ** 2; 
});