export class ReportCard {
  public grades!: number[];
  constructor(grades: number[]) {
    Object.assign(this, grades);
  }
}
