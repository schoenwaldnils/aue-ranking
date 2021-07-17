import styled from '@emotion/styled'
import { NextPage } from 'next'

import { GlasPane } from '../components/GlasPane'
import { h2Styles, Link } from '../components/Typography'
import { View } from '../components/View'

const StyledLink = styled(Link)`
  display: block;
  ${h2Styles}
`

const IndexPage: NextPage = () => {
  return (
    <View>
      <GlasPane>
        <StyledLink href="/standings">Standings</StyledLink>
        <StyledLink href="/overlay/banner">Banner</StyledLink>
        <StyledLink href="/overlay/abspann">Abspann</StyledLink>
      </GlasPane>
    </View>
  )
}

export default IndexPage
