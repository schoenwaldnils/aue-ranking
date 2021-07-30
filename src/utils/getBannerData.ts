import { GoogleSpreadsheet } from 'google-spreadsheet'

export type Match = {
  team1: {
    name: string
    goals: number
  }
  team2: {
    name: string
    goals: number
  }
}

export const getBannerData = async (): Promise<{
  allMatches: Match[]
  matches: Match[]
}> => {
  // Initialize the sheet - doc ID is the long id in the sheets URL
  const doc = new GoogleSpreadsheet(
    '1dhviQAHF92P4_5vp0adUHpI2I2tupNmLsXc66Ckn2lE',
  )

  doc.useApiKey(process.env.NEXT_PUBLIC_FIREBASE_API_KEY)

  await doc.loadInfo()

  const sheet = doc.sheetsByTitle['Regular Season']

  await sheet.loadCells('A1:G75')

  // eslint-disable-next-line prefer-spread
  const matches: Match[] = Array.apply(null, Array(15)).map((value, index) => {
    const rowIndex = index * 5

    const match: Match = {
      team1: {
        name: sheet.getCell(rowIndex + 3, 2).value as string,
        goals: sheet.getCell(rowIndex + 4, 2).value as number,
      },
      team2: {
        name: sheet.getCell(rowIndex + 3, 6).value as string,
        goals: sheet.getCell(rowIndex + 4, 6).value as number,
      },
    }
    return match
  })

  const playedMatches = matches.filter(
    (i) =>
      i.team1.goals ||
      i.team1.goals === 0 ||
      i.team2.goals ||
      i.team2.goals === 0,
  ).length

  return {
    allMatches: matches,
    matches: matches.slice(0, playedMatches + 2),
  }
}
