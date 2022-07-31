import React from "react";
import dynamic from "next/dynamic";

import {
  Wrapper as MainWrapper,
  Content as FooterWrapper,
} from "../styles/mainpage.styles";
import Spinner from "../../Spinner";

const HeroImage = dynamic(() => import("./HeroImage"), {
  loading: () => <Spinner />,
});

const Content = dynamic(() => import("./Content"), {
  loading: () => <Spinner />,
});

const Footer = dynamic(() => import("./Footer"), {
  loading: () => <Spinner />,
});

const Mainpage = () => (
  <>
    <MainWrapper>
      <HeroImage />
      <Content />
    </MainWrapper>
    <FooterWrapper>
      <Footer />
    </FooterWrapper>
  </>
);

export default Mainpage;
