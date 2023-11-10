import { Student } from "./Student";

export class Subject {
  public idSubject!: string;
  public name!: string;
  public students!: Student[];
  public available!: boolean;
  public value!: number;
  public ead!: boolean;

  constructor(subject: Subject) {
    Object.assign(this, subject);
  }
}
