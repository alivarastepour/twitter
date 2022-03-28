import { ChangeEvent, Dispatch } from "react";
import { TsignupFields } from "./TsignupFields";
import axios from "axios";
import { HOST } from "../../public/host";

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
  if (validEmail) {
    dispatch({ type: typeSuccess, payload: email });
    dispatch({ type: typeError, payload: "" });
  } else {
    dispatch({ type: typeSuccess, payload: email });
    dispatch({ type: typeError, payload: "Please enter a valid email." });
  }
};

export const nameOnBlur = (
  dispatch: Dispatch<any>,
  type: string,
  name: string
): void => {
  if (name.trim() === "") {
    dispatch({ type, payload: "What’s your name?" });
  } else {
    dispatch({ type, payload: "" });
  }
};

export const handleSignup = (
  dispatch: Dispatch<any>,
  type: string,
  username: string,
  email: string
): void => {
  const password: string = username + email.split("@")[0];
  const url: string = `${HOST}/users`;
  const data = {
    user: { email, password, username },
  };
  axios
    .post(url, data)
    .then((a) => {
      localStorage.setItem("__ut", a.data.user.token);
      dispatch({ type, payload: "" });
    })
    .catch((e) => {
      let errorMessage: string = "";
      try {
        errorMessage = e.response.data.errors.body;
      } catch (error) {
        errorMessage = "failed to create account.";
      }
      dispatch({ type, payload: errorMessage });
    });
};
