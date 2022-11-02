import styled from '@emotion/styled'
import { NextPage } from 'next'
import qs from 'qs'
import { useEffect, useState } from 'react'

const Box = styled.div`
  width: 100vw;
  border: 0.8vw solid #fff;
`

const Frame = styled.div`
  padding-top: calc(100% / 16 * 9);
  border: 2vw solid #f00;
  border-image: linear-gradient(to bottom, #007dbb, #003d5b) 1;
`

const Name = styled.div`
  font-size: 8vw;
  font-weight: 600;
  text-align: center;
  color: #fff;
  padding: 0.1em;
  background-image: linear-gradient(to bottom, #004cff, #001c60);
`

const Single: NextPage = () => {
  const [loading, setLoading] = useState(true)
  const [params, setParams] = useState<Record<string, unknown>>()

  useEffect(() => {
    setLoading(false)
    setParams(qs.parse(window.location.search, { ignoreQueryPrefix: true }))
  }, [])

  if (loading || !params) {
    return <div>loading ...</div>
  }

  return (
    <Box>
      <Frame />
      <Name>{params.name}</Name>{' '}
    </Box>
  )
}

export default Single
