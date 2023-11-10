export class SubjectRepository {
  public createSubject(subject: Subject): Promise<void>;
  public getAllSubjects(): Promise<Subject[]>;
  public getSubject(id: string): Promise<Subject>;
  public updateSubject(subject: Subject): Promise<void>;
  public deleteSubject(id: string): Promise<void>;
}
