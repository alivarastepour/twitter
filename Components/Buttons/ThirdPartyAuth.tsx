import AppleLogo from "../Logo/Apple";
import GoogleLogo from "../Logo/Google";

import { TthirdPartyAuth } from "./TthirdPartyAuth";

import styles from "../../styles/Utils/ThirdPartyAuth.module.scss";

const ThirdPartyAuth = ({ company, state }: TthirdPartyAuth) => (
  <>
    <div className={styles.logo}>
      {company === "Apple" ? <AppleLogo /> : <GoogleLogo />}
    </div>
    <div className={` ${styles.text} text font font-eb`}>
      Sign {state} with {company}
    </div>
  </>
);

export default ThirdPartyAuth;
