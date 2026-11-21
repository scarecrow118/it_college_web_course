import { Person } from "./Person.js";

export class Student extends Person {
  constructor(name) {
    super(name);
    this.courses = [];
  }

  viewCourses() {
    console.log(`Курси студента ${this.name}:`, this.courses.length ? this.courses.join(", ") : "ще немає");
  }
}