import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import { UserType } from '../@types/User.d'
import { auth, googleProvider } from '../utils/firebase'
import { mapUserData } from '../utils/mapUserData'
import {
  getUserFromCookie,
  removeUserCookie,
  setUserCookie,
} from '../utils/userCookies'

type Return = {
  user: UserType
  logout: () => void
  login: () => void
}

export const useUser = (): Return => {
  const [user, setUser] = useState<UserType | undefined>()
  const router = useRouter()

  const login = async () => {
    googleProvider.setCustomParameters({ prompt: 'select_account' })

    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result)
        const token = credential.accessToken
        setUser(mapUserData(result.user, token))
        setUserCookie(mapUserData(result.user, token))
      })
      .catch((error) => {
        console.error(error)
        // // Handle Errors here.
        // const errorCode = error.code
        // const errorMessage = error.message
        // // The email of the user's account used.
        // const email = error.email
        // // The AuthCredential type that was used.
        // const credential = GoogleAuthProvider.credentialFromError(error)
        // // ...
      })
  }

  const logout = async () => {
    return auth
      .signOut()
      .then(() => {
        // Sign-out successful.
        removeUserCookie()
        router.push('/')
      })
      .catch((e) => {
        console.error(e)
      })
  }

  useEffect(() => {
    const userFromCookie = getUserFromCookie()

    if (!userFromCookie) {
      router.push('/')
      return
    }

    setUser(userFromCookie)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { user, login, logout }
}
