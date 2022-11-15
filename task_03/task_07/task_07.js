




//  Traversing the DOM
var itemList = document.querySelector('#items');

/*
//parentNode Property
console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor ='#f4f4f4';
console.log(itemList.parentNode.parentNode.parentNode);

//parentElement
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor = '#f4f4f4';
console.log(itemList.parentElement.parentElement.parentElement);


//childNodes
console.log(itemList.childNodes);


console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor='yellow';

//LastElementChild
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent ='Last Element Child';

//lastChild
console.log(itemList.lastChild);
itemList.lastChild.textContent='Last Child';



//firstElementChild
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent= 'First Element Child';

//firstChild
console.log(itemList.firstChild);
itemList.firstChild.textContent = 'First Child';



//nextSibling
console.log(itemList.nextSibling);
itemList.nextSibling.textContent='Next Sibling';

//nextElementSibling
console.log(itemList.nextElementSibling);
itemList.nextElementSibling.textContent='Next Element Sibling';

//previousSibling
console.log(itemList.previousSibling);
itemList.previousSibling.textContent='Previous Sibling';

//previousElementSibling
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.textContent='Previous Element Sibling';

*/

//create Element

// Create a Div 
var newDiv = document.createElement('div');

//add class
newDiv.className = 'HELLO';
//add id
newDiv.id = 'Hello 1';
//setAttribute

newDiv.setAttribute('title', 'Hello Div');



//createtesxtnode
var newDivText = document.createTextNode('Hello World');
//Add Text to Div
newDiv.appendChild(newDivText);



//Now go head and add HEllo word before Item Lister
var container=document.querySelector("#main-header > div");
var h1 =document.querySelector("#header-title");
console.log(h1);

//appendchild
console.log(newDiv);
container.insertBefore(newDiv, h1);

//Now go head and add HEllo word before Item 1

var container2 = document.querySelector("#items");
var itemOne = document.querySelector("#items > li:nth-child(1)");
container2.insertBefore(newDiv,itemOne);








//