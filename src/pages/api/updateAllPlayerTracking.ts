import { collection, getDocs } from '@firebase/firestore'
import { NextApiRequest, NextApiResponse } from 'next'

import { playerConverter, updateFirebasePlayer } from '../../hooks/useDB'
import { db } from '../../utils/firebase'

const baseURL = 'http://localhost:3456'

export default async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> => {
  const playersRef = await collection(db, 'players').withConverter(
    playerConverter,
  )
  const snapshot = await getDocs(playersRef)

  const allPlayers = []

  snapshot.forEach((doc) => {
    allPlayers.push({
      id: doc.id,
      platform: doc.data().platform,
      platformId: doc.data().platformId,
    })
  })

  allPlayers.reduce(async (prevData, nextPlayer) => {
    try {
      const data = await fetch(
        `${baseURL}/api/tracking?platform=${nextPlayer.platform}&id=${nextPlayer.platformId}&memberId=${nextPlayer.id}`,
      ).then((res) => res.json())

      await updateFirebasePlayer(nextPlayer.id, {
        trackingData: JSON.stringify(data),
      })

      await updateFirebasePlayer(nextPlayer.id, {
        trackingData: JSON.stringify(data),
      })
      return [...prevData, true]
    } catch (error) {
      res.status(416).end()
    }
  }, [])

  res.status(200).end()
}
