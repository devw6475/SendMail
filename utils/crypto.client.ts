import CryptoJS from 'crypto-js'

export function encryptData(data: any, secret: string) {
  return CryptoJS.AES.encrypt(
    JSON.stringify(data),
    secret
  ).toString()
}
