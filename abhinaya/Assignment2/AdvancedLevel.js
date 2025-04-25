//Q1
let age1 = parseFloat(prompt("Enter age:"));
let res = (age1 >=18) ? "Adult" : "Minor";
console.log(res)

//Q2
let currTemp = parseFloat(prompt("Enter current temperature"))
let tempType = (currTemp >30) ? "Hot" : "Cold"
console.log(tempType)

//Q3
let score = parseFloat(prompt("Enter marks out of 100:"))
let result = (score >= 50 ) ? "Pass" : "Fail"
console.log(result)

//Q4
let purchaseAmt = parseFloat(prompt("Enter the purchase amount:"));
let discount = purchaseAmt > 100 ? purchaseAmt *0.10 : purchaseAmt*0.05;
let finalTotal = purchaseAmt - discount;
console.log("Final amount affter applying discount is: ",finalTotal); 

//Q5
let age2 = parseFloat(prompt("Enter age: "));
let ageGroup = (age2 < 13 ) ? "Child" : ((age2 >= 13 && age2 <= 19) ? "Teen" : ((age2 >= 20 && age2 <= 59) ? "Adult" : "Senior"));
console.log(ageGroup);

//Q6
let weight = parseFloat(prompt("Enter the weight of a package in kg: "));
let loc = prompt("Enter location:").toLowerCase();
let shippingFee = (loc=="domestic") ? (((weight<1) ? "5$" : ((weight>=1 && weight <=5) ? "10$" : "20$"))) :
                  (loc = "international") ? ((weight<1) ? "10$" : ((weight>=1 && weight <=5) ? "25$" : "50$")) : "Invalid Location";
console.log(shippingFee)                
