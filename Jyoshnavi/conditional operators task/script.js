
// Assignment-1(conditional statements)
//  Level-1
//  1. Get user input using the prompt(“Enter your age:”). If the user is
//  18 or older, give feedback: ' You are old enough to drive' but if
//  not 18 give another feedback stating to wait for the number of
//  years he needs to turn 18.

        // let age=parseInt(prompt("Enter your age:"))
        // function eligibilityCheck(age){
        //     if(age>=18){
        //         console.log("You are old enough to drive")
        //     } else{
        //         let no_of_turns = 18 - age
        //         console.log("wait for " + no_of_turns + " years to turn 18")
        //     }
        // }

        // eligibilityCheck(age)


//  2. Compare the values of myAge and yourAge using if … else. Based on
//  the comparison and log the result to console stating who is older (me
//  or you). Use prompt(“Enter your age:”) to get the age as input.
        // let myAge = 30
        // let yourAge = parseInt(prompt("Enter Your age: "))
        // if(myAge>yourAge) {
        //     console.log("My Age:" + myAge, "Your Age:" + yourAge)
        //     console.log("Iam Older than you")
        // } else{
        //     console.log("My Age:" + myAge, "Your Age:" + yourAge)
        //     console.log("You are older than me")
        // }

//  3. Even numbers are divisible by 2 and the remainder is zero. How do
//  you check, if a number is even or not using JavaScript?
        // let n
        // function comparision(n) {
        //     if(n/2 == 0) {
        //         console.log( n +" is an even number")
        //     } else {
        //         console.log( n+" is an odd number")
        //     }
        // }

        // comparision(7)

//  4. Determine if a number is positive, negative, or zero.
        // function positiveOrNegative(n){
        //     if(n>0) {
        //         console.log(n + "is a positive value")
        //     } else if(n<0){
        //         console.log(n + "is a negative value")
        //     } else{
        //         console.log(n + "is a equal to zero")
        //     }
        // }

        // positiveOrNegative(-8)

//  5. Check if a number is even or odd
        // let n
        // function isEven(n){
        //         if(n%2 ==0) {
        //                 console.log("given number is an even number");
        //         } else{
        //                 console.log("the given number is an odd number")
        //         }
        // }
        // isEven(3)

//  6. Determine the largest among three numbers using nested if-else.
        // let a = parseInt(prompt("enter a value"))
        // let b =  parseInt(prompt("enter c value"))
        // let c =  parseInt(prompt("enter a value"))
        // let message

        // if(a>b && a>c) {
        //     message="a is the greatest number"
        // } else if(b>a && b>c) {
        //     message="b is the greatest number"
        // } else if(c>a && c>b) {
        //     message="c is the greatest number"
        // }

        // console.log(message)

//  7. Determine the grade based on a score.
        // let score
        // let message
        // function checkRanks(score){
        //         if(score>=80) {
        //                 message = "you get first rank";
        //         } else if(score>=70) {
        //                 message = "you get second rank";
        //         }else if(score>=50) {
        //                 message = "you get third rank";
        //         } else {
        //                 message = "Try hard you are failed"
        //         }
        // }
        // checkRanks(70)
        // console.log(message)

//  8. Determine the type of triangle (equilateral, isosceles, or scalene)
        // let side1
        // let side2
        // let side3

        // function equilatoralOrNot( side1, side2, side3) {
        //     if (side1 == side2 && side1 == side3 && side2 == side3) {
        //         console.log("This is an Equilatoral triangle")
        //     } else if( side1 == side2 || side1 == side3 || side2 == side3) {
        //         console.log("This is an Isolated triangle")
        //     } else{
        //         console.log("this is an scalen triangle")
        //     }
        // }

        // equilatoralOrNot(10,11,10)

//  9. Check if the season is Autumn, Winter, Spring, or Summer. If the user
//  input is :
//  a. September, October, or November, the season is Autumn.
//  b. December, January, or February, the season is Winter.
//  c. March, April, or May, the season is Spring
//  d. June, July, or August, the season is Summer
        // let month
        // function seasonCheck(month){
        //     if(month == "september" || month== "october" || month=="november"){
        //         console.log("the season is Autumn")
        //     } else if(month == "december" || month== "january" || month=="february"){
        //         console.log("the season is winter")
        //     }else if(month == "march" || month== "april" || month=="may"){
        //         console.log("the season is spring")
        //     } else if(month == "june" || month== "july" || month=="august"){
        //         console.log("the season is summer")
        //     } else{
        //         console.log("please enter correct month")
        //     }
        // }
        // seasonCheck("march")

//  10. Check if a day is a weekend day or a working day. Your script will
//  take the day as input.
        // let day=prompt("plese enter the day").toLowerCase()

        // function dayCheck(day){
        //     if(day == "monday" || day == "tuesday" || day == "wednesday" || day == "thursday" || day =="friday") {
        //         console.log(day +" is a working day")
        //     } else if( day == "saturday" || day == "sunday"){
        //         console.log(day +" is a weekend day")
        //     } else {
        //         console.log("please enter correct day")
        //     }
        // }
        // dayCheck(day)

//  11. Determine the eligibility for a discount based on age and purchase
//  amount
//  1. age >=60
//  2.purchaseAmount > 500 print the Discount of 20% else 10%
//  3.purchaseAmount > 1000 print the Discount of 15%" else no
//  discount is available.
        // let age
        // let purchaseAmount

        // function DiscountProvided( age, purchaseAmount) {
        //     if(age>=60) {
        //         if(purchaseAmount>500) {
        //             console.log("You get 20% discount")
        //         }  else{
        //             console.log("you get 10% discount")
        //         }
        //     } else  if(purchaseAmount>1000){
        //         console.log("You get 15% discount")
        //     }else{
        //         console.log("no discount available")
        //     }
        // }

        // DiscountProvided(60, 100)


// Level-2
//  1. Write a code that can give grades to students according to theirs scores:
//  80-100, A
//  70-89, B
//  60-69, C
//  50-59, D
//  0-49, F
        // let score
        // function studentsGrading(score) {
        //     if(score>=80){
        //         console.log("Grade is A")
        //     } else if(score >=70) {
        //         console.log("Grade is B")
        //     } else if(score >=60){
        //         console.log("Grade is C")
        //     } else if(score >=50){
        //         console.log("Grade is D")
        //     } else {
        //         console.log("Fail")
        //     }
        // }
        // studentsGrading(65)

//  2. Write a program that tells the number of days in a month.
//  3. Write a program determining whether a given number is positive, negative,
//  or zero.
        // let n
        // let message
        // function isPositive(n){
        //         if(n<0){
        //                 message="given number is negative"
        //         } else if(n>0){
        //                 message="given number is positive"
        //         }else {
        //                 message="given number is zero"
        //         }
        // }
        // isPositive(0)
        // console.log(message)

//  4. Aprogram checks whether a given letter is a vowel or a consonant.
                // let letter = ""
                // function isVowel(letter){
                //         if(letter == "a" || letter == "e" || letter == "i" ||letter== "o" || letter== "u"){
                //                 console.log(letter + " is an vowel")
                //         } else{
                //                 console.log(letter + " is a consonent")       
                //         }
                // }
                // isVowel("e")

//  5. Write a program that categorizes a user's age into "child," "teenager,"
//  "adult," or "senior."
        // let age 
        // let message
        // function ischild(age){
        //         if(age<=10){
        //                 message ="you are children"
        //         } else if(age<=18){
        //                 message = "you are teenager"
        //         } else if(age<=40){
        //                 message = "you are adult"
        //         } else{
        //                 message = "you are senior"
        //         }
        // }
        // ischild(350)
        // console.log(message)
//  6. Build a program that validates a username. If it's less than 6 characters,
//  print a warning; otherwise, print a welcome message.
        // let password = prompt("please enter password")
        // function passwordValidation(password){
        //     if(password.length <6){
        //         console.log("Please enter valid password, it should graterthan 6 charectors")
        //     } else{
        //         console.log("welcome to our page")
        //     }
        // }
        // passwordValidation(password)

//  7. Write a script that checks if a given string has more than 10 characters.
        // let text
        // function lenghtCheck(text){
        //     if(text.length > 10) {
        //         console.log("given string has more than 10 characters")
        //     } else {
        //         console.log("given string not has more than 10 characters")
        //     }
        // }
        // lenghtCheck("12345jklkjlkjlkn")

//  8. Write a program that categorizes a book based on its genre (fiction,
//  non-fiction, science fiction, mystery, etc.)
//  9. Implement a script that greets the user based on the time of day (morning,
//  afternoon, evening) using nested if-else statements.
        // let time
        // function timeCheck(time){
        //     if(time <=11){
        //         console.log("Morning")
        //     } else if(time <=15){
        //         console.log("afternoon")
        //     } else if(time<=18){
        //         console.log("evening")
        //     } else{
        //         console.log("night")
        //     }
        // }
        // timeCheck(5)

//  10.Create a program that categorizes a number as "small" if it's less than 10,
//  "medium" if it's between 10 and 50, and "large" if it's greater than 50 using
//  nested if statements.
                // let n
                // function numberCheck(n){
                //         if(n<10){
                //                 console.log("Small number")
                //         } else if(n<50){
                //                 console.log("Medium number")
                //         } else {
                //                 console.log("large number")
                //         }
                // }
                // numberCheck(45)

//  11. Build a program that categorizes a temperature as "low," "medium," or
//  "high" based on certain temperature thresholds using nested if
//  statements.
//  12.Write a program using a switch statement that takes a number
//  representing a day of the week (1 for Sunday, 2 for Monday, etc.) and
//  prints the corresponding day.
                // let number =5
                // switch(number){
                //         case 1:
                //                 console.log("Sunday");
                //                 break;
                //         case 2:
                //                 console.log("Monday");
                //                 break;
                //         case 3:
                //                 console.log("Tuesday");
                //                 break;
                //         case 4:
                //                 console.log("Wednesday");
                //                 break;
                //         case 5:
                //                 console.log("Thursday");
                //                 break;z
                //         case 6:
                //                 console.log("friday");
                //                 break;
                //         case 7:
                //                 console.log("Saturday");
                //                 break;
                //         default:
                //                 console.log("Choose the bumber");
                //                 break;
                // }

//  13.Implement a script using a switch statement that takes a number
//  representing a month (1 for January, 2 for February, etc.) and prints the
//  corresponding month name.
                // let month = 5
                // switch(month){
                //         case 1:
                //                 console.log("January");
                //                 break;
                //         case 2:
                //                 console.log("February");
                //                 break;
                //         case 3:
                //                 console.log("March");
                //                 break;
                //         case 4:
                //                 console.log("Apirl");
                //                 break;
                //         case 5: 
                //                 console.log("May");
                //                 break;
                //         case 6:
                //                 console.log("June");
                //                 break;
                //         case 7:
                //                 console.log("July");
                //                 break;
                //         case 8:
                //                 console.log("August");
                //                 break;
                //         case 9:
                //                 console.log("September");
                //                 break;
                //         case 10:
                //                 console.log("October");
                //                 break;
                //         case 11:
                //                 console.log("November");
                //                 break;
                //         case 12:
                //                 console.log("December");
                //                 break;
                //         default:
                //                 console.log("Choose correct month");
                //                 break;
                // }

//  14.Based on user input, create a program with a switch statement that
//  simulates a traffic light sequence (red, yellow, green).
                // let signalColor = prompt("Please enter Signal color").toLowerCase()
                // switch(signalColor){
                //         case "red":
                //                 console.log("Please stop the vehical");
                //                 break;
                //         case "green":
                //                 console.log("You can go now");
                //                 break;
                //         case "yellow":
                //                 console.log("Go slow");
                //                 break;
                //         default:
                //                 console.log("Have a safe Journey");
                //                 break;
                // }


//  15.Create a program using a switch statement that classifies a season
//  (spring, summer, fall, winter) based on a given month
                // let month = "September".toLowerCase()
                // // month.toLowerCase
                // switch(month){
                //         case "september": case "october": case "november":
                //         // (month == "september" || month== "october" || month=="november"):
                //                 console.log("the season is Autumn");
                //                 break;
                //         case "december": case "january": case "february":
                //                 console.log("the season is winter");
                //                 break;
                //         case "june": case "july" : case "august":
                //                 console.log("the season is summer");
                //                 break;
                //         default:
                //                 console.log("please enter correct month");
                //                 break;
                // }

//  16.Write a script with a switch statement that generates the sound of an
//  animal-based on user input (dog, cat, bird).
                // let animal = "bird"

                // switch(animal){
                //         case "dog":
                //                 console.log("barking");
                //                 break;
                //         case "cat":
                //                 console.log("meow");
                //                 break;
                //         case "bird":
                //                 console.log("chrips");
                //                 break;
                //         default:
                //                 console.log("any any animal in dog, cat, bird");
                //                 break;
                // }

// 17.Implement a script with a switch statement that advises a car model based
//  on user preferences (sedan, SUV, sports car)
// User preference
                // let carType = prompt("What type of car do you prefer? (sedan, SUV, sports car)").toLowerCase();

                // let recommendation;

                // switch (carType) {
                // case "sedan":
                //         console.log("We recommend the Honda Accord or Toyota Camry.");
                //         break;
                // case "suv":
                //         console.log("You might like the Toyota RAV4 or Honda CR-V.");
                //         break;
                // case "sports car":
                //         console.log("Check out the Ford Mustang or Chevrolet Corvette.");
                //         break;
                // default:
                //         console.log( "Sorry, we don't that type you give.");
                // }


//  18.Create a program that displays a menu and allows the user to select a
//  food item using a switch statement.
                // let foodItem = prompt("Plese select an item frim meals, Biryani, Pizza, Curries, Ice Cream").toLowerCase();
                // switch(foodItem){
                //         case "meals":
                //                 console.log("Thanks for your order, we receive your order meals");
                //                 break;
                //         case "biryani":
                //                 console.log("Thanks for your order, we receive your order biryani");
                //                 break;
                //         case "pizza":
                //                 console.log("Thanks for your order, we receive your order pizza");
                //                 break;
                //         case "curries":
                //                 console.log("Thanks for your order, we receive your order curries");
                //                 break;
                //         case "ice cream":
                //                 console.log("Thanks for your order, we receive your order ice cream");
                //                 break;
                //         default:
                //                 console.log("Thanks for your order, but we dint found the order you selected");
                //                 break;
                // }



//  Level-3
//  1. Write a program that calculates the discount percentage based on the purchase
//  amount and applies different discount rates using nested if statements.
        // let purchaseAmount
        // let message
        // function isGetDiscount(purchaseAmount){
        //         if(purchaseAmount>2000){
        //                 message = "you get 20% discount"
        //         } else if(purchaseAmount>1500){
        //                 message = "you get 15% discount"
        //         } else if(purchaseAmount>1000){
        //                 message = "you get 10% discount"
        //         } else if(purchaseAmount>500){
        //                 message = "you get 5% discount"
        //         } else {
        //                 message = "sorry, you dont get any discount"
        //         }
        // }
        // isGetDiscount(400)
        // console.log(message)

//  2. Write a program that estimates the cost of renting a car based on the type of car,
//  rental duration, and additional services using nested if statements.
        // let car
        // let message
        // let duration
        // function rentPrice(car,duration){
        //         if(car == "minivan"){
        //                 message = "rent is " + duration*2000
        //         } else if(car == "sedan"){
        //                 message = "rent is: " + duration*3000
        //         } else if(car == "Luxury"){
        //                 message = "rent is: " + duration*4000
        //         } else {
        //                 message = "plese select the car type"
        //         }
        // }
        // rentPrice("honda",2)
        // console.log(message)

//  3. Build a program that calculates the bus fare for a passenger based on their age
//  and travel distance using nested if statements.
        // let age
        // let travelDistance
        // let farePerKm = 6 //ticket price per km
        // let busFare
        // let message
        // function isEligible(age,travelDistance){
        //         if(age<5){
        //                 message = " you are eligible for free journey, your bus far is 0"
        //         } else if(age>50){
        //                 busFare = travelDistance * farePerKm/2
        //                 message = "you have 50% off on ticket price, your bus fare is: " + busFare
        //         } else {
        //                 busFare = travelDistance*farePerKm
        //                 message = "your bus fare is: " + busFare
        //         }
        // }
        // isEligible(30, 5)
        // console.log(message)

//  4. Create a script that checks if a passenger can pass through airport security
//  based on the items in their luggage using nested if statements.

//  5. Write a program that recommends a mobile phone based on the user's
//  preferences for camera, battery life, and budget using nested if statements.
        // let selectPreference = prompt("please select a feature(camera, battery life, budget)").toLowerCase()
        // let message
        // function isrecommended(selectPreference){
        //         if(selectPreference == "camera"){
        //                 message = "Oppo is recommendable for you"
        //         }else if(selectPreference == "battery life"){
        //                 message ="Realme is recommendable for you"
        //         } else if(selectPreference == "budget") {
        //                 message = "redme is recommendable for you"
        //         } else{
        //                 message =" plese select peferences you want"
        //         }
        // }
        // isrecommended(selectPreference)
        // console.log(message)
        
//  6. Create a script that helps the user select a gift based on the occasion and
//  recipient's age using nested if statements
        // let age = parseInt(prompt("please enter your age"))
        // let occasion = prompt("please enter the occation").toLowerCase()
        // let message
        // function suggestGift(age, occasion){
        //         if(occasion=="birthday"){
        //                 if(age<10){
        //                         message ="Toys are suggestable gifts"
        //                 } else if(age <25) {
        //                         message =" books or any useful personalised gifts are suggestable"
        //                 } else if(age<45) {
        //                         message =" family frames or any useful items are suggestible"
        //                 } else{
        //                         message ="any devotional books are suggestable"
        //                 }
        //         } else if(occasion == "Anniversary"){
        //                 if(age<35){
        //                         message = "couple rings are suggestible"
        //                 } else if(age <50){
        //                         message ="family frames or any useful items are suggestible"
        //                 } else {
        //                         message ="any devotional books are suggestable"
        //                 }
        //         } else{
        //                 message ="please select valid occation"
        //         }
        // }
        // suggestGift(30,"birthday")
        // console.log(message)

//  7. Build a program that calculates the price of a movie ticket based on the age of
//  the customer and the time of the movie using nested if statements.
        // let age
        // let movietime
        // let message
        // function ticketPrice(age, movietime){
        //         if(age<=10){
        //                 if(movietime == 10){
        //                         message="ticket price : 100rs"
        //                 } else if (movietime == 2){
        //                         message = "ticket price: 120rs"
        //                 } else{
        //                         message = "ticket price: 150rs"
        //                 }
        //         } else{
        //                 if(movietime == 10){
        //                         message="ticket price : 150rs"
        //                 } else if (movietime == 2){
        //                         message = "ticket price: 200rs"
        //                 } else{
        //                         message = "ticket price: 250rs"
        //                 }   
        //         }
        // }
        // ticketPrice(10,2)
        // console.log(message)    
        
//  8. Create a script that evaluates a job applicant based on their education,
//  experience, and interview performance using nested if statements.
        // let education ="bachelor's".toLowerCase()
        // let experience
        // let interviewPerformance
        // let message
        // function isSelected(education, experience, interviewPerformance){
        //         if(education == "Bachelor's"|| education == "B.tech"){
        //                 if(experience>=1){
        //                         if(interviewPerformance == "good"){
        //                                 message ="Congratulations!, you are selected"
        //                         }else{
        //                                 message = "better luck next time , your interview performance is poor"
        //                         }
        //                 }else{
        //                         message="your qualification is good, but candidate must have experiance"
        //                 }
        //         }  else {
        //                 message = "Graduation is manditory"
        //         }
        // }
        // // isSelected("tenth", 0, "good")
        // isSelected("Bachelor's", 0, "gppd")
        // console.log(message)

//  9. Build a program that advises the user on what to eat for different meals based on
//  the time of day using nested if statements.
        // let time
        // let message
        // function foodType(time){
        //         if(time<= 10){
        //                 message =" Breakfast is preferrable for you "
        //         } else if(time <=2){
        //                 message = " for luch meals or biryani is preferrable for you"
        //         } else if(time <=6){
        //                 message = " snake items like fruits or juices are preferrable for you"
        //         } else {
        //                 message = "for dinner roti or naans are preferrable for you"
        //         }
        // }
        // foodType(12)
        // console.log(message)

//  10.Implement a script that identifies the quadrant of a point (x, y) on a coordinate
//  plane using nested if statements

