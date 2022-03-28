import Logo from "../../Logo";
import AppleLogo from "../../Logo/Apple";
import GoogleLogo from "../../Logo/Google";
import styles from "../../../styles/mainpageContent.module.scss";
import Divider from "@mui/material/Divider";
import Link from "next/link";

const Content = () => (
  <div className="mp-fl-2">
    <div className="ct-ch ct-ch-1">
      <Logo size="S" />
    </div>
    <div className="ct-ch ct-ch-2 font font-sb">Happening now</div>
    <div className="ct-ch ct-ch-3 font font-sb">Join Twitter today.</div>
    <div className="ct-ch-4">
      <div
        className={`ct-ch-fl-1 ${
          styles.mainPageButton + " " + styles.whiteButton
        }`}
      >
        <div className={styles.logo}>
          <GoogleLogo />
        </div>
        <div className={` ${styles.text} text font font-eb`}>
          Sign up with Google
        </div>
      </div>
      <div
        className={`${
          styles.mainPageButton + " " + styles.whiteButton
        } ct-ch-fl-2`}
      >
        <div className={styles.logo}>
          <AppleLogo />
        </div>
        <div className={` ${styles.text} text font font-eb`}>
          Sign up with Apple
        </div>
      </div>
      <div className="ct-ch-fl-3">
        <Divider sx={{ width: 350 }} orientation={"horizontal"}>
          <div className="font font-m">or</div>
        </Divider>
      </div>
      <div
        className={`ct-ch-fl ${
          styles.mainPageButton + " " + styles.blueButton
        }`}
      >
        <Link href="/signup" passHref>
          <div className="text font font-eb">Sign up with phone or email</div>
        </Link>
      </div>
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
      <div className="ct-ch-fl">
        <Link href="/signin" passHref>
          <div
            className={`font font-b ${
              styles.mainPageButton + " " + styles.whiteBlueButton
            }`}
          >
            Sign in
          </div>
        </Link>
      </div>
    </div>
  </div>
);

export default Content;
