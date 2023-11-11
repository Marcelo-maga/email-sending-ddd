import { User } from "src/userManagement/domain/User";
import { Subject } from "./Subject";

export class Student extends User {
  public subjects?: Subject[];

  constructor(user: User, subjects?: Subject[]) {
    super(user);
    this.subjects = subjects;
  }
}
