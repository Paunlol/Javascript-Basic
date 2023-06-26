// ฟังก์ชั่น return ค่า

// function ชื่อฟังก์ชั่น(){
//     return ค่าที่จะส่งออกไป
// }

function getIP(){
    return "192.101.100.1";
}

let MyIP=getIP();
console.log("IPที่ได้รับคือ",MyIP);

//

function getNumber(){
    return 100*100;
}
let total=getNumber();
console.log("ผลการคูณ=",total)

//

function getMyAddress(){
    let City="ระยอง";
    return City;
}
console.log("ที่อยู่",getMyAddress())