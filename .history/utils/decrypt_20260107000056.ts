import crypto from 'crypto'

export function decryptPayload(payload: string, secret: string) {
  const decipher = crypto.createDecipher('aes-256-cbc', secret)

  let decrypted = decipher.update(payload, 'base64', 'utf8')
  decrypted += decipher.final('utf8')

  return JSON.parse(decrypted)
}
