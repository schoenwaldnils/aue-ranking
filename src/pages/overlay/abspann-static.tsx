import styled from '@emotion/styled'
import { GetServerSideProps, GetServerSidePropsResult, NextPage } from 'next'

import { View } from '../../components/View'
import { getAbspannData, TextRow } from '../../utils/getAbspannData'

const ViewStyled = styled(View)`
  overflow-y: scroll;
  background-color: #000;
`

const Column = styled.div`
  max-width: 600px;
  margin-right: auto;
  margin-left: auto;
`

const Text = styled.div<{ centerText: boolean }>`
  display: flex;
  justify-content: ${(p) => (p.centerText ? 'center' : 'space-between')};
  margin-bottom: 0.5em;
`

const IndexPage: NextPage<{ texts: TextRow[]; scrollPixelPerSecond?: number }> =
  ({ texts }) => {
    return (
      <ViewStyled>
        <Column>
          {texts.map((text, key) => (
            <Text key={`${key}-${text.left}`} centerText={!text.right}>
              {text.left && <span>{text.left}</span>}
              {(!!text.right || text.right === '0') && (
                <span>{text.right}</span>
              )}
            </Text>
          ))}
        </Column>
      </ViewStyled>
    )
  }

export const getServerSideProps: GetServerSideProps = async (): Promise<
  GetServerSidePropsResult<{ [key: string]: unknown }>
> => {
  const { texts, scrollPixelPerSecond } = await getAbspannData()

  return {
    props: {
      texts,
      scrollPixelPerSecond,
    },
  }
}

export default IndexPage
