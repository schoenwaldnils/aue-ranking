import { NextApiRequest, NextApiResponse } from 'next'

import { db } from '../../utils/firebase'

const baseURL = 'http://localhost:3456'

export default async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> => {
  const playersRef = await db.collection('players')
  const snapshot = await playersRef.get()

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

      await playersRef
        .doc(nextPlayer.id)
        .set({ trackingData: JSON.stringify(data) }, { merge: true })
      return [...prevData, true]
    } catch (error) {
      res.status(416).end()
    }
  }, [])

  res.status(200).end()
}
