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
      // Fallback plain text version
      text: `
        Name: ${fullName}
        Email: ${email}
        Phone: ${phone || "N/A"}
        
        Message:
        ${message}
      `,
      // Professional HTML version
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; background-color: #ffffff;">
          <div style="background-color: #2563eb; padding: 24px; text-align: center;">
            <h2 style="margin: 0; color: #ffffff; font-size: 20px; font-weight: 600;">New Contact Submission</h2>
          </div>
          
          <div style="padding: 32px 24px;">
            <p style="margin: 0 0 24px 0; color: #6b7280; font-size: 15px;">You have received a new message from your website contact form.</p>
            
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 28px;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; font-weight: 600; color: #475569; width: 100px; font-size: 14px;">Name:</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a; font-size: 15px;">${fullName}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; font-weight: 600; color: #475569; font-size: 14px;">Email:</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; font-size: 15px;">
                  <a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; font-weight: 600; color: #475569; font-size: 14px;">Phone:</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a; font-size: 15px;">${phone || "N/A"}</td>
              </tr>
            </table>
            
            <div style="font-weight: 600; color: #475569; margin-bottom: 12px; font-size: 14px;">Message:</div>
            <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; border: 1px solid #e2e8f0; color: #0f172a; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${message}</div>
          </div>
          
          <div style="background-color: #f8fafc; padding: 20px; text-align: center; color: #9ca3af; font-size: 12px; border-top: 1px solid #e2e8f0;">
            This email was generated automatically from your website.
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Nodemailer Error:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 },
    );
  }
}
