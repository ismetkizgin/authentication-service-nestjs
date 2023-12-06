import { Mock } from "mockingbird";

export class ConfigFixture {
  @Mock("test")
  environment: string;

  @Mock((faker) => faker.datatype.string())
  apiKey: string;

  @Mock("HS256")
  jwtAlgorithm: string;

  @Mock("testAudience")
  jwtAudience: string;

  @Mock("testIssuer")
  jwtIssuer: string;

  @Mock("testSecret")
  jwtSecret: string;

  @Mock(3000)
  port: number;

  @Mock("test")
  version: string;

  @Mock((faker) => faker.datatype.string())
  name: string;

  @Mock((faker) => faker.datatype.string())
  description: string;

  @Mock("*")
  corsAllowedOrigins: string;

  @Mock(new RegExp("(?=.*[A-Z])(?=.*[a-z]).*"))
  passwordRegex: RegExp;

  @Mock(false)
  swaggerEnabled: boolean;

  @Mock("user")
  userDefaultRole: string;
}
