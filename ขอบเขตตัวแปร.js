// local variable ตัวแปรที่ทำงานอยู่ในฟังก์ชั่นมีขอบเขตการทำงานตั้งแต่จุดเริ่มต้นไปจนถึงจุดสิ้นสุดของฟังก์ชั่น
// global variable ตัวแปรที่ทำงานอยู่นอกฟังก์ขั่นมีขอบเขตการทำงานตั้งแต่จุดเริ่มต้นไปจนถึงจุดสิ้นสุดของไฟล์ที่ประกาศใช้

let a = 100; //golbal varible

function display(){
    let a = 10
    let b = 50
    console.log("ตัวแปร a ใน function =",a) //local variable
    console.log("ตัวแปร b ใน function =",b)
}
console.log ("ตัวแปร a แบบ Golbal = ",a)
console.log ("ตัวแปร a แบบ Golbal = ",b) //ไม่มีใน Golbal
display()