import { useState } from "react";

import Signin from "../Presenter/Signin";

import { TsigninFields } from "../Handlers/TsigninFields";

import { handleSignin } from "../Handlers/signin.handlers";
import { useRouter } from "next/router";

const SigninContainer = () => {
  const signinInitialState: TsigninFields = {
    email: "",
    password: "",
    clientError: "",
    serverError: "",
  };

  const [signinState, setSigninState] = useState(signinInitialState);

  const router = useRouter();

  return (
    <Signin
      signinState={signinState}
      setSigninState={setSigninState}
      handleSignin={handleSignin}
      router={router}
    />
  );
};
export default SigninContainer;
