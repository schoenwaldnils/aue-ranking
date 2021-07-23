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
  text-shadow: 0.01em 0.01em 0.01em #919191, 0.01em 0.02em 0.01em #919191,
    0.01em 0.03em 0.01em #919191, 0.01em 0.04em 0.01em #919191,
    0.01em 0.05em 0.01em #919191, 0.01em 0.06em 0.01em #919191,
    0.01em 0.07em 0.01em #919191, 0.01em 0.08em 0.01em #919191,
    0.01em 0.25em 0.35em rgba(16, 16, 16, 0.2),
    0.01em 0.3em 0.6em rgba(16, 16, 16, 0.4);
`
