import styled from '@emotion/styled'
import { FC } from 'react'

const ViewFree = styled.div`
  position: relative;
  overflow: hidden;
`

const ViewHD = styled.div`
  position: relative;
  width: 1920px;
  height: 1080px;
  overflow: hidden;
`

const Background = styled.div`
  position: absolute !important;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: radial-gradient(
      circle,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.5) 100%
    ),
    url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='112' height='190' viewBox='56 -254 112 190'%3E%3Cg id='hexagon'%3E%3Cpath fill='none' stroke='blue' stroke-width='5' d='M168-127.1c0.5,0,1,0.1,1.3,0.3l53.4,30.5c0.7,0.4,1.3,1.4,1.3,2.2v61c0,0.8-0.6,1.8-1.3,2.2L169.3-0.3 c-0.7,0.4-1.9,0.4-2.6,0l-53.4-30.5c-0.7-0.4-1.3-1.4-1.3-2.2v-61c0-0.8,0.6-1.8,1.3-2.2l53.4-30.5C167-127,167.5-127.1,168-127.1 L168-127.1z' /%3E%3Cpath fill='none' stroke='blue' stroke-width='5' d='M112-222.5c0.5,0,1,0.1,1.3,0.3l53.4,30.5c0.7,0.4,1.3,1.4,1.3,2.2v61c0,0.8-0.6,1.8-1.3,2.2l-53.4,30.5 c-0.7,0.4-1.9,0.4-2.6,0l-53.4-30.5c-0.7-0.4-1.3-1.4-1.3-2.2v-61c0-0.8,0.6-1.8,1.3-2.2l53.4-30.5 C111-222.4,111.5-222.5,112-222.5L112-222.5z' /%3E%3Cpath fill='none' stroke='blue' stroke-width='5' d='M168-317.8c0.5,0,1,0.1,1.3,0.3l53.4,30.5c0.7,0.4,1.3,1.4,1.3,2.2v61c0,0.8-0.6,1.8-1.3,2.2L169.3-191 c-0.7,0.4-1.9,0.4-2.6,0l-53.4-30.5c-0.7-0.4-1.3-1.4-1.3-2.2v-61c0-0.8,0.6-1.8,1.3-2.2l53.4-30.5 C167-317.7,167.5-317.8,168-317.8L168-317.8z' /%3E%3C/g%3E%3C/svg%3E%0A");
  background-size: 100% 100%, 56px;
`

const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  > * {
    flex-grow: 1;
  }
`

export const View: FC<{ isHd?: boolean; hideBackground?: boolean }> = ({
  isHd = true,
  hideBackground,
  children,
}) => {
  const ViewDiv = isHd ? ViewHD : ViewFree

  return (
    <ViewDiv>
      {!hideBackground && <Background />}
      <Content>{children}</Content>
    </ViewDiv>
  )
}
