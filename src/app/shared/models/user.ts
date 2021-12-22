export interface IUser {
  id: number;
  username: string;
  email: string;
}

export class User {
  id: number;
  username: string;
  email: string;

  constructor(u: IUser) {
    this.id = u.id;
    this.username = u.username;
    this.email = u.email;
  }
}

export class userBuilder {
  static fromApi(u: { [key: string]: unknown }): User {
    return new User({
      id: u["id"] as number,
      username: u["username"] as string,
      email: u["email"] as string,
    });
  }
}
