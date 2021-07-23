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

  const winnerBracket: RoundProps[] = [
    {
      title: null,
      seeds: [
        {
          id: 'wb 1.1',
          title: sheet.getCell(2, 1).value,
          singleLine: true,
          teams: [
            { name: sheet.getCell(3, 1).value },
            { name: sheet.getCell(3, 5).value },
          ],
        },
        {
          id: 'wb 1.2',
          title: sheet.getCell(2, 8).value,
          singleLine: true,
          teams: [
            { name: sheet.getCell(3, 8).value },
            { name: sheet.getCell(3, 12).value },
          ],
        },
      ],
    },
    {
      title: null,
      seeds: [
        {
          id: 'wb 2.1',
          title: sheet.getCell(11, 1).value,
          teams: [
            { name: sheet.getCell(12, 1).value },
            { name: sheet.getCell(12, 5).value },
          ],
        },
        {
          id: 'wb 2.2',
          title: sheet.getCell(11, 8).value,
          teams: [
            { name: sheet.getCell(12, 8).value },
            { name: sheet.getCell(12, 12).value },
          ],
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
          teams: [
            { name: sheet.getCell(41, 1).value },
            { name: sheet.getCell(41, 5).value },
          ],
        },
      ],
    },
    {
      title: null,
      seeds: [
        {
          id: 'final',
          title: sheet.getCell(58, 0).value,
          teams: [
            { name: sheet.getCell(61, 1).value },
            { name: sheet.getCell(61, 5).value },
          ],
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
          teams: [
            { name: sheet.getCell(22, 1).value },
            { name: sheet.getCell(22, 5).value },
          ],
        },
        {
          id: 'lb 1.2',
          title: sheet.getCell(21, 8).value,
          teams: [
            { name: sheet.getCell(22, 8).value },
            { name: sheet.getCell(22, 12).value },
          ],
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
          teams: [
            { name: sheet.getCell(31, 1).value },
            { name: sheet.getCell(31, 5).value },
          ],
        },
      ],
    },
    {
      title: null,
      seeds: [
        {
          id: 'lb final',
          title: sheet.getCell(50, 1).value,
          teams: [
            { name: sheet.getCell(51, 1).value },
            { name: sheet.getCell(51, 5).value },
          ],
        },
      ],
    },
  ]

  return {
    winnerBracket,
    looserBracket,
  }
}
