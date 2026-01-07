import CryptoJS from "crypto-js"

export function decryptPayload<T = any>(
  payload?: string,
  secret?: string
): T | null {
  if (!payload || !secret) return null

  try {
    const bytes = CryptoJS.AES.decrypt(payload, secret)
    const decrypted = bytes.toString(CryptoJS.enc.Utf8)

    if (!decrypted) return null
    return JSON.parse(decrypted) as T
  } catch {
    return null
  }
}
