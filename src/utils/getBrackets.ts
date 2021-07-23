import { GoogleSpreadsheet } from 'google-spreadsheet'
import { RoundProps } from 'react-brackets'

export const getBrackets = async (): Promise<{
  winnerBracket: RoundProps[]
  looserBracket: RoundProps[]
}> => {
  // Initialize the sheet - doc ID is the long id in the sheets URL
  const doc = new GoogleSpreadsheet(
    '1dhviQAHF92P4_5vp0adUHpI2I2tupNmLsXc66Ckn2lE',
  )

  doc.useApiKey(process.env.GOOGLE_API_KEY)

  await doc.loadInfo()

  const sheet = doc.sheetsByTitle['Play Offs']

  await sheet.loadCells('A1:M71')

  const getTeam = (row: number, column: number, isFinal = false) => {
    const team = {
      name: sheet.getCell(row, column).value,
      games: [
        sheet.getCell(row + 1, column).value,
        sheet.getCell(row + 3, column).value,
        sheet.getCell(row + 5, column).value,
      ],
    }

    if (isFinal) {
      team.games.push(sheet.getCell(row + 7, column).value)
      team.games.push(sheet.getCell(row + 9, column).value)
    }

    return team
  }

  const winnerBracket: RoundProps[] = [
    {
      title: null,
      seeds: [
        {
          id: 'wb 1.1',
          title: sheet.getCell(2, 1).value,
          singleLine: true,
          teams: [getTeam(3, 1), getTeam(3, 5)],
        },
        {
          id: 'wb 1.2',
          title: sheet.getCell(2, 8).value,
          singleLine: true,
          teams: [getTeam(3, 8), getTeam(3, 12)],
        },
      ],
    },
    {
      title: null,
      seeds: [
        {
          id: 'wb 2.1',
          title: sheet.getCell(11, 1).value,
          teams: [getTeam(12, 1), getTeam(12, 5)],
        },
        {
          id: 'wb 2.2',
          title: sheet.getCell(11, 8).value,
          teams: [getTeam(12, 8), getTeam(12, 12)],
        },
      ],
    },
    {
      title: null,
      seeds: [
        {
          id: 'wb final',
          title: sheet.getCell(40, 1).value,
          singleLine: true,
          teams: [getTeam(41, 1), getTeam(41, 5)],
        },
      ],
    },
    {
      title: null,
      seeds: [
        {
          id: 'final',
          title: sheet.getCell(58, 0).value,
          teams: [getTeam(61, 1, true), getTeam(61, 5, true)],
        },
      ],
    },
  ]

  const looserBracket: RoundProps[] = [
    {
      title: null,
      seeds: [
        {
          id: 'lb 1.1',
          title: sheet.getCell(21, 1).value,
          teams: [getTeam(22, 1), getTeam(22, 5)],
        },
        {
          id: 'lb 1.2',
          title: sheet.getCell(21, 8).value,
          teams: [getTeam(22, 8), getTeam(22, 12)],
        },
      ],
    },
    {
      title: null,
      seeds: [
        {
          id: 'lb 2.1',
          title: sheet.getCell(30, 1).value,
          singleLine: true,
          teams: [getTeam(31, 1), getTeam(31, 5)],
        },
      ],
    },
    {
      title: null,
      seeds: [
        {
          id: 'lb final',
          title: sheet.getCell(50, 1).value,
          teams: [getTeam(51, 1), getTeam(51, 5)],
        },
      ],
    },
  ]

  return {
    winnerBracket,
    looserBracket,
  }
}
