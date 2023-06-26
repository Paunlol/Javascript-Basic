// onfocus="" เมื่ออิลิเมนต์นั้นได้รับการโฟกัส
// onblur="" สูญเสียการโฟกัส หรือ ถูกย้ายไปโฟกัสอิลิอื่น
// onchange="" เมื่อผู้ใช้เปลี่ยนแปลงค่าฟอร์มรับข้อมูล
// onselect="" เมื่อผู้ใช้เลือกข้อความ(ใช้เมาสลาก)ในช่องข้อความ
// onsubmit="" เมื่อผู้ใช้คลิกปุ่ม submit
// onmouseover="" เมื่อออบเจกนั้นถูกเลื่อน mouse pointer ไปทับ
// onmouseout="" เมื่อออบเจกนั้นถูกเลื่อน mouse pointer ไปทับอยู่ออกไป
// onclick="" เกิดเมื้อออยเจกนั้นถูกคลิก
// onload="" เกิดเมิ่อโหลดเอกสารเสร็จ
// onunload="" เกิดเมื่อยกเลิกการโหลด เช่น กดปุ่มStop

function welcome() {
  alert("ยินดีต้อนรับ")
}

function hightlight(obj) {
  obj.style.background = "red"
}

function unhightlight(obj) {
  obj.style.background = "Black"
}

function getMenu() {
  const menu = document.getElementById('menu')
  const display = document.getElementById('display')
  console.log(menu.value.toUpperCase())
  display.innerText = menu.value
}