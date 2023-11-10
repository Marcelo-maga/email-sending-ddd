export class SubjectGrade {
  public idSubject!: string;
  public grade!: number;

  constructor(subjectGrade: SubjectGrade) {
    Object.assign(this, subjectGrade);
  }
}
