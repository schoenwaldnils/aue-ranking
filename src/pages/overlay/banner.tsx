import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { format } from 'date-fns'
import { GetServerSideProps, GetServerSidePropsResult, NextPage } from 'next'
import { Fragment } from 'react'
import Marquee from 'react-fast-marquee'

import { h4Styles } from '../../components/Typography'
import { View } from '../../components/View'
import { colors } from '../../data/colors'
import { useRefresh } from '../../hooks/useRefresh'
import { getBannerData, Match } from '../../utils/getBannerData'
import { gradient } from '../../utils/mixins'

const Banner = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  width: 100%;
  background-color: green;
  ${h4Styles}
  text-transform: uppercase;
`

const padding = css`
  padding: 12px 20px;
`

const Hashtag = styled.div`
  ${padding}
  padding-right: 40px;
  padding-left: 40px;
  ${gradient}
  background-color: ${colors.blueLight};
  font-style: italic;
  white-space: nowrap;
`

const Ticker = styled(Marquee)`
  ${gradient}
  background-color: ${colors.blueDark};
  width: auto !important;
`

const MatchDiv = styled.span`
  display: inline-block;
  ${padding}
  white-space: nowrap;
`

const Text = styled.div`
  display: flex;
`

const Time = styled.div`
  ${padding}
  padding-right: 40px;
  padding-left: 40px;
  ${gradient}
  background-color: ${colors.blue};
  white-space: nowrap;
`

const matchString = (match: Match) => {
  if (
    !match.team1.goals &&
    match.team1.goals !== 0 &&
    !match.team2.goals &&
    match.team2.goals !== 0
  ) {
    return `Next: ${match.team1.name} vs ${match.team2.name}`
  }
  return `${match.team1.name} ${match.team1.goals}-${match.team2.goals} ${match.team2.name}`
}

const IndexPage: NextPage<{ matches: Match[] }> = ({ matches }) => {
  useRefresh()

  const time = format(new Date(), 'HH:mm')

  return (
    <View hideBackground>
      <Banner>
        <Hashtag>#rlmsltxi</Hashtag>
        <Ticker gradient={false} speed={60}>
          <Text>
            {matches.map((i, key) => (
              <Fragment key={`banner-match-${key}`}>
                <MatchDiv key={`${i.team1.name}-${i.team2.name}`}>
                  {matchString(i)}
                </MatchDiv>
                <MatchDiv>|</MatchDiv>
              </Fragment>
            ))}
          </Text>
        </Ticker>
        <Time>{time}</Time>
      </Banner>
    </View>
  )
}

export const getServerSideProps: GetServerSideProps = async (): Promise<
  GetServerSidePropsResult<{ [key: string]: unknown }>
> => {
  const { matches } = await getBannerData()

  return {
    props: {
      matches,
    },
  }
}

export default IndexPage
