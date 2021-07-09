import { css } from '@emotion/react'
import styled from '@emotion/styled'

const commonStyles = css``

export const LI = styled.li``

export const UL = styled.ul`
  ${commonStyles}
`

export const OL = styled.ol`
  ${commonStyles}

  ${LI} & {
    list-style-type: lower-latin;
  }

  ${LI} & ${LI} & {
    list-style-type: lower-roman;
  }
`
