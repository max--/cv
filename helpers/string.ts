export const trim = (str: string = '') =>
  `${str}`.trim().replace(/\s{2,}/g, ' ')

export const toBase64 = (str: string) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str)
