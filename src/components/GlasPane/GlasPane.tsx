import styled from '@emotion/styled'
import { FC } from 'react'

import { depthStyles, Headline1, Headline3 } from '../Typography'

const Glas = styled.div`
  position: relative;
  margin: 60px 80px;
  border-radius: 0.25rem;
  overflow: hidden;
`

const Pane = styled.div`
  position: absolute;
  top: -30px;
  right: -30px;
  bottom: -30px;
  left: -30px;
  box-shadow: inset 0 0 0 3000px rgba(255, 255, 255, 0.23);
  filter: blur(20px);
`

const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 40px 30px;
`

const Title = styled(Headline1)`
  ${depthStyles}
`

const Subtitle = styled(Headline3)`
  margin-bottom: 10px;
  ${depthStyles}
`

export const GlasPane: FC<{ title?: string; subtitle?: string }> = ({
  title,
  subtitle,
  children,
}) => {
  return (
    <Glas>
      <Pane />
      <Content>
        {title && <Title>{title}</Title>}
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
        <div>{children}</div>
      </Content>
    </Glas>
  )
}
