import axios from "axios";

import { TsigninFields } from "./TsigninFields";

import { HOST } from "../../../public/host";
import { NextRouter } from "next/router";

export const handleSignin = (
  state: TsigninFields,
  setState: Function,
  router: NextRouter
): void => {
  let clientError: string = "";
  if (state.email.trim() === "") clientError = "please enter a valid email";
  else if (state.password.trim() === "")
    clientError = "please enter a valid password";
  if (clientError) {
    setState((prev) => {
      return { ...prev, clientError };
    });
    return;
  }
  const url: string = `${HOST}/users/login`;
  const data = {
    user: {
      email: state.email,
      password: state.password,
    },
  };
  axios
    .post(url, data)
    .then((res) => {
      localStorage.setItem("__ut", res.data.user.token);
      setState((prev) => {
        return { ...prev, serverError: "", clientError: "" };
      });
      router.push("/home");
    })
    .catch((err) => {
      localStorage.setItem("__ut", "");
      let errorMessage: string = err?.response?.data?.errors?.body;
      let errorMessageUI: string =
        errorMessage === "access forbidden"
          ? "wrong username or password"
          : errorMessage;
      setState((prev) => {
        return { ...prev, serverError: errorMessageUI };
      });
    });
};
