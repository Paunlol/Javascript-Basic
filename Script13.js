// Siwtch Case

// switch คือ สิ่งที่ต้องการตรวจสอบ
// case ค่าคำสั่งที่1 : คำสั่งที่ 1;
// break; คือ สั่งให้โปรแกรมกระโดออกไปทำงานนอกคำสั่ง switch ถ้าไม่มีมีคำสั่งbreakจะทำงานต่อไปเรื่อยๆ

let status = 0; //0ปิดไฟ , 1เปิดไฟ

let light;
// การทำงานแบบ if else
if(status==0){
    light="ปิดไฟ"
}else if(status==1){
    light="เปิดไฟ"
}else{
    light="ไม่พบข้อมูล"
}
// การทำงานแบบ switch
switch(status){
    case 0 : light="ปิดไฟ"
        break;
    case 1 : light="เปิดไฟ"
        break;
}
console.log(ight)
// ตัวอย่างที่2

let month = 1;
let name;

switch(month){
    case 1 : name="มกราคม"
        break;
    case 2 : name="กุมภาพันธ์"
        break;
    case 3 : name="มีนาคม"
        break;
    case 4 : name="เมษายน"
        break;
    case 5 : name="พฤษภาคม"
        break;
}
console.log(name)