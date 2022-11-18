
const submitButton = document.getElementById("submit");


// document.addEventListener("DOMContentLoaded", () => {
//   console.log("vscode");
//   localStorage.getItem();
// });

if (document.readyState !== "loading") {
  console.log("vscode");

  var keys = Object.keys(localStorage);//taking out all the keys that are there in the local storage
  var i = keys.length; //6
  console.log("keys", keys);
  let stringifiedDetailsOfPeople, detailsOfPeople;

  // 6 to 0
  Object.keys(localStorage).forEach((key) => {
    //i==2
    if (key.match(/userDetails/g)) {
      //we only care about keys that start with userDetails
      //this is called regex matching
      stringifiedDetailsOfPeople = localStorage.getItem(key);
      console.log("stringifiedDetailsOfPeople", stringifiedDetailsOfPeople);
      detailsOfPeople = JSON.parse(stringifiedDetailsOfPeople);
      console.log("details", detailsOfPeople);

      addNewLineElement(detailsOfPeople);
    }
  });
}
// const listOfPeople = []
submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  const emailId = document.getElementById("email").value;
  const name = document.getElementById("name").value;
  if (emailId.length > 0 && name.length > 0) {
    const object = {
      name: name,
      emailId: emailId //unique
    };
    localStorage.setItem(emailId, JSON.stringify(object));
    // localStorage.setItem("userDetailEmail" + emailId, emailId);
    // listOfPeople.push(object);
    addNewLineElement(object);
  }
});

function addNewLineElement(object) {
  const ul = document.getElementById("listOfPeople");
  const li = document.createElement("li");
  li.appendChild(
    document.createTextNode(object.name + " " + object.emailId + " ")
  );
  // li.appendChild()
  //console.log(document.createElement("li"));
  const edBtn = document.createElement("input");
  edBtn.id = "edBt";
  edBtn.type = "button";
  edBtn.value = "Edit";
  edBtn.addEventListener("click", () => {
    //console.log(object);
    document.getElementById("name").value = object.name;
    document.getElementById("email").value = object.emailId;
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
    localStorage.removeItem(object.emailId);
    li.remove();
  });
  delBtn.className = "delete";
  delBtn.style.border = "2px solid red";
  console.log(delBtn);
  li.appendChild(delBtn);
  //console.log(li);

  ul.appendChild(li);
}
