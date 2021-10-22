// control statement
// selection statement / condition statement
let a = 15;
if(a < 20){
    console.log("hello");
}

let b = 5;
//ternary Operator
b = b == 5 ? console.log("Wow") : console.log("wee"); 

let c = 99;

if(c > 100){
    console.log("Hi");
}
else if(c > 80){
    console.log("Hey");
}
else if(c > 50){
    console.log("Hello");
}
else if(c > 30){
    console.log("Hmm");
}
else if(c > 0){
    console.log("Hoo");
}
else{
    console.log("5555");
}

let d = 3;

switch (d) {
    case 2:
        console.log("AA");
        break;
    case 4,3:
        console.log("BB");  
        break;  
    case 5:
        console.log("CC");  
        break;  
    case 9:
        console.log("DD");  
        break;  
    case 12:
        console.log("EE");  
        break;  
    default:
        console.log("FF");
        break;
}
// Loop / Iteration / repeat / Statement
let i = 1;
while(i <= 5){
    console.log("SAU" + i);
    i++;
}

let j = 1;

do{
    console.log("SAU" + j);
    j++
}
while(j <= 5)

for(let i = 1; i <= 5; i++){
    console.log("DTI" + i);
}