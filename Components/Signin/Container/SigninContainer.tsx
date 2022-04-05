import Signin from "../Presenter/Signin";
import {TsigninFields} from "../Handlers/TsigninFields";
import {useState} from "react";

const SigninContainer = () => {

    const signinInitialState: TsigninFields = {
        email: "",
        password: "",
        clientError: "",
        serverError: "",
    }

    const [signinState, setSigninState] = useState(signinInitialState);

    return <Signin signinState={signinState} setSigninState={setSigninState}/>
}
export default SigninContainer;