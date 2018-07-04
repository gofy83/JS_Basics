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

const car = ['Ford', 'Honda', 'Toyota', 'Chevy'];
