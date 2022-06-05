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

export interface IuserLoger {
  email: string;
  password: string;
}

export interface IUserIndividual {
  authorization?: string;
}
