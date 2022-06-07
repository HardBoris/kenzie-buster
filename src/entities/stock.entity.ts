import { Entity, Column, PrimaryColumn, OneToOne, JoinColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { DVD } from "./dvd.entity";

@Entity()
export class Stock {
  @PrimaryColumn("uuid")
  readonly id: string;

  @Column("float")
  price: number;

  @Column()
  quantity: number;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
