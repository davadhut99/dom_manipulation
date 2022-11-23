var obj = { num: 2 };
var addToThis = function (a, b, c) {
    return this.num + a + b + c;
};

console.log(addToThis.call(obj, 3, 2, 1));
var arr = [1, 2, 3];
console.log(addToThis.apply(obj, arr));

console.log(addToThis.apply(obj, [5, 5, 1]));

var bound = addToThis.bind(obj);
console.log(bound(1, 2, 3));


// Create a new object called Student with age 20 , write a function which prints
// the age of the student from the student object. Don't pass in args. Read from 'this' and use BIND

var student = {
    age: 20,
    printage: function () {
        return this.age;
    }
}


const ashish = { age: 30 };

let ashishAge = student.printage.bind(student);
console.log(ashishAge());




//Currying
//by bind() method
// let multiply =function(x,y){
//     console.log(x*y);
// }

// let multiplyByTwo = multiply.bind(this,2);
// multiplyByTwo(3);

// let multiplyByThree=multiply.bind(this,3);
// multiplyByThree(5);


// by using closure

let multiply = function (x) {
    return function (y) {
        console.log(x * y);
    }
}

let multiplyByTwo = multiply(2);
multiplyByTwo(3);
let multiplyByThree = multiply(3);
multiplyByThree(5);