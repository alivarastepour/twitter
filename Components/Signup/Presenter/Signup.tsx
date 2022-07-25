import TextField from "@mui/material/TextField";

import Select from "../../Select";
import Dialog from "../../Dialog";

import { calculateDaysCount, MONTH, YEAR } from "../Handlers/calenderHandler";
import { nameOnBlur } from "../Handlers/signup.handlers";

import styles from "../../../styles/SignupPage/signup.module.scss";

const Signup = ({
  state,
  dispatch,
  actions,
  validInfo,
  birthYearDispatch,
  birthDayDispatch,
  birthMonthDispatch,
  emailOnChange,
  handleSignup,
  nameOnChange,
  setAuth,
}) => {
  return (
    <>
      <Dialog>
        <Dialog.Title>
          <Dialog.Header />
          <div className="font font-eb">Create your account</div>
        </Dialog.Title>
        <Dialog.Content>
          <div>
            <TextField
              autoFocus
              fullWidth
              label="Name"
              sx={{ marginBottom: "30px" }}
              error={state.nameError !== ""}
              helperText={
                <span style={{ color: "red" }}>{state.nameError}</span>
              }
              value={state.name}
              onChange={(event) =>
                nameOnChange(dispatch, actions.SET_NAME, event)
              }
              onBlur={(event) =>
                nameOnBlur(dispatch, actions.SET_NAME_ERROR, event.target.value)
              }
            />
          </div>
          <div>
            <TextField
              fullWidth
              label="Email"
              sx={{ marginBottom: "30px" }}
              error={state.emailError !== ""}
              helperText={
                <span style={{ color: "red" }}>{state.emailError}</span>
              }
              value={state.email}
              onChange={(event) => {
                emailOnChange(
                  dispatch,
                  actions.SET_EMAIL,
                  actions.SET_EMAIL_ERROR,
                  event.target.value
                );
              }}
            />
          </div>
          <div className={`font font-b ${styles.date}`}>Date of birth</div>
          <div className={`font font-l ${styles.dateNotice}`}>
            This will not be shown publicly. Confirm your own age, even if this
            account is for a business, a pet, or something else.
          </div>
          <div className={styles.dateContainer}>
            <div className={styles.select}>
              <Select
                items={MONTH}
                label="Month"
                value={state.birthMonth}
                setValue={birthMonthDispatch}
                width={250}
              />
            </div>
            <div className={styles.select}>
              <Select
                items={calculateDaysCount(state.birthYear, state.birthMonth)}
                label="Day"
                value={state.birthDay}
                setValue={birthDayDispatch}
                width={120}
              />
            </div>
            <div className={styles.select}>
              <Select
                items={YEAR}
                label="Year"
                value={state.birthYear}
                setValue={birthYearDispatch}
                width={150}
              />
            </div>
          </div>
          <div className={`${styles.error} font font-m`}>
            {state.serverError}
          </div>
        </Dialog.Content>
        <Dialog.Actions>
          <button
            className={`font font-b ${styles.signupButton}`}
            disabled={!validInfo(state)}
            onClick={() =>
              handleSignup(
                dispatch,
                actions.SET_SERVER_ERROR,
                state.name,
                state.email,
                setAuth
              )
            }
          >
            Signup
          </button>
        </Dialog.Actions>
      </Dialog>
    </>
  );
};

export default Signup;
