// for(ค่าเริ่มต้นของตัวแปร;เงื่อนไข;เปลี่ยนแปลงค่าตัวแปร){
//     คำสั่งเมื่อเงื่อนไขเป็นจริง
// }

for(let count=1;count<=5;count++){
    console.log("ถูกต้อง")
}

for(let number=1;number<=10;number++){
    if(number==5)continue; //กระโดดข้ามรอบที่5ไปรอบที่6
    if(number==7)break; //หยุดที่รอบที่6
    console.log(number)
}
console.log("จบโปรแกรม")