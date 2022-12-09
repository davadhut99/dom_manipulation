const expenseAmount = document.getElementById("expenseAmount");
const description = document.getElementById("description");
const category = document.getElementById("category");
const addExpnenseButton = document.getElementById("addexpense");
//const parentNode = document.getElementById("listOfExpences");

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
  axios
    .post(
      "https://crudcrud.com/api/1efc3c1c099f4497b2bbd94b6da310f9/expencetracker",
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
});

window.addEventListener("DOMContentLoaded", () => {
  axios
    .get(
      "https://crudcrud.com/api/1efc3c1c099f4497b2bbd94b6da310f9/expencetracker"
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
    <button onClick= editExpenceDetails('${ele.expamount}','${ele.expdec}','${ele.expcat}','${ele._id}')> Edit </button>
    <button onclick= deleteExpence('${ele._id}')> Delete </button></li>`;

  parentNode.innerHTML = parentNode.innerHTML + childHTML;
}

function editExpenceDetails(expamount, expdec, expcat, eleId) {
  var editingId = null;
  document.getElementById("expenseAmount").value = expamount;
  document.getElementById("description").value = expdec;
  document.getElementById("category").value = expcat;

  editingId = eleId;
  removeExpenceFromScreen(eleId);
  deleteExpence(eleId);

  function handleSubmit() {
    if (editingId === null) {
      axios
        .post(
          `https://crudcrud.com/api/1efc3c1c099f4497b2bbd94b6da310f9/expencetracker/${editingId}`
        )
        .then((res) => showNewExpencesOnScreen(ele))
    }
    else {
      axios
        .put(
          `https://crudcrud.com/api/1efc3c1c099f4497b2bbd94b6da310f9/expencetracker/${editingId}`
        )
        .then((res) => {
          showNewExpencesOnScreen(ele);
        })
    }
    editingId = null;
  }
  handleSubmit();
}


function deleteExpence(eleId) {
  axios
    .delete(
      `https://crudcrud.com/api/1efc3c1c099f4497b2bbd94b6da310f9/expencetracker/${eleId}`
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
