import { EnrollRepository } from "src/_infra/interfaces/Enroll.repository";
import { StudentRepository } from "src/_infra/interfaces/Student.repository";
import { SubjectGrade } from "../domain/SubjectGrade";
import { ReportCard } from "../domain/ReportCard";
import { ReportCardPersistence } from "../domain/ReportCardPersistence";

export class ReportCardService {
  constructor(
    private enroll: EnrollRepository,
    private studentRepository: StudentRepository
  ) {}

  public async generateReportCard(
    subjectGrade: SubjectGrade[],
    idStudent: string
  ): Promise<boolean> {
    try {
      const reportCard = new ReportCard();
      reportCard.grades = [];

      const student = await this.studentRepository.getStudent(idStudent);
      const registeredSubjects = await this.enroll.getEnrollByStudentId(
        idStudent
      );
      const reportCardPersistence = new ReportCardPersistence();

      for (const subject of subjectGrade) {
        const test = registeredSubjects.find(
          (subject) => subject.idSubject === subject.idSubject
        );
        if (test) {
          reportCardPersistence.idStudent = idStudent;
          reportCardPersistence.idSubject = subject.idSubject;
          reportCardPersistence.grade = subject.grade;
          reportCardPersistence.idReportCardPersistence =
            reportCardPersistence.idReportCardPersistence;
        }
        this.studentRepository.persistReportCard(reportCardPersistence);
      }
      return true;
    } catch (err: any) {
      throw new Error(err);
    }
  }
}
