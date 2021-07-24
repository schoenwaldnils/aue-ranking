import { GoogleSpreadsheet } from 'google-spreadsheet'

export type Team = {
  teamName: string
  wins: number
  loses: number
  points: number
  goalsShot: number
  assists: number
  saves: number
  shots: number
  efficiency: number
  goalDiff: number
  goalsRecieved: number
}

export const getWinnerData = async (): Promise<{ team?: Team }> => {
  // Initialize the sheet - doc ID is the long id in the sheets URL
  const doc = new GoogleSpreadsheet(
    '1dhviQAHF92P4_5vp0adUHpI2I2tupNmLsXc66Ckn2lE',
  )

  doc.useApiKey(process.env.GOOGLE_API_KEY)

  await doc.loadInfo()

  const sheetPlayoffs = doc.sheetsByTitle['Play Offs']

  await sheetPlayoffs.loadCells('A62:F72')

  const getTeam = (row: number, column: number, isFinal = false) => {
    const team = {
      name: sheetPlayoffs.getCell(row, column).value,
      games: [
        sheetPlayoffs.getCell(row + 1, column).value,
        sheetPlayoffs.getCell(row + 3, column).value,
        sheetPlayoffs.getCell(row + 5, column).value,
      ],
    }

    if (isFinal) {
      team.games.push(sheetPlayoffs.getCell(row + 7, column).value)
      team.games.push(sheetPlayoffs.getCell(row + 9, column).value)
    }

    return team
  }

  const finalTeams = [getTeam(61, 1, true), getTeam(61, 5, true)]

  const gamesLength = finalTeams[0].games.length

  const teamOneGamesWon = finalTeams[0].games.filter(
    (i, key) => (i || i === 0) && i > finalTeams[1].games[key],
  ).length

  const teamTwoGamesWon = finalTeams[1].games.filter(
    (i, key) => (i || i === 0) && i > finalTeams[0].games[key],
  ).length

  const teamOneWon = teamOneGamesWon > gamesLength / 2
  const teamTwoWon = teamTwoGamesWon > gamesLength / 2

  let winnerTeamName

  if (teamOneWon) {
    winnerTeamName = finalTeams[0].name
  }

  if (teamTwoWon) {
    winnerTeamName = finalTeams[1].name
  }

  const sheetTeamStats = doc.sheetsByTitle['Team Stats']

  await sheetTeamStats.loadCells('A5:L10')

  // eslint-disable-next-line prefer-spread
  const teams: Team[] = Array.apply(null, Array(6)).map((value, index) => {
    const rowIndex = index + 4

    const team: Team = {
      teamName: sheetTeamStats.getCell(rowIndex, 1).value as string,
      wins: sheetTeamStats.getCell(rowIndex, 2).value as number,
      loses: sheetTeamStats.getCell(rowIndex, 3).value as number,
      points: sheetTeamStats.getCell(rowIndex, 4).value as number,
      goalsShot: sheetTeamStats.getCell(rowIndex, 5).value as number,
      assists: sheetTeamStats.getCell(rowIndex, 6).value as number,
      saves: sheetTeamStats.getCell(rowIndex, 7).value as number,
      shots: sheetTeamStats.getCell(rowIndex, 8).value as number,
      efficiency: sheetTeamStats.getCell(rowIndex, 9).value as number,
      goalDiff: sheetTeamStats.getCell(rowIndex, 10).value as number,
      goalsRecieved: sheetTeamStats.getCell(rowIndex, 11).value as number,
    }
    return team
  })

  console.log(teams)

  const winnerTeam = teams.find((i) => i.teamName === winnerTeamName)

  console.log(winnerTeam)

  if (winnerTeam) {
    return {
      team: winnerTeam,
    }
  }
  return {}
}
