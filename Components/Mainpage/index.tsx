import {
    Wrapper as MainWrapper,
    Content as FooterWrapper,
} from "./mainpage.styles";
import Footer from "./Footer";
import React, {lazy, Suspense} from "react";
import dynamic from 'next/dynamic'
import Spinner from "../Spinner";
// import HeroImage from "./HeroImage";
// import Content from "./Content";

// const Content = lazy(() => import('./Content'));
const Content = dynamic(() => import('./Content'), {suspense: true});
// const HeroImage = lazy(() => import('./HeroImage'));
const HeroImage = dynamic(() => import('./HeroImage'), {suspense: true});

const Mainpage = () => {
        return (
            <>
                <MainWrapper>
                    <Suspense fallback={<Spinner/>}>
                        <HeroImage/>
                    </Suspense>
                    <Suspense fallback={<Spinner/>}>
                        <Content/>
                    </Suspense>
                </MainWrapper>
                <FooterWrapper>
                    <Footer/>
                </FooterWrapper>
            </>
        );
    }
;
export default Mainpage;
