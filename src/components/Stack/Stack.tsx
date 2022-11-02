import styled from '@emotion/styled'
import { FC, ReactNode } from 'react'

const StackContainer = styled.div<{ amount: number }>`
  > * + * {
    margin-top: ${(p) => p.amount}rem !important;
  }
`

export const Stack: FC<{ amount?: number; children: ReactNode }> = ({
  amount = 1,
  children,
}) => {
  return <StackContainer amount={amount}>{children}</StackContainer>
}
