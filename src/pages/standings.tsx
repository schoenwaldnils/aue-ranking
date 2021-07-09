import { GetServerSideProps, GetServerSidePropsResult, NextPage } from 'next'
import { GlasPane } from '../components/GlasPane'
import { RankingItem } from '../components/RankingItem'
import { RankingList } from '../components/RankingList'
import { View } from '../components/View'
import { useRefresh } from '../hooks/useRefresh'
import { getSheet } from '../utils/getSheet'

const IndexPage: NextPage<{ data: { teams: RankingItem[] } }> = ({ data }) => {
  // console.log(data.teams)

  useRefresh()

  return (
    <View>
      <GlasPane title="Standings" subtitle="Regular Season">
        <RankingList teams={data.teams}></RankingList>
      </GlasPane>
    </View>
  )
}

export const getServerSideProps: GetServerSideProps = async (
  ctx,
): Promise<GetServerSidePropsResult<{ [key: string]: any }>> => {
  const data = await getSheet()

  return {
    props: {
      data,
    },
  }
}

export default IndexPage
