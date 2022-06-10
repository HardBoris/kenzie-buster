import { Entity, Column, PrimaryColumn, OneToOne, JoinColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { Stock } from "./Stock";

@Entity()
export class DVD {
  @PrimaryColumn("uuid")
  readonly id: string;

  @Column()
  name: string;

  @Column()
  duration: string;

  @OneToOne((type) => Stock, {
    eager: true,
  })
  @JoinColumn()
  stock: Stock;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
