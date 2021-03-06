import {useContext, useEffect, useReducer} from "react";

import Signup from "../Presenter/Signup";
import {reducer} from "../Handlers/signup.reducer";
import * as actions from "../Handlers/constants";
import {YEAR, MONTH, calculateDaysCount} from "../Handlers/calenderHandler";
import {TsignupFields} from "../Handlers/TsignupFields";
import {
    emailOnChange,
    handleSignup,
    nameOnBlur,
    nameOnChange,
    validInfo
} from "../Handlers/signup.handlers";
import {authContext} from "../../../pages/_app";
import {useRouter} from "next/router";

const SignupContainer = () => {

    const initialState: TsignupFields = {
        birthYear: "",
        birthMonth: "",
        birthDay: "",
        name: "",
        email: "",
        nameError: "",
        emailError: "",
        serverError: "",
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    const birthYearDispatch = (year: number): void => {
        dispatch({type: actions.SET_BIRTH_YEAR, payload: year});
    };

    const birthDayDispatch = (day: number): void => {
        dispatch({type: actions.SET_BIRTH_DAY, payload: day});
    };

    const birthMonthDispatch = (month: number): void => {
        dispatch({type: actions.SET_BIRTH_MONTH, payload: month});
    };

    const {auth, setAuth} = useContext(authContext);

    const router = useRouter();
    
    useEffect(() => {
        if (auth)
            router.push('/home')
    }, [auth, router])

    return (
        <Signup
            state={state}
            dispatch={dispatch}
            actions={actions}
            YEAR={YEAR}
            MONTH={MONTH}
            calculateDaysCount={calculateDaysCount}
            validInfo={validInfo}
            birthDayDispatch={birthDayDispatch}
            birthMonthDispatch={birthMonthDispatch}
            birthYearDispatch={birthYearDispatch}
            emailOnChange={emailOnChange}
            handleSignup={handleSignup}
            nameOnBlur={nameOnBlur}
            nameOnChange={nameOnChange}
            setAuth={setAuth}
        />
    );
};
export default SignupContainer;
