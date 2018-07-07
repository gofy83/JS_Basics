// var, let, const

// var name = 'Norbi';
// console.log (name);

// let teamWinner = ('Italy');
// console.log(teamWinner);

// let employee;
// employee = {
//   name : 'Norbert Kovacs',
//   age : 35,
//   gender : 'male'
// }
// console.log(employee);

// // String type primitive 
// const name = 'Norbert';
// // Number type primitive
// const age = 35;
// // True or False type primitive
// const hasKids = true;
// // Null type primitive
// const hasCar = null;

// console.log (typeof hasCar);

//REFERENCE DATA TYPE
//Array
// const hobbies = ['movies', 'music', 'PS4', 'reading'];
// //Objext literal
// const address = {
//   city : 'Budapest',
//   street : 'Esze Tamas',
//   door : 12
// }

// const today = new Date();
// console.log(today);
// console.log(typeof today);

// Data Type conversion
// let val;

// //Number to string, wrap it in the String function
// val = String(5555);
// val = String(4+4);
// //Boolean to String
// val = String(true);
// //Date to String
// val = String(new Date());
// //Array to string
// val = String([1,2,3,4,5]);

// // toString()
// val = (45).toString();
// val = (true).toString();

// //String to numbers, wrapped to Number
// val = Number('5');
// //boolean to number
// val = Number(true);
// val = Number (false);
// val = Number (null);
// val = Number ('hello');

// //Output
// console.log(val);
// console.log(typeof val);
// //calling the lenght property of val. Lenght only works on strings
// //console.log(val.length);
// console.log(val.toFixed());



//Number and Math Objects
// const num1 = 100;
// const num2 = 50;
// let val;

// //Simple math with numbers
// val = num1 + num2;
// val = num1 - num2;
// val = num1 * num2;

// // Math Object
// val = Math.PI;

// console.log(val);



// //String Methods & Concatenation
// const firstName = 'William';
// const lastName = 'Johnson';
// const age = 35;
// const str = 'Hello there my name is Norbert';
// const tags = 'web development, programming, design';

// let val;

// val = firstName + lastName;

// //Concatenation
// val = firstName + ' ' + lastName;

// //Append
// val = 'Norbert ';
// val += 'Kovacs';

// //Escaping
// val = 'That\'s awesome, I can\'t wait';

// //Lenght
// val = firstName.length;

// // concat()
// val = firstName.concat(' ' + lastName);

// // change case
// val = firstName.toUpperCase();
// val = lastName.toUpperCase();
// val = firstName.toUpperCase() + ' ' + lastName.toUpperCase();

// // substring (az első négy karaktert kivesszük a firstName-ből)
// val = firstName.substring(0, 4);

// // slice (az első négy indexű betűt kiveszi a firstName-ből)
// val = firstName.slice(0, 4);

// // split
// val = str.split(' ');
// val = tags.split(',');

// // replace()
// val = str.replace('Norbert' ,'Béla');

// // includes()
// val = str.includes('Hello');
// val = str.includes('foo');

// console.log(val);



// // Template literals
// const name = 'John';
// const age = 30;
// const job = 'Web Developer';
// const city = 'Budapest';

// // Without template strings (es5 way)

//console.clear


// LOOPS

// // FOR LOOP - when you know how many runs you need
// //let's have i equals 0 and as long as it is smaller than 10, let's keep add 1 to it (i++ means i+1)
// for(let i = 0; i < 10; i++){
//   //console.log(i);
//   //console.log('Number ' + i);
//   if(i === 2){
//     console.log('2 is my favorite number');
//     //continue means keep going with the iteration so 'Number 2' will not be listed
//     continue;
//   }

//   if(i === 5){
//     //break - it breaks the iteration
//     break;
//   }

//   console.log('Number ' + i);
// }

// // WHILE LOOP

// let i = 0;

// while(i < 10){
//   console.log('Number ' + i);
//   i++;
// }

// // DO WHILE LOOP - the big difference compared to simeple WHILE that this one will run once no matter what

// let i = 0;
// do {
//   console.log('Number ' + i);
//   i++;
// }

// while(i < 10);

// Looping through array

//const car = ['Ford', 'Honda', 'Toyota', 'Chevy'];



/////////////////////////////
// MERGED HERE /////////////
///////////////////////////



// Arrays
// create arrays
/*
const numbers = [34, 56, 67, 46];
const number2 = new Array(34, 45, 64, 3);
const fruits = ['Apple', 'Orange', 'Lemon', 'Peach'];

let val;

//Get array lenght
val = numbers.length;
//Check if it is array
val = Array.isArray(numbers);
//Get single value
val = numbers[3];
val = numbers[0];
//Insert into arrays
numbers[2] = 100;
//Find index of value
val = numbers.indexOf(100);

//MUTATING ARRAYS
//Add on to the end
numbers.push(250);
//Add on to the front
numbers.unshift(10);
//Take off from end
numbers.pop();
//Take of from the front
numbers.shift();
//Splice values (where we want to start and where we want to end)
numbers.splice(1,1);
//Reverse array
numbers.reverse();
//Concatenate arrays
val = numbers.concat(number2);

console.log(val);
console.log(numbers);


// OBJECT LITERALS
const person = {
    firstName: 'Steve',
    lastName: 'Smith',
    age: 30,
    email: 'steve@aol.com',
    hobbies: ['music', 'sports'],
    address: {
        city: 'Rochester',
        state: 'MN',
    },
    getBirthYear: function(){
        return 1983;
    }
}

let val;
val = person;

//Get specific value
val = person.firstName;
val = person.age
val = person.getBirthYear;
//val megfelel az Array bizonyos számú elemével
val = person.hobbies[1];
val = person.address;
//val megfelel az Object bizonyos elemével
val = person.address.state;
val = person.getBirthYear();

console.log(val);

const people = [
    {name: 'Kevin', age: 30 },
    {name: 'John', age: 40},
];


// DATES & TIME
let val;

const today = new Date();
let birthday = new Date ('06-24-1983 22:45:12');
birthday = new Date ('June 24 1983');
birthday = new Date ('06/24/1983');

val = birthday.getMonth();
val = birthday.getDate();
val = today.getFullYear();


console.log(val);


// IF
if(something){
    do something
} else {
    do something else
}


const id = 100;

// EQUAL TO
if(id == 100){
console.log('CORRECT');
} else {
console.log('INCORRECT');
}

//NOT EQUAL TO
if(id != 101){
console.log('CORRECT');
} else {
console.log('INCORRECT');
}

//EQUAL TO VALUE AND TYPE
if(id === 100){
console.log('CORRECT');
} else {
console.log('INCORRECT');
}

//NOT EQUAL TO VALUE AND TYPE
if(id !== 100){
console.log('CORRECT');
} else {
console.log('INCORRECT');
}


//const id = 100;
if (typeof id !== 'undefined'){
    console.log(`The ID is ${id}`);
} else {
    console.log('No ID');
}


const id = 40;
//GREATER THAN LESS THAN

if(id > '50'){
    console.log('CORRECT');
} else {
    console.log('INCORRECT');
}


const id = 40;
//IF ELSE
const color = 'Red';

if (color === 'Red'){
    console.log('The color is Red');
} else if (color === 'Blue'){
    console.log('The color is Blue');
} else {
    console.log('The color is not Red or Blue');
}


// LOGICAL OPERATORS  - - && this AND this are true
const color = 'Yellow';
const name = 'Steve';
const age = 15;

// AND &&
if(age > 0 && age < 12){
    console.log(`${name} is a child`);
} else if(age >= 13 && age < 19){
    console.log(`${name} is a teenager`);
} else {
    console.log(`${name} is an adult`);
}

// OR ||
if(age < 6 || age > 65){
    console.log(`${name} can not join the event`);
} else {
    console.log(`${name} can join the event`);
}

// TERNARY OPERATOR (feltétel ? akkor : egyéb esetben)
const id = 100;
console.log(id === 100 ? 'CORRECT' : 'INCORRECT');



// FUNCTIONS DECLARATION
function greet(){
    return 'Hello';
}


function greet(firstName, lastName){
    return 'Hello' + ' ' + firstName + ' ' + lastName;
}

console.log(greet('John', 'Doe'));

//Default value is defined in the function line
function greet(firstName = 'John', lastName = 'Doe'){
    return 'Hello' + ' ' + firstName + ' ' + lastName;
}

//console.log(greet());

//FUNCTION EXPRESSIONS

const square = function(x){
    return x*x;
}

console.log(square(2345));


//IMMEDIATELLY INVOKABLE FUNTION EXPRESSIONS - IIFEs
(function(name){
    console.log('Hello' + ' ' + name);
})('Norbert');


// PROPERTY METHODS - - - When a function is put inside of an object is a method
const todo = {
    add: function(){
        console.log('Add todo...');
    },
    edit: function(id){
        console.log(`Edit todo ${id}`);
    } 
}


//LOOP Through Array
const cars = ['Ford', 'Honda', 'Chevy', 'Toyota'];

for (let i = 0; i < cars.length; i++){
    console.log(cars[i]);
}

// FOREACH
const cars = ['Ford', 'Honda', 'Chevy', 'Toyota'];
cars.forEach(function(car){
    console.log(car);
});


// MAP
const users = [
    {id:'039', name:'John'},
    {id:'166', name:'Bill'},
    {id:'270', name: 'Sara'},
];

const ids = users.map(function(user){
    return user.id;
});

console.log(ids);


const cars = ['Ford', 'Honda', 'Chevy', 'Toyota'];
cars.forEach(function(car, index){
    console.log(`${index} : ${car}`);
});


//FOR IN LOOP
const user = {
    firstName: 'John',
    lastName: 'Doe',
    age: 40
}

for(let x in user){
    console.log(`${x} : ${user[x]}`);
}

// WINDOW METHODS / OBJECTS / PROPERTIES

//ALERT
//alert('Hello World');

//PROMPT
//const input = prompt();
//alert(input);

//CONFIRM
//if (confirm('Are you sure?')) {
//    alert('OK, ti is done');
//} else {
//    alert('No worries');
//}

//PROPERTIES
let val;

//OUTTER HIGTH AND WIDTH OF THE WINDOW
//val = window.outerHeight;
//val = window.outerWidth;

//INNER HIGHT AND WIDTH OF WINDOW
//val = window.innerHeight;
//val = window.innerWidth;

//SCROLL POINTS
//val = window.scrollY;
//val = window.scrollX;

//LOCATION
val = window.location;

//REDIRECT
//window.location.href = 'http://google.com';

//RELOAD
//window.location.reload();

//HISTORY OBJECT
//window.history.go(-2);

console.log(val);


//GLOBAL SCOPE
var a = 1;
let b = 2;
const c = 3;

//function test() {
//    var a = 4;
//    let b = 5;
//    const c = 6;
//    console.log('Function Scope ', a, b, c);
//}

// test();

console.log('Global Scope ', a, b, c);
*/
