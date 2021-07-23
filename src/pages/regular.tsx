import styled from '@emotion/styled'
import { GetServerSideProps, GetServerSidePropsResult, NextPage } from 'next'

import { Game } from '../components/Game'
import { GlasPane } from '../components/GlasPane'
import { View } from '../components/View'
import { useRefresh } from '../hooks/useRefresh'
import { getBannerData, Match } from '../utils/getBannerData'

const Games = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-top: 3rem;
  margin-bottom: 5rem;
`

const GameList = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto 1fr auto;
  align-items: center;
  row-gap: 6px;
  margin: 0 auto;
`

const IndexPage: NextPage<{ matches: Match[] }> = ({ matches }) => {
  useRefresh()

  const leftGamesNumber = Math.ceil(matches.length / 2)

  return (
    <View>
      <GlasPane title="Regular Season">
        <Games>
          <GameList>
            {matches.slice(0, leftGamesNumber).map((match, key) => (
              <Game
                teamLeftName={match.team1.name}
                teamLeftScore={match.team1.goals}
                teamRightName={match.team2.name}
                teamRightScore={match.team2.goals}
                key={`game-${key}`}
              />
            ))}
          </GameList>
          <GameList>
            {matches
              .slice(leftGamesNumber, matches.length)
              .map((match, key) => (
                <Game
                  teamLeftName={match.team1.name}
                  teamLeftScore={match.team1.goals}
                  teamRightName={match.team2.name}
                  teamRightScore={match.team2.goals}
                  key={`game-${key}`}
                />
              ))}
          </GameList>
        </Games>
      </GlasPane>
    </View>
  )
}

export const getServerSideProps: GetServerSideProps = async (): Promise<
  GetServerSidePropsResult<{ [key: string]: unknown }>
> => {
  const { allMatches } = await getBannerData()
  return {
    props: {
      matches: allMatches,
    },
  }
}

export default IndexPage
