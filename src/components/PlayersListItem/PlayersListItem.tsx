import { IconButton } from '@contentful/forma-36-react-components'
import styled from '@emotion/styled'
import Image from 'next/image'
import { FC } from 'react'

import { Player } from '../../@types/Player'
import { colors } from '../../data/colors'
import { useDB } from '../../hooks/useDB'
// import { IconButton } from '../IconButton'
import { PlayerForm } from '../PlayerForm'

const Tracking = styled.a`
  &,
  &:visited {
    color: inherit;
  }
`

const Avatar = styled(Image)`
  border-radius: 0.25rem;
`

const RewardImg = styled(Image)`
  padding: 0.25rem;
  background-color: ${colors.almostblack};
  border-radius: 0.25rem;
`

const Playlists = styled.div`
  display: flex;
  gap: 0.25rem;
  padding: 0.25rem;
  background-color: ${colors.almostblack};
  border-radius: 0.25rem;
`

const Playlist = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`

export const PlayersListItem: FC<Player> = (player) => {
  const { deletePlayer } = useDB()

  return (
    <>
      <Tracking href={player.trackingLink || null} target="_blank">
        <IconButton iconProps={{ icon: 'Link', size: 'medium' }} />
      </Tracking>

      <Avatar
        src={player.avatar || 'http://www.fillmurray.com/184/184'}
        alt={player.name}
        width={80}
        height={80}
      />

      <div>{player.name}</div>

      <div>
        {player.seasonRewardImg && (
          <RewardImg
            src={player.seasonRewardImg}
            alt="Rank"
            width={80}
            height={80}
          />
        )}
      </div>

      <Playlists>
        {player.playlists &&
          player.playlists.slice(1, player.playlists.length).map((p) => (
            <Playlist key={p.name}>
              <Image src={p.icon} alt="Rank" width={32} height={32} />
            </Playlist>
          ))}
      </Playlists>

      <IconButton
        onClick={() => deletePlayer(player.id)}
        buttonType="negative"
        iconProps={{ icon: 'Delete', size: 'medium' }}
      />
      <PlayerForm player={player} />
    </>
  )
}
