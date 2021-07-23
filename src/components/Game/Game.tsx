import styled from '@emotion/styled'
import Image from 'next/image'
import { FC } from 'react'

import { colors } from '../../data/colors'
import { logos } from '../../data/logos'
import { border, gradient } from '../../utils/mixins'
import { h3Styles } from '../Typography'

const Logo = styled.div<{ highlight?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0.1em;
  background-color: ${colors.blueLight};
  ${gradient}
  ${h3Styles}
  ${border}
  border-style: solid;
`

const TeamName = styled.div<{ played: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding-right: 1em;
  padding-left: 1em;
  background-color: ${(p) => (p.played ? colors.blue : colors.gray)};
  ${gradient}
  font-weight: bold;
  text-transform: uppercase;
  ${border}
  border-top-style: solid;
  border-bottom-style: solid;
  white-space: nowrap;
`

const Score = styled.div<{ played: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5ch;
  height: 100%;
  padding-right: 0.5em;
  padding-left: 0.5em;
  background-color: ${(p) => (p.played ? colors.blue : colors.gray)};
  ${gradient}
  font-weight: bold;
  ${border}
  border-style: solid;
  white-space: nowrap;
`

export const Game: FC<{
  teamLeftName: string
  teamLeftScore?: number
  teamRightScore?: number
  teamRightName: string
}> = ({ teamLeftName, teamLeftScore, teamRightScore, teamRightName }) => {
  const leftScore =
    (teamLeftScore || teamLeftScore === 0) && teamLeftScore.toString()
  const rightScore =
    (teamRightScore || teamRightScore === 0) && teamRightScore.toString()

  const played = !!(leftScore && rightScore)

  return (
    <>
      <Logo>
        <Image
          src={logos[teamLeftName]}
          width={54}
          height={54}
          objectFit="contain"
          objectPosition="center"
        />
      </Logo>
      <TeamName played={played}>{teamLeftName}</TeamName>

      <Score played={played}>
        <span>{leftScore || '?'}</span>
        <span>-</span>
        <span>{rightScore || '?'}</span>
      </Score>

      <TeamName played={played}>{teamRightName}</TeamName>
      <Logo>
        <Image
          src={logos[teamRightName]}
          width={54}
          height={54}
          objectFit="contain"
          objectPosition="center"
        />
      </Logo>
    </>
  )
}
