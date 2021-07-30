import { useCallback } from 'react'
import { useCollectionData } from 'react-firebase-hooks/firestore'

import { FirebasePlayer, Player } from '../@types/Player'
import { FirebaseTeam, Team } from '../@types/Team'
import { TrackingData } from '../@types/TrackingData'
import firebase, { db } from '../utils/firebase'
import { getDataFromTracking } from '../utils/getDataFromTracking'

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
    {
      idField: 'id',
      transform: (p: FirebasePlayer) => {
        const trackingData =
          p.trackingData &&
          (JSON.parse(p.trackingData as string) as TrackingData)
        return {
          ...p,
          trackingLink:
            p.platform &&
            p.platformId &&
            `https://rocketleague.tracker.network/rocket-league/profile/${p.platform}/${p.platformId}`,
          trackingData,
          ...getDataFromTracking(trackingData),
        }
      },
    },
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
    players: players
      ?.map((i) => ({
        ...i,
        team: teams?.find((t) => t.members.map((m) => m?.id).includes(i.id)),
      }))
      .sort(
        (a, b) =>
          b.seasonRewardLevel * 10 +
          b.seasonPercentile / 100 -
          (a.seasonRewardLevel * 10 + a.seasonPercentile / 100),
      ),
    playersLoading,
    playersError,
    deletePlayer,
    teams,
    teamsLoading,
    teamsError,
  }
}
