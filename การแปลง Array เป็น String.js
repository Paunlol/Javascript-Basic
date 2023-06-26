// แปลง Array เป็น String
// .toString() //แปลงเป็น String
// .join("*") // นำค่าแต่ละค่าในตัวแปร Array มารวมกันเป็นข้อความและส่งค่ากลับเป็นข้อความที่มีตัวคั่นค่าตัวแปรแต่ละค่าตามท่ี่กำหนด
// color.pop(); //เอาตัวสุดท้ายออก
// let x = color.pop(); //เอาตัวสุดท้ายออกแล้วเก็บในตัวแปร x

let points = [1,2,3,4,5,6,7,8,9,0];

let x=points.toString(); //แปลงcolorsเป็นStringทั้งหมด
console.log(typeof(x))
console.log(x)

//

let y=colors.join("-"); //แปลงcolorsเป็นString โดยสามารถเลือกเครื่องหมายเว้นได้
console.log(y)

//

colors = ["red", "orange", "yellow", "green", "blue", "purple", "pink", "brown", "gray", "black"];
console.log(colors)
colors.pop();
colors.pop(); //นำสมาชิกตัวสุดท้ายออกไป (popออก pushเข้า)
let a = colors.pop(0); //นำสมาชิกตัวสุดท้ายออกไป แล้วนำไปเก็บในตัวแปร a
console.log(colors);
console.log(a);