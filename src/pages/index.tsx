import styled from '@emotion/styled'
import { NextPage } from 'next'

import { GlasPane } from '../components/GlasPane'
import { h3Styles, Link } from '../components/Typography'
import { View } from '../components/View'

const StyledLink = styled(Link)`
  display: block;
  ${h3Styles}
`

const IndexPage: NextPage = () => {
  return (
    <View>
      <GlasPane>
        <StyledLink href="/standings">Reg Season</StyledLink>
        <StyledLink href="/playoffs">PlayOffs</StyledLink>
        <StyledLink href="/brackets">Brackets - Overview</StyledLink>
        <StyledLink href="/brackets/winner">Brackets - Winner</StyledLink>
        <StyledLink href="/brackets/loser">Brackets - Loser</StyledLink>
        <StyledLink href="/brackets/final">Brackets - Final</StyledLink>
        <StyledLink href="/overlay/banner">Banner</StyledLink>
        <StyledLink href="/overlay/abspann">Abspann</StyledLink>
      </GlasPane>
    </View>
  )
}

export default IndexPage
