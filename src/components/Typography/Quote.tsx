import styled from '@emotion/styled'

export const Quote = styled.blockquote`
  position: relative;
  padding: 1em 1em 1em 2.5em;
  margin-right: 0;
  margin-left: 0;
  font-size: 1.25rem;
  font-weight: 300;
  background-color: var(--Typography-blockquoteBackground);
  border-left: 0.5rem solid var(--Theme-themeColor);

  ::before {
    content: '”';
    position: absolute;
    top: 0.5rem;
    left: 0.5rem;
    font-size: 3.5rem;
    font-weight: bold;
    line-height: 1;
    color: var(--Theme-themeColor);
    font-family: sans-serif;
  }
`
