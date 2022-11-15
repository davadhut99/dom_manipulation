//Examine the document object 
console.dir(document);
console.log(document.domain);
console.log(document.URL);
console.log(document.title);
document.title = 123;
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.forms);
console.log(document.links);



console.log(document.images);




//GET Element byID

console.log(document.getElementById('header-title'));

var headerTitle = document.getElementById('header-title');
console.log(headerTitle);
headerTitle.textContent = 'HELLO';
headerTitle.innerText = 'GoodBye';


//innerText pays attention to styling where textContent not 

//headerTitle.innerHTML ='<h3>HELLO</h3>';

//headerTitle.style.borderBottom='solid 3px #000';


var header = document.getElementById('main-header');
header.style.borderBottom = 'solid 3px #000';


//GETELEMENTBYCLASSNAME

var items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);

items[1].style.fontWeight = 'bold';
items[1].style.backgroundcolor = 'yellow';
//GIVES ERROR
//items.style.backgroundcolor='#f4f4f4';
for (var i = 0; i < items.length; i++) {
    items[i].style.backgroundcolor = '#f4f4f4';
}


//GET ELEMENT BY TAG NAME


var li = document.getElementsByTagName('li');
console.log(li);
console.log(li[1]);
li[1].textContent = 'Hello 2';
li[1].style.fontWeight = 'bold';
li[1].style.backgroundcolor = 'yellow';

for (var i = 0; i < li.length; i++) {
    li[i].style.backgroundcolor = '#f4f4f4';
}


//QUERY SELECTOR

var header = document.querySelector('#main-header');
header.style.borderBottom = 'solid 4px #ccc';


var input = document.querySelector('input');
input.value = 'Hello World';

var submit = document.querySelector('input[type="submit"]');
submit.value = "SEND";

var item = document.querySelector('.list-group-item');
item.style.color = 'red';

var lastItem = document.querySelector('.list-group-item:last-child');
lastItem.style.color = 'blue';


//var secondItem = document.querySelector('.list-group-item:nth child(2)');
//secondItem.style.color = 'coral';


//QUERY SELECTOR ALL

var titles = document.querySelectorAll('.title');
console.log(titles);
titles[0].textContent = 'Hello';

var odd = document.querySelectorAll('li:nth-child(odd)');
var even = document.querySelectorAll('li:nth-child(even)');



for (var i = 0; i < odd.length; i++) {
    odd[i].style.backgroundcolor = '#f4f4f4';
    even[i].style.backgroundcolor = '#ccc';
}