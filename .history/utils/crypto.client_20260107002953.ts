import crypto from "crypto"

const ALGO = "aes-256-cbc"
const IV_LENGTH = 16

export function encryptPayload(data: object, secret: string): string {
  const iv = crypto.randomBytes(IV_LENGTH)
  const key = crypto.createHash("sha256").update(secret).digest()

  const cipher = crypto.createCipheriv(ALGO, key, iv)

  let encrypted = cipher.update(JSON.stringify(data), "utf8")
  encrypted = Buffer.concat([encrypted, cipher.final()])

  // 👉 IV + DATA
  return Buffer.concat([iv, encrypted]).toString("base64")
}
