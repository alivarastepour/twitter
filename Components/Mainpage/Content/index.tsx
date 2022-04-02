import TwitterLogo from "../../Logo/Twitter";

import styles from "../../../styles/Button/button.module.scss";

import Link from "next/link";
import ThirdPartyAuth from "../../Buttons/ThirdPartyAuth";
import { Button } from "../../Buttons/MainpageButtonWrapper";
import Divider from "../../Divider";

const Content = () => (
  <div className="mp-fl-2">
    <div className="ct-ch ct-ch-1">
      <TwitterLogo size="S" />
    </div>
    <div className="ct-ch ct-ch-2 font font-sb">Happening now</div>
    <div className="ct-ch ct-ch-3 font font-sb">Join Twitter today.</div>
    <div className="ct-ch-4">
      <Button className={`ct-ch-fl-1 ${styles.whiteButton}`}>
        <ThirdPartyAuth company="Google" state="up" />
      </Button>
      <Button className={`${styles.whiteButton} ct-ch-fl-2`}>
        <ThirdPartyAuth company="Apple" state="up" />
      </Button>
      <div className="ct-ch-fl-3">
        <Divider orientation="horizontal" text="or" width={350} />
      </div>
      <Button className={`ct-ch-fl ${styles.blueButton}`}>
        <Link href="/signup" passHref>
          <div className="text font font-eb">Sign up with phone or email</div>
        </Link>
      </Button>
      <div className="ct-ch-fl-5">
        <div className="font font-m notice">
          By signing up, you agree to the {"  "}{" "}
          <a href="#">Terms of Service</a>
          {"  "} and {"  "}
          <a href="#">Privacy Policy</a>, including <a href="#">Cookie Use</a>.
        </div>
      </div>
    </div>
    <div className="ct-ch-5">
      <div className="font font-b text-q">Already have an account?</div>
      <Button className={`ct-ch-fl ${styles.whiteBlueButton}`}>
        <Link href="/signin" passHref>
          <div className={`font font-b`}>Sign in</div>
        </Link>
      </Button>
    </div>
  </div>
);

export default Content;
