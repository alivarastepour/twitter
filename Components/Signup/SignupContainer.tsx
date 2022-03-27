import { useReducer } from "react";
import Signup from ".";
import { reducer } from "./signup.reducer";
import * as actions from "./constants";
import { YEAR, MONTH, calculateDaysCount } from "./calenderHandler";
import { validInfo } from "./signup.handlers";

const SignupContainer = () => {
  const initialState = {
    birthYear: "",
    birthMonth: "",
    birthDay: "",
    name: "",
    email: "",
    nameError: "",
    emailError: "",
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const birthYearDispatch = (year) => {
    dispatch({ type: actions.SET_BIRTH_YEAR, payload: year });
  };
  const birthDayDispatch = (day) => {
    dispatch({ type: actions.SET_BIRTH_DAY, payload: day });
  };
  const birthMonthDispatch = (month) => {
    dispatch({ type: actions.SET_BIRTH_MONTH, payload: month });
  };
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
    />
  );
};
export default SignupContainer;
