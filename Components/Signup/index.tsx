import { useState } from "react";

import Link from "next/link";

import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import CloseIcon from "@mui/icons-material/Close";

import Logo from "../Logo";
import Select from "../Select";

import { YEAR, MONTH, calculateDaysCount } from "./calenderHandler";

import styles from "../../styles/signup.module.scss";
import { validInfo } from "./signup.handlers";

const Signup = () => {
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");

  return (
    <>
      <Dialog
        open={true}
        PaperProps={{
          sx: {
            width: "700px",
            borderRadius: "15px",
            "@media only screen and (max-width: 720px)": {
              width: "100vw",
              height: "100vh",
            },
          },
        }}
      >
        <DialogTitle>
          <div className={styles.dialogHeader}>
            <div style={{ marginRight: "37%" }}>
              <IconButton>
                <Link href="/" passHref>
                  <CloseIcon />
                </Link>
              </IconButton>
            </div>
            <div>
              <Logo size="S" />
            </div>
          </div>
        </DialogTitle>
        <DialogTitle>
          <div className={`font font-eb ${styles.create} `}>
            Create your account
          </div>
        </DialogTitle>
        <DialogContent>
          <div className={styles.formContainer}>
            <div>
              <TextField fullWidth label="Name" sx={{ marginBottom: "30px" }} />
            </div>
            <div>
              <TextField
                fullWidth
                label="Phone"
                sx={{ marginBottom: "30px" }}
              />
            </div>
            <div className={`font font-b ${styles.date}`}>Date of birth</div>
            <div className={`font font-l ${styles.dateNotice}`}>
              This will not be shown publicly. Confirm your own age, even if
              this account is for a business, a pet, or something else.
            </div>
            <div className={styles.dateContainer}>
              <div className={styles.select}>
                <Select
                  items={MONTH}
                  label="Month"
                  value={month}
                  setValue={setMonth}
                  width={250}
                />
              </div>
              <div className={styles.select}>
                <Select
                  items={calculateDaysCount(year, month)}
                  label="Day"
                  value={day}
                  setValue={setDay}
                  width={120}
                />
              </div>
              <div className={styles.select}>
                <Select
                  items={YEAR}
                  label="Year"
                  value={year}
                  setValue={setYear}
                  width={150}
                />
              </div>
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <div className={styles.signupContainer}>
            <button
              className={`font font-b ${styles.signupButton}`}
              disabled={validInfo()}
            >
              Signup
            </button>
          </div>
        </DialogActions>
      </Dialog>
    </>
  );
};
export default Signup;
