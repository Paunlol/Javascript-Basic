// element.addEvetListener(event,callback)

//อ้างอิง
const menu = document.getElementById('menu')
const display = document.getElementById('display')
const btn = document.getElementById('btn')

// event
menu.addEventListener('change',getMenu)
btn = addEventListener('click',ShowWelcome)

// function
function getMenu(){
  console.log(menu.value)
  display.innerText=menu.value
}

function ShowWelcome(){
  alert("ยินดีต้อนรับ")
}