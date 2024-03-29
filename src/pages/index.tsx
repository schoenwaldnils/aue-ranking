import styled from '@emotion/styled'
import { NextPage } from 'next'

import { TextButton } from '../components/Button'
import { Link } from '../components/Typography'
import { useUser } from '../hooks/useUser'

const List = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 2rem;
  font-size: 1rem;
`

const IndexPage: NextPage = () => {
  const { user, login, logout } = useUser()

  return (
    <List>
      <Link href="/regular">Reg Season</Link>
      <Link href="/standings">Standings</Link>
      <Link href="/playoffs">PlayOffs</Link>
      <Link href="/brackets">Brackets - Overview</Link>
      <Link href="/brackets/winner">Brackets - Winner</Link>
      <Link href="/brackets/loser">Brackets - Loser</Link>
      <Link href="/brackets/final">Brackets - Final</Link>
      <Link href="/overlay/banner">Banner</Link>
      <Link href="/overlay/abspann">Abspann</Link>
      <Link href="/overlay/abspann-static">Abspann statisch</Link>
      <Link href="/winner">Winner</Link>

      <br />

      {!user ? (
        <TextButton onClick={() => login()}>Login</TextButton>
      ) : (
        <>
          <Link href="/player">Player</Link>

          <br />

          <TextButton onClick={() => logout()}>Logout</TextButton>
        </>
      )}
    </List>
  )
}

export default IndexPage
