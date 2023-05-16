// โครงสร้างควบคุมแบบมีเงื่อนไข (if Eles)
let balance = 1000;
let withDraw = 1500;

if(withDraw<=balance){
    // เมื่อเงื่อนไขเป็นจริง
    console.log("ยืนยันการถอนเงิน =",withDraw)
    balnce-=withDraw;
    console.log("ยอดเงินคงเหลือ = ",balance)
}else{
    //เมื่อเงื่อนไขเป็นเท็จ
    console.log("ยอดเงินคงเหลือไม่เพียงพอ")
}

// ข้อควรระวังในการเขียนif เพื่อตรวจสอบเงื่อนไข
// ตัวอย่างโปรแกรม

// 80 - 100 = A
// 75 - 79 = B+
// 70 - 74 = B
// 65 - 69 = C+
// 60 - 64 = C
// 55 - 59 = D+
// 50 - 54 = D
// 0-49 = F

let score = 76 ;
if(score > 80){
    console.log("คุณได้เกรด A")
}
if(score > 70){
    console.log("คุณได้เกรด B")
}
if(score > 60){
    console.log("คุณได้เกรด C")// สิ่งที่เกิดขึ้นคือระบบจะทำการตรวจสอบทุกเงื่อนไข และทำให้ได้คำตอบทั้ง3พร้อมกัน
}

// รูปแบบคำสั่งแบบหลายเงื่อนไข if else if
let score2 = 76 ;
if(score2 > 80){
    console.log("คุณได้เกรด A")
}
else if(score2 > 70){
    console.log("คุณได้เกรด B")
}
else if(score2 > 60){
    console.log("คุณได้เกรด C")
}