//คำสั่งเขียนข้อมูล
document.write("สวัสดีครับ");
/*คำสั่งแจ้งเตือน*/
alert("แจ้งเตือนข้อมูล");
//คำสั่งconsloe.log ในแต่ละรูปแบบ
console.log("Hello Javascipt");
console.error("virus!");
console.warn("Warning!")

let name; //สร้างตัวแปรแต่ไม่กำหนดค่า $ _ 
_name = "ฟอร์ด"; //กำหนดค่าลงในตัวแปร
let Name = "Javascript";
let NAME = "ลาก่อน";
let age = 20;
console.log("before =",_name) //ก่อน
_name = "ฟอร์ดใหม่" //เปลี่ยนตัวแปรใหม่เพราเป็น let ไม่ใช่ค่าคงที่
console.log("after =",_name) //หลัง
console.log(NAME)

const vat = 0.7; //กำหนดค่าคงที่ของvatเป็น 0.7 ไม่สามารถกำหนดใหม่ได้
console.log("ค่าvat = ",vat)