import React, {useContext, useEffect, useState} from "react";
import {useRouter} from "next/router";
import dynamic from 'next/dynamic';

import {
    Wrapper as MainWrapper,
    Content as FooterWrapper,
} from "../styles/mainpage.styles";
import Spinner from "../../Spinner";

import {authContext} from "../../../pages/_app";

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

const Mainpage = ({loading}) => {

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
