import nodemailer from "nodemailer";

class SendEmail {
  private username: string = process.env.MAIL_USERNAME!;
  private pass: string = process.env.MAIL_PASSWORD!;
  private clientId: string = process.env.OAUTH_CLIENTID!;
  private clientSecret: string = process.env.OAUTH_CLIENT_SECRET!;
  private token: string = process.env.OAUTH_REFRESH_TOKEN!;

  execute(studentName: string) {
    let transporter = nodemailer.createTransport({ 
      service: 'gmail', 
      secure: false,
      auth: {
        user: this.username,
        pass: this.pass,
        clientId: this.clientId,
        clientSecret: this.clientSecret,
        refreshToken: this.token
      }
    });

    let mailOptions = {
      from: "ichacaramarketplace@gmail.com",
      to: "victornathan151@gmail.com",
      subject: "HACKARRÃO - BOLETIM",
      text: `Olá ${studentName}, Parabéns suas notas chegaram!`,
    };

    transporter.sendMail(mailOptions, function (err, data) {
      if (err) {
        console.log("Error " + err);
      } else {
        console.log("Email sent successfully");
      }
    });
  }
}