import { GoogleSpreadsheet } from 'google-spreadsheet'

export type TextRow = { left?: string; right?: string }

// const isFloat = (n: number) => {
//   return Number(n) === n && n % 1 !== 0
// }

export const getAbspannData = async (): Promise<{
  texts: TextRow[]
  scrollPixelPerSecond?: number
}> => {
  // Initialize the sheet - doc ID is the long id in the sheets URL
  const doc = new GoogleSpreadsheet(
    '1dhviQAHF92P4_5vp0adUHpI2I2tupNmLsXc66Ckn2lE',
  )

  doc.useApiKey(process.env.NEXT_PUBLIC_FIREBASE_API_KEY)

  await doc.loadInfo()

  const sheet = doc.sheetsByTitle['Abspann']

  await sheet.loadCells('A1:B606')
  await sheet.loadCells('C1')

  // eslint-disable-next-line prefer-spread
  const texts = Array.apply(null, Array(606)).map((value, index) => {
    const rowIndex = index

    const left = sheet.getCell(rowIndex, 0).formattedValue
    const right = sheet.getCell(rowIndex, 1).formattedValue

    // const leftFormated = sheet.getCell(rowIndex, 0).formattedValue
    // const rightFormated = sheet.getCell(rowIndex, 1).formattedValue

    // console.log({ rowIndex, leftFormated, rightFormated })
    const text: TextRow = {}

    if (typeof left === 'string') {
      text.left = left
    }

    // if (typeof left === 'number') {
    //   if (isFloat(left)) {
    //     text.left = left.toFixed(1)
    //   } else {
    //     text.left = left.toString()
    //   }
    // }

    if (typeof right === 'string') {
      text.right = right
    }

    // if (typeof right === 'number') {
    //   if (isFloat(right)) {
    //     text.right = right.toFixed(1)
    //   } else {
    //     text.right = right.toString()
    //   }
    // }

    return text
  })

  const scrollPixelPerSecond = sheet.getCell(0, 2).value as number

  return {
    texts,
    scrollPixelPerSecond,
  }
}
