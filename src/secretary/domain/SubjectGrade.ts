import { Prisma } from "@prisma/client";

export class SubjectGrade {
  public idSubject!: string;
  public grade!: Prisma.Decimal;

  constructor(subjectGrade: SubjectGrade) {
    Object.assign(this, subjectGrade);
  }
}
