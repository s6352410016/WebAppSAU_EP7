const showName = (name) => {
    console.log('สวัสดี '+ name )
}
showName('ตู่');

const calSum = (a , b) => {
    console.log('a + b ได้ค่าเป็น');
    return a + b;
} 
console.log(calSum(10,20));

let test1 = function(){
    console.log("hello...");
}
test1();

let test2 = function(number){
    console.log("hello... " +number);
}
test2(55);