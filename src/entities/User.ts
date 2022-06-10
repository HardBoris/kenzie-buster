import { compare } from "bcrypt";
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("uuid")
  userUuid?: string;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ default: false })
  isAdm?: boolean;

  comparePwd = async (pwdString: string): Promise<boolean> => {
    return await compare(pwdString, this.password);
  };
}
