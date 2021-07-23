import styled from '@emotion/styled'
import { GetServerSideProps, GetServerSidePropsResult, NextPage } from 'next'
import { RoundProps } from 'react-brackets'

import { Bracket } from '../../components/Bracket'
import { GlasPane } from '../../components/GlasPane'
import { View } from '../../components/View'
import { getBrackets } from '../../utils/getBrackets'

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;
  margin-bottom: 5rem;
`

const BracketPage: NextPage<{
  finalBracket: RoundProps[]
}> = ({ finalBracket }) => {
  return (
    <View>
      <GlasPane title="Playoffs" subtitle="Final Bracket">
        <Content>
          <Bracket rounds={finalBracket} fontSize={36} />
        </Content>
      </GlasPane>
    </View>
  )
}

export const getServerSideProps: GetServerSideProps = async (): Promise<
  GetServerSidePropsResult<{ [key: string]: unknown }>
> => {
  const { finalBracket } = await getBrackets()

  return {
    props: {
      finalBracket,
    },
  }
}

export default BracketPage
