import styled from '@emotion/styled'
import { FC } from 'react'
import { IoMdTrash } from 'react-icons/io'

import { Player } from '../../@types/Player'
import { useDB } from '../../hooks/useDB'
import { PlayerForm } from '../PlayerForm'

const PlayerItem = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto auto auto auto;
  gap: 1rem;
  align-items: center;
  line-height: 1;

  a,
  img {
    display: block;
  }
`

const Delete = styled.div`
  position: relative;
  padding: 0.5em;
  color: indianred;
  cursor: pointer;
  line-height: 1;

  ::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 0;
    border-radius: 0.5em;
    transition: opacity 150ms;
    background-color: rgba(255, 255, 255, 0.1);
  }

  :hover::before {
    opacity: 1;
  }

  > svg {
    display: block;
  }
`

export const PlayersListItem: FC<Player> = (player) => {
  const { deletePlayer } = useDB()

  return (
    <>
      <PlayerItem key={player.id}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={player.avatar || 'http://www.fillmurray.com/184/184'}
          alt={player.name}
          width={80}
          height={80}
        />

        <div>{player.name}</div>

        <div>
          {player.trackingLink && (
            <a href={player.trackingLink} target="_blank">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://rocketleague.tracker.network/public/icons/tile310.png"
                alt="TRN Tracker Network"
                width={80}
                height={80}
              />
            </a>
          )}
        </div>

        <div>
          {player.rank && (
            <>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`https://trackercdn.com/cdn/tracker.gg/rocket-league/ranks/s4-${player.rank}.png`}
                alt="Rank"
                width={80}
                height={80}
              />
            </>
          )}
        </div>

        <Delete onClick={() => deletePlayer(player.id)}>
          <IoMdTrash />
        </Delete>
        <PlayerForm player={player} />
      </PlayerItem>
    </>
  )
}
