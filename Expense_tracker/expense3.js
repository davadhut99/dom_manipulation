
const addExpnenseButton = document.getElementById("addexpense");


if (document.readyState !== "loading") {
    console.log("vscode");

    var keys = Object.keys(localStorage);//taking out all the keys that are there in the local storage
    var i = keys.length; //6
    console.log("keys", keys);
    let stringifiedExpenseDescription, detailDescription;

    // 6 to 0
    Object.keys(localStorage).forEach((key) => {
        stringifiedExpenseDescription = localStorage.getItem(key);
        console.log("stringifiedExpenseDescription", stringifiedExpenseDescription);
        detailDescription = JSON.parse(stringifiedExpenseDescription);
        console.log("details", detailDescription);
        addNewLineElement(detailDescription);

    });
}
// const listOfPeople = []
addExpnenseButton.addEventListener("click", (e) => {
    e.preventDefault();
    const expenseAmount = document.getElementById("expenseAmount").value;
    const description = document.getElementById("description").value;
    const category = document.getElementById("category").value;
    if (expenseAmount.length > 0 && description.length > 0) {
        const object = {
            expenseAmount: expenseAmount,
            category: category,
            description: description //unique
        };
        localStorage.setItem(description, JSON.stringify(object));
        // localStorage.setItem("userDetailEmail" + emailId, emailId);
        // listOfPeople.push(object);
        addNewLineElement(object);
    }
});

function addNewLineElement(object) {
    const ul = document.getElementById("list");
    const li = document.createElement("li");
    li.appendChild(
        document.createTextNode(object.expenseAmount + " " + object.description + " " + object.category)
    );
    // li.appendChild()
    //console.log(document.createElement("li"));
    const edBtn = document.createElement("input");
    edBtn.id = "edBt";
    edBtn.type = "button";
    edBtn.value = "Edit";
    edBtn.addEventListener("click", () => {
        //console.log(object);
        document.getElementById("expenseAmount").value = object.expenseAmount;
        document.getElementById("description").value = object.description;
        document.getElementById("category").value = object.category;
        li.remove();
    });
    edBtn.className = "delete";
    edBtn.style.border = "2px solid green";
    // console.log(edBtn);
    li.appendChild(edBtn);

    const delBtn = document.createElement("input");
    delBtn.id = "delBt";
    delBtn.type = "button";
    delBtn.value = "delete";
    delBtn.addEventListener("click", () => {
        localStorage.removeItem(object.description);
        li.remove();
    });
    delBtn.className = "delete";
    delBtn.style.border = "2px solid red";
    //console.log(delBtn);
    li.appendChild(delBtn);
    //console.log(li);

    ul.appendChild(li);
}
