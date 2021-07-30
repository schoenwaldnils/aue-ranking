import { GoogleSpreadsheet } from 'google-spreadsheet'

import { RankingItem } from '../components/RankingItem'

export const getPlayOffs = async (): Promise<{ teams: RankingItem[] }> => {
  // Initialize the sheet - doc ID is the long id in the sheets URL
  const doc = new GoogleSpreadsheet(
    '1dhviQAHF92P4_5vp0adUHpI2I2tupNmLsXc66Ckn2lE',
  )

  doc.useApiKey(process.env.NEXT_PUBLIC_FIREBASE_API_KEY)

  await doc.loadInfo()

  const sheet = doc.sheetsByTitle['Play Offs Auswertung']

  await sheet.loadCells('A1:I7')

  // eslint-disable-next-line prefer-spread
  const teams = Array.apply(null, Array(6)).map((value, index) => {
    const rowIndex = index + 1

    const team: RankingItem = {
      teamName: sheet.getCell(rowIndex, 1).value as string,
      wins: sheet.getCell(rowIndex, 2).value as number,
      loses: sheet.getCell(rowIndex, 3).value as number,
      goalsShot: sheet.getCell(rowIndex, 6).value as number,
      goalsRecieved: sheet.getCell(rowIndex, 7).value as number,
    }
    return team
  })

  return {
    teams,
  }
}
