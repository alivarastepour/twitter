import { useContext, useEffect, useReducer } from "react";
import { useRouter } from "next/router";

import Signup from "../Presenter/Signup";

import * as actions from "../Handlers/constants";
import { TsignupFields } from "../Handlers/TsignupFields";
import {
  handleSignup,
  reducerDecorator,
  validInfo,
} from "../Handlers/signup.handlers";
import { reducer } from "../Handlers/signup.reducer";
import { authContext } from "../../../pages/_app";

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

  const { auth, setAuth } = useContext(authContext);

  const router = useRouter();

  useEffect(() => {
    if (auth) {
      router.push("/home");
    }
  });
  return (
    <Signup
      state={state}
      dispatch={dispatch}
      actions={actions}
      validInfo={validInfo}
      handleSignup={handleSignup}
      setAuth={setAuth}
      birthDayDispatch={reducerDecorator(dispatch, actions.SET_BIRTH_DAY)}
      birthMonthDispatch={reducerDecorator(dispatch, actions.SET_BIRTH_MONTH)}
      birthYearDispatch={reducerDecorator(dispatch, actions.SET_BIRTH_YEAR)}
      emailOnChange={reducerDecorator(dispatch, actions.SET_EMAIL)}
      nameOnChange={reducerDecorator(dispatch, actions.SET_NAME)}
    />
  );
};
export default SignupContainer;
