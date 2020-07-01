import Human from './Human.js';

export default class Student extends Human {
    constructor(sex, height, mass, age, name, schoolSubjects = []) {
        super(sex, height, mass, age, name);
        this.schoolSubjects = schoolSubjects;
    }

    addSubjects(subjects = []) {
        if (Array.isArray(subjects)) {
            this.schoolSubjects.push(...subjects);
        } else {
            this.schoolSubjects.push(subjects);
        }
    }

    isFailing() {
        const isFailing = this.schoolSubjects.some(subject => subject.grade < 2);
        
        if (isFailing) return isFailing;

        this.passingGrade();
        return isFailing;
    }

    passingGrade() {
        const passingGrade = this.schoolSubjects.reduce((acc, curr) => acc.grade + curr.grade) / this.schoolSubjects.length;
        console.log(`Students passing grade is ${passingGrade}.`); 
        return passingGrade;
    }
}