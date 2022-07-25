import { ChangeEvent, Dispatch } from "react";
import axios from "axios";

import * as actions from "../Handlers/constants";
import { TsignupFields } from "./TsignupFields";
import { HOST } from "../../../public/host";

export const validInfo = (state: TsignupFields): boolean => {
  return (
    state.nameError === "" &&
    state.emailError === "" &&
    state.birthYear !== "" &&
    state.birthDay !== "" &&
    state.birthMonth !== ""
  );
};

export const nameOnChange = (
  dispatch: Dispatch<any>,
  type: string,
  event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
): void => {
  const name: string = event.target.value;
  if (name.length >= 50) {
    event.preventDefault();
  } else {
    dispatch({ type, payload: name });
  }
};

const validEmailPattern: RegExp =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const emailOnChange = (
  dispatch: Dispatch<any>,
  typeSuccess: string,
  typeError: string,
  email: string
): void => {
  const validEmail: boolean = validEmailPattern.test(email);
  dispatch({ type: typeSuccess, payload: email });
  if (validEmail) {
    dispatch({ type: typeError, payload: "" });
  } else {
    dispatch({ type: typeError, payload: "Please enter a valid email." });
  }
};

export const nameOnBlur = (
  dispatch: Dispatch<any>,
  type: string,
  name: string
): void => {
  if (name.trim() === "") {
    dispatch({ type, payload: "What's your name?" });
  } else {
    dispatch({ type, payload: "" });
  }
};

export const handleSignup = (
  dispatch: Dispatch<any>,
  type: string,
  username: string,
  email: string,
  setAuth: Function
): void => {
  const password: string = username + email.split("@")[0];
  const url: string = `${HOST}/users`;
  const data = {
    user: { email, password, username },
  };
  axios
    .post(url, data)
    .then((res) => {
      localStorage.setItem("__ut", res.data.user.token);
      dispatch({ type, payload: "" });
      setAuth(true);
    })
    .catch((error) => {
      let errorMessage: string =
        error.response?.data?.errors?.body || "failed to create account.";
      dispatch({ type, payload: errorMessage });
      setAuth(false);
    });
};

export const reducerDecorator = (
  dispatch: Function,
  type: string
): Function => {
  switch (type) {
    case actions.SET_BIRTH_DAY:
    case actions.SET_BIRTH_MONTH:
    case actions.SET_BIRTH_YEAR:
      return (payload: string | number) => {
        dispatch({ type, payload });
      };
    case actions.SET_EMAIL:
      return emailOnChange;
    case actions.SET_NAME:
      return nameOnChange;
  }
};
