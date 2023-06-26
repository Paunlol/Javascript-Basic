let points = [20,100,-10,-100,5,-20,19];
console.log(points)

//น้อยไปมาก
points.sort(function(a,b){ // aคือค่าน้อยที่สุด
    return a-b              // bคือค่ามากที่สุด
})
console.log(points)

//มากไปน้อย
points.sort(function(a,b){
    return b-a
})
console.log(points)