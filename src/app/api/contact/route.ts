import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, message } = await request.json();

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, E-Mail und Nachricht sind erforderlich.' },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email content
    const mailOptions = {
      from: `"${process.env.SMTP_FROM_NAME}" <${process.env.SMTP_FROM_EMAIL}>`,
      to: process.env.CONTACT_EMAIL,
      replyTo: email,
      subject: `Neue Kontaktanfrage von ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body {
                font-family: Arial, sans-serif;
                line-height: 1.6;
                color: #333;
              }
              .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
              }
              .header {
                background-color: #1a1a1a;
                color: white;
                padding: 20px;
                text-align: center;
                border-radius: 5px 5px 0 0;
              }
              .content {
                background-color: #f9f9f9;
                padding: 30px;
                border-radius: 0 0 5px 5px;
              }
              .field {
                margin-bottom: 20px;
              }
              .field-label {
                font-weight: bold;
                color: #1a1a1a;
                margin-bottom: 5px;
              }
              .field-value {
                background-color: white;
                padding: 10px;
                border-left: 3px solid #1a1a1a;
                border-radius: 3px;
              }
              .message-box {
                background-color: white;
                padding: 15px;
                border-left: 3px solid #1a1a1a;
                border-radius: 3px;
                white-space: pre-wrap;
                word-wrap: break-word;
              }
              .footer {
                margin-top: 20px;
                padding-top: 20px;
                border-top: 1px solid #ddd;
                font-size: 12px;
                color: #666;
                text-align: center;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h2>Neue Kontaktanfrage</h2>
                <p>Autocenter Kaddoura</p>
              </div>
              <div class="content">
                <div class="field">
                  <div class="field-label">Name:</div>
                  <div class="field-value">${name}</div>
                </div>

                <div class="field">
                  <div class="field-label">E-Mail:</div>
                  <div class="field-value"><a href="mailto:${email}">${email}</a></div>
                </div>

                ${phone ? `
                <div class="field">
                  <div class="field-label">Telefon:</div>
                  <div class="field-value"><a href="tel:${phone}">${phone}</a></div>
                </div>
                ` : ''}

                <div class="field">
                  <div class="field-label">Nachricht:</div>
                  <div class="message-box">${message}</div>
                </div>

                <div class="footer">
                  <p>Diese E-Mail wurde über das Kontaktformular auf autocenterkaddoura.de gesendet.</p>
                  <p>Sie können direkt auf diese E-Mail antworten, um mit ${name} Kontakt aufzunehmen.</p>
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
      text: `
Neue Kontaktanfrage

Name: ${name}
E-Mail: ${email}
${phone ? `Telefon: ${phone}\n` : ''}
Nachricht:
${message}

---
Diese E-Mail wurde über das Kontaktformular auf autocenterkaddoura.de gesendet.
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'E-Mail erfolgreich gesendet!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Fehler beim Senden der E-Mail. Bitte versuchen Sie es später erneut.' },
      { status: 500 }
    );
  }
}
