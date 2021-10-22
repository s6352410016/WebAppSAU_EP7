// การสร้างฟังค์ชั่น แบบ arrow function

//1 ไม่ส่งค่ากลับ ไม่มีพาราเมเตอร์
const funcNa = () => {
    console.log("นะ นะ นะ");
}
funcNa();

//2 ไม่ส่งค่ากลับ มีพาราเมเตอร์
const funcNi = (x,y) => {
    let a = x + y;
    console.log(a);
}
funcNi(5,5);

//3 ส่งค่ากลับ ไม่มีพาราเมเตอร์
const funcWow = () => {
    return 999+1;
}
console.log(funcWow());

//4 ส่งค่ากลับ มีพาราเมเตอร์
const funcWee = (x,y,z) => {
    let sum = x + y + z
    return 555 + sum;
}
console.log(funcWee(5,10,15));

// Default Parameter คือพาราเมเตอร์ที่มีการกำหนดค่าเริ่มต้น
function funcA(x,y = 20){
    console.log(x + y);
}
funcA(10,110);
funcA(110);
