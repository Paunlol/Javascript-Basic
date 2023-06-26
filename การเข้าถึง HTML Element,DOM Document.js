const myName = document.getElementById('demo')//เก็บข้อมูลของ Id
const nickName = document.getElementById('demo2')
const basicWord = document.getElementById('demo3') 
const myjsType = document.querySelector('.myjs') //อ้างอิงผ่าน class
const box = document.querySelector('.light')

// 
let x = 10
let y = 20
//
myName.innerText="Not my Name" //เปลี่ยนข้อความ
function displayText() {
    nickName.innerHTML = "<b>Change Text</b>" //เปลี่ยนทั้งElement
    basicWord.innerHTML = `แสดงข้อมูลตัวแปร x = ${x} และตัวแปร y = ${y}`
    nickName.style.color = 'red'

    myjsType.setAttribute('class','ford') //เปลี่ยนชื่อคลาส
}

function displayLight(){
    box.setAttribute('class','dark')
}
function displayDark(){
    box.setAttribute('class','light')
}
//

//DOM Document ใช้เพื่อเข้าถึงและจัดการกับโครงสร้างของหน้าเว็บ (HTML) โดยใช้เป็นตัวกลางในการเชื่อมต่อกับ Element แต่ละตัวบนหน้าเว็บ

