import { Teacher } from "./models/Teacher.js";
import { Student } from "./models/Student.js";
import { Course } from "./models/Course.js";
const teacher = new Teacher("Іван Петренко");
const student1 = new Student("Юрій Войтович");
const student2 = new Student("Олена Коваль");
const jsCourse = new Course("Web-програмування (JS)");


teacher.addCourse(jsCourse);
jsCourse.addStudent(student1);
jsCourse.addStudent(student2);


console.log("--- Інформація ---");
console.log(teacher.getInfo());
console.log(student1.getInfo());
student1.viewCourses();
console.log(`Список студентів курсу "${jsCourse.title}":`, jsCourse.getStudents());