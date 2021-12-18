import '../styles/globals.css'
import type { AppProps } from 'next/app'
import NextNprogress from 'nextjs-progressbar'
import { AnimatePresence } from 'framer-motion'
import { Kbar } from '@components/Kbar'
import { ApolloProvider } from '@apollo/client'
import client from '@lib/apollo-client'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <AnimatePresence>
        <NextNprogress
          color="#ffffff"
          height={2}
          options={{ showSpinner: false }}
          showOnShallow
        />
        <Kbar>
          <Component {...pageProps} />
        </Kbar>
      </AnimatePresence>
    </ApolloProvider>
  )
}

export default MyApp
