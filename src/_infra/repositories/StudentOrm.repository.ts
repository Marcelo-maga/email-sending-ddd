import { Student } from "src/secretary/domain/Student";
import { StudentRepository } from "../interfaces/Student.repository";
import { ReportCardPersistence } from "src/secretary/domain/ReportCardPersistence";
import { PrismaClient } from "@prisma/client";
import { User } from "src/userManagement/domain/User";
import { parse } from "path";

export class StudentOrmRepository implements StudentRepository {
  public constructor(private prismaClient: PrismaClient) {}
  public getAllReportCards(): ReportCardPersistence[] {
    throw new Error("Method not implemented.");
  }

  public async createStudent(user: User): Promise<void> {
    await this.prismaClient.student.create({
      data: {
        user: {
          create: {
            email: user.email,
            password: user.password,
            name: user.name,
          },
        },
      },
    });
  }
  public async deleteStudent(idStudent: string): Promise<void> {
    await this.prismaClient.student.delete({
      where: {
        idStudent,
      },
    });
  }
  public async getAllReportCardsPersistence(): Promise<ReportCardPersistence[]> {
    const dbResult = await this.prismaClient.reportCardPersistence.findMany();

    return dbResult.map((reportCardPersistence) => {
      return new ReportCardPersistence({
        grade: reportCardPersistence.grade,
        idReportCardPersistence: reportCardPersistence.idReportCard,
        idStudent: reportCardPersistence.idStudent,
        idSubject: reportCardPersistence.idSubject,
      })
    });
  }
  public async getAllStudents(): Promise<Student[]> {
    const dbResult = await this.prismaClient.student.findMany({
      include: {
        user: true,
      },
    });
    return dbResult.map((student) => {
      return new Student({
        active: student.user.active,
        createdAt: student.user.createdAt,
        email: student.user.email,
        name: student.user.name,
        password: student.user.password,
        idUser: student.user.idUser,
      })
    })
  }
  public async getStudent(id: string): Promise<Student> {
    throw new Error("Method not implemented.");
  }
  public async persistReportCard(
    reportCardPersistence: ReportCardPersistence
  ): Promise<void> {
    throw new Error("Method not implemented.");
  }
  public async updateStudent(student: Student): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
