var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');
var editItemBtn = document.getElementsByClassName('btn-primary float-right mr-2');
console.log(form);

// Form submit event
form.addEventListener('submit', addItem);
//Edit item
form.addEventListener('submit', editItems);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e) {
    e.preventDefault();

    // Get input value
    var newItem = document.getElementById('item').value;
    var newItem2 = document.getElementById('item2').value;

    // Create new li element
    var li = document.createElement('li');
    // Add class
    li.className = 'list-group-item';
    // Add text node with input value

    li.appendChild(document.createTextNode(newItem));
    li.appendChild(document.createTextNode(newItem2));

    // Create del button element
    var deleteBtn = document.createElement('button');
    // Add classes to del button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

    // Append text node
    deleteBtn.appendChild(document.createTextNode('X'));


    // Append button to li
    li.appendChild(deleteBtn);

    // Append li to list
    itemList.appendChild(li);

     // edit button
    var editBtn = document.createElement('button');
    editBtn.className = 'btn-primary float-right mr-2';
    editBtn.appendChild(document.createTextNode('Edit'));
    li.appendChild(editBtn);
    itemList.appendChild(li);

}
function editItems(){}
/*
function editItems() {
    var editBtn = document.createElement('button');
    editBtn.className = 'btn-primary float-right mr-2';
    editBtn.appendChild(document.createTextNode('Edit'));

    var li = document.createElement('li');
    // Add class
    li.className = 'list-group-item';
    li.appendChild(editBtn);
    itemList.appendChild(li);



}*/


// Remove item
function removeItem(e) {
    if (e.target.classList.contains('delete')) {
        if (confirm('Are You Sure?')) {
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

// Filter Items
function filterItems(e) {
    // convert text to lowercase
    var text = e.target.value.toLowerCase();
    // Get lis
    var items = itemList.getElementsByTagName('li');
    // Convert to an array
    Array.from(items).forEach(function (item) {
        var itemName = item.firstChild.textContent;
        if (itemName.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}


