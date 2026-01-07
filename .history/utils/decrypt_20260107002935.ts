import crypto from "crypto"

const ALGO = "aes-256-cbc"
const IV_LENGTH = 16 // 16 bytes pour AES

export function decryptPayload<T = any>(
  payload?: string,
  secret?: string
): T | null {
  // ❌ sécurité : payload ou clé absents
  if (!payload || !secret) return null

  try {
    const buffer = Buffer.from(payload, "base64")

    // 🔑 clé sur 32 bytes
    const key = crypto.createHash("sha256").update(secret).digest()

    // 🔀 extraction IV + data
    const iv = buffer.subarray(0, IV_LENGTH)
    const encryptedText = buffer.subarray(IV_LENGTH)

    const decipher = crypto.createDecipheriv(ALGO, key, iv)

    let decrypted = decipher.update(encryptedText, undefined, "utf8")
    decrypted += decipher.final("utf8")

    return JSON.parse(decrypted) as T
  } catch (error) {
    console.error("❌ Decrypt error:", error)
    return null
  }
}
