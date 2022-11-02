import { NextApiRequest, NextApiResponse } from 'next'

import { updateFirebasePlayer } from '../../hooks/useDB'

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

  await updateFirebasePlayer(memberId, { trackingData: JSON.stringify(data) })

  res.status(200).end()
}
