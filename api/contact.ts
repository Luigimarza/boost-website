import { Resend } from 'resend';

export const config = { runtime: 'edge' };

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: Request): Promise<Response> {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), { status: 405 });
  }

  let body: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    role: string;
    portfolio: string;
    message: string;
  };

  try {
    body = await req.json();
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid JSON' }), { status: 400 });
  }

  const { firstName, lastName, email, phone, role, portfolio, message } = body;

  if (!firstName || !lastName || !email || !phone || !role || !message) {
    return new Response(JSON.stringify({ error: 'Campi obbligatori mancanti' }), { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: 'BOOST Website <noreply@boostcreativestudio.com>',
    to: ['ciao@boostcreativestudio.com'],
    replyTo: email,
    subject: `Nuovo messaggio — ${firstName} ${lastName} (${role})`,
    html: `
      <!DOCTYPE html>
      <html lang="it">
      <head>
        <meta charset="UTF-8"/>
        <style>
          body { font-family: Arial, sans-serif; background: #f5f5f5; margin: 0; padding: 0; }
          .wrapper { max-width: 600px; margin: 40px auto; background: #ffffff; border-radius: 4px; overflow: hidden; }
          .header { background: #111010; padding: 32px 40px; }
          .header span { color: #F1552D; font-size: 22px; font-weight: 900; letter-spacing: -0.5px; text-transform: uppercase; }
          .body { padding: 36px 40px; }
          .label { font-size: 10px; text-transform: uppercase; letter-spacing: 2px; color: #999; margin-bottom: 4px; }
          .value { font-size: 16px; color: #111010; margin-bottom: 24px; }
          .divider { border: none; border-top: 1px solid #e5e5e5; margin: 8px 0 24px 0; }
          .message-box { background: #f9f9f9; border-left: 3px solid #F1552D; padding: 16px 20px; border-radius: 2px; }
          .message-text { font-size: 15px; color: #333; line-height: 1.6; white-space: pre-wrap; }
          .footer { background: #f5f5f5; padding: 20px 40px; text-align: center; font-size: 12px; color: #aaa; }
        </style>
      </head>
      <body>
        <div class="wrapper">
          <div class="header">
            <span>BOOST Creative Studio</span>
          </div>
          <div class="body">
            <p class="label">Mittente</p>
            <p class="value">${firstName} ${lastName}</p>

            <p class="label">Email</p>
            <p class="value"><a href="mailto:${email}" style="color:#F1552D;">${email}</a></p>

            <p class="label">Cellulare</p>
            <p class="value">${phone}</p>

            <p class="label">Ruolo / Interesse</p>
            <p class="value">${role}</p>

            ${portfolio ? `<p class="label">Portfolio / Link</p><p class="value"><a href="${portfolio}" style="color:#F1552D;">${portfolio}</a></p>` : ''}

            <hr class="divider"/>

            <p class="label">Messaggio</p>
            <div class="message-box">
              <p class="message-text">${message.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</p>
            </div>
          </div>
          <div class="footer">
            Inviato tramite il sito boostcreativestudio.com
          </div>
        </div>
      </body>
      </html>
    `,
  });

  if (error) {
    console.error('Resend error:', error);
    return new Response(JSON.stringify({ error: 'Errore invio email' }), { status: 500 });
  }

  return new Response(JSON.stringify({ ok: true }), { status: 200 });
}
