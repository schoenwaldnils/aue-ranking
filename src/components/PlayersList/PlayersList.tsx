import styled from '@emotion/styled'
import { FC } from 'react'

import { Player } from '../../@types/Player'
import { PlayersListItem } from '../PlayersListItem'

const PlayersListContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto 1fr auto auto auto auto;
  gap: 1rem;
  align-items: center;
  line-height: 1;

  a,
  img {
    display: block;
  }
`

const Playlists = styled.div`
  display: flex;
  gap: 0.25rem;
`

const PlaylistLabel = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
  font-size: 0.5rem;
  writing-mode: vertical-rl;
  text-orientation: sideways;
  transform: rotate(180deg);
`

export const PlayersList: FC<{ players: Player[] }> = ({ players }) => {
  return (
    <PlayersListContainer>
      <div />
      <div />
      <div />
      <div />
      <Playlists>
        {players[0].playlists.slice(1, players[0].playlists.length).map((p) => (
          <PlaylistLabel key={p.name}>{p.name}</PlaylistLabel>
        ))}
      </Playlists>
      <div />
      <div />

      {players.map((player) => (
        <PlayersListItem {...player} key={player.id} />
      ))}
    </PlayersListContainer>
  )
}
