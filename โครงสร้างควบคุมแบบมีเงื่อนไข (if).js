// โครงสร้างควบคุมแบบมีเงื่อนไข (if)

age = 15

if(age >= 15 && age <= 25){
    console.log("วัยรุ่น")
}

let balance = 1000;
let withDraw = 500;

if(withDraw<=balance){
    console.log("ยืนยันการถอนเงิน =",withDraw)
    balance-=withDraw;
    console.log("ยอดเงินคงเหลือ = ",balance)
}