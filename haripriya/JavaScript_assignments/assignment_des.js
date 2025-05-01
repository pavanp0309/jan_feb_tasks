
// first question
const numbers = [1, [2, 3, [4, 5]]];

function extractNumbers([first, [second, , nested]]){
    console.log(`First:${first}, Second:${second}, Nested:[${nested}]`);   // First:1, Second:2, Nested:[4,5]
}
extractNumbers(numbers);

// second question
const developer = { name:'Eve', skills: ['HTML', 'CSS', 'JavaScript']};
function listSkills({name, skills}){
    console.log(`${name}'s skills:`);     // Eve's skills:
        skills.forEach(skill => console.log(skill));  // HTML
                                                     // CSS
                                                     // JavaScript
}
listSkills(developer);


// third question
const user = { id:1, personalinfo: { name:'Frank', email:'frank@example.com', address: { city:'Paris', country:'France'},},};
function getUserInfo({personalinfo:{name, email, address:{city}}}){
    console.log(`Name: ${name}, Email: ${email}, City: ${city}`);   // Name: Frank, Email: frank@example.com, City: Paris
}
getUserInfo(user);

// fourth question
const user1 = { name:'Grace'};
function displayUserInfo({name:userName, age=25}){
    console.log(`User:${userName}, Age:${age}`); //User:Grace, Age:25
}
displayUserInfo(user1);

// fifthe question
const user2 = { name:'Hank', email:'hank@example.com', age:40 };

function createUserObject({name, email}){
    return {name, email}
}
console.log(createUserObject(user2));  // {name: 'Hank', email: 'hank@example.com'}

// sixth question
let x = 5, y = 10;
function swapVariables(){
     [x, y] = [y, x]
}
swapVariables();
console.log(`X:${x}, y:${y}`);  // X:10, y:5

// seventh question
const person1 = { name:'Ivy', country:'USA', city:'Seattle' };
function displayPerson({name, age=30, ...details}){
    console.log(`Name: ${name}, Age: ${age}, Details:`, details);  // Name:Ivy, Age:30, Details: {country: 'USA', city: 'Seattle'}
}
displayPerson(person1);

// eighth question
const person = {firstName:'Jack', lastName:'Smith', age:28};
function logProperties(person){
    Object.keys(person).forEach(key => console.log(`${key}:${person[key]}`));    // firstName:Jack
                                                                                // lastName:Smith
                                                                                // age:28
}
logProperties(person);

// ninth question
function getData(){
    return {id:123, name:'Kate', role:'Developer'};
}
const {id, name, role} = getData();
console.log(`ID:${id}, Name:${name}, Role:${role}`);  // ID:123, Name:Kate, Role:Developer


// tenth question
function getScores(){
    return [85, 90, 95];
}
const [math, science, english]  = getScores();
console.log(`Math:${math}, Science:${science}, English:${english}`);  // Math:85, Science:90, English:95

// eleventh question
const books= [{title:'Book A', author:'Author A'}, {title:'Book B', author:'Author B'},];
function logBooks(books){
    books.forEach(({title, author}) => {console.log(`Title: ${title}, author: ${author}`)});
}
logBooks(books);
// Title: Book A, author: Author A
// Title: Book B, author: Author B


// twelfth question
const data = { user: { id:1, name:'Liam'}, meta: { role:'Admin'}};
function dynamicExtract({meta:{role: value}}){
    console.log(`Value: ${value}`);
}
dynamicExtract(data, 'role');