import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, phone, message } = body;

    const transporter = nodemailer.createTransport({
      host: process.env.NODEMAILER_EMAIL_SERVER,
      port: Number(process.env.NODEMAILER_EMAIL_PORT),
      secure: Number(process.env.NODEMAILER_EMAIL_PORT) === 465,
      auth: {
        user: process.env.NODEMAILER_EMAIL_USER,
        pass: process.env.NODEMAILER_APP_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.NODEMAILER_EMAIL_USER,
      to: process.env.NODEMAILER_EMAIL_USER,
      replyTo: email,
      subject: `New Contact Form Submission from ${fullName}`,
      text: `
        Name: ${fullName}
        Email: ${email}
        Phone: ${phone || "N/A"}
        
        Message:
        ${message}
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Nodemailer Error:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}