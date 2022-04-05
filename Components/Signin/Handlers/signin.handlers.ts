import axios from "axios";

import {TsigninFields} from "./TsigninFields";

import {HOST} from "../../../public/host";

export const handleSignin = (state: TsigninFields, setState: Function, setAuth:Function): void => {
    if (state.email.trim() === "") {
        setState(prev => {
            return {...prev, clientError: "email can not be empty"}
        })
        return;
    }
    if (state.password.trim() === "") {
        setState(prev => {
            return {...prev, clientError: "password can not be empty"}
        })
        return;
    }
    const url: string = `${HOST}/users/login`;
    const data = {
        user: {
            email: state.email,
            password: state.password
        }
    };
    axios.post(url, data).then(res => {
        localStorage.setItem('__ut', res.data.user.token);
        setState(prev => {
            return {...prev, serverError: "", clientError: ""}
        })
        setAuth(true);
    }).catch(err => {
        let errorMessage: string = "";
        try {
            errorMessage = err.response.data.errors.body;
            errorMessage = errorMessage === 'access forbidden' ? 'wrong username or password' : errorMessage;
        } catch (error) {
            errorMessage = "failed to login.";
        }
        setState(prev => {
            return {...prev, serverError: errorMessage}
        })
        setAuth(false);
    });
}