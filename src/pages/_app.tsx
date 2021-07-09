import { AppProps } from 'next/dist/next-server/lib/router/router'
import { ReactNode } from 'react'

import { GlobalStyles } from '../components/GlobalStyles'
import { StoreProvider } from '../provider/Store/StoreProvider'

const AueApp = ({ Component, pageProps }: AppProps): ReactNode => {
  return (
    <StoreProvider>
      <GlobalStyles />

      <Component {...pageProps} />
    </StoreProvider>
  )
}

export default AueApp
