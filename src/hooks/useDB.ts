import { useCallback } from 'react'
import { useCollectionData } from 'react-firebase-hooks/firestore'

import { Player } from '../@types/Player'
import { FirebaseTeam, Team } from '../@types/Team'
import firebase, { db } from '../utils/firebase'

type Return = {
  players: Player[]
  playersLoading: boolean
  playersError: firebase.FirebaseError
  deletePlayer: (id: string) => void
  teams: Team[]
  teamsLoading: boolean
  teamsError: firebase.FirebaseError
}

export const useDB = (): Return => {
  const [players, playersLoading, playersError] = useCollectionData<Player>(
    firebase.firestore().collection('players'),
    { idField: 'id' },
  )

  const [teams, teamsLoading, teamsError] = useCollectionData<Team>(
    firebase.firestore().collection('teams'),
    {
      idField: 'id',
      transform: (t: FirebaseTeam) => ({
        ...t,
        members: t.members.map((m) => players.find((p) => p.id === m.id)),
      }),
    },
  )

  const deletePlayer = useCallback(
    (id: string) => db.collection('players').doc(id).delete(),
    [],
  )

  return {
    players: players?.map((i) => ({
      ...i,
      team: teams?.find((t) => t.members.map((m) => m?.id).includes(i.id)),
    })),
    playersLoading,
    playersError,
    deletePlayer,
    teams,
    teamsLoading,
    teamsError,
  }
}
