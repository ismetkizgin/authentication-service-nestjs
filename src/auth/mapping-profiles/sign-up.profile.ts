import { AutomapperProfile, InjectMapper } from "@automapper/nestjs";
import { Mapper, createMap, forMember, mapFrom } from "@automapper/core";
import { Injectable } from "@nestjs/common";
import { SignUpDto } from "../dto/sign-up.dto";
import { User } from "../../models/user.entity";
import * as bcrypt from "bcrypt";
import config from "../../utils/config";

@Injectable()
export class SignUpProfile extends AutomapperProfile {
  private readonly salt: string;

  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
    this.salt = bcrypt.genSaltSync();
  }

  override get profile() {
    return (mapper) => {
      createMap(
        mapper,
        SignUpDto,
        User,
        forMember(
          (dest) => dest.passwordSalt,
          mapFrom(() => {
            return this.salt;
          })
        ),
        forMember(
          (dest) => dest.passwordHash,
          mapFrom((src: SignUpDto) => {
            const salt = this.salt;
            const hash = bcrypt.hashSync(src.password, salt);
            return hash;
          })
        ),
        forMember(
          (dest) => dest.roles,
          mapFrom(() => {
            if (!config().userDefaultRole) return null;
            else return [{ role: { name: config().userDefaultRole } }];
          })
        )
      );
    };
  }
}
