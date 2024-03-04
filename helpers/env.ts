import { isDefined } from '@/type'

export const withinClient = () => {
  try {
    return isDefined(window)
  } catch (e) {
    return false
  }
}

export const isDev = () => withinClient()
  ? `${window.location}`.includes('localhost')
  : false