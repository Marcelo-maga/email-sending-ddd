import { Subject } from "./Subject";

export class Student {
  public subjects!: Subject[];

  constructor(student: Student) {
    Object.assign(this, student);
  }
}
