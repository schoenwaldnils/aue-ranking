import { NextApiRequest, NextApiResponse } from 'next'
import puppeteer from 'puppeteer'

export default async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> => {
  const platform = req.query.platform as string
  const id = req.query.id as string

  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto(
    `https://api.tracker.gg/api/v2/rocket-league/standard/profile/${platform}/${id}`,
  )

  const overview = await page.evaluate(() => {
    return JSON.parse(document.querySelector('pre').innerText).data
  })

  await page.goto(
    `https://api.tracker.gg/api/v1/rocket-league/player-history/mmr/${overview.metadata.playerId}`,
  )

  const mmr = await page.evaluate(() => {
    return JSON.parse(document.querySelector('pre').innerText).data
  })

  await page.goto(
    `https://api.tracker.gg/api/v1/rocket-league/player-history/overview/${overview.metadata.playerId}?type=graph`,
  )

  const history = await page.evaluate(() => {
    return JSON.parse(document.querySelector('pre').innerText).data
  })

  await browser.close()

  res.status(200).json({ overview, mmr, history })
}
