// ฟังชั่นรับค่าและReturnค่า
//  fuction ชือฟังก์ชั่น(parameter1,parameter2,...){
//     return ค่าที่จะส่งออกไป
// }

function setSalary(salary){
    let bonus=1000;
    return salary+bonus;
}

let a = setSalary(1500);
a-=500;
console.log("นาย A เงินเดือนรวม =",a);

let b = setSalary(3000);
console.log("นาย B เงินเดือนรวม =",b);

//

function summation(x,y){
    return x+y;
}
let sum = summation(500,100);
console.log("ผลรวมของค่า=",sum);

//

function getName(name,city){
    return name +" "+ city;
}
let Name = getName("ฟอร์ด",'หนองจอก')
console.log(Name)