import { NextApiRequest, NextApiResponse } from 'next'

import { db } from '../../utils/firebase'

const baseURL = process.env.BASE_URL || 'http://localhost:3456'

export default async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> => {
  const platform = req.query.platform as string
  const id = req.query.id as string
  const memberId = req.query.memberId as string

  const data = await fetch(
    `${baseURL}/api/tracking?platform=${platform}&id=${id}`,
  ).then((res) => res.json())

  await db
    .collection('players')
    .doc(memberId)
    .set({ trackingData: JSON.stringify(data) }, { merge: true })

  res.status(200).end()
}
