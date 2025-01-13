import type { AppProps } from 'next/app'
import "./main.css";
 
const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
};

export default App;

