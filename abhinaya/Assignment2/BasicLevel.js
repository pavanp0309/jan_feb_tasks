//Arithmetic Operators
// let a = parseInt(prompt("Enter a value: "))
// let b = parseInt(prompt("Enter b value: "))
// let add = a+b;
// console.log("sum of a and b is "+add);
// let sub = a-b;
// console.log("Subtraction of a and b is "+add);
// let mul = a*b;
// console.log("Product of a and b is "+mul);
// let div = a/b;
// console.log("division of a and b is "+div);
// let moduloDiv = a%b;
// console.log("division of a and b is "+moduloDiv);

// //Q2
// let x = 10;
// x +=5;
// x -=3;
// x *=3;
// x /=4;
// console.log("Final value of x is: "+x);

//Q3;
let x = 10;
let y = 5;
let z = 3;
x += 2 * y;
console.log("x: "+x+", "+"y: "+y+", "+"z: "+z);
y -= x / --z;
console.log("x: "+x+", "+"y: "+y+", "+"z: "+z);
z += x-- + 5;
console.log("x: "+x+", "+"y: "+y+", "+"z: "+z);
y /= z + 2;
console.log("x: "+x+", "+"y: "+y+", "+"z: "+z);
x *= ++y - z--;
console.log("x: "+x+", "+"y: "+y+", "+"z: "+z);

4 > 3 // true
4 >=3 //false
4 < 3 //false
4 <=3 //false
4 == 4 //true
4 === 4 //true
4 != 4 //false
4 !== 4 //false
4 != '4' //true
4 == '4' //true
4 === '4' //false

//Q5
4 > 3 && 10 < 12 // true  && true --> true

4 >3 && 10 >12  //true && false -->false

4 > 3 || 10 <12 //true || true -->true

4 > 3 || 10 > 12 //true || false -->true

!(4 >3)  //!(true) -->false

!(4<3 || 10 <12) // !(false || false )--> !(false) -->true

