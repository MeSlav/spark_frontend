import Teacher from './helpers/Teacher.js';
import Student from './helpers/Student.js';

const mathTeacher = new Teacher('female', 160, 55, 26, 'Anka', 'Math');
const historyTeacher = new Teacher('male', 179, 84, 35, 'Ica', 'History');
const student = new Student('female', 164, 58, 17, 'Mirta');

student.addSubjects([{ title: 'math', grade: null }, { title: 'history', grade: null }]);

mathTeacher.sayHi();
historyTeacher.sayHi();
student.sayHi();

historyTeacher.quizStudent(student, 5);
mathTeacher.quizStudent(student, 1);

student.isFailing();

// Dodatno:

historyTeacher.haveSex = function(woman) {
    if (woman.age >= 18) {
        console.log(`${this.name} had sex with ${woman.name}.`);
    } else {
        console.log(`${woman.name} needed a higher grade, but didn't have the required knowledge.`);
    }
}

historyTeacher.haveSex(mathTeacher);
historyTeacher.haveSex(student);