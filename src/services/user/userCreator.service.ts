// import { IUserCreator } from './../../interfaces/index';
import { IUser, IUserCreator } from "../../interfaces";
import { v4 } from "uuid";

const userCreatorService = ({ name, email }: IUserCreator) => {
  //   const emailAlreadyExists = users.find((user) => user.email === email);

  //   if (emailAlreadyExists) {
  //     throw new Error("Email Already Exists");
  //   }

  const newUser: IUser = {
    id: v4(),
    name,
    email,
    isAdm: false,
  };

  return newUser;
};

export default userCreatorService;
