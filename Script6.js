// ตัวดำเนินการเพิ่มค่า-ลดค่า

// เพิ่มลดดค่า Prefix ++a, --a
let a = 5, b= 10;
console.log("ค่าเริ่มต้น = ",a)
console.log("เพิ่มค่าแบบprefix = ",++a)
console.log("ค่าปัจจุบัน = ",a)

// เพิ่มลดค่า Postfix a++, a-- (บรรทัดถัดไปจะถูกเพิ่มลดค่า)
a = 5 //reset
console.log("ค่าเริ่มต้น = ",a)
console.log("เพิ่มค่าแบบprefix = ",a++)
console.log("ค่าปัจจุบัน = ",a)

// ลดค่า prefix
console.log("ค่าเริ่มต้น = ",b)
console.log("เพิ่มค่าแบบprefix = ",--b)
console.log("ค่าปัจจุบัน = ",b)
// ลดค่า postfix
b = 10 //reset
console.log("ค่าเริ่มต้น = ",b)
console.log("เพิ่มค่าแบบprefix = ",b--)
console.log("ค่าปัจจุบัน = ",b)