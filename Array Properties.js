// การหาจำนวนสมาชิกและเรียงลำดับ

let color=["แดง","น้ำเงิน","เขียว","ฟ้า"];
let count= color.length; //จำนวนArrayทั้งหมด
console.log(count);
console.log("Before =",color);
let result= color.sort(); //เรียงลำดับArray
console.log("After =",result);

//

let fruits = ["มะม่วง","กล้วย","แตงโม","ส้ม"]
console.log("Before =",fruits)
let Newfruits = fruits.sort();
console.log("After =",Newfruits)
console.log(fruits.reverse()); //ย้อนกลับ

// สมาชิกตัวแรกและตัวสุดท้าย

color=["แดง","น้ำเงิน","เขียว","ฟ้า"];
console.log(color[0]) //ตัวแรก
console.log(color[color.length-1]) //ตัวสุดท้าย

// การเพิ่มสมาชิก

color=["แดง","น้ำเงิน","เขียว","ฟ้า"];
console.log("Before =",color); 
color.push("สีเทา"); //เพิ่มสี
color.push("สีม่วง");
console.log("After =",color);

//หมายเหตุถ้าใช้ sort กับตัวเลข จะไม่เรียงจากเลขจากน้อยไปมาก