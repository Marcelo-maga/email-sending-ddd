import { ReportCard } from "src/secretary/domain/ReportCard";

export interface ReportCardRepository {
  getReportCardByStudentId(studentId: string): Promise<Prisma.Decimal | null>;
}
