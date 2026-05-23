'use server'
import { redirect } from 'next/navigation'
import { Resend } from 'resend'

export async function submitQuestionnaire(formData: FormData) {
  const fields: Record<string, string> = {}
  for (const [key, val] of formData.entries()) {
    if (typeof val === 'string') {
      fields[key] = fields[key] ? `${fields[key]}, ${val}` : val
    }
  }

  if (process.env.RESEND_API_KEY) {
    try {
      const resend = new Resend(process.env.RESEND_API_KEY)
      const rows = Object.entries(fields)
        .map(([k, v]) => `<tr><td style="padding:4px 16px 4px 0;color:#888;vertical-align:top"><strong>${k}</strong></td><td style="white-space:pre-wrap">${v.replace(/\n/g, '<br>')}</td></tr>`)
        .join('')

      await resend.emails.send({
        from: 'Yellowhammer Studios <onboarding@resend.dev>',
        to: 'terikluk@gmail.com',
        subject: `New Questionnaire: ${fields['business-name'] || fields['your-name'] || 'Submission'}`,
        html: `
          <h2 style="font-family:sans-serif">New Brand Questionnaire</h2>
          <table style="font-family:sans-serif;font-size:15px;border-collapse:collapse">${rows}</table>
        `,
      })
    } catch {
      // email send failed — still redirect so UX isn't broken
    }
  }

  redirect('/thankyou')
}
