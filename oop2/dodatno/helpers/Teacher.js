import Human from './Human.js';

export default class Teacher extends Human {
    constructor(sex, height, mass, age, name, subject) {
        super(sex, height, mass, age, name);
        this.subject = subject;
    }

    quizStudent(student, grade) {
        student.schoolSubjects.forEach(subject => {
            if (subject.title.toLowerCase() === this.subject.toLowerCase()) {
                subject.grade = grade;
            } 
        })
    }
}