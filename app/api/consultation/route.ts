import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const GMAIL_USER = process.env.NEXT_PUBLIC_GMAIL_USER;
const GMAIL_PASS = process.env.NEXT_PUBLIC_GMAIL_PASS;

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, company, service, message, preferredDate, preferredTime } = await req.json();

    if (!name || !email || !phone || !service) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
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
      from: `"Beyond Tech Consultations" <${GMAIL_USER}>`,
      to: GMAIL_USER,
      subject: `🎯 New Consultation Request: ${service}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #F6A019; color: white; padding: 20px; text-align: center; }
            .content { background: #f9f9f9; padding: 20px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #F6A019; }
            .value { margin-top: 5px; }
            .priority { background: #ff6b6b; color: white; padding: 5px 10px; border-radius: 5px; display: inline-block; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🎯 New Consultation Request</h1>
              <p class="priority">HIGH PRIORITY - Respond within 24 hours</p>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Client Name:</div>
                <div class="value">${name}</div>
              </div>
              <div class="field">
                <div class="label">Company:</div>
                <div class="value">${company || "Individual"}</div>
              </div>
              <div class="field">
                <div class="label">Email:</div>
                <div class="value"><a href="mailto:${email}">${email}</a></div>
              </div>
              <div class="field">
                <div class="label">Phone:</div>
                <div class="value"><a href="tel:${phone}">${phone}</a></div>
              </div>
              <div class="field">
                <div class="label">Service Interested:</div>
                <div class="value"><strong>${service}</strong></div>
              </div>
              ${preferredDate ? `
              <div class="field">
                <div class="label">Preferred Date:</div>
                <div class="value">${new Date(preferredDate).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</div>
              </div>
              ` : ''}
              ${preferredTime ? `
              <div class="field">
                <div class="label">Preferred Time:</div>
                <div class="value">${preferredTime}</div>
              </div>
              ` : ''}
              ${message ? `
              <div class="field">
                <div class="label">Project Details:</div>
                <div class="value">${message.replace(/\n/g, "<br/>")}</div>
              </div>
              ` : ''}
              <div class="field">
                <div class="label">Submitted:</div>
                <div class="value">${new Date().toLocaleString()}</div>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    // Send confirmation email to client
    await transporter.sendMail({
      from: `"Beyond Tech" <${GMAIL_USER}>`,
      to: email,
      subject: "Your Free Consultation is Confirmed! - Beyond Tech",
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #F6A019; color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px; }
            .highlight { background: #fff3cd; padding: 15px; border-left: 4px solid #F6A019; margin: 20px 0; }
            .button { display: inline-block; background: #F6A019; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; margin: 20px 0; }
            .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🎉 Consultation Request Received!</h1>
            </div>
            <div class="content">
              <p>Dear ${name},</p>
              <p>Thank you for booking a free 30-minute consultation with Beyond Tech! We're excited to discuss your project and explore how we can help bring your vision to life.</p>
              
              <div class="highlight">
                <strong>📋 Your Request Summary:</strong><br/>
                <strong>Service:</strong> ${service}<br/>
                ${preferredDate ? `<strong>Preferred Date:</strong> ${new Date(preferredDate).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}<br/>` : ''}
                ${preferredTime ? `<strong>Preferred Time:</strong> ${preferredTime}<br/>` : ''}
                ${company ? `<strong>Company:</strong> ${company}<br/>` : ''}
              </div>

              <h3>What Happens Next?</h3>
              <ol>
                <li><strong>Confirmation Call:</strong> Our team will contact you within 24 hours to confirm the consultation time.</li>
                <li><strong>Preparation:</strong> We'll review your requirements and prepare relevant insights.</li>
                <li><strong>Consultation:</strong> During the 30-minute call, we'll discuss your project, answer questions, and provide expert recommendations.</li>
                <li><strong>Next Steps:</strong> If we're a good fit, we'll outline a clear roadmap and proposal.</li>
              </ol>

              <p><strong>Contact Information:</strong></p>
              <ul>
                <li>📧 Email: beyondtech@gmail.com</li>
                <li>📱 Phone: +250781274642</li>
                <li>📍 Location: Kigali, Rwanda</li>
              </ul>

              <p>If you have any questions before the consultation, feel free to reach out!</p>

              <center>
                <a href="https://wa.me/250781274642" class="button">Chat on WhatsApp</a>
              </center>

              <p>Looking forward to connecting with you!</p>
              <p><strong>The Beyond Tech Team</strong></p>
            </div>
            <div class="footer">
              <p>Beyond Tech | Kigali, Rwanda</p>
              <p>&copy; ${new Date().getFullYear()} Beyond Tech. All rights reserved.</p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    return NextResponse.json({ success: true, message: "Consultation booked successfully!" });
  } catch (error) {
    console.error("Consultation booking error:", error);
    return NextResponse.json({ error: "Failed to book consultation. Please try again." }, { status: 500 });
  }
}
