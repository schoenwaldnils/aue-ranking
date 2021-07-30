import firebase from 'firebase/app'

import { Player } from './Player'

export type FirebaseTeam = {
  id?: string
  name: string
  members?: firebase.firestore.DocumentReference[]
}

export type Team = {
  id?: string
  name: string
  members?: Player[]
}
