const expenseAmount = document.getElementById("expenseAmount");
const description = document.getElementById("description");
const category = document.getElementById("category");
const addExpnenseButton = document.getElementById("addexpense");
//const parentNode = document.getElementById("listOfExpences");
let editingId = null;
addExpnenseButton.addEventListener("click", function (e) {
  e.preventDefault();
  const expamount = expenseAmount.value;
  const expdec = description.value;
  const expcat = category.value;
  const obj = {
    expamount,
    expdec,
    expcat,
  };

  console.log(obj);

  if (editingId === null) {
    axios
      .post(
        "https://crudcrud.com/api/e373538d7e4f45199ceaa3cbd98f7aaf/expencetracker",
        obj
      )
      .then((response) => {
        console.log(response);
        showNewExpencesOnScreen(response.data);
        console.log(response);
      })
      .catch((err) => {
        document.body.innerHTML =
          document.body.innerHTML + "<h4> Something went wrong! </h4>";
        console.log(err);
      });
  }
  else {
    axios
      .put(
        `https://crudcrud.com/api/e373538d7e4f45199ceaa3cbd98f7aaf/expencetracker/${editingId}`, obj
      )
      .then((response) => {
        console.log(response);
        showNewExpencesOnScreen(obj);
        console.log(response);
      })
      .catch((err) => {
        document.body.innerHTML =
          document.body.innerHTML + "<h4> Something went wrong! </h4>";
        console.log(err);
      });
    editingId = null;
  }




});

window.addEventListener("DOMContentLoaded", () => {
  axios
    .get(
      "https://crudcrud.com/api/e373538d7e4f45199ceaa3cbd98f7aaf/expencetracker"
    )
    .then((response) => {
      console.log(response);
      for (var i = 0; i < response.data.length; i++) {
        showNewExpencesOnScreen(response.data[i]);
      }
    })
    .catch((err) => {
      console.log(err);
    });
});


function showNewExpencesOnScreen(ele) {
  expenseAmount.value = "";
  description.value = "";
  category.value = "";

  if (localStorage.getItem(ele.expamount) !== null) {
    removeUserFromScreen(ele.expamount);
  }
  const parentNode = document.getElementById("listOfExpences");
  childHTML = `<li id=${ele._id}> ${ele.expamount} - ${ele.expdec} - ${ele.expcat}
    <button onClick="editExpenceDetails('${ele.expamount}','${ele.expdec}','${ele.expcat}','${ele._id}')"> Edit </button>
    <button onclick= deleteExpence('${ele._id}')> Delete </button></li>`;

  parentNode.innerHTML = parentNode.innerHTML + childHTML;
}

function editExpenceDetails(expamount, expdec, expcat, eleId) {
  document.getElementById("expenseAmount").value = expamount;
  document.getElementById("description").value = expdec;
  document.getElementById("category").value = expcat;

  editingId = eleId;
  console.log(eleId);
  removeExpenceFromScreen(eleId);
  //deleteExpence(eleId);

}



function deleteExpence(eleId) {
  axios
    .delete(
      `https://crudcrud.com/api/e373538d7e4f45199ceaa3cbd98f7aaf/expencetracker/${eleId}`
    )
    .then((response) => {
      console.log(response);
      removeExpenceFromScreen(eleId);
    })
    .catch((err) => {
      console.log(err);
    });
}

function removeExpenceFromScreen(eleId) {
  const parentNode = document.getElementById("listOfExpences");
  const childNodeToBeDeleted = document.getElementById(eleId);
  if (childNodeToBeDeleted) {
    parentNode.removeChild(childNodeToBeDeleted);
  }
}


//https://crudcrud.com/api/e373538d7e4f45199ceaa3cbd98f7aaf