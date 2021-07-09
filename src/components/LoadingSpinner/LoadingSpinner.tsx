import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'
import React, { CSSProperties, FC } from 'react'

const rotate = keyframes`
  to {
    transform: rotate(360deg);
  }
`

export const LoadingIcon = styled.div`
  width: 1em;
  height: 1em;
  border: 0.5em solid currentColor;
  border-right-color: transparent;
  border-left-color: transparent;
  border-radius: 50%;
  animation: ${rotate} 700ms linear infinite;
`

const bounce = keyframes`
  0%,
  20% {
    transform: scale(0);
  }

  100% {
    transform: scale(1);
  }
`

const Spinner = styled.div`
  --animationDuration: 700ms;

  text-align: center;

  > div {
    display: inline-block;
    width: 1em;
    height: 1em;
    margin: 0 0.5ch;
    background-color: currentColor;
    border-radius: 100%;
    animation: ${bounce} var(--animationDuration) infinite ease-in-out alternate;

    &:nth-of-type(1) {
      animation-delay: calc(var(--animationDuration) * -0.6);
    }
    &:nth-of-type(2) {
      animation-delay: calc(var(--animationDuration) * -0.3);
    }
  }
`

export const LoadingSpinner: FC<{ style?: CSSProperties }> = ({ style }) => (
  <Spinner style={style}>
    <div />
    <div />
    <div />
  </Spinner>
)

LoadingSpinner.displayName = 'LoadingSpinner'

const Page = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding-top: 5rem;
  padding-bottom: 5rem;
`

export const LoadingPage: FC = () => (
  <Page>
    <LoadingSpinner />
  </Page>
)
