export class Course {
  constructor(title) {
    this.title = title;
    this.students = [];
  }

  addStudent(student) {
    this.students.push(student);
    student.courses.push(this.title);
    console.log(`Студента ${student.name} додано до курсу "${this.title}"`);
  }

  getStudents() {
    return this.students.map(s => s.name);
  }
}