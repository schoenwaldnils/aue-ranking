import { css, keyframes } from '@emotion/react'
import styled from '@emotion/styled'
import { FC, ReactNode, useEffect, useMemo, useRef, useState } from 'react'

const Container = styled.div`
  position: relative;
  height: 100vh;
  overflow: hidden;
`
const scroll = keyframes`
  from {
    transform: translateY(0%)
  }
  to {
    transform: translateY(-100%)
  }
`

const animation = (duration) => css`
  animation: ${scroll} ${duration}s linear forwards;
`

const ScrollDiv = styled.div<{ animationDuration: number }>`
  width: 100%;
  padding-top: 1080px; // TODO change to 100
  padding-bottom: 1080px;

  ${(p) => p.animationDuration && animation(p.animationDuration)}
`

export const Scroll: FC<{ pixelPerSecond?: number; children: ReactNode }> = ({
  children,
  pixelPerSecond = 70,
}) => {
  const ref = useRef<HTMLDivElement>()
  const [refHeight, setRefHeight] = useState<number>()

  useEffect(() => {
    if (ref.current) {
      setRefHeight(ref.current.clientHeight)
    }
  }, [])

  const animationDuration = useMemo(() => {
    return refHeight / pixelPerSecond
  }, [pixelPerSecond, refHeight])

  // console.log({ refHeight, animationDuration })

  return (
    <Container>
      <ScrollDiv ref={ref} animationDuration={animationDuration}>
        {children}
      </ScrollDiv>
    </Container>
  )
}
