// Do..While คือ ลองทำดูก่อน1รอบ ถ้าคำสั่ง While เป็นจริงก็จะวนซ้ำต่อ แต่ถ้าเป็นเท็จจะหลุดออกจากลูป
// do{
//     คำสั่งต่างๆ เมื่อเงื่อนไขเป็นจริง;
// }while(เงื่อนไข);

let count=1;

do{
    console.log(count);
    count++;
}while(count<=5);

console.log("จบการทำงาน")

//คำสั่ง While
while (count <= 200) {
  console.log(count);
  count++;
}