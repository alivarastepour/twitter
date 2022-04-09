import {useContext, useEffect, useState} from "react";

import Signin from "../Presenter/Signin";

import {TsigninFields} from "../Handlers/TsigninFields";

import {handleSignin} from "../Handlers/signin.handlers";

import {authContext} from "../../../pages/_app";
import {useRouter} from "next/router";

const SigninContainer = () => {

    const signinInitialState: TsigninFields = {
        email: "",
        password: "",
        clientError: "",
        serverError: "",
    }

    const {auth, setAuth} = useContext(authContext);

    const [signinState, setSigninState] = useState(signinInitialState);

    const router = useRouter();

    useEffect(() => {
        if (auth)
            router.push('/home')
    },[auth, router])

    return <Signin signinState={signinState} setSigninState={setSigninState} handleSignin={handleSignin}
                   setAuth={setAuth}/>
}
export default SigninContainer;