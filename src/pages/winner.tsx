import styled from '@emotion/styled'
import { GetServerSideProps, GetServerSidePropsResult, NextPage } from 'next'
import Image from 'next/image'
import { Fragment } from 'react'

import { GlasPane } from '../components/GlasPane'
import { View } from '../components/View'
import { logos } from '../data/logos'
import { useRefresh } from '../hooks/useRefresh'
import { getWinnerData, Team } from '../utils/getWinnerData'

const labels = {
  wins: 'Siege',
  loses: 'Niederlagen',
  points: 'Punkte',
  goalsShot: 'Tore',
  assists: 'Vorlagen',
  saves: 'Paraden',
  shots: 'Schüsse',
  efficiency: 'Effizienz',
  goalDiff: 'Tordifferenz',
  goalsRecieved: 'Gegentore',
}

const Content = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  gap: 10rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
`

const Logo = styled.div``

const Stats = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

const Table = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 8rem;
  font-size: 1.75rem;
`

const IndexPage: NextPage<{ team?: Team }> = ({ team }) => {
  useRefresh()

  // const team = {
  //   teamName: 'Three Wheeler E-Sports',
  //   wins: 8,
  //   loses: 6,
  //   points: 30000,
  //   goalsShot: 41,
  //   assists: 23,
  //   saves: 67,
  //   shots: 80,
  //   efficiency: 2.6,
  //   goalDiff: 0.7,
  //   goalsRecieved: 30,
  // }

  return (
    <View>
      <GlasPane title="Winner" subtitle={team?.teamName || 'Unbekannt'}>
        {team && (
          <Content>
            <Logo>
              <Image
                src={logos[team.teamName]}
                width={600}
                height={600}
                objectFit="contain"
                objectPosition="center"
              />
            </Logo>
            <Stats>
              <Table>
                {Object.keys(team)
                  .filter((i) => i !== 'teamName')
                  .map((key) => (
                    <Fragment key={key}>
                      <div>{labels[key]}</div>
                      <div>{team[key]}</div>
                    </Fragment>
                  ))}
              </Table>
            </Stats>
          </Content>
        )}
      </GlasPane>
    </View>
  )
}

export const getServerSideProps: GetServerSideProps = async (): Promise<
  GetServerSidePropsResult<{ [key: string]: unknown }>
> => {
  const { team } = await getWinnerData()

  if (team) {
    return {
      props: {
        team,
      },
    }
  }

  return {
    props: {},
  }
}

export default IndexPage
