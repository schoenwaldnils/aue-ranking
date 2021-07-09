import styled from '@emotion/styled'
import { FC } from 'react'

import { Headline1, Headline3 } from '../Typography'

const Glas = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 60px 80px;
  padding: 40px 30px;
  background-color: rgba(200, 200, 255, 0.25);
  backdrop-filter: blur(0.5rem);
  border-radius: 0.25rem;
  box-shadow: 1rem 1rem 1rem 0 rgba(0, 0, 0, 0.7);
`

const Title = styled(Headline1)``

const Subtitle = styled(Headline3)`
  margin-bottom: 10px;
`

export const GlasPane: FC<{ title?: string; subtitle?: string }> = ({
  title,
  subtitle,
  children,
}) => {
  return (
    <Glas>
      {title && <Title>{title}</Title>}
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
      <div>{children}</div>
    </Glas>
  )
}
