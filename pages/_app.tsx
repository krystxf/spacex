import '../styles/globals.css';
import type { AppProps } from 'next/app';
import NextNprogress from 'nextjs-progressbar';
import { AnimatePresence } from 'framer-motion';
import { Kbar } from '@components/Kbar';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
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
    </>
  );
}

export default MyApp;
