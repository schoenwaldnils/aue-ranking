import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { FC } from 'react'

import { colors } from '../../data/colors'
import { border, gradient, slant } from '../../utils/mixins'
import { h3Styles } from '../Typography'

const itemHeight = '84px'

const itemGradient = css`
  background-color: ${colors.blueDark};
  ${gradient}
`

const Index = styled.div<{ highlight?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${itemHeight};
  height: ${itemHeight};
  background-color: ${colors.blue};
  ${itemGradient}
  ${h3Styles}
  ${border}
  border-style: solid;
`

const Image = styled.div`
  display: flex;
  align-items: center;
  height: ${itemHeight};
  padding: 0 14px;
  ${border}
  border-top-style: solid;
  border-bottom-style: solid;
  border-right-style: solid;

  ${itemGradient}
  background-color: ${colors.blueLight};
`

const Name = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  height: ${itemHeight};
  padding: 0 64px 0 32px;
  ${h3Styles}
  text-transform: uppercase;
  ${border}
  border-top-style: solid;
  border-bottom-style: solid;

  ${itemGradient}
`

const Numbers = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${itemHeight};
  padding: 0 32px;
  ${h3Styles}
  text-align: center;
  ${border}
  border-style: solid none;

  ${itemGradient}
`

const Goals = styled(Numbers)`
  ${itemGradient}
  ${slant}
  border-style: solid solid solid none;
`

export type RankingItem = {
  teamName: string
  teamLogo?: string
  wins: number
  loses: number
  goalsShot: number
  goalsRecieved: number
}

export const RankingItem: FC<RankingItem & { index: number }> = ({
  index,
  teamLogo,
  teamName,
  wins,
  loses,
  goalsShot,
  goalsRecieved,
}) => {
  return (
    <>
      <Index highlight={index <= 3}>{index}</Index>
      <Image>
        {/* eslint-disable-next-line @next/next/no-img-element*/}
        <img src={teamLogo} width={64} height={64} alt="logo" />
      </Image>
      <Name>{teamName}</Name>
      <Numbers>
        {wins} - {loses}
      </Numbers>
      <Goals>
        {goalsShot} - {goalsRecieved}
      </Goals>
    </>
  )
}

const LegendText = styled.div`
  padding: 0 32px;
  font-weight: bold;
  font-size: 32px;
`

const LegendNumber = styled(LegendText)`
  padding: 0 8px;
  text-align: center;
`

export const RankingLegend: FC = () => (
  <>
    <LegendText />
    <LegendText />
    <LegendText>Team</LegendText>
    <LegendNumber>Win/Loss</LegendNumber>
    <LegendNumber>Game Record</LegendNumber>
  </>
)
