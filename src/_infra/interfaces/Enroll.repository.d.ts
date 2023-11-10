import { Enroll } from "src/secretary/domain/Enroll";

export interface EnrollRepository {
  getAllEnrolls(): Promise<Enroll[]>;
  getEnroll(id: string): Promise<Enroll>;
  getEnrollByStudentId(studentId: string): Promise<Enroll[]>;
  createEnroll(enroll: Enroll): Promise<void>;
  updateEnroll(enroll: Enroll): Promise<void>;
  deleteEnroll(id: string): Promise<void>;
}
