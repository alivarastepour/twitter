import { GlobalStyle } from "../styles/GlobalStyles/global";
import "../styles/GlobalStyles/global.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  );
}

export default MyApp;
