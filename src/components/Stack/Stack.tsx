import styled from '@emotion/styled'
import { FC } from 'react'

const StackContainer = styled.div<{ amount: number }>`
  > * + * {
    margin-top: ${(p) => p.amount}rem !important;
  }
`

export const Stack: FC<{ amount?: number }> = ({ amount = 1, children }) => {
  return <StackContainer amount={amount}>{children}</StackContainer>
}
