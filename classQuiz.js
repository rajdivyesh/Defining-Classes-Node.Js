class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    introduce() {
        console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
    }
}

class Student extends Person {
    constructor(name, age, studentID) {
        super(name, age);
        this.studentID = studentID;
    }
    displayStudentInfo() {
        console.log(`Student ID: ${this.studentID}`);
    }
}
class Teacher extends Person {
    constructor(name, age, subject) {
        super(name, age);
        this.subject = subject;
    }
    displayTeacherInfo() {
        console.log(`Teaching subject: ${this.subject}`);
    }
}
class Dean extends Teacher {
    constructor(name, age, subject, department) {
        super(name, age, subject);
        this.department = department;
    }
    displayDeanInfo() {
        console.log(`Dean of ${this.department}`);
    }
}

const student = new Student("Alice", 23, "S12345");
const teacher = new Teacher("Lucio", 35, "Math");
const dean = new Dean("Mohammad", 33, "Technology", "Engineering");

student.introduce();
student.displayStudentInfo();

teacher.introduce();
teacher.displayTeacherInfo();

dean.introduce();
dean.displayTeacherInfo();
dean.displayDeanInfo();
