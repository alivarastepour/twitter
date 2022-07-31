import { useReducer } from "react";

import Signup from "../Presenter/Signup";

import * as actions from "../Handlers/constants";
import { TsignupFields } from "../Handlers/TsignupFields";
import {
  handleSignup,
  reducerDecorator,
  validInfo,
} from "../Handlers/signup.handlers";
import { reducer } from "../Handlers/signup.reducer";
import { useRouter } from "next/router";

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

  const router = useRouter();

  return (
    <Signup
      state={state}
      dispatch={dispatch}
      actions={actions}
      validInfo={validInfo}
      handleSignup={handleSignup}
      router={router}
      birthDayDispatch={reducerDecorator(dispatch, actions.SET_BIRTH_DAY)}
      birthMonthDispatch={reducerDecorator(dispatch, actions.SET_BIRTH_MONTH)}
      birthYearDispatch={reducerDecorator(dispatch, actions.SET_BIRTH_YEAR)}
      emailOnChange={reducerDecorator(dispatch, actions.SET_EMAIL)}
      nameOnChange={reducerDecorator(dispatch, actions.SET_NAME)}
    />
  );
};
export default SignupContainer;
