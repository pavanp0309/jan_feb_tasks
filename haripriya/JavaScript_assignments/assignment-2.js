// first question
let a = parseInt(prompt("Enter a value for a:"));
let b = parseInt(prompt("Enter a value for b:"));
let sum = a + b;
let difference = a - b;
let product = a * b;
let quotient = ~~(a / b);
let remainder = a % b;
console.log(`a = ${a}`);
console.log(`b = ${b}`);
console.log(`Sum = ${sum}`);
console.log(`Difference = ${difference}`);
console.log(`Product = ${product}`);
console.log(`Quotient = ${quotient}`);
console.log(`Remainder = ${remainder}`);

// second question
// let x = 10;
// console.log(`x = ${x}`);
// let add = x+=5;
// let subtract = x-=3;
// let mul = x*=2;
// let div = ~~(x/=4);
// console.log(`Added 5 to x: x+=5 => x = 10 + 5 = ${add}`);
// console.log(`Subtracted 3 from x: x-=3 => x = 15 - 3 = ${subtract}`);
// console.log(`Multiplied x by 2: x*=2 => x = 12 * 2 = ${mul}`);
// console.log(`Finally divided x by 4: x/=4 => x = 24 / 4 = ${div}`);
// console.log(`Modified/Final x = ${x}`);

// third question
// function myFunc(x, y, z){
//     console.log(`Initial Values of: x = ${x}, y = ${y}, z = ${z}`);
//     let step1 = (x += 2 * y);
//     console.log(`Step-1: x += 2 * y = ${step1}`);
//     console.log(`After step-1: x = ${x}, y = ${y}, z = ${z}`);
//     let step2 = (y -= x / --z);
//     console.log(`Step-2: y -= x / --z = ${step2}`);
//     console.log(`After step-2: x = ${x}, y = ${y}, z = ${z}`);
//     let step3 = (z += x-- + 5);
//     console.log(`Step-3: z += x-- + 5 = ${step3}`);
//     console.log(`After step-3: x = ${x}, y = ${y}, z = ${z}`);
//     let step4 = (y /= z + 2);
//     console.log(`Step-4: y /= z + 2 = ${step4}`);
//     console.log(`After step-4: x = ${x}, y = ${y}, z = ${z}`);
//     let step5 = (x *= ++y - z--);
//     console.log(`Step-5: x *= ++y - z-- = ${step5}`);
//     console.log(`After step-5: x = ${x}, y = ${y}, z = ${z}`);
//     }
// myFunc(10, 5, 3);

// fourth question
// console.log(`4 > 3 = ${4 > 3}`); // true
// console.log(`4 >= 3 = ${4 >= 3}`); // true
// console.log(`4 < 3 = ${4 < 3}`); //false
// console.log(`4 <= 3 = ${4 <= 3}`); //false
// console.log(`4 == 4 = ${4 == 4}`); // true
// console.log(`4 === 4 = ${4 === 4}`); // true
// console.log(`4 != 4 = ${4 != 4}`); // false
// console.log(`4 !== 4 = ${4 !== 4}`); // false
// console.log(`4 != '4' = ${4 != '4'}`); //false
// console.log(`4 == '4' = ${4 == '4'}`); //true
// console.log(`4 === '4' = ${4 === '4'}`); //false

// fifth question
// console.log(`4 > 3 && 10 < 12 = ${4 > 3 && 10 < 12}`); //true
// console.log(`4 > 3 && 10 > 12 = ${4 > 3 && 10 > 12}`); //false
// console.log(`4 > 3 || 10 < 12 = ${4 > 3 || 10 < 12}`); //true
// console.log(`4 > 3 || 10 > 12 = ${4 > 3 || 10 > 12}`); //true
// console.log(`!(4 > 3) = ${!(4 > 3)}`); // false
// console.log(`!(4 < 3 || 10 < 12) = ${!(4 < 3 || 10 < 12)}`); //false

// Medium Level
// first question
// let x = 7;
// let y = 2;
// console.log(`x = ${x}, y = ${y}`);
// let step1 = x++;
// console.log(`step1 = x++ = ${step1}`);
// console.log(`After step-1, x = ${x}, y = ${y}`);
// let step2 = ++y;
// console.log(`step2 = ++y = ${step2}`);
// console.log(`After step-2, x = ${x}, y = ${y}`);
// let step3 = --x;
// console.log(`step3 = --x = ${step3}`);
// console.log(`After step-3, x = ${x}, y = ${y}`);
// let step4 = y--;
// console.log(`step4 = y-- = ${step4}`);
// console.log(`After step-4, x = ${x}, y = ${y}`);
// let z = step1 + step2 - step3 + step4;  //x++ + ++y - --x + y--
// console.log(`z = step1 + step2 - step3 + step4 = ${step1} + ${step2} - ${step3} + ${step4} = ${z}`);

// second question
// let p = 4;
// let q = 5;
// console.log(`p = ${p}, q = ${q}`);
// console.log(`p = p++ + ++p;`);
// let step1 = p++;
// console.log(`step1 = p++ = ${step1}`);
// console.log(`Since it's a post-increment, p value remains same until it is used, so after step1, p = ${p}`);
// let step2 = ++p;
// console.log(`step2 = ++p = ${step2}`);
// console.log(`Since it's a pre-increment, p value increments even before use, so after step2, p = ${p}`);
// p = step1 + step2;
// console.log(`p = step1 + step2 = ${p}`);
// console.log("break");
// console.log(`q = --q - q--;`);
// let step3 = --q;
// console.log(`step3 = --q = ${step3}`);
// console.log(`After step3, q = ${q}`);
// let step4 = q--;
// console.log(`step4 = q-- = ${step4}`);
// console.log(`After step4, q = ${q}`);
// q = step3 - step4;
// console.log(`q = step3 - step4 = ${q}`);
// console.log("break");
// console.log(`p += q++ + --p;`);
// let step5 = q++;
// console.log(`step5 = q++ = ${step5}`);
// console.log(`After step5, q = ${q}`);
// let step6 = --p;
// console.log(`step6 = --p = ${step6}`);
// console.log(`After step6, p = ${p}`);
// let step7 = step5 + step6;
// console.log(`step7 = step5 + step6 = ${step5} + ${step6} = ${step7}`);
// let step8 = p += 9;
// console.log(`step8 = p += 9 = ${step8}`);
// console.log(`Therefore, p += q++ + --p  = ${step8}`);
// console.log(`Final p = ${p}, q = ${q}`);

// third question
// let score = 20;
// console.log(`score = ${score}`);
// let step1 = ++score;
// console.log(`step-1: ++score = ${step1}`);
// console.log(`score = ${score}`);
// let step2 = score += step1;
// console.log(`step-2: score += step1 = ${step2}`);
// console.log(`score = ${score}`);
// let step3 = score--;
// console.log(`step-3: score-- = ${step3}`);
// console.log(`score = ${score}`);
// let step4 = score -= step3;
// console.log(`step-4: score -= step3 = ${step4}`);
// console.log(`score = ${score}`);
// let step5 = --score;
// console.log(`step-5: --score = ${step5}`);
// console.log(`score = ${score}`);
// let step6 = score++;
// console.log(`step-6: score++ = ${step6}`);
// console.log(`score = ${score}`);
// let step7 = score *= step5 + step6;
// console.log(`step-7: score *= step5 + step6 = ${step7}`);
// console.log(`score = ${score}`);
// let step8 = ++score;
// console.log(`step-8: ++score = ${step8}`);
// console.log(`score = ${score}`);
// let step9 = score--;
// console.log(`step-9: score-- = ${step9}`);
// console.log(`score = ${score}`);
// let step10 = score /= step8 - step9;
// console.log(`step-10: score /= step8 - step9 = ${step10}`);
// console.log(`score = ${score}`);

// fourth question
// let a = 5;
// let b = 8;
// let result;
// let step1 = a++;
// console.log(`step-1: a++ = ${step1}`);
// let step2 = ++b;
// console.log(`step-2: ++b = ${step2}`);
// result = step1 > 5 && step2 > 8;
// console.log(`result = a++ > 5 && ++b > 8 = ${result}`);
// console.log(`a = ${a}, b = ${b}`);
// let step3 = --a;
// console.log(`step-3: --a = ${step3}`);
// let step4 = b--;
// console.log(`step-4: b-- = ${step4}`);
// result = step3 < 5 || step4 < 10;
// console.log(`result = --a < 5 || b-- < 10 = ${result}`);
// console.log(`a = ${a}, b = ${b}`);
// let step5 = ++a;
// console.log(`step-5: ++a = ${step5}`);
// let step6 = b++;
// console.log(`step-6:; b++ = ${step6}`);
// result = !(step5 == 5) && step6 > 8;
// console.log(`result = !(++a == 5) && b++ > 8 = ${result}`);
// console.log(`a = ${a}, b = ${b}`);

// fifth question
// function slope(x1, y1, x2, y2){
//     let m = (y2 - y1) / (x2 - x1);
//     console.log(`(x1, y1) = (${x1}, ${y1}) and (x2, y2) = (${x2}, ${y2})`);
//     console.log(`Slope m = (y2 - y1) / (x2 - x1)`);
//     console.log(`Therefore, slope m = (${y2} - ${y1}) / (${x2} - ${x1}) = ${m}`);
// }
// slope(2, 2, 6, 10);

// Avanced level
// first question
// let age = parseInt(prompt("Enter your age:"));
// if (isNaN(age) || age < 0){
//     alert("❌Invalid input");
// }

// let ageDet = (age < 18)? "Minor" : "Adult";
// console.log(`Age: ${age} - ${ageDet}`);

// second question
// let temp = parseFloat(prompt("Enter the current temperature:"));
// let unit = prompt("Enter the unit (C/F):").toLowerCase();
// if (unit === "f"){
//     temp = (temp - 32) * 5 / 9;
// }else if (!["c", "f"].includes(unit) || !isNaN(unit)){
//     alert("❌Invalid input");
// }
// console.log(`Temperature = ${temp.toFixed(2)}c`);

// let temp_Det = (temp > 30)? "Hot" : "Cold";
// console.log(temp_Det);

// third question
// let score = parseFloat(prompt("Enter your score (out of 100):"));
// if (isNaN(score) || score <= 0 || score > 100){
//     alert("❌Invalid input");
// }

// console.log("Score = " + score);
// let result = (score >= 50)? "Pass" : "Fail";
// console.log("Result:", result);

// fourth question
// >100$ - 10%, else - 5%
// let amt = parseFloat(prompt("Enter your purchase amount:"));
// if (isNaN(amt) || amt < 0){
//     alert("❌Invalid input");
// }

// let discount = 0;

// let disc_percent = (amt > 100)? 0.10 : 0.05;
// let discAmt = amt * disc_percent;
// let finalAmt = amt - discAmt;

// console.log(`Purchase amount = ${amt}$`);
// console.log(`Discount = ${disc_percent * 100}%`);
// console.log(`Final Amount = ${finalAmt}$`);

// fifth question
// let age = parseInt(prompt("Enter your age:"));
// if (isNaN(age) || age < 0){
//     alert("❌Invalid input");
// }

// console.log("Age: ", age);

// let age_Det = (age < 13)? "Child" : (age >= 13 && age < 20)? "Teen" : (age >= 20 && age < 60)? "Adult" : "Senior";
// console.log(age_Det);

// sixth question
// let weight = parseFloat(prompt("Enter your luggage weight in kg:"));
// let travel_type = prompt(
//   "Enter your travel type (domestic/international):"
// ).toLowerCase();
// if (isNaN(weight) || weight < 0) {
//   alert("❌Invalid input");
// }

// let shipFee =
//   travel_type === "domestic" && weight < 1
//     ? 5
//     : travel_type === "domestic" && weight >= 1 && weight <= 5
//     ? 10
//     : travel_type === "domestic" && weight > 5
//     ? 20
//     : travel_type === "international" && weight < 1
//     ? 10
//     : travel_type === "international" && weight >= 1 && weight <= 5
//     ? 25
//     : travel_type === "international" && weight > 5
//     ? 50
//     : "❌Error";

//     console.log("Weight:", weight);
//     console.log("Travel Type:",travel_type);
//     console.log("Shipping Fee:",shipFee);
