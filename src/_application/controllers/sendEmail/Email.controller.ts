import { Request, Response } from "express";
import { SendEmailService } from "src/_application/services/SendEmail.service";
import { EnrollRepository } from "src/_infra/interfaces/Enroll.repository";
import { ReportCardRepository } from "src/_infra/interfaces/ReportCard.repository";
import { StudentRepository } from "src/_infra/interfaces/Student.repository";
import { ReportCardService } from "src/secretary/service/ReportCard.service";

export class EmailController {
  constructor(
    private enrollRespository: EnrollRepository,
    private studentRepository: StudentRepository,
    private reportCardRepository: ReportCardRepository,
    private sendEmailService: SendEmailService
  ) {}

  async send(req: Request, res: Response) {
    const generateReportCardService = new ReportCardService(
      this.enrollRespository,
      this.studentRepository
    );

    const reportCardIsGenerated =
      await generateReportCardService.generateReportCard(
        req.body.subjectGrade,
        req.body.idStudent
      );

    if (reportCardIsGenerated) {
      const grade = await this.reportCardRepository.getReportCardByStudentId(
        req.body.idStudent
      );

      if (grade >= 8) {
        this.sendEmailService.execute(req.body.studentName);
        return res.status(200).json({ message: "Email sent successfully" });
      }
    }
  }
}
