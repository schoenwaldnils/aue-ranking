import firebase from 'firebase/app'

import { UserType } from '../@types/User.d'

export const mapUserData = async (user: firebase.User): Promise<UserType> => {
  const { uid, email, photoURL } = user

  const token = await user.getIdToken(true)

  return {
    id: uid,
    email,
    token,
    photoURL,
  }
}
