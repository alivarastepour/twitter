import {
  Wrapper as MainWrapper,
  Content as FooterWrapper,
} from "./mainpage.styles";
import HeroImage from "./HeroImage";
import Footer from "./Footer";
import Content from "./Content";
const Mainpage = () => {
  return (
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
};
export default Mainpage;
