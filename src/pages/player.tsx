import styled from '@emotion/styled'
import { NextPage } from 'next'
import React from 'react'

import { LoadingPage } from '../components/LoadingSpinner'
import { PlayerForm } from '../components/PlayerForm'
import { PlayersList } from '../components/PlayersList'
import { usePlayers } from '../hooks/useDB'
import { stack } from '../utils/mixins'

const Page = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 98vh;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${stack(3)}
`

const PlayerPage: NextPage = () => {
  const { players, playersLoading } = usePlayers()

  if (playersLoading) {
    return <LoadingPage />
  }

  return (
    <Page>
      <Content>
        <PlayersList players={players} />
        <PlayerForm />
      </Content>
    </Page>
  )
}

export default PlayerPage
