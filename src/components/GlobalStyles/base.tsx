import { css } from '@emotion/react'
import { colors } from '../../data/colors'

export const base = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    word-break: break-word;
  }

  *:focus {
    outline: solid 2px var(--Typography-focus);
  }

  html {
    /* stylelint-disable-next-line max-line-length */
    font-family: 'Roboto', sans-serif;
    font-size: 24px;
    font-weight: 400;
    line-height: 1.5;
    font-display: swap;
  }

  body {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${colors.white};
    text-rendering: optimizeLegibility;
    background-color: ${colors.almostblack};
  }

  /* textarea:focus,
  input:focus {
    outline: 1px solid var(--color-green);
  } */

  h1,
  h2,
  h3,
  h4,
  p,
  figure {
    margin: 0;
    font-weight: inherit;
    line-height: inherit;
  }

  @media print {
    h1,
    h2,
    h3,
    h4 {
      page-break-after: avoid;
    }
  }

  img,
  figure,
  video,
  svg {
    max-width: 100%;
    height: auto;
  }

  button {
    color: inherit;
  }
`
