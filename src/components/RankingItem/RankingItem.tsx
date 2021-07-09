import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { FC } from 'react'

import { h3Styles } from '../Typography'

const itemHeight = '84px'

const itemGradient = css`
  background-color: #000982;
  background-image: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.5));
`

const Index = styled.div<{ highlight?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${itemHeight};
  height: ${itemHeight};
  ${itemGradient}
  background-color: #0050ff;
  ${h3Styles}
  border: 2px solid rgba(255, 255, 255, .8);
`

const Image = styled.div`
  display: flex;
  align-items: center;
  height: ${itemHeight};
  padding: 0 14px;
  border-top: 2px solid rgba(255, 255, 255, 0.8);
  border-bottom: 2px solid rgba(255, 255, 255, 0.8);
  border-right: 2px solid rgba(255, 255, 255, 0.8);

  ${itemGradient}
  background-color: #00bbff;
`

const Name = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  height: ${itemHeight};
  padding: 0 64px 0 32px;
  ${h3Styles}
  text-transform: uppercase;
  border-top: 2px solid rgba(255, 255, 255, 0.8);
  border-bottom: 2px solid rgba(255, 255, 255, 0.8);

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
  border-top: 2px solid rgba(255, 255, 255, 0.8);
  border-bottom: 2px solid rgba(255, 255, 255, 0.8);

  ${itemGradient}
`

const Goals = styled(Numbers)`
  ${itemGradient}
  clip-path: polygon(0% 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%);
  border-right: 2px solid rgba(255, 255, 255, 0.8);
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
