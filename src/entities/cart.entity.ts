import { User } from "./user.entity";
import {
  Entity,
  Column,
  PrimaryColumn,
  ManyToMany,
  JoinTable,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";
import { DVD } from "./dvd.entity";

@Entity()
export class Cart {
  @PrimaryColumn("uuid")
  readonly id: string;

  @Column()
  paid: boolean;

  @Column("float")
  total: number;

  @ManyToMany((type) => DVD, {
    eager: true,
  })
  @JoinTable()
  dvds: DVD[];

  @OneToOne((type) => User, {
    eager: true,
  })
  @JoinColumn()
  newUser: User;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
