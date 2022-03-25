import { GlobalStyle } from "../styles/global";
import "../styles/global.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  );
}

export default MyApp;
