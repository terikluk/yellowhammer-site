import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

function escapeHtml(str: string) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

export async function POST(req: NextRequest) {
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json({ error: 'Email not configured' }, { status: 500 })
  }

  const { name, business, email, phone, projectType, message } = await req.json()

  if (!name || !email) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  const resend = new Resend(process.env.RESEND_API_KEY)

  const { error: sendError } = await resend.emails.send({
    from: 'Yellowhammer Studios <hello@send.yellowhammerstudios.com>',
    to: ['tkluk@yellowhammerstudios.com', 'terikluk@gmail.com'],
    replyTo: email,
    subject: `New Contact: ${escapeHtml(name)}${projectType ? ` — ${escapeHtml(projectType)}` : ''}`,
    html: `
      <h2 style="font-family:sans-serif">New Contact Form Submission</h2>
      <table style="font-family:sans-serif;font-size:15px;border-collapse:collapse">
        <tr><td style="padding:4px 12px 4px 0;color:#888"><strong>Name</strong></td><td>${escapeHtml(name)}</td></tr>
        <tr><td style="padding:4px 12px 4px 0;color:#888"><strong>Business</strong></td><td>${escapeHtml(business || '—')}</td></tr>
        <tr><td style="padding:4px 12px 4px 0;color:#888"><strong>Email</strong></td><td>${escapeHtml(email)}</td></tr>
        <tr><td style="padding:4px 12px 4px 0;color:#888"><strong>Phone</strong></td><td>${escapeHtml(phone || '—')}</td></tr>
        <tr><td style="padding:4px 12px 4px 0;color:#888"><strong>Project Type</strong></td><td>${escapeHtml(projectType || '—')}</td></tr>
      </table>
      <hr style="margin:20px 0;border:none;border-top:1px solid #eee" />
      <p style="font-family:sans-serif;font-size:15px;color:#444">${message ? escapeHtml(message).replace(/\n/g, '<br>') : '<em>No message provided.</em>'}</p>
    `,
  })

  if (sendError) {
    console.error('Resend error:', sendError)
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}
