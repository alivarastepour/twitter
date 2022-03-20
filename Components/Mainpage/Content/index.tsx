import Logo from "../../Logo";
import AppleLogo from "../../Logo/Apple";
import GoogleLogo from "../../Logo/Google";

const Content = () => (
  <div className="mp-fl-2">
    <div className="ct-ch ct-ch-1">
      <Logo size="S" />
    </div>
    <div className="ct-ch ct-ch-2 font font-eb">Happening now</div>
    <div className="ct-ch ct-ch-3 font font-eb">Join Twitter today.</div>
    <div className="ct-ch-4">
      <div className="ct-ch-fl ct-ch-fl-1">
        <div className="logo">
          <GoogleLogo />
        </div>
        <div className="text font font-eb">Sign up with Google</div>
      </div>
      <div className="ct-ch-fl ct-ch-fl-2">
        <div className="logo">
          <AppleLogo />
        </div>
        <div className="text font font-eb">Sign up with Apple</div>
      </div>
      <div className="ct-ch-fl-3">
        {
          // TO DO
        }
      </div>
      <div className="ct-ch-fl ct-ch-fl-4">
        <div className="text font font-eb">Sign up with phone or email</div>
      </div>
      <div className="ct-ch-fl-5">
        <div className="font font-l notice">
          By signing up, you agree to the {"  "}{" "}
          <a href="#">Terms of Service</a>
          {"  "} and {"  "}
          <a href="#">Privacy Policy</a>, including <a href="#">Cookie Use</a>.
        </div>
      </div>
    </div>
  </div>
);

export default Content;
