import styled from '@emotion/styled'
import { FC } from 'react'

import { Player } from '../../@types/Player'
import { PlayersListItem, showPlaylists } from '../PlayersListItem'

const PlayersListContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto 1fr auto auto auto auto;
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
  transform: rotate(180deg) translate(-1.75rem, -1rem) rotate(45deg);
`

export const PlayersList: FC<{ players: Player[] }> = ({ players }) => {
  return (
    <PlayersListContainer>
      <div />
      <div />
      <div />
      <div />
      <div />
      <Playlists>
        {players[0].playlists
          .filter((p) => showPlaylists.includes(p.name))
          .map((p) => (
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
