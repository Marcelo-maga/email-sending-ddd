export class ReportCardPersistence {
  public idReportCardPersistence!: string;
  public idStudent!: string;
  public idSubject!: string;
  public grade!: number;

  constructor(reportCard: ReportCardPersistence) {
    Object.assign(this, reportCard);
  }
}
