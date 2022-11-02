import type { UserType } from '../@types/User'
import { createCookie, eraseCookie, readCookie } from './cookie'

export const getUserFromCookie = (): UserType => {
  const cookie = readCookie('auth')

  if (!cookie) {
    return
  }

  // eslint-disable-next-line consistent-return
  return JSON.parse(cookie) as UserType
}

export const setUserCookie = (user: UserType): void => {
  createCookie('auth', JSON.stringify(user), {
    // firebase id tokens expire in one hour
    // set cookie expiry to match
    maxAgeInDays: 1 / 24,
  })
}

export const removeUserCookie = (): void => eraseCookie('auth')
