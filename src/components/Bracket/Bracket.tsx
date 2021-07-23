import styled from '@emotion/styled'
import Image from 'next/image'
import { CSSProperties, FC, ReactNode } from 'react'
import {
  Bracket as ReactBracket,
  RenderSeedProps,
  RoundProps,
  Seed,
  SeedItem,
  SeedTeam,
  SingleLineSeed,
} from 'react-brackets'

import logoAbteilungFoolgas from '../../data/images/logo-abteilung-foolgas.png'
import logoAue from '../../data/images/logo-aue-small.png'
import logoBigBrain from '../../data/images/logo-big-brain.png'
import logoDemoOverBall from '../../data/images/logo-demo-over-ball.png'
import logoNemesis from '../../data/images/logo-nemesis.png'
import logoThreeWheeler from '../../data/images/logo-three-wheeler.png'
import logoUneffectiveClones from '../../data/images/logo-uneffective-clones.png'
import { gradient } from '../../utils/mixins'
import { depthStyles, Headline4 } from '../Typography'

const BracketContainer = styled.div`
  padding-top: 0.5rem;

  *::before,
  *::after {
    border-color: #fff !important;
  }
`

const Title = styled(Headline4)`
  ${depthStyles}
  text-align: center;
  margin-top: -1.25em;
  margin-bottom: 0.25em;
  white-space: nowrap;
`

const CustomTitle = (title: ReactNode) => <Title>{title}</Title>

const TeamWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
  width: max-content;
`

const TeamName = styled.div<{ isWinner: boolean }>`
  white-space: nowrap;
  color: ${(p) => (p.isWinner ? '#00ce00' : 'inherit')};
  font-weight: ${(p) => (p.isWinner ? 'bold' : 'normal')};
`

const seedStyles: CSSProperties = {
  position: 'relative',
  fontSize: 24,
  paddingTop: '1.25em',
  paddingBottom: '1.25em',
  minWidth: '32ch',
}

const Logo = styled(Image)`
  width: 2em;
  height: 2em;
`

const logos = {
  Nemesis: logoNemesis,
  'Three Wheeler E-Sports': logoThreeWheeler,
  'Demo over Ball': logoDemoOverBall,
  'Uneffective Clones': logoUneffectiveClones,
  'Abteilung Foolgas': logoAbteilungFoolgas,
  'Big Brain': logoBigBrain,
}

const Games = styled.div`
  display: flex;
  gap: 0.25em;
  margin-left: 1rem;
`

const Result = styled.div<{ isWon: boolean; isPlayed?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.75ch;
  height: 2.75ch;
  font-size: 0.8em;
  background-color: ${(p) => (p.isWon ? '#00c800' : 'white')};
  color: ${(p) => (p.isWon ? 'white' : 'black')};
  opacity: ${(p) => (p.isPlayed ? 1 : 0.5)};
  border-radius: 0.125em;
  ${gradient}
`

export const Bracket: FC<{ rounds: RoundProps[] }> = ({ rounds }) => {
  const CustomSeed = ({ seed, breakpoint }: RenderSeedProps) => {
    // if (!seed.teams) {
    //   return (
    //     <SingleLineSeed
    //       mobileBreakpoint={breakpoint}
    //       style={{ ...seedStyles, opacity: 0 }}
    //     >
    //       {seed.title && <Title> </Title>}
    //       <SeedItem>
    //         <div>
    //           <SeedTeam>
    //             <TeamWrapper>
    //               <Logo src={logos['Nemesis']} />
    //               <TeamName>&nbsp;</TeamName>
    //             </TeamWrapper>
    //           </SeedTeam>
    //           <SeedTeam>
    //             <TeamWrapper>
    //               <Logo src={logos['Nemesis']} />
    //               <TeamName>&nbsp;</TeamName>
    //             </TeamWrapper>
    //           </SeedTeam>
    //         </div>
    //       </SeedItem>
    //     </SingleLineSeed>
    //   )
    // }

    // ------ assuming rounds is the losers brackets rounds ------
    // losers rounds usually got some identical seeds amount like (2 - 2 - 1 - 1)

    const Wrapper = seed.singleLine ? SingleLineSeed : Seed

    console.log(seed.teams[0])

    const gamesLength = seed.teams[0].games.length
    const gamesPlayed = seed.teams[0].games.filter((i) => i || i === 0).length

    const allGamesPlayed = gamesLength === gamesPlayed

    const teamOneGamesWon = seed.teams[0].games.filter(
      (i, key) => (i || i === 0) && i > seed.teams[1].games[key],
    ).length

    const teamTwoGamesWon = seed.teams[1].games.filter(
      (i, key) => (i || i === 0) && i > seed.teams[0].games[key],
    ).length

    const teamOneWon = allGamesPlayed && teamOneGamesWon > teamTwoGamesWon
    const teamTwoWon = allGamesPlayed && teamOneGamesWon < teamTwoGamesWon

    console.log({
      gamesLength,
      gamesPlayed,
      teamOneGamesWon,
      teamTwoGamesWon,
      teamOneWon,
      teamTwoWon,
    })

    // mobileBreakpoint is required to be passed down to a seed
    return (
      <Wrapper mobileBreakpoint={breakpoint} style={seedStyles}>
        {seed.title && <Title>{seed.title}</Title>}
        <SeedItem>
          <div>
            <SeedTeam>
              <TeamWrapper>
                <Logo
                  src={logos[seed.teams[0]?.name] || logoAue}
                  width="48"
                  height="48"
                  objectFit="contain"
                  objectPosition="center"
                />
                <TeamName isWinner={teamOneWon}>
                  {seed.teams[0]?.name || '------------'}
                </TeamName>
              </TeamWrapper>
              {seed.teams[0].games && (
                <Games>
                  {seed.teams[0].games.map((game, key) => (
                    <Result
                      isPlayed={game || game === 0}
                      isWon={game > seed.teams[1].games[key]}
                      key={key}
                    >
                      {game}
                    </Result>
                  ))}
                </Games>
              )}
            </SeedTeam>
            <SeedTeam>
              <TeamWrapper>
                <Logo
                  src={logos[seed.teams[1]?.name] || logoAue}
                  width="48"
                  height="48"
                  objectFit="contain"
                  objectPosition="center"
                />
                <TeamName isWinner={teamTwoWon}>
                  {seed.teams[1]?.name || '------------'}
                </TeamName>
              </TeamWrapper>
              {seed.teams[1].games && (
                <Games>
                  {seed.teams[1].games.map((game, key) => (
                    <Result
                      isPlayed={game || game === 0}
                      isWon={game > seed.teams[0].games[key]}
                      key={key}
                    >
                      {game}
                    </Result>
                  ))}
                </Games>
              )}
            </SeedTeam>
          </div>
        </SeedItem>
      </Wrapper>
    )
  }

  return (
    <BracketContainer>
      <ReactBracket
        rounds={rounds}
        roundTitleComponent={CustomTitle}
        renderSeedComponent={CustomSeed}
      />
    </BracketContainer>
  )
}
