import { css } from '@emotion/react'
import styled from '@emotion/styled'

export const h1Styles = css`
  font-family: var(--Typography-headlineFontFamily);
  font-size: 4rem;
  font-weight: var(--Typography-headlineWeight);
  font-style: italic;
  text-transform: uppercase;
  line-height: 1.1;
  color: var(--Typography-headlineColor, inherit);
`

export const Headline1 = styled.h1`
  ${h1Styles}
`

export const h2Styles = css`
  font-family: var(--Typography-headlineFontFamily);
  font-size: 3rem;
  font-weight: var(--Typography-headlineWeight);
  line-height: 1.2;
  color: var(--Typography-headlineColor, inherit);
`

export const Headline2 = styled.h2`
  ${h2Styles}
`

export const h3Styles = css`
  font-family: var(--Typography-headlineFontFamily);
  font-size: 2rem;
  font-weight: var(--Typography-headlineWeight);
  line-height: 1.3;
  color: var(--Typography-headlineColor, inherit);
`

export const Headline3 = styled.h3`
  ${h3Styles}
`

export const h4Styles = css`
  font-family: var(--Typography-headlineFontFamily);
  font-size: 1.25rem;
  font-weight: var(--Typography-headlineWeight);
  line-height: 1.2;
  color: var(--Typography-headlineColor, inherit);
`

export const Headline4 = styled.h4`
  ${h4Styles}
`

export const sublineStyles = css`
  font-family: var(--Typography-headlineFontFamily);
  font-size: 0.75rem;
  font-weight: var(--Typography-headlineWeight);
  line-height: 1.4;
  letter-spacing: 0.15em;
  color: var(--Typography-headlineColor, inherit);
  text-transform: uppercase;
`

export const Subline = styled.div`
  ${sublineStyles}
`

export const depthStyles = css`
  text-shadow: 1px 1px 1px #919191, 1px 2px 1px #919191, 1px 3px 1px #919191,
    1px 4px 1px #919191, 1px 5px 1px #919191, 1px 6px 1px #919191,
    1px 25px 35px rgba(16, 16, 16, 0.2), 1px 30px 60px rgba(16, 16, 16, 0.4);
`
