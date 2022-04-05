import {useContext, useState} from "react";

import Signin from "../Presenter/Signin";

import {TsigninFields} from "../Handlers/TsigninFields";

import {handleSignin} from "../Handlers/signin.handlers";

import {authContext} from "../../../pages/_app";

const SigninContainer = () => {

    const signinInitialState: TsigninFields = {
        email: "",
        password: "",
        clientError: "",
        serverError: "",
    }

    const {setAuth} = useContext(authContext);
    const [signinState, setSigninState] = useState(signinInitialState);

    return <Signin signinState={signinState} setSigninState={setSigninState} handleSignin={handleSignin}
                   setAuth={setAuth}/>
}
export default SigninContainer;