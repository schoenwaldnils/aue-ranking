import styled from '@emotion/styled'
import { FC } from 'react'

import { Image } from '../Image'
import bg from './view-bg.png' // https://unsplash.com/photos/0aWZdK8nK2I

const ViewHD = styled.div`
  position: relative;
  width: 1920px;
  height: 1080px;
`

const Background = styled(Image)`
  position: absolute !important;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
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

export const View: FC<{ hideBackground?: boolean }> = ({
  hideBackground,
  children,
}) => {
  return (
    <ViewHD>
      {!hideBackground && (
        <Background
          src={bg}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      )}
      <Content>{children}</Content>
    </ViewHD>
  )
}
