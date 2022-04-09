import React, {useContext, useEffect, useState} from "react";
import {useRouter} from "next/router";
import dynamic from 'next/dynamic';

import {
    Wrapper as MainWrapper,
    Content as FooterWrapper,
} from "./mainpage.styles";
import Spinner from "../Spinner";

import {authContext} from "../../pages/_app";

const HeroImage = dynamic(
    () => import("./HeroImage"),
    {loading: () => <Spinner/>}
)

const Content = dynamic(
    () => import("./Content"),
    {loading: () => <Spinner/>}
)

const Footer = dynamic(
    () => import('./Footer'),
    {loading: () => <Spinner/>}
)

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
                {!loading ? <>
                    <MainWrapper>
                        <HeroImage/>
                        <Content/>
                    </MainWrapper>
                    <FooterWrapper>
                        <Footer/>
                    </FooterWrapper>
                </> : <Spinner/>
                }
            </>
        );
    }
;
export default Mainpage;
