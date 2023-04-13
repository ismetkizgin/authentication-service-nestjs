import { AutoMap } from "@automapper/classes";
import { SnowflakeId } from "../utils/snowflake-id";
import * as crypto from "crypto";
import {
  BeforeInsert,
  Check,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity({ name: "users" })
@Check(`"email" IS NOT NULL OR "username" IS NOT NULL`)
export class User {
  @PrimaryColumn()
  id: string;

  @BeforeInsert()
  createSnowflakeId() {
    this.id = SnowflakeId.generate(
      BigInt(crypto.randomBytes(4).readUInt32BE())
    ).toString();
  }

  @AutoMap()
  @Column({ unique: true, nullable: true })
  username?: string;

  @AutoMap()
  @Column({ unique: true, nullable: true })
  email?: string;

  @AutoMap()
  @Column({ name: "first_name" })
  firstName: string;

  @AutoMap()
  @Column({ name: "last_name" })
  lastName: string;

  @Column({ name: "password_hash" })
  passwordHash: string;

  @Column({ name: "password_salt" })
  passwordSalt: string;

  @AutoMap()
  password: string;

  @Column({ name: "email_verified", default: false })
  emailVerified: boolean;

  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt: Date;
}
