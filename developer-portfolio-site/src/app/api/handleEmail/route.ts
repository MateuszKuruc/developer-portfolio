import nodemailer from "nodemailer";
import { NextResponse, NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",

      auth: {
        user: process.env.HANDLE_EMAIL,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.HANDLE_EMAIL,
      to: process.env.HANDLE_EMAIL,
      text: "Test message 123",
      subject: "Email sent test 123",
      html: `
            <h3>Cześć ${process.env.USER_NAME},</h3>
            <p>Czeka na Ciebie nowa wiadomość!</p>
            <p>Ktoś skorzystał z formularza na Twojej stronie internetowej. Treść wiadomości poniżej:</p>
            <li>Imię i nazwisko: ${name}</li>
            <li>Email: ${email}</li>
            <li>Wiadomość: ${message}</li>
            `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Sending email failed" },
      { status: 500 }
    );
  }
}
