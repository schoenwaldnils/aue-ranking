import 'firebase/auth'

import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import { UserType } from '../@types/User.d'
import firebase from '../utils/firebase'
import { mapUserData } from '../utils/mapUserData'
import {
  getUserFromCookie,
  removeUserCookie,
  setUserCookie,
} from '../utils/userCookies'

type Return = {
  user: UserType
  logout: () => void
}

const useUser = (): Return => {
  const [user, setUser] = useState<UserType | undefined>()
  const router = useRouter()

  const logout = async () => {
    return firebase
      .auth()
      .signOut()
      .then(() => {
        // Sign-out successful.
        router.push('/auth')
      })
      .catch((e) => {
        console.error(e)
      })
  }

  useEffect(() => {
    // Firebase updates the id token every hour, this
    // makes sure the react state and the cookie are
    // both kept up to date
    const cancelAuthListener = firebase
      .auth()
      .onIdTokenChanged(async (fireUser) => {
        if (fireUser) {
          const userData = await mapUserData(fireUser)
          setUserCookie(userData)
          setUser(userData)
        } else {
          removeUserCookie()
          setUser(undefined)
        }
      })

    const userFromCookie = getUserFromCookie()
    if (!userFromCookie) {
      router.push('/')
      return
    }
    setUser(userFromCookie)

    // eslint-disable-next-line consistent-return
    return () => {
      cancelAuthListener()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { user, logout }
}

export { useUser }
