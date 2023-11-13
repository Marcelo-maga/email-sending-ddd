import { Enroll } from "src/secretary/domain/Enroll";
import { EnrollRepository } from "../interfaces/Enroll.repository";
import { PrismaClient } from "@prisma/client";

export class EnrollOrmRepository implements EnrollRepository {
  constructor(private prismaClient: PrismaClient) {}

  getAllEnrolls(): Promise<Enroll[]> {
    throw new Error("Method not implemented.");
  }
  getEnroll(id: string): Promise<Enroll> {
    throw new Error("Method not implemented.");
  }
  async getEnrollByStudentId(studentId: string): Promise<Enroll[]> {
    const dbResult = await this.prismaClient.enroll.findMany({
      where: {
        student: {
          idStudent: studentId,
        },
      },
      include: {
        student: {
          include: {
            user: true,
          },
        },
      },
    });

    return dbResult.map(
      (enroll) =>
        new Enroll({
          idStudent: enroll.student.idStudent,
          date: enroll.createdAt,
          idEnroll: enroll.idEnroll,
          student: enroll.student.user,
        })
    );
  }
  updateEnroll(enroll: Enroll): Promise<void> {
    throw new Error("Method not implemented.");
  }
  deleteEnroll(id: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
  createEnroll(enroll: Enroll): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
