export class User {
  idUser!: string;
  name!: string;
  email!: string;
  password!: string;
  createdAt!: Date;
  active!: boolean;

  constructor(user: User) {
    Object.assign(this, user);
  }
}
