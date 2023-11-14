import { ReportCard } from "src/secretary/domain/ReportCard";
import { ReportCardRepository } from "../interfaces/ReportCard.repository";
import { Prisma, PrismaClient } from "@prisma/client";

export class ReportCardOrmRepository implements ReportCardRepository {
  constructor(private prismaClient: PrismaClient) {}

  async getReportCardByStudentId(
    studentId: string
  ): Promise<Prisma.Decimal | null> {
    const response_database =
      await this.prismaClient.reportCardPersistence.findFirst({
        where: {
          idStudent: studentId,
        },
      });

    if (!response_database?.grade) {
      return null;
    }
    
    return response_database?.grade;
  }
}
