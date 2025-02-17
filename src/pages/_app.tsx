import type { AppProps } from 'next/app'
import "./main.css";
import Head from 'next/head';
 
const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>got played by esy ©</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Maybe you got played by me??" />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default App;

