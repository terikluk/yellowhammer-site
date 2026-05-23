'use server'
import { redirect } from 'next/navigation'
import { Resend } from 'resend'

export async function submitContact(formData: FormData) {
  const name = (formData.get('name') as string) || ''
  const business = (formData.get('business') as string) || ''
  const email = (formData.get('email') as string) || ''
  const phone = (formData.get('phone') as string) || ''
  const projectType = (formData.get('project-type') as string) || ''
  const message = (formData.get('message') as string) || ''

  if (process.env.RESEND_API_KEY) {
    try {
      const resend = new Resend(process.env.RESEND_API_KEY)
      await resend.emails.send({
        from: 'Yellowhammer Studios <onboarding@resend.dev>',
        to: 'terikluk@gmail.com',
        replyTo: email,
        subject: `New Contact: ${name}${projectType ? ` — ${projectType}` : ''}`,
        html: `
          <h2 style="font-family:sans-serif">New Contact Form Submission</h2>
          <table style="font-family:sans-serif;font-size:15px;border-collapse:collapse">
            <tr><td style="padding:4px 12px 4px 0;color:#888"><strong>Name</strong></td><td>${name}</td></tr>
            <tr><td style="padding:4px 12px 4px 0;color:#888"><strong>Business</strong></td><td>${business || '—'}</td></tr>
            <tr><td style="padding:4px 12px 4px 0;color:#888"><strong>Email</strong></td><td>${email}</td></tr>
            <tr><td style="padding:4px 12px 4px 0;color:#888"><strong>Phone</strong></td><td>${phone || '—'}</td></tr>
            <tr><td style="padding:4px 12px 4px 0;color:#888"><strong>Project Type</strong></td><td>${projectType || '—'}</td></tr>
          </table>
          <hr style="margin:20px 0;border:none;border-top:1px solid #eee" />
          <p style="font-family:sans-serif;font-size:15px;color:#444">${message.replace(/\n/g, '<br>')}</p>
        `,
      })
    } catch {
      // email send failed — still redirect so UX isn't broken
    }
  }

  redirect('/thankyou')
}
