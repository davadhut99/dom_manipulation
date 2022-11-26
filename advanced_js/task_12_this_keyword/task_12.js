

// Design pattern problem - How will you design a Student class which stores the name , age , phone number, board marks of each student. Make a constructor to initialize the values.
// Write a function to check whether the student is egligible or not for college. If board marks > 40 -> egligible , if less than 40 -> not egligible.Write a function to check this.
// Create 5 students with different names and age.
// Write a function which keep track of the number of students created. Have you heard of static variables. Leverage that now. Check Hints 1 if you are stuck.



class student {
    constructor(name, age, phoneNo, marks) {
        this.name = name;
        this.age = age;
        this.phoneNo = phoneNo;
        this.marks = marks;
        student.count();
    }
    static count() {
        student.counter = (student.counter || 0) + 1;
        return;
    }

    eligibilityOfStudent(marks) {
        if (marks < 0 || marks > 100) {
            console.log("Invalid Marks");
        } else if (marks >= 40) {
            console.log("Eligible for College Admission Process");
        } else {
            console.log("You are not eligible because marks are -" + this.marks);
        }
    }

    setPlacementAge(minPlacementAge) {
        var minPlacementAge = 18;
        return (minMarks) => {
            var minMarks = 40;
            if (this.marks > minMarks && this.age > this.minPlacementAge) {
                console.log(this.name + " is ready for placements");
            } else {
                console.log(this.name + " is not ready for placements");
            }
        }
    }
}

const s1 = new student("Akash", 17, 854857758, 48);
console.log(student.counter);
const s2 = new student("Abhay", 19, 854857758, 53);
const s3 = new student("Amol", 20, 854857758, 65);
const s4 = new student("Akhil", 17, 854857758, 74);
const s5 = new student("Anil", 19, 854857758, 20);
//console.log(student.counter);


// ---------------------------------------------------------------------------------------------------------------------------
// The fat arrow function takes age as an argument and returns true if the given student has board marks greater than
//  minimum board marks required by company and is above the required age set by the company.[If stuck check the hint 2]
// Run the code across all the students and print the names of egligible students.

// ---------------------------------------------------------------------------------------------------------------------------


console.log(s1.setPlacementAge()());