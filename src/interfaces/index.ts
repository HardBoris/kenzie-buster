export interface IUser {
  id: string;
  name: string;
  email: string;
  isAdm: boolean;
}

export interface IUserCreator {
  name: string;
  email: string;
  password: string;
  isAdm: boolean;
}
