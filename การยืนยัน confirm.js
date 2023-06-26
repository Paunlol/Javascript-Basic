// มีค่าเป็น true เมื่อผู้ใช้กด OK
// มีค่าเป็น False เมื่อผู้ใช้กด cancel

function deleteData() {
  let result = confirm("คุณต้องการลบข้อมูลหรือไม่")
  if(result){
    console.log("ลบข้อมูลเรียบร้อย")
  }else{
    console.log("ยกเลิกการลบข้อมูล")
  }
};