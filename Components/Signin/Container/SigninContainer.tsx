import {useState} from "react";

import Signin from "../Presenter/Signin";

import {TsigninFields} from "../Handlers/TsigninFields";

import {handleSignin} from "../Handlers/signin.handlers";

const SigninContainer = () => {

    const signinInitialState: TsigninFields = {
        email: "",
        password: "",
        clientError: "",
        serverError: "",
    }

    const [signinState, setSigninState] = useState(signinInitialState);

    return <Signin signinState={signinState} setSigninState={setSigninState} handleSignin={handleSignin}/>
}
export default SigninContainer;