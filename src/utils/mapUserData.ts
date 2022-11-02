import type { User } from 'firebase/auth'

import type { UserType } from '../@types/User.d'

export const mapUserData = (user: User, token: string): UserType => {
  const { uid, email, photoURL } = user

  return {
    id: uid,
    email,
    photoURL,
    token,
  }
}
