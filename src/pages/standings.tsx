import { GetServerSideProps, GetServerSidePropsResult, NextPage } from 'next'
import { useMemo } from 'react'

import { GlasPane } from '../components/GlasPane'
import { RankingItem } from '../components/RankingItem'
import { RankingList } from '../components/RankingList'
import { View } from '../components/View'
import { useRefresh } from '../hooks/useRefresh'
import { getRegSeason } from '../utils/getRegSeason'

const IndexPage: NextPage<{ teams: RankingItem[] }> = ({ teams }) => {
  // console.log(data.teams)

  useRefresh()

  const sortedTeam = useMemo(() => {
    return teams.sort((a, b) => {
      if (b.wins - a.wins !== 0) {
        return b.wins - a.wins
      }
      return a.loses - b.loses
    })
  }, [teams])

  return (
    <View>
      <GlasPane title="Standings" subtitle="Regular Season">
        <RankingList teams={sortedTeam} />
      </GlasPane>
    </View>
  )
}

export const getServerSideProps: GetServerSideProps = async (): Promise<
  GetServerSidePropsResult<{ [key: string]: unknown }>
> => {
  const { teams } = await getRegSeason()

  return {
    props: {
      teams,
    },
  }
}

export default IndexPage
