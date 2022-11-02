import type { FirebaseError } from 'firebase/app'
import type {
  FirestoreDataConverter,
  PartialWithFieldValue,
  WithFieldValue,
} from 'firebase/firestore'
import {
  collection,
  deleteDoc,
  doc,
  setDoc,
  updateDoc,
} from 'firebase/firestore'
import { useMemo } from 'react'
import { useCollectionData } from 'react-firebase-hooks/firestore'

import { FirebasePlayer, Player } from '../@types/Player'
import { FirebaseTeam, Team } from '../@types/Team'
import { db } from '../utils/firebase'
import { getDataFromTracking } from '../utils/getDataFromTracking'

type ReturnPlayers = {
  players: Player[]
  playersLoading: boolean
  playersError: FirebaseError
}

type ReturnTeams = {
  teams: Team[]
  teamsLoading: boolean
  teamsError: FirebaseError
}

export const playerConverter: FirestoreDataConverter<Player> = {
  toFirestore: (player: PartialWithFieldValue<Player>) => {
    const firebasePlayer: PartialWithFieldValue<FirebasePlayer> = {
      ...player,
      trackingData: player.trackingData
        ? JSON.stringify(player.trackingData)
        : '',
    }

    return firebasePlayer
  },
  fromFirestore: (snapshot, options) => {
    const data = snapshot.data(options) as FirebasePlayer

    let player: Partial<Player> = {
      id: snapshot.id,
      name: data.name,
      playtime: data.playtime,
      platform: data.platform,
      platformId: data.platformId,
    }

    if (data.trackingData) {
      player = {
        ...player,
        ...getDataFromTracking(JSON.parse(data.trackingData)),
        trackingData: JSON.parse(data.trackingData),
      }
    }

    return player as Player
  },
}

export const usePlayers = (): ReturnPlayers => {
  const [players, playersLoading, playersError] = useCollectionData<Player>(
    collection(db, 'players').withConverter(playerConverter),
  )

  const mappedPlayers = useMemo(
    () =>
      players
        ? players.sort(
            (a, b) =>
              b.seasonRewardLevel * 10 +
              b.seasonPercentile / 100 -
              (a.seasonRewardLevel * 10 + a.seasonPercentile / 100),
          )
        : [],
    [players],
  )

  return {
    players: mappedPlayers,
    playersLoading,
    playersError,
  }
}

const teamConverter = (players: Player[]): FirestoreDataConverter<Team> => ({
  toFirestore: (team: PartialWithFieldValue<Team>) => team,
  fromFirestore: (snapshot, options) => {
    const data = snapshot.data(options) as FirebaseTeam
    const newTeam: Team = {
      id: data.id,
      name: data.name,
      members: data.members.map((m) => players.find((p) => p.id === m.id)),
    }
    return newTeam
  },
})

export const useTeams = (): ReturnTeams => {
  const { players } = usePlayers()

  const [teams, teamsLoading, teamsError] = useCollectionData<Team>(
    collection(db, 'teams').withConverter(teamConverter(players)),
  )

  return {
    teams,
    teamsLoading,
    teamsError,
  }
}

export const addPlayer = async (data: Player): Promise<void> =>
  setDoc(doc(db, 'players'), playerConverter.toFirestore(data))

export const updatePlayer = async (
  id: string,
  data: WithFieldValue<Player>,
): Promise<void> =>
  updateDoc(doc(db, 'players', id), playerConverter.toFirestore(data))

export const updateFirebasePlayer = async (
  id: string,
  data: Partial<FirebasePlayer>,
): Promise<void> => updateDoc(doc(db, 'players', id), data)

export const deletePlayer = (id: string): Promise<void> =>
  deleteDoc(doc(db, 'players', id))
