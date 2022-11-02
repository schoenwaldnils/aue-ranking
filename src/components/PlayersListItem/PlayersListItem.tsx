import { IconButton } from '@contentful/forma-36-react-components'
import styled from '@emotion/styled'
import Image from 'next/image'
import { FC } from 'react'
import {
  SiEpicgames,
  SiNintendoswitch,
  SiPlaystation,
  SiSteam,
  SiXbox,
} from 'react-icons/si'

import { Player } from '../../@types/Player'
import { colors } from '../../data/colors'
import { deletePlayer } from '../../hooks/useDB'
import { PlayerForm } from '../PlayerForm'

const platformIcons = {
  steam: SiSteam,
  epic: SiEpicgames,
  switch: SiNintendoswitch,
  psn: SiPlaystation,
  xbl: SiXbox,
}

export const showPlaylists = [
  'Ranked Duel 1v1',
  'Ranked Doubles 2v2',
  'Ranked Standard 3v3',
]

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
  const PlatformIcon = platformIcons[player.platform]

  return (
    <>
      <Tracking href={player.trackingLink || null} target="_blank">
        <IconButton iconProps={{ icon: 'Link', size: 'medium' }} />
      </Tracking>

      <div>{PlatformIcon && <PlatformIcon />}</div>

      <div>
        {player.avatar && (
          <Avatar
            src={player.avatar}
            alt={player.name}
            width={80}
            height={80}
          />
        )}
      </div>

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
          player.playlists
            .filter((p) => showPlaylists.includes(p.name))
            .map((p) => (
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
