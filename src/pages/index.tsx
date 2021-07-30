import styled from '@emotion/styled'
import { NextPage } from 'next'

import { TextButton } from '../components/Button'
import { Link } from '../components/Typography'
import { useUser } from '../hooks/useUser'

const List = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem;
  font-size: 1rem;
`

const IndexPage: NextPage = () => {
  const { user, logout } = useUser()

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
      <Link href="/winner">Winner</Link>

      <br />

      {!user ? (
        <Link href="/auth">Login</Link>
      ) : (
        <>
          <Link href="/player">Player</Link>

          <br />

          <TextButton onClick={logout}>Logout</TextButton>
        </>
      )}
    </List>
  )
}

export default IndexPage
