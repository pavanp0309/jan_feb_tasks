// first question
let age = parseInt(prompt("Enter your age:"));
const legalAge= 18;
if (age >= 18){
    console.log(`✅ You're ${age} yrs old and eligible enough to drive!`);
}else if (isNaN(age) || age <= 0){
    alert("❌ Please enter a valid, non-negative number for age!");
}else {
    let remainingYears = legalAge - age;
    let yearSpell = remainingYears === 1 ? "year" : "years";
    console.log(`🚫 You're ${age} yrs old and not eligible enough to drive for ${remainingYears} more ${yearSpell}.`);
}


// second question
// let myAge = prompt("Enter myAge:");
// let yourAge = prompt("Enter yourAge:");

// if(myAge > yourAge){
//     console.log("myAge is older than yourAge as I am", myAge, "and you're", yourAge);
// }else if(myAge < yourAge){
//     console.log("yourAge is older than myAge as you're", yourAge, "and I am", myAge);
// }else{
//     console.log("We both are of equal age!");
// }

// third question
// function evenNumber(){
//     let even = prompt("Enter a number");
//     console.log(even);
    
//     if(even % 2 === 0){
//         console.log("Your entered number", even, "is an even number");
//     }else{
//         console.log("Your entered number", even, "is not an even number");
//     }
// }
// evenNumber();


// fourth quetsion
// function numberCheck(){
//     let num = parseInt(prompt("Enter a number:"));
//     if (num > 0){
//         console.log("Your entered number", num, "is a positive number");
//     }else if(num < 0){
//         console.log("Your entered number", num, "is a negative number");
//     }else if(num === 0){
//         console.log("Your entered number is Zero");
//     }
// }
// numberCheck();

// fifth question
// function evenOrOdd(num){
//     num = parseInt(prompt("Enter a number:"));
//     if (num % 2 === 0){
//         console.log(`Your entered number, ${num} is an Even Number`);
//     }else{
//         console.log(`Your entered number, ${num} is an Odd Number.`)
//     }
// }
// evenOrOdd();


// sixth question
// function largest(a, b, c){
//      a = parseFloat(prompt("Enter a value for a:"));
//      b = parseFloat(prompt("Enter a value for b:"));
//      c = parseFloat(prompt("Enter a value for c:"));
//      console.log(`a = ${a}, b = ${b}, c = ${c}`);
//    if (a > b && a > c){
//     console.log(`a = ${a} is largest among ${a}, ${b}, ${c}`);
//    }else if (b > c && b > a){
//     console.log(`b = ${b} is largest among ${a}, ${b}, ${c}`);
//    }else if (c > a && c > b){
//     console.log(`c = ${c} is largest among ${a}, ${b}, ${c}`);
//    }else if(a === b || b === c || a === c){
//     alert("❌ Please enter three unique numbers!");
//    }else if(isNaN(a) || isNaN(b) || isNaN(c)){
//     alert(`🚫 Your entered numbers ${a}, ${b}, ${c} are not valid!`);
// }
// }
// largest();

// seventh question
// function grade(){
//     let score = parseFloat(prompt("Enter your total score:"));
//     console.log(`Score = ${score}`);
//     if (score >= 85 && score <= 100){
//         console.log(`🎉 Congratulations! You have secured an 'A' grade`);
//     }else if(score >= 70 && score < 85){
//         console.log(`👏 Well Done! You have secured a 'B' grade.`);
//     }else if (score >= 55 && score < 70){
//         console.log(`🙂 You have secured a 'C' grade.`);
//     }else if (score >= 35 && score < 55){
//         console.log(`🙌 Cleared! You have secured a 'D' grade.`);
//     }else if (score > 0 && score < 35){
//         console.log(`❌ You got 'F' grade. Failed. Better luck next time!`);
//     }else if(isNaN(score) || score === 0 || score < 0 || score > 100){
//         alert(`❌ Please enter a valid number for Score. (NaN, negative or greater than 100 number(s) and Zero aren't accepted)`);
//     }
// }
// grade();



// eighth question
// function triangleType(){
//     let side1 = parseFloat(prompt("Enter a value:"));
//     let side2 = parseFloat(prompt("Enter a value:"));
//     let side3 = parseFloat(prompt("Enter a value:"));
//     console.log("side1 =", side1);
//     console.log("side2 =", side2);
//     console.log("side3 =", side3);
    
    
//     if (side1 === side2 && side1 === side3){
//         console.log("It is an Equilateral Triangle");
//     }else if (side1 === side2 || side2 === side3 || side1 === side3){
//         console.log("It is an Isolated Triangle");
//     }else{
//         console.log("It is a scalene Triangle");
//     }
// }
// triangleType();

// ninth question
// // function seasonCheck(month)
// {
// month = prompt("Enter a month:");
// if (month == "january" || 
//     month == "february" || 
//     month == "december")
// {
//     console.log(`${month} wraps the world in the quiet chill of ❄️Winter.`)
// }

// else if (month == "march" || 
//          month == "april" || 
//          month == "may")
// {
//     console.log(`${month}, 🌸Spring breathes new life into the world with vibrant colors and fresh air.`);
// }
// else if (month == "june" ||
//           month == "july" ||
//           month == "august")
//           {
//             console.log(`☀️Summer blazes in the month of ${month}, filling days with sunshine and vibrant energy.`);
//           }
//           else if (month == "september" ||
//                    month == "october" ||
//                    month == "november"
//           )
//           {
//             console.log(`${month} welcomes the season of 🌿Autumn fall with crisp air and falling leaves all around.`)
//           }
//         }
// seasonCheck();

// tenth question
// function dayCheck(day){
//     day = prompt("Enter a Day:");
//     console.log(`Day: ${day}`);
//     if (day == "monday" || day == "tuesday" || day == "wednesday" || day == "thursday" || day == "friday"){
//         console.log(`🔋 It's a working day. Time to focus, flow, and finish strong.`)
//     }else if (day == "saturday" || day == "sunday"){
//         console.log(`🙌 Yay, it's weekend. Have a good time!`)
//     }
// }
// dayCheck();

// eleventh question
/*
age >= 60 amount > 500 - discount 20% else 10%
age < 60 amount > 1000 discount - 15% else no discount
*/

// function age_YourDisc(age, amount){
// age = parseInt(prompt(`Enter your age:`));
// console.log(`age = ${age}`);
// if (isNaN(age) || age <= 0){
//     alert("❌ Please enter a valid number for age.");
// }
// amount = parseInt(prompt("Enter the purchase amount:"));
// console.log(`purchase amount = ${amount}`);
// if (isNaN(amount) || amount <=0){
// alert("❌ Please enter a valid number for purchase amount.");
// }
// if (age >= 60 && amount >= 500){
//     console.log(`🙌 You've got a 20% discount on your bill!`);
// }else if (age >= 60 && amount < 500){
//     console.log(`🙌 You've got a 10% discount on your bill!`); 
// }else if (age < 60 && amount >= 1000){
//     console.log(`🙌 You've got a 15% discount on your bill!`);
// }else{
//     console.log("Unfortunately, no discount is available for this bill.");
// }
// }
// age_YourDisc();