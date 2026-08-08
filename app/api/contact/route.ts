import nodemailer from 'nodemailer'
import { NextResponse } from 'next/server'

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USERNAME,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
})

export async function POST(req: Request) {
  try {
    const { name, email, phone, message } = await req.json()

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    await transporter.sendMail({
      from: `"Willstone Website" <${process.env.GMAIL_USERNAME}>`,
      to: 'willstonestrategic@gmail.com',
      replyTo: email,
      subject: `New contact form message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || 'N/A'}\n\nMessage:\n${message}`,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Email send error:', err)
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 })
  }
        }
