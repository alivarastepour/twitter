import {GlobalStyle} from "../styles/GlobalStyles/global";
import "../styles/GlobalStyles/global.scss";
import {createContext, useState} from "react";

export const authContext = createContext(null);

function MyApp({Component, pageProps}) {
    const [auth, setAuth] = useState(false);
    return (
        <>
            <authContext.Provider value={{auth, setAuth}}>
                <Component {...pageProps} />
            </authContext.Provider>
            <GlobalStyle/>
        </>
    );
}

export default MyApp;
