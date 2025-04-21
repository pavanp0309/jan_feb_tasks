//Arithmetic Operators
// let num1 = parseInt(prompt("Enter a value: "))
// let num2 = parseInt(prompt("Enter b value: "))
// let add = num1+num2;
// console.log("sum of a and b is "+add);
// let sub = num1-num2;
// console.log("Subtraction of a and b is "+add);
// let mul = num1*num2;
// console.log("Product of a and b is "+mul);
// let div = num1/num2;
// console.log("division of a and b is "+div);
// let inc = ++num1;
// console.log("Pre-Incremented value of a is: "+inc);
// let dec = --num2;
// console.log("Pre-Decremented value of b is: "+dec);

//increment and decrement
var a = 5;
var b = 8;
var d = ++a + ++a - --b +b - --a + a++ + (a++ * ++b) + (a-- / --b);
     // 6   + 7   - 7   +7 -  6  + 6   + (7 * 8)     + (8 / 7)
     //70.14   
//a = 7, b = 7 -- updated values
console.log(d,a,b)
var e = a++ - b++ + (--b * a++) + b++ + b +a + ++a +(a++ % b++);
     // 8   - 8   + ( 7  * 8  ) + 7   + 8 +9 +  10 +(10  % 8 )
     // 92
// updated values a = 11, b=9
console.log(e,a,b)

var g = b-- -b + --b +b + ++b -a + ++b -b + b++ - a++ + b++ +b;
    //  9   -8 +   7 +7 +   8 -11+   9 -9 + 9   - 11  + 10  +11
    // 51
    // a =12, b = 11
console.log(g,a,b)

var h = a++ +b + ++a + (--a*b) +b -(b/a)+ (a/b) + (a**b) + (a*2)++ + ++(b*2);




//Power of 2 raised to the 3rd power
// console.log("Power of 2 raised to the 3rd power is: "+ 2**3);

// //Areas
// //triangle
// let base = parseInt(prompt("Enter base:"))
// let height = parseInt(prompt("Enter height"))
// let areaT = 0.5*base*height;
// console.log("Area of Triangle is: "+areaT);

// //rectangle
// let Length = parseInt(prompt("Enter Length"))
// let width = parseInt(prompt("Enter width"))
// let areaR = Length*width
// console.log("Area of Rectangle is: "+areaR);

// //Square
// let side = parseInt(prompt("Enter side of a square"));
// let areaS = side*side;
// console.log("Area of Square is: "+areaS);

// //Circle
// let radius = parseInt(prompt("Enter the radius of circle:"))
// let areaC = 3.14 * radius*radius;
// console.log("Area of Circle is: "+areaC);

