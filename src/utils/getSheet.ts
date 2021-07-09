import { GoogleSpreadsheet } from 'google-spreadsheet'
import creds from '../../aue-ranking-creds.json'
import { RankingItem } from '../components/RankingItem'

export const getSheet = async () => {
  // Initialize the sheet - doc ID is the long id in the sheets URL
  const doc = new GoogleSpreadsheet(
    '1dhviQAHF92P4_5vp0adUHpI2I2tupNmLsXc66Ckn2lE',
  )

  await doc.useServiceAccountAuth(creds)

  await doc.loadInfo()

  console.log(doc.title)

  const sheet = doc.sheetsByTitle['Progress']

  console.log(sheet.title)
  console.log(sheet.rowCount)

  await sheet.loadCells('A1:G7')

  const teams = Array.apply(null, Array(6)).map((value, index) => {
    const rowIndex = index + 1

    const team: RankingItem = {
      teamName: sheet.getCell(rowIndex, 1).value as string,
      wins: sheet.getCell(rowIndex, 2).value as number,
      loses: sheet.getCell(rowIndex, 3).value as number,
      goalsShot: sheet.getCell(rowIndex, 4).value as number,
      goalsRecieved: sheet.getCell(rowIndex, 5).value as number,
    }
    return team
  })

  return {
    teams,
  }
}
