import type { Player } from './Player'

export type FirebaseTeam = {
  id?: string
  name: string
  members?: DocumentReference[]
}

export type Team = {
  id?: string
  name: string
  members?: Player[]
}
