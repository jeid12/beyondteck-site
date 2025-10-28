import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// These values should be set in your .env.local file
const GMAIL_USER = process.env.NEXT_PUBLIC_GMAIL_USER;
const GMAIL_PASS = process.env.NEXT_PUBLIC_GMAIL_PASS;

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: GMAIL_USER,
        pass: GMAIL_PASS,
      },
    });

    // Send notification to admin
    await transporter.sendMail({
      from: `"Beyond Tech Newsletter" <${GMAIL_USER}>`,
      to: GMAIL_USER,
      subject: "New Newsletter Subscription",
      html: `
        <h2>New Newsletter Subscription</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
        <br/>
        <p>Add this email to your newsletter mailing list.</p>
      `,
    });

    // Send welcome email to subscriber
    await transporter.sendMail({
      from: `"Beyond Tech" <${GMAIL_USER}>`,
      to: email,
      subject: "Welcome to Beyond Tech Newsletter!",
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #F6A019; color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px; }
            .button { display: inline-block; background: #F6A019; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; margin: 20px 0; }
            .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Welcome to Beyond Tech!</h1>
            </div>
            <div class="content">
              <h2>Thank you for subscribing!</h2>
              <p>We're excited to have you join the Beyond Tech community. You'll now receive:</p>
              <ul>
                <li>Latest tech trends and insights</li>
                <li>Exclusive offers and promotions</li>
                <li>Rwanda tech ecosystem updates</li>
                <li>Tips for digital transformation</li>
              </ul>
              <p>Stay tuned for our monthly newsletter packed with valuable content!</p>
              <a href="https://yourdomain.com" class="button">Visit Our Website</a>
              <p>Have a project in mind? <a href="https://yourdomain.com#contact">Get in touch with us</a>!</p>
            </div>
            <div class="footer">
              <p>Beyond Tech | Kigali, Rwanda</p>
              <p>Email: beyondtech@gmail.com | Phone: +250781274642</p>
              <p>&copy; ${new Date().getFullYear()} Beyond Tech. All rights reserved.</p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    return NextResponse.json({ success: true, message: "Successfully subscribed to newsletter!" });
  } catch (error) {
    console.error("Newsletter subscription error:", error);
    return NextResponse.json({ error: "Failed to subscribe. Please try again." }, { status: 500 });
  }
}
