import { ReportCardPersistence } from "src/secretary/domain/ReportCardPersistence";
import { Student } from "src/secretary/domain/Student";

export interface StudentRepository {
  public createStudent(student: Student): Promise<void>;
  public getAllStudents(): Promise<Student[]>;
  public getStudent(id: string): Promise<Student>;
  public updateStudent(student: Student): Promise<void>;
  public deleteStudent(id: string): Promise<void>;
  public persistReportCard(reportCardPersistence: ReportCardPersistence): Promise<void>;
  public getAllReportCards: ReportCardPersistence[];
}
