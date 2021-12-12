import '../styles/globals.css';
import type { AppProps } from 'next/app';
import NextNprogress from 'nextjs-progressbar';
import { AnimatePresence } from 'framer-motion';

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
        <Component {...pageProps} />
      </AnimatePresence>
    </>
  );
}

export default MyApp;
