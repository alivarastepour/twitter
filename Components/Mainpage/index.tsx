import { Wrapper } from "./mainpage.styles";
import HeroImage from "./HeroImage";
import Footer from "./Footer";
import Content from "./Content";
const Mainpage = () => {
  return (
    <>
      <Wrapper>
        <HeroImage/>
        <Content/>
        <Footer/>
      </Wrapper>
    </>
  );
};
export default Mainpage;
