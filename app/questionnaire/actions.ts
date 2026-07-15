'use server'
import { redirect } from 'next/navigation'
import { Resend } from 'resend'

function escapeHtml(str: string) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

export async function submitQuestionnaire(formData: FormData) {
  if (formData.get('website-url')) {
    redirect('/thankyou')
  }

  const fields: Record<string, string> = {}
  const attachments: { filename: string; content: Buffer }[] = []

  for (const [key, val] of formData.entries()) {
    if (typeof val === 'string') {
      if (!val.trim()) continue
      fields[key] = fields[key] ? `${fields[key]}, ${val}` : val
    } else if (val.size > 0) {
      const buffer = Buffer.from(await val.arrayBuffer())
      attachments.push({ filename: val.name, content: buffer })
    }
  }

  if (process.env.RESEND_API_KEY) {
    const resend = new Resend(process.env.RESEND_API_KEY)
    const rows = Object.entries(fields)
      .map(([k, v]) => `<tr><td style="padding:4px 16px 4px 0;color:#888;vertical-align:top"><strong>${escapeHtml(k)}</strong></td><td style="white-space:pre-wrap">${escapeHtml(v).replace(/\n/g, '<br>')}</td></tr>`)
      .join('')
    const attachmentNote = attachments.length
      ? `<p style="font-family:sans-serif;font-size:14px;color:#888">${attachments.length} file(s) attached: ${attachments.map((a) => escapeHtml(a.filename)).join(', ')}</p>`
      : ''

    const { error } = await resend.emails.send({
      from: 'Yellowhammer Studios <hello@send.yellowhammerstudios.com>',
      to: ['tkluk@yellowhammerstudios.com', 'terikluk@gmail.com'],
      subject: `New Questionnaire: ${escapeHtml(fields['business-name'] || fields['your-name'] || 'Submission')}`,
      html: `
        <h2 style="font-family:sans-serif">New Brand Questionnaire</h2>
        <table style="font-family:sans-serif;font-size:15px;border-collapse:collapse">${rows}</table>
        ${attachmentNote}
      `,
      attachments: attachments.length ? attachments : undefined,
    })

    if (error) console.error('Resend error:', error)
  }

  redirect('/thankyou')
}
