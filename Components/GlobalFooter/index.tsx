import { Wrapper } from "./globalFooter.styles";

const Footer = () => {
  return (
    <>
      <Wrapper>
        <div className="f-item">
          <a className="f-item-link" href="">
            Terms of Service
          </a>
        </div>
        <div className="f-item">
          <a className="f-item-link" href="">
            Privacy Policy
          </a>
        </div>
        <div className="f-item">
          <a className="f-item-link" href="">
            Cookie Policy
          </a>
        </div>
        <div className="f-item">
          <a className="f-item-link" href="">
            Imprint
          </a>
        </div>
        <div className="f-item">
          <a className="f-item-link" href="">
            Accessibility
          </a>
        </div>
        <div className="f-item">
          <a className="f-item-link" href="">
            Ads info
          </a>
        </div>
        <div className="f-item">© 2022 Twitter, Inc.</div>
      </Wrapper>
    </>
  );
};

export default Footer;
