export class SmtpEmailConfig {
  host: string;
  port: string;
  auth: {
    user: string;
    pass: string;
  };
  secure: boolean;
  tls: {
    rejectUnauthorized: boolean;
  };
}
