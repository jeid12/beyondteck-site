import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// These values should be set in your .env.local file
const GMAIL_USER = process.env.NEXT_PUBLIC_GMAIL_USER;
const GMAIL_PASS = process.env.NEXT_PUBLIC_GMAIL_PASS;

export async function POST(req: NextRequest) {
  try {
    const { name, email, service, message } = await req.json();

    if (!name || !email || !service || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: GMAIL_USER,
        pass: GMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Contact Form" <${GMAIL_USER}>`,
      to: GMAIL_USER, // Change this to any recipient if desired
      subject: `New Inquiry: ${service}`,
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name/Company:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Service Interested In:</strong> ${service}</p>
        <p><strong>Message:</strong><br/>${message.replace(/\n/g, "<br/>")}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Email failed to send" }, { status: 500 });
  }
}
