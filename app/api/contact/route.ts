import nodemailer from 'nodemailer'
import { NextResponse } from 'next/server'

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USERNAME,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
})

const INQUIRY_LABELS: Record<string, string> = {
  inquiry: 'Inquiries',
  complaint: 'Complaint',
  partnership: 'Partnership',
  support: 'Technical Support',
  other: 'Other',
}

export async function POST(req: Request) {
  try {
    const { name, email, phone, whatsapp, inquiryType, message } = await req.json()

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    if (typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Enter a valid email address' }, { status: 400 })
    }

    const inquiryLabel = INQUIRY_LABELS[inquiryType] || 'Inquiries'

    await transporter.sendMail({
      from: `"Willstone Website" <${process.env.GMAIL_USERNAME}>`,
      to: 'willstonestrategic@gmail.com',
      replyTo: email,
      subject: `New ${inquiryLabel} message from ${name}`,
      text:
        `Name: ${name}\n` +
        `Email: ${email}\n` +
        `Phone: ${phone || 'N/A'}\n` +
        `WhatsApp: ${whatsapp || 'N/A'}\n` +
        `Inquiry Type: ${inquiryLabel}\n\n` +
        `Message:\n${message}`,
      html:
        `<div style="font-family:sans-serif;font-size:14px;color:#101826;line-height:1.6;">` +
        `<p><strong>Name:</strong> ${escapeHtml(name)}</p>` +
        `<p><strong>Email:</strong> ${escapeHtml(email)}</p>` +
        `<p><strong>Phone:</strong> ${escapeHtml(phone || 'N/A')}</p>` +
        `<p><strong>WhatsApp:</strong> ${escapeHtml(whatsapp || 'N/A')}</p>` +
        `<p><strong>Inquiry Type:</strong> ${escapeHtml(inquiryLabel)}</p>` +
        `<p><strong>Message:</strong></p>` +
        `<p style="white-space:pre-wrap;">${escapeHtml(message)}</p>` +
        `</div>`,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Email send error:', err)
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 })
  }
}

function escapeHtml(str: string) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
      }
