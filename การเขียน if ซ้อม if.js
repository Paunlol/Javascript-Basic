// การเขียน if ซ้อม if

let age = 15

if(age<=15){
    if(age==15){
        console.log("ม.3")
    }else if(age==14){
        console.log("ม.2")
    }else if(age==13){
        console.log("ม.1")
    }else{
        console.log("ไม่ตรงกับข้อมมูลใดเลย")
    }
}else{
    console.log("นอกเหนือจากข้อมูลที่มี")
}