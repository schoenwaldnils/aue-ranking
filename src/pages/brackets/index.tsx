import styled from '@emotion/styled'
import { GetServerSideProps, GetServerSidePropsResult, NextPage } from 'next'
import { RoundProps } from 'react-brackets'

import { Bracket } from '../../components/Bracket'
import { GlasPane } from '../../components/GlasPane'
import { depthStyles, Headline3 } from '../../components/Typography'
import { View } from '../../components/View'
import { getBrackets } from '../../utils/getBrackets'

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`

const Headline = styled(Headline3)`
  ${depthStyles}
  margin-left: 1.5rem;
  text-transform: uppercase;
`

const BracketPage: NextPage<{
  winnerBracketPlusFinal: RoundProps[]
  loserBracket: RoundProps[]
}> = ({ winnerBracketPlusFinal, loserBracket }) => {
  return (
    <View>
      <GlasPane title="Playoffs">
        <Content>
          <div>
            <Headline>Winner Bracket</Headline>
            <Bracket rounds={winnerBracketPlusFinal} fontSize={17} />
          </div>
          <div>
            <Headline>Loser Bracket</Headline>
            <Bracket rounds={loserBracket} fontSize={17} />
          </div>
        </Content>
      </GlasPane>
    </View>
  )
}

export const getServerSideProps: GetServerSideProps = async (): Promise<
  GetServerSidePropsResult<{ [key: string]: unknown }>
> => {
  const { winnerBracketPlusFinal, loserBracket } = await getBrackets()

  return {
    props: {
      winnerBracketPlusFinal,
      loserBracket,
    },
  }
}

export default BracketPage
