import 'firebase/auth'

import { FC } from 'react'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'

import firebase from '../../utils/firebase'
import { mapUserData } from '../../utils/mapUserData'
import { setUserCookie } from '../../utils/userCookies'

// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: '/',
  // We will display Google and Facebook as auth providers.
  signInOptions: [firebase.auth.EmailAuthProvider.PROVIDER_ID],
  signInSuccess: async ({ user }) => {
    const userData = await mapUserData(user)
    setUserCookie(userData)
  },
}

export const FirebaseAuth: FC = () => {
  return (
    <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
  )
}
