/*let val;

//EXAMINING THE DOM PROPERTIES

val = document;
val = document.all;
val = document.all[0];
val = document.all.length;
val = document.head;
val = document.domain;

val = document.forms;
val = document.forms[0];
val = document.forms[0].id;

val = document.links;
val = document.links[0].className;
val = document.links[0].classList;



console.log(val);


// SINGLE DOM SELECTORS
//document.getElementById()
console.log(document.getElementById('task-title'));

//Get things from the elementa
console.log(document.getElementById('task-title').id);
console.log(document.getElementById('task-title').className);

const taskTitle = document.getElementById('task-title');

//Change styling
//document.getElementById('task-title').style.background = '#333';
//document.getElementById('task-title').style.color = '#fff';
//document.getElementById('task-title').style.padding = '5px';
//document.getElementById('task-title').style.display = 'none';

//CHANGE THE CONTENT
taskTitle.textContent = 'My Tasks';
taskTitle.innerText = 'Open Tasks';
taskTitle.innerHTML = '<span>Task List</span>';


// document.querySelecotr()
console.log(document.querySelector('#task-title'));
//selecting on class
console.log(document.querySelector('.card-title'));
//selecting on element
console.log(document.querySelector('h5'));
*/

// GET ELEMENTS BY CLASS NAME
//document.getElementsByClassName

//const items = document.getElementsByClassName('collection-items');
//console.log(items);
//console.log(items[0]);

//items[0].style.color = 'red';
//item[3].textContent = 'Hello';

// document.getElementByTagName
//const lis = document.getElementsByTagName('li');
//console.log(lis);
//console.log(lis[0]);
//lis[0].style.color = 'red';
//lis[3].textContent = 'Hello';

// document.querySelectorAll
//const itmes = document.querySelectorAll('ul.collection
//lis.collection-item');



// TRAVERSING DOM
let val;


const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');
 
Console.log(val);