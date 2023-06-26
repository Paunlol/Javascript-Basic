const menu = document.getElementById('foodMenu')
let count = 1
function addItem(){
  const item = document.createElement('li')
  item.innerText='NameItem'+(count++)
  menu.appendChild(item) // menuคือแม่ itemคือลูก (เพิ่ม)
  menu.removeChild(item) // menuคือแม่ itemคือลูก (ลบ)
}

