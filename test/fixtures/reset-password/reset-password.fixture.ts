import { Mock } from "mockingbird";
import { ResetPasswordRequest } from "../../../src/reset-password/dto/reset-password-request.dto";

export class ResetPasswordFixture extends ResetPasswordRequest {
  @Mock((faker) => faker.datatype.number())
  userId: number;

  @Mock((faker) => faker.internet.password())
  newPassword: string;

  @Mock((faker) => faker.datatype.string(16))
  key: string;
}
