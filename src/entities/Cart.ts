import { compare } from "bcrypt";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  UpdateDateColumn,
  CreateDateColumn,
  OneToOne,
} from "typeorm";
import { User } from "./User";
// import { Order } from "./Order";
// import { Restaurant } from "./Restaurant";

@Entity("carts")
export class Cart {
  @PrimaryGeneratedColumn("uuid")
  userUuid?: string;

  @Column({ default: false })
  paid: boolean;

  @Column({ type: "float" })
  total: number;

  // @OneToOne(() => User, (user) => address.user, { lazy: true })
  // address: Address;

  // @OneToMany(() => Restaurant, (restaurant) => restaurant.owner)
  // restaurants: Restaurant[];

  // @OneToMany(() => Order, (order) => order.user)
  // orders: Order[];

  // comparePwd = async (pwdString: string): Promise<boolean> => {
  //   return await compare(pwdString, this.password);
  // };
}
