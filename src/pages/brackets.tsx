import styled from '@emotion/styled'
import { GetServerSideProps, GetServerSidePropsResult, NextPage } from 'next'
import { RoundProps } from 'react-brackets'

import { Bracket } from '../components/Bracket'
import { GlasPane } from '../components/GlasPane'
import { depthStyles, Headline3 } from '../components/Typography'
import { View } from '../components/View'
import { getBrackets } from '../utils/getBrackets'

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`

const Headline = styled(Headline3)`
  ${depthStyles}
  margin-left: 1.5rem;
  text-transform: uppercase;
`

const BracketPage: NextPage<{
  winnerBracket: RoundProps[]
  looserBracket: RoundProps[]
}> = ({ winnerBracket, looserBracket }) => {
  return (
    <View isHd={false}>
      <GlasPane title="Playoffs">
        <Content>
          <div>
            <Headline>Winner Bracket</Headline>
            <Bracket rounds={winnerBracket} />
          </div>
          <div>
            <Headline>Loser Bracket</Headline>
            <Bracket rounds={looserBracket} />
          </div>
        </Content>
      </GlasPane>
    </View>
  )
}

export const getServerSideProps: GetServerSideProps = async (): Promise<
  GetServerSidePropsResult<{ [key: string]: unknown }>
> => {
  const { winnerBracket, looserBracket } = await getBrackets()

  return {
    props: {
      winnerBracket,
      looserBracket,
    },
  }
}

export default BracketPage
