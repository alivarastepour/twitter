import { Wrapper } from "./mainpage.styles";
import HeroImage from "./HeroImage";
import Footer from "./Footer";
const Mainpage = () => {
  return (
    <>
      <Wrapper>
        <HeroImage/>
        <div className="mp-fl-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, ut?
          Provident doloribus quod illo quia alias ipsam suscipit in, omnis
          earum praesentium a maiores qui nulla dolorum quam! Maxime, modi!
        </div>
        <Footer/>
      </Wrapper>
    </>
  );
};
export default Mainpage;
