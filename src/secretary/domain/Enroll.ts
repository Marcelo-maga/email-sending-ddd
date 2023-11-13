import { Student } from "./Student";
import { Subject } from "./Subject";

export class Enroll {
  public idEnroll!: string;

  public idStudent!: string;
  public student!: Student;
  public date!: Date;

  constructor(enroll: Enroll) {
    Object.assign(this, enroll);
  }
}
