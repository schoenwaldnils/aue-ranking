import styled from '@emotion/styled'
import { FC } from 'react'

import { Player } from '../../@types/Player'
import { PlayersListItem } from '../PlayersListItem'

const PlayersListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const PlayersList: FC<{ players: Player[] }> = ({ players }) => {
  return (
    <PlayersListContainer>
      {players.map((player) => (
        <PlayersListItem {...player} key={player.id} />
      ))}
    </PlayersListContainer>
  )
}
