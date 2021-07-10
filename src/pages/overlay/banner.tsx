import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { format } from 'date-fns'
import { GetServerSideProps, GetServerSidePropsResult, NextPage } from 'next'
import { default as ReactTicker } from 'react-ticker'

import { h4Styles } from '../../components/Typography'
import { View } from '../../components/View'
import { colors } from '../../data/colors'
import { getBannerData, Match } from '../../utils/getBannerData'
import { gradient } from '../../utils/mixins'

const Banner = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  width: 100%;
  background-color: green;
  ${h4Styles}
`

const padding = css`
  padding: 12px 20px;
`

const Hashtag = styled.div`
  ${padding}
  ${gradient}
  background-color: ${colors.blueLight};
`

const Ticker = styled.div`
  flex-grow: 1;
  ${gradient}
  background-color: ${colors.blueDark};
`

const MatchDiv = styled.span`
  display: inline-block;
  ${padding}
  white-space: nowrap;
  text-transform: uppercase;
`

const Text = styled.div`
  display: flex;
`

const Time = styled.div`
  ${padding}
  ${gradient}
  background-color: ${colors.blue};
`

const matchString = (match) => {
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
  const time = format(new Date(), 'HH:mm')

  return (
    <View hideBackground>
      <Banner>
        <Hashtag>#rlmsltxi</Hashtag>
        <Ticker>
          <ReactTicker height={60} speed={10}>
            {() => (
              <Text>
                {matches.map((i) => (
                  <>
                    <MatchDiv key={`${i.team1.name}-${i.team2.name}`}>
                      {matchString(i)}
                    </MatchDiv>
                    <MatchDiv>|</MatchDiv>
                  </>
                ))}
              </Text>
            )}
          </ReactTicker>
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
