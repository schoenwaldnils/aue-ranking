import styled from '@emotion/styled'
import React, { FC } from 'react'

import { FirebaseAuth } from '../components/FirebaseAuth'

const Page = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 98vh;
`

const Auth: FC = () => {
  return (
    <Page>
      <FirebaseAuth />
    </Page>
  )
}

export default Auth
