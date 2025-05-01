// first question
let purchaseAmt = parseFloat(prompt("Enter your purchase amount:"));
if (isNaN(purchaseAmt) || purchaseAmt < 0){
alert("❌Enter a valid input.");
}

let disc_percent = 0;

if (purchaseAmt >= 2000 && purchaseAmt < 4000){
    disc_percent = 0.20;
}else if(purchaseAmt >= 4000 && purchaseAmt < 6000){
    disc_percent = 0.25;
}else if(purchaseAmt >= 6000 && purchaseAmt < 8000){
    disc_percent = 0.30;
}else if(purchaseAmt >= 8000 && purchaseAmt < 10000){
    disc_percent = 0.35;
}else if(purchaseAmt >= 10000){
    disc_percent = 0.40;
}else{
    disc_percent = 0.05;
}

let discAmt = purchaseAmt * disc_percent;
let finalAmt = purchaseAmt - discAmt;

console.log(`Purchase Amount = Rs. ${purchaseAmt}`);
console.log(`Discount = ${disc_percent * 100}%`);
console.log(`final Amount = ${finalAmt.toFixed(2)}`);

// second question
// let carType = prompt("Enter the car type (Sedan, SUV, Economy, Luxury):").toLowerCase();
// let days = parseInt(prompt("Enter the no. of rental days:"));
// let gps = prompt("Do you need GPS service? (yes/no)").toLowerCase();
// let babySeat = prompt("Do you need a Baby Seat? (yes/no)").toLowerCase();
// let extraDriver = prompt("Do you need an Extra Driver? (yes/no)").toLowerCase();

// if (isNaN(days) || days < 0){
//     alert("❌Invalid input.");
// }

// let basicAmt = 0;
// let total;

// if (carType === "sedan"){
//     basicAmt = 3000;
// }else if (carType === "suv"){
//     basicAmt = 4000;
// }else if (carType === "economy"){
//     basicAmt = 2000;
// }else if (carType === "luxury"){
//     basicAmt = 6000;
// }else{
//     alert("❌Sorry! Car Type not available.");
// }

// if(basicAmt > 0){
//    total  = basicAmt * days;
// }

// if (gps === "yes"){
//     total += 300;
// }

// if (babySeat === "yes"){
//     total += 200;
// }

// if (extraDriver === "yes"){
//     total += 1000;
// }

// console.log(`Car Type: ${carType}`);
// console.log(`No. of rental days: ${days}`);
// console.log(`GPS Service: ${gps}`);
// console.log(`Baby seat required: ${babySeat}`);
// console.log(`Extra Driver needed: ${extraDriver}`);
// console.log(`Since you've selected ${carType}, you are charged a basic price of Rs. ${basicAmt}`);
// console.log(`With all the additional services and the no. of rental days added, you're required to pay a total charge of: Rs. ${total} `);

// third question
// let age = parseInt(prompt("Enter your age:"));
// let distance = parseFloat(prompt("Enter your travel distance:"));
// let unit = prompt("Enter distance unit: (km/m").toLowerCase();
// if (unit === "km"){
//     distance = distance * 1000;
// }else if (unit !== "m"){
//     alert("❌Wrong unit input.");
// }

// if(isNaN(age) || isNaN(distance) || age < 0 || distance < 0){
//     alert("❌Invalid input, please check.");
// }

// let fare = 0;
//  if (age <= 10){
//     fare = 20;
//  }else if (age > 10 && age <= 20 && distance <= 1000){
//     fare = 30;
//  }else if (age > 10 && age <= 20 && distance > 1000 && distance <= 2000){
//     fare = 40;
//  }else if (age > 10 && age <= 20 && distance > 2000){
//     fare = 50;
//  }else if (age > 20 && age <= 70 && distance <= 1000){
//     fare = 40;
//  }else if (age > 20 && age <= 70 && distance > 1000 && distance <= 2000){
//     fare = 50;
//  }else if (age > 20 && age <= 70 && distance > 2000){
//     fare = 70;
//  }else if (age > 70  && distance <= 2000){
//     fare = 30;
//  }else if (age > 70  && distance > 2000){
//     fare = 50;
//  }else {
//     console.log("Error");
//  }

//  console.log(`Age: ${age}`);
//  console.log(`Travel Distance: ${distance}m`);
//  console.log(`Bus Fare: ${fare}`);

// fourth question
// let sharpItems = prompt("Are any sharp items (scissors, knives, cutters) found? (yes/no)").toLowerCase();
// let liqItems = prompt("Are any liquid items with quantity above 100ml found? (yes/no)").toLowerCase();
// let otherItems = prompt("Are any other restrictable items (aerosols, dead battery cells, pepper spray, lighter, etc) found? (yes/no)").toLowerCase();

// if (!isNaN(sharpItems) || !isNaN(liqItems) || !isNaN(otherItems) || !["yes", "no"].includes(sharpItems) ||
// !["yes", "no"].includes(liqItems) || !["yes", "no"].includes(otherItems))
// {
//     alert("❌Invalid input");
// }

//  console.log("✈️👩‍✈️Airport Security Check!");

// if (sharpItems === "no" && liqItems === "no" && otherItems === "no"){
//     console.log(`Sharp Items Found: ${sharpItems}`);
//     console.log(`Liquid Items Found: ${liqItems}`);
//     console.log(`Other Items Found: ${otherItems}`);
//     console.log("✅ You're clear to pass through airport security.");
// }else if (sharpItems === "yes" && liqItems === "no" && otherItems === "no"){
//     console.log(`Sharp Items Found: ${sharpItems}`);
//     console.log("❌Please drop the sharp items you're carrying in your luggage in order to pass through airport security.");
// }else if (liqItems === "yes" && otherItems === "no"){
//     console.log(`Liquid Items Found: ${liqItems}`);
//     console.log("❌You're not allowed to carry any kind of liquids with quantity above 100ml. Please drop them here and pass through.")
// }else if (otherItems === "yes"){
//     console.log(`Other Items Found: ${otherItems}`);
//     console.log("❌Please sit back until the custom officers take the charge.")
// }else{
//     console.log("❌Error");
// }

// fifth question
// let camera = prompt("Is camera your top priority in a mobile phone? (yes/no)").toLowerCase();
// let batteryLife = prompt("Are you looking for a mobile phone with more battery life? (yes/no)").toLowerCase();
// let budget = prompt("Are you looking for a budget-friendly mobile? (yes/no)").toLowerCase();
// console.log(`camera = ${camera}`);
// console.log(`battery life = ${batteryLife}`);
// console.log(`budget = ${budget}`);
// if (camera === "yes" && batteryLife === "yes" && budget === "yes"){
//     console.log("We recommend Oppo for you! 📱");
// }else if (camera === "yes" && batteryLife === "yes" && budget === "no"){
//     console.log("We recommend Iphone for you! 📱");
// }else if (camera === "yes" && batteryLife === "no" && budget === "yes"){
//     console.log("We recommend Vivo for you! 📱");
// }else if (camera === "no" && batteryLife === "yes" && budget === "yes"){
//     console.log("We recommend Xiaomi for you! 📱");
// }else if (camera === "no" && batteryLife === "yes" && budget === "no"){
//     console.log("We recommend Samsung for you! 📱");
// }else{
//     console.log("please place an order for your favourite mobile, while we'll try our best to get it within 3 working days.");
// }

// sixth question
// birthday, house warming ceremony, retirement, promotion/hike, marriage anniversary
// let occasion = prompt("Enter the occasion (birthday, marriage anniversary, house warming ceremony, retirement, promotion/hike").toLowerCase();
// let age = parseInt(prompt("Enter the recipient's age:"));
// if (isNaN(age) || age < 0){
//     alert("❌Invalid input");
// }
// console.log(`occasion = ${occasion}`);
// console.log(`age = ${age}`);

// if (occasion === "birthday"){
//     if (age <= 12){
//         console.log(`Gift a good toy like a teddy bear🧸, a remote car🚗 or stationery kit✒️`);
//     }else if (age > 12 && age <= 22){
//         console.log(`Gift a dress👗 if it's a girl or a paly station🎮 if it's a boy`);
//     }else if (age > 22 && age <= 50){
//         console.log(`Gift a smart watch⌚ or earphones`);
//     }else {
//         console.log(`Gift a shirt👔 for men or a chain/pearls📿🫧`)
//     }
// }else if (occasion === "marriage anniversary"){
//     if (age >= 25 && age <= 40){
//         console.log(`Gift a photo frame🖼️ or a camera📸 or trip vouchers✈️`);
//     }else if (age > 40 && age >= 65){
//         console.log(`Gift trip vouchers✈️ or home decor🎐`);
//     }else if (age > 65){
//         console.log(`Gift a premium collection shawls🧣, a gramophone/radio📻 or a plant/tree🎋 to show their bond growth over years`);
//     }
// }else if (occasion === "house warming ceremony"){
//     if (age >= 25 && age <=55){
//         console.log(`Gift a flower vase🌹, kitchen set🍽️`);
//     }else {
//         console.log(`Gift a clock🕛`);
//     }
// }else if (occasion === "retirement"){
//     if (age >= 65){
//         console.log(`Gift a relaxing chair💺 or a Bhagwad Gita📙`);
//     }else {
//         console.log(`Gift a fountain pen🖊️`);
//     }
// }else if (["hike", "promotion", "hike/promotion"].includes(occasion)){
//     if (age >= 25 && age <=35){
//         console.log(`Gift heels👠 for females or airdopes🎧 for males`);
//     }else if (age > 35 && age <= 60){
//         console.log(`Gift a laptop bag💼 or a wireless mouse🖱️`);
//     }else{
//         console.log(`Gift a mug🥤 or champagne🍾`);
//     }
// }else {
//     console.log(`Gift chocolates🍫, wallet🟫, a basket of food goodies🧺 or goggles🕶️`);
// }

// seventh question
// let age = parseInt(prompt("Enter your age:"));
// let time = parseInt(prompt("Enter show time in 24-hour format (e.g., 10 for 10 AM, 18 for 6 PM):"));

// let price;

// if (isNaN(age) || age < 0 || isNaN(time) || time < 0 || time > 23){
//     alert("❌Invalid input");
// }else {
//      price = 0;
// }

// if (age <= 12){
//     price = 100;
// }else if (age > 12 && age <= 30){
//     price = 200;
// }else if (age > 30 && age <= 60){
//     price = 150;
// }else {
//     price = 80;
// }

// if (time <= 12){
//     price -= 20;
// }else {
//     price += 30;
// }

// console.log(`Age: ${age}`);
// if (time <= 12){
//     console.log(`Time: ${time} am`);
// }else {
//     console.log(`Time: ${time} pm`);
// }

// console.log(`🎬 Final ticket price: ${price}`);

// eighth question
// education, experience, interview performance
// let education = prompt("Enter highest educational qualification (btech or degree - do not include any special characters like a dot or etc):").toLowerCase();
// let experience = parseFloat(prompt("Enter experience of the candidate(mention '0' for fresher)"));
// let intPerformance = parseInt(prompt("Rate the performance in interview (1-5)"));

// if (!["btech", "degree"].includes(education)){
//     alert("❌Only B. Tech. or degree (engineering) students accepted.");
// }else if (isNaN(experience) || experience < 0 || isNaN(intPerformance) || intPerformance <= 0){
//     alert("❌Invalid input");
// }

// console.log(`Educational Qualification: ${education}`);
// if (experience === 0){
//     console.log("Experience: Fresher");
// }else {
//     let yearSpell = (experience === 1) ? "year" : "years";
//     console.log(`Experience: ${experience} ${yearSpell}`);
// }
// console.log(`Performance in Interview (1 - 5 rating): ${intPerformance}`);

// if (education === "btech" && experience === 0 && intPerformance >= 3 && intPerformance <= 5){
//     console.log("Congratulations🎉 You're selected for Developer role🤝");
// }else if (education === "btech" && experience >= 1 && experience < 4 && intPerformance >= 3 && intPerformance <= 5){
//     console.log("Congratulations🎉 You're selected for Associate Developer role🤝");
// }else if (education === "btech" && experience >= 4 && experience <= 8 && intPerformance >= 3 && intPerformance <= 5){
//     console.log("Congratulations🎉 You're selected for Software Engineer role🤝");
// }else if (education === "btech" && experience >= 9 && intPerformance >= 3 && intPerformance <= 5){
//     console.log("Congratulations🎉 You're selected for Senior Software Engineer role🤝");
// }else if (education === "btech" && intPerformance < 3){
//     console.log("Sorry! Not selected");
// }else if (education === "degree" && experience === 0 && intPerformance >= 4 && intPerformance <= 5){
//     console.log("Congratulations🎉 You're selected for Associate Developer role🤝");
// }else if (education === "degree" && experience >= 1 && experience < 4 && intPerformance >= 4 && intPerformance <= 5){
//     console.log("Congratulations🎉 You're selected for Associate Developer role🤝");
// }else if (education === "degree" && experience >= 4 && experience <= 8 && intPerformance >= 4 && intPerformance <= 5){
//     console.log("Congratulations🎉 You're selected for Associate Developer role🤝");
// }else if (education === "degree" && experience >= 9 && intPerformance >= 4 && intPerformance <= 5){
//     console.log("Congratulations🎉 You're selected for Associate Developer role🤝");
// }else if (education === "degree" && intPerformance < 4) {
//     console.log("Sorry! Not selected");
// }else {
//     console.log("❌error")
// }

// ninth question
// let time = parseInt(prompt("Enter time of the day (Use 24 hour format like 13 for 1pm):"));
// if (isNaN(time) || time < 0 || time > 23){
//     alert("❌Invalid input");
// }else if (time < 12){
//     console.log(`⏰Time: ${time} am`);
// }else {
//     console.log(`⏰Time: ${time} pm`);
// }

// if (time < 12){
//     console.log("Breakfast: Bread🍞, Eggs🥚, Coffee☕");
// }else if (time >= 12 && time < 16){
//     console.log(`Lunch: Rice and curry🍚🍛 or Sandwich🥪`);
// }else if (time >= 16 && time <= 18){
//     console.log("Snacks: Tea🍵 and refreshments🥐🥖");
// }else {
//     console.log("Dinner: Rice and curry🍚🍛 or Noodles🍜");
// }

// tenth question
// let x = parseFloat(prompt("Enter the value for X:"));
// let y = parseFloat(prompt("Enter the value for Y:"));

// console.log("Coordinate System - Quadrant Determination");
// console.log(`(x,y) = (${x},${y})`);

// if (isNaN(x) || isNaN(y)) {
//   alert("❌Error");
// } else if (x > 0 && y > 0) {
//   console.log("📍 The point lies in Quadrant-I");
// } else if (x < 0 && y > 0) {
//   console.log("📍 The point lies in Quadrant-II");
// } else if (x < 0 && y < 0) {
//   console.log("📍 The point lies in Quadrant-III");
// } else if (x > 0 && y < 0) {
//   console.log("📍 The point lies in Quadrant-IV");
// } else if (x === 0 && y !== 0) {
//   console.log("📍 The point lies on X-axis");
// } else if (x !== 0 && y === 0) {
//   console.log("📍 The point lies on Y-axis");
// } else {
//   console.log("📍 The point lies on Origin");
// }
