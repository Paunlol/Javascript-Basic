let person = {
    name: 'Ford',
    age: 20,
    address: {
      street: 'Padungpund',
      city: 'Bangkok',
      county: 'TH'
    },
    hobbies: ['reading', 'traveling', 'cooking'],
    sayHello: function() {
      console.log('Hello!');
    },
    displayAll:function(){
        return " name =" + this.name + " age = " + this.age + " Address = " + this.address.street+ "," + this.address.city+ "," + this.address.county
    }
  };
  console.log(person.displayAll())
  document.write(person.displayAll())

  //

  let product2 = {  //Object
    name:"Mouse",
    price: 1000,
    color: "Black",
    category:"Computer",
    discount:function(){
        return this.price - 500
        // return product2.price - 500 (ได้เหมือนกัน)
    }
};
console.log("ราคา =",product2.discount()) //เรียกใช้งาน product2.price