
let myobj = {
    name: "Domestic", age: 35
};

let myobj_searilized = JSON.stringify(myobj);
localStorage.setItem("myobj", myobj_searilized);
console.log(localStorage);
let myobj_desearilized = JSON.parse(localStorage.getItem("myobj"));
