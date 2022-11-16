// 1. Write the code as per the youtuber does
//Examine the document object 


/*  console.dir(document);
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
items[1].style.backgroundColor = 'yellow';
//GIVES ERROR
//items.style.backgroundcolor='#f4f4f4';
for (var i = 0; i < items.length; i++) {
    items[i].style.backgroundcolor = '#f4f4f4';
}



*/




var items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[2]);



//2. Make the 3 rd element in the list have green background color
items[2].style.backgroundColor = "green";

//3. Make all the elements in the list have bold color font
for (var i = 0; i < items.length; i++) {
    items[i].style.fontWeight = 'bold';
    items[i].style.color= 'red';
}


