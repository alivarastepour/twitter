import {
    Wrapper as MainWrapper,
    Content as FooterWrapper,
} from "./mainpage.styles";
import Footer from "./Footer";
import React, {useContext, useEffect, useState} from "react";
import HeroImage from "./HeroImage";
import Content from "./Content";
import {authContext} from "../../pages/_app";
import {useRouter} from "next/router";
import Spinner from "../Spinner";

const Mainpage = () => {
        const {auth, setAuth} = useContext(authContext);
        const [loading, setLoading] = useState(true);
        const router = useRouter();
        useEffect(() => {
            const token = localStorage.getItem('__ut');
            if (token) {
                setAuth(true)
                router.push('/home')
            } else
                setLoading(false);
        }, [auth, router, setAuth])
        return (
            <>
                {!loading ? <><MainWrapper>
                    <HeroImage/>
                    <Content/>
                </MainWrapper><FooterWrapper>
                    <Footer/>
                </FooterWrapper></> : <Spinner/>}
            </>
        );
    }
;
export default Mainpage;
