import '@contentful/forma-36-react-components/dist/styles.css'

import { Global } from '@emotion/react'
import { FC } from 'react'

import { base } from './base'
import { fonts } from './fonts'
import { theme } from './theme'

export const GlobalStyles: FC = () => {
  return (
    <>
      <Global styles={theme} />
      <Global styles={fonts} />
      <Global styles={base} />
    </>
  )
}
