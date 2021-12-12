import "../styles/globals.css";
import type { AppProps } from "next/app";
import NextNprogress from "nextjs-progressbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextNprogress
        color="#5c66f6"
        height={2}
        options={{ showSpinner: false }}
        showOnShallow
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
