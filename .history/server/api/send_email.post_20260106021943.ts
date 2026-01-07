import nodemailer from "nodemailer";

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  const { pseudo, email, telephone, message } = body

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

  await transporter.sendMail({
    from: `"Formulaire Site" <${process.env.SMTP_USER}>`,
    to: process.env.MAIL_TO,
    subject: "Nouveau message",
    html: `
      <p><b>Pseudo :</b> ${pseudo}</p>
      <p><b>Email :</b> ${email}</p>
      <p><b>Téléphone :</b> ${telephone}</p>
      <p><b>Message :</b> ${message || "-"}</p>
    `,
  })

  return { success: true }
})
