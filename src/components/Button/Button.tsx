import styled from '@emotion/styled'

export const ButtonPlain = styled.button`
  padding: 0;
  color: inherit;
  background: none;
  border: 0;
  appearance: none;
  cursor: pointer;
  text-decoration: none;
  white-space: nowrap;
  font: inherit;

  :focus {
    outline: none;
  }

  :disabled {
    filter: grayscale(1) brightness(0.8);
    cursor: default;
  }
`

export const TextButton = styled(ButtonPlain)`
  display: inline-flex;
  text-decoration: underline;
`
