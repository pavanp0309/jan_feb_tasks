// first question
function grade(){
        let score = parseFloat(prompt("Enter your total score:"));
        console.log(`Score = ${score}`);
        if (score >= 80 && score <= 100){
            console.log(`🎉 Congratulations! You have secured an 'A' grade`);
        }else if(score >= 70 && score < 80){
            console.log(`👏 Well Done! You have secured a 'B' grade.`);
        }else if (score >= 60 && score < 70){
            console.log(`🙂 You have secured a 'C' grade.`);
        }else if (score >= 50 && score < 60){
            console.log(`🙌 Cleared! You have secured a 'D' grade.`);
        }else if (score > 0 && score < 50){
            console.log(`❌ You got 'F' grade. Failed. Better luck next time!`);
        }else if(isNaN(score) || score === 0 || score < 0 || score > 100){
            alert(`❌ Please enter a valid number for Score. (NaN, negative or greater than 100 number(s) and Zero aren't accepted)`);
        }
    }
    grade();

// second question
// function month_days(month){
//     month = prompt("Enter a month:");
//     month = month.toLowerCase();
//     console.log("Month - " + month);
//     if (month === "january" || month === "march" || month === "may" || month === "july" || month === "august" ||
//         month === "october" || month === "december") {
//             console.log(`The month ${month} has 31 days`);
//         }else if (month === "april" || month === "june" || month === "september" || month === "november"){
//             console.log(`The month ${month} has 30 days`);
//         }else if (month === "february"){
//             console.log(`The month ${month} has either 28 or 29 days based on the year being a leap year or not.`);
//         }else {
//             alert("❌ Enter a valid month name");
//         }
// }
// month_days();

// third question
// function numberCheck(){
//         let num = parseInt(prompt("Enter a number:"));
//         if (num > 0){
//             console.log("Your entered number", num, "is a positive number");
//         }else if(num < 0){
//             console.log("Your entered number", num, "is a negative number");
//         }else if(num === 0){
//             console.log("Your entered number is Zero");
//         }
//     }
//     numberCheck();

// fourth question
// function letterCheck(letter){
//     letter = prompt("Enter a letter from (a-z)/(A-Z):");
//     console.log(`Letter entered = ${letter}`);
//     if (letter == "a" || letter == "A" || letter == "e" || letter == "E" || letter == "i" || letter == "I" || letter == "o" ||
//         letter == "O" || letter == "u" || letter == "U"
//      )
//      {
//         console.log(`The letter '${letter}' is a vowel.`);
//      }else if (letter.length !== 1){
//         alert(`❌ The input is restricted to a single (1) character only.`);
//      }else if (!isNaN(letter)){
//         alert(`❌ Strictly NO NUMBERS.`);
//      }else {
//         console.log(`The letter '${letter}' is a consonant.`);
//      }
// }
// letterCheck();

// fifth question
// function ageDet(age){
//     age = parseInt(prompt("Enter your age:"));
//     console.log(`Age = ${age}`);
//     if (isNaN(age) || age < 0){
//         alert(`❌ Please enter a valid number for age.`);
//     }else if (age >= 0 && age < 13){
//         console.log("You are a Child.");
//     }else if (age >= 13 && age < 20){
//         console.log("You're a Teenager.");
//     }else if (age >= 20 && age < 66){
//         console.log("You're an Adult.");
//     }else {
//         console.log("You're a Senior.");
//     }
// }
// ageDet();

// sixth question
// function usernameCheck(username){
//     username = prompt("Enter your username");
// if (username.length >= 6){
//     console.log(`Welcome User🙂 Your username is ${username}.`);
// }else{
//     alert("❌ Warning, ensure that your username has more than 6 characters.");
// }
// }
// usernameCheck();

// seventh question
// function stringCheck(string){
//     string = prompt("Enter a string/text");
//     console.log("String =", string);
//     if (string.length >= 10){
//         console.log("This string has 10 or more characters.");
//         console.log(`No. of characters = ${string.length}`);
//     }else{
//         console.log("This string doesn't have more than 10 characters.");
//     }
// }
// stringCheck();

// eighth question
// function genreDet(genre){
//     genre = prompt("Select your favourite genre (fiction, sci-fi, mystery, non-fiction, suspense, horror, crime, romance).");
//     genre = genre.toLowerCase();
//     if (genre === "fiction" || genre === "nonfiction" || genre === "romance" || genre === "scifi" || genre === "mystery"
//         || genre === "suspense" || genre === "horror" || genre === "crime")
//     {
//         console.log(`Here's your ${genre} book. Happy reading!🙂`);
//     }else {
//         console.log("Unauthorized genre, please select a valid category.");
//     }
// }
// genreDet();

// ninth question
// function numDet(num){
//     num = parseFloat(prompt("Enter a number:"));
//     console.log(`num = ${num}`);
//     if (num < 10){
//         console.log(`the number ${num} is a Small number.`);
//     }else if ( num >= 10 && num < 50){
//         console.log(`the number ${num} is a Medium number.`);
//     }else if ( num >= 50){
//         console.log(`the number ${num} is a Large number.`);
//     }else if (isNaN(num)){
//         alert("❌Please enter a number.");
//     }
// }
// numDet();

// tenth question
// function dayDet(time, greet){
//     time = prompt("Enter time of the day:");
//     console.log(`time = ${time}`);
//     if (time === "9.00 am" || time === "10.00 am" || time === "11.00 am"){
//         greet = "Good Morning!";
//         console.log(greet);
//     }else if (time === "12.00 pm" || time === "1.00 pm" || time === "2.00 pm" || time === "3.00 pm"){
//         greet = "Good Afternoon!";
//         console.log(greet);
//     }else if (time === "4.00 pm" || time === "5.00 pm" || time === "6.00 pm" || time === "7.00 pm"){
//         greet = "Good Evening!";
//         console.log(greet);
//     }else {
//         alert("❌Error");
//     }
// }
// dayDet();

// function dayDet(time, greet){
//         time = prompt("Enter time of the day:");
//         console.log(`time = ${time}`);
//         if (time.includes("am") || time >= 6 && time < 12){
//             greet = "Good Morning!";
//             console.log(greet);
//         }else if (time.includes("pm") || time >= 12 && time < 16){
//             greet = "Good Afternoon!";
//             console.log(greet);
//         }else if (time >= 16 && time < 20){
//             greet = "Good Evening!";
//             console.log(greet);
//         }else {
//             alert("❌Error");
//         }
//     }
//     dayDet();

// eleventh question
// function tempCheck(temp){
//     temp = parseFloat(prompt("Enter temperature:"));
//     unit = prompt("Enter the unit (C or F):");
//     unit = unit.toLowerCase();
//     let c, f;
//     if (unit === "f"){
//       temp = (temp - 32) * 5 / 9;
//     }else if (unit !== "c"){
//         alert("❌Please enter a valid unit.");
//     }
//     console.log(`Temperature: ${temp.toFixed(2)}C`);
//     if (temp <= 15){
//         console.log("Low temperature");
//     }else if (temp > 15 && temp <= 30){
//         console.log("Medium temperature");
//     }else if(temp > 30){
//         console.log("High temperature");
//     }else{
//         alert("❌Error");
//     }
// }
// tempCheck();

// twelfth question
// let day = parseInt(prompt("Enter a number from (1-7):"));

// switch(day){
//     case 1:
//         console.log("Sunday");
//         break;
//         case 2:
//         console.log("Monday");
//         break;
//         case 3:
//         console.log("Tuesday");
//         break;
//         case 4:
//         console.log("Wednesday");
//         break;
//         case 5:
//         console.log("Thursday");
//         break;
//         case 6:
//         console.log("Friday");
//         break;
//         case 7:
//         console.log("Saturday");
//         break;
//         default:
//             alert("❌Entered wrong input");
// }

// thirteenth question
// let month = parseInt(prompt("Enter a number from (1-12):"));

// switch(month){
//     case 1:
//         console.log("January");
//         break;
//         case 2:
//         console.log("February");
//         break;
//         case 3:
//         console.log("March");
//         break;
//         case 4:
//         console.log("April");
//         break;
//         case 5:
//         console.log("May");
//         break;
//         case 6:
//         console.log("June");
//         break;
//         case 7:
//         console.log("July");
//         break;
//         case 8:
//         console.log("August");
//         break;
//         case 9:
//         console.log("September");
//         break;
//         case 10:
//         console.log("October");
//         break;
//         case 11:
//         console.log("November");
//         break;
//         case 12:
//         console.log("December");
//         break;
//         default:
//             alert("❌Invalid input entered.");
// }

// fourtheenth question
// let input = prompt("Enter the command:").toLowerCase();

// switch(input){
//     case "stop":
//         console.log("Red🔴");
//         break;
//         case "wait":
//             console.log("Yellow🟡");
//             break;
//             case "go":
//                 console.log("Green🟢");
//                 break;
//                 default:
//                     alert("❌Invalid input entered.");
// }

// fifteenth question
// let seasonCheck = prompt("Enter a month").toLowerCase();

// switch (seasonCheck) {
//   case "january":
//   case "february":
//   case "december":
//     console.log("❄️Winter Season");
//     break;
//   case "march":
//   case "april":
//   case "may":
//     console.log("🌸Spring Season");
//     break;
//   case "june":
//   case "july":
//   case "august":
//     console.log("☀️Summer season");
//     break;
//   case "september":
//   case "october":
//   case "november":
//     console.log("🌿Autumn season");
//     break;
//   default:
//     alert("❌Invalid input entered.");
// }

// sixteenth question
// let sound = prompt("Enter your favourite animal sound:").toLowerCase();
// console.log(sound);
// switch (sound){
//     case "bow-bow":
//         console.log("Dog🐶");
//         break;
//         case "meow-meow":
//             console.log("Cat😺");
//             break;
//             case "coo-coo":
//                 console.log("Bird🐦");
//                 break;
//                 default:
//                     console.log("Lion🦁");
// }

// seventeenth question
// let car = prompt("Enter a car name:").toLowerCase();
// console.log(car);
// switch(car){
//     case "sedan":
//         console.log("Good for families and comfort");
//         break;
//         case "suv":
//             console.log("For more space, rough roads, and family trips");
//             break;
//             case "sports car":
//                 console.log("Speed and stylish performance");
//                 break;
//                 default:
//                     console.log("We'll come up with the car features that u have asked for.");
// }

// eighteenth question
// console.log("🍽️ Menu:");
// console.log("Starters:");
// console.log("1. Roll");
// console.log("2. Soup:");
// console.log("Non-veg:");
// console.log("3. Chicken");
// console.log("4. Mutton");
// console.log("veg:");
// console.log("5. Aloo");
// console.log("6. Paneer");
// console.log("Desserts:");
// console.log("7. Cake");
// console.log("8. Thickshake");

// let foodItem = parseInt(
//   prompt("Select your favourite food item number from the list:")
// );

// switch (foodItem) {
//   case 1:
//     console.log("You selected 🌯 Roll. Great for a starter!");
//     break;
//   case 2:
//     console.log("You selected 🍲 Soup. Great for a starter!");
//     break;
//   case 3:
//     console.log("You selected 🍗 Chicken. Let's jump in to the main-course.");
//     break;
//   case 4:
//     console.log("You selected 🍖 Mutton. Let's jump in to the main-course.");
//     break;
//   case 5:
//     console.log("You selected 🥔 Aloo. Let's jump in to the main-course.");
//     break;
//   case 6:
//     console.log("You selected 🧀 Paneer. Let's jump in to the main-course.");
//     break;
//   case 7:
//     console.log("You selected a 🍰 Cake. Enjoy your dessert!.");
//     break;
//   case 8:
//     console.log("You selected a 🥤 Thickshake. Enjoy your dessert!.");
//     break;
//     default:
//         console.log("🍚 Biryani is a good choice! (Veg or Non-veg)?");
// }
