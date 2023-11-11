import { Prisma } from "@prisma/client";

export class ReportCardPersistence {
  public idReportCardPersistence!: string;
  public idStudent!: string;
  public idSubject!: string;
  public grade!: Prisma.Decimal;

  constructor(reportCard?: ReportCardPersistence) {
    Object.assign(this, reportCard);
  }
}
