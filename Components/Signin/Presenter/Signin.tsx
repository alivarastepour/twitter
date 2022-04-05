import Link from "next/link";
import Dialog from "../../Dialog";
import styles from "../../../styles/SigninPage/signin.module.scss";
import ThirdPartyAuth from "../../Buttons/ThirdPartyAuth";
import {Button} from "../../Buttons/MainpageButtonWrapper";
import buttonStyles from "../../../styles/Button/button.module.scss";
import Divider from "../../Divider";
import {TextField} from "@mui/material";

import {handleSignin} from "../Handlers/signin.handlers";

const Signin = ({signinState, setSigninState}) =>
    (
        <>
            <Dialog>
                <Dialog.Title>
                    <Dialog.Header/>
                    <div className={`font font-eb ${styles.header}`}>
                        Sign in to Twitter
                    </div>
                </Dialog.Title>
                <Dialog.Content>
                    <div className={styles.contentContainer}>
                        <div className={styles.contentItem}>
                            <Button className={buttonStyles.whiteButton}>
                                <ThirdPartyAuth state="in" company="Google"/>
                            </Button>
                        </div>
                        <div className={styles.contentItem}>
                            <Button className={buttonStyles.whiteButton}>
                                <ThirdPartyAuth state="in" company="Apple"/>
                            </Button>
                        </div>
                        <div className={styles.contentItem}>
                            <Divider orientation="horizontal" text="or" width={300}/>
                        </div>
                        <div className={styles.contentItem}>
                            <TextField
                                sx={{width: 300}}
                                label={<div className="font">email</div>}
                                value={signinState.email}
                                onChange={e => setSigninState(prevState => {
                                    return {...prevState, email: e.target.value}
                                })}
                            />
                        </div>
                        <div className={styles.contentItem}>
                            <TextField
                                sx={{width: 300}}
                                label={<div className="font">password</div>}
                                value={signinState.password}
                                onChange={e => setSigninState(prevState => {
                                    return {...prevState, password: e.target.value}
                                })}
                            />
                        </div>
                        {(signinState.clientError || signinState.serverError) && <div className={styles.contentItem}>
                            <div className={styles.error + " font font-m"}>
                                {signinState.clientError ? signinState.clientError : signinState.serverError ? signinState.serverError : ""}
                            </div>
                        </div>}
                        <div className={styles.contentItem} onClick={() => handleSignin(signinState, setSigninState)}>
                            <Button
                                className={`
              ${buttonStyles.blackButton} font font-eb`}
                            >
                                Signin
                            </Button>
                        </div>
                        <div className={styles.contentItem}>
                            <Button
                                className={`
              ${buttonStyles.whiteButton} font font-b`}
                            >
                                Forgot password?
                            </Button>
                        </div>
                        <div
                            className={`${
                                styles.contentItem + " " + styles.help
                            } font font-m`}
                        >
                            Don&apos;t have an account?
                            <div style={{display: "inline-block"}}>
                                <Link href="/signup" passHref>
                                    <div className={styles.signup}>Sign up</div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </Dialog.Content>
            </Dialog>
        </>
    );


export default Signin;
