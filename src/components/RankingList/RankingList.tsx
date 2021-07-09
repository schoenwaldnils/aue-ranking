import styled from '@emotion/styled'
import { FC } from 'react'

import { RankingItem, RankingLegend } from '../RankingItem'

const List = styled.div`
  display: grid;
  grid-template-columns: auto auto 1fr auto auto;
  align-items: center;
  row-gap: 16px;
  margin: 0 auto;
`

export const RankingList: FC<{ teams: RankingItem[] }> = ({ teams }) => {
  const teamsWithLogo = teams.map((t) => ({
    ...t,
    teamLogo: 'https://www.fillmurray.com/64/64',
  }))

  return (
    <List>
      <RankingLegend />
      {teamsWithLogo.map((i, key) => (
        <RankingItem {...i} index={key + 1} key={key} />
      ))}
    </List>
  )
}
