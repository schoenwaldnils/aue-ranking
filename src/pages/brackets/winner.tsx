import styled from '@emotion/styled'
import { GetServerSideProps, GetServerSidePropsResult, NextPage } from 'next'
import type { IRoundProps } from 'react-brackets'

import { Bracket } from '../../components/Bracket'
import { GlasPane } from '../../components/GlasPane'
import { View } from '../../components/View'
import { useRefresh } from '../../hooks/useRefresh'
import { getBrackets } from '../../utils/getBrackets'

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;
  margin-bottom: 5rem;
`

const BracketPage: NextPage<{
  winnerBracket: IRoundProps[]
}> = ({ winnerBracket }) => {
  useRefresh()

  return (
    <View>
      <GlasPane title="Playoffs" subtitle="Winner Bracket">
        <Content>
          <Bracket rounds={winnerBracket} />
        </Content>
      </GlasPane>
    </View>
  )
}

export const getServerSideProps: GetServerSideProps = async (): Promise<
  GetServerSidePropsResult<{ [key: string]: unknown }>
> => {
  const { winnerBracket } = await getBrackets()

  return {
    props: {
      winnerBracket,
    },
  }
}

export default BracketPage
