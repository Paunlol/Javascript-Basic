let number = Array(100,200,300,400,500,true,"สวัสดี",false) //กำหนดค่าแบบ Array
console.log(number)
console.log("ตัวแรกคือ",number[0]) //ลำดับแบบ 0,1,2,3
console.log("ตัวที่สามคือ",number[2])

let color=["แดง","น้ำเงิน","เขียว"]
color[2]="เหลือง" //เปลี่ยนค่าลำดับที่ 3 ให้เป็นสีเหลือง
console.log('สีทั้งหมดได้แก่',color)
console.log("สีที่เลือกคือสี",color[0])
color[3]="ม่วง" //เปลี่ยนค่าลำดับที่ 3 ให้เป็นสีม่วง โดยจะทำงานตามลำดับบรรทัด
console.log('สีทั้งหมดได้แก่',color)