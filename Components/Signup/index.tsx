import {
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  TextField,
} from "@mui/material";
import Dialog from "@mui/material/Dialog";
import CloseIcon from "@mui/icons-material/Close";
import Logo from "../Logo";
import { Wrapper } from "./signup.styles";
import Link from "next/link";
import { useState } from "react";
import { YEAR, MONTH, calculateDaysCount } from "./calenderHandler";
import Select from "../Select";
import styles from "../../styles/signup.module.scss";
const Signup = () => {
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");

  return (
    <>
      <Wrapper>
        <Dialog
          open={true}
          PaperProps={{
            sx: {
              width: "700px",
              borderRadius: "15px",
            },
          }}
        >
          <DialogTitle>
            <div className={styles.salam}>
              <IconButton sx={{ marginRight: "200px" }}>
                <Link href="/" passHref>
                  <CloseIcon />
                </Link>
              </IconButton>
              <Logo size="S" />
            </div>
          </DialogTitle>
          <DialogTitle>
            <div className="font font-eb" style={{ fontSize: "1.6rem" }}>
              Create your account
            </div>
          </DialogTitle>
          <DialogContent>
            <div
              style={{
                // width: "600px",
                // display: "flex",
                // flexDirection: "column",
                marginTop: "30px",
              }}
            >
              <div>
                <TextField
                  fullWidth
                  label="Name"
                  sx={{ marginBottom: "30px" }}
                />
              </div>
              <div>
                <TextField
                  fullWidth
                  label="Phone"
                  sx={{ marginBottom: "30px" }}
                />
              </div>
              <div className="font font-b" style={{ marginBottom: "5px" }}>
                Date of birth
              </div>
              <div
                className="font font-l"
                style={{ fontSize: "0.9rem", marginBottom: "15px" }}
              >
                This will not be shown publicly. Confirm your own age, even if
                this account is for a business, a pet, or something else.
              </div>
              <div
                style={{
                  display: "flex",
                  marginBottom: "40px",
                  justifyContent: "space-around",
                }}
              >
                <div>
                  <Select
                    items={MONTH}
                    label="Month"
                    value={month}
                    setValue={setMonth}
                    width={250}
                  />
                </div>
                <div>
                  <Select
                    items={calculateDaysCount(year, month)}
                    label="Day"
                    value={day}
                    setValue={setDay}
                    width={120}
                  />
                </div>
                <div>
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
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                width: "900px",
                marginBottom: "30px",
              }}
            >
              <button
                className="font font-b"
                style={{
                  background: "black",
                  color: "white",
                  outline: "none",
                  border: "none",
                  width: "95%",
                  height: "40px",
                  borderRadius: "30px",
                  fontSize: "1.0rem",
                }}
              >
                Signup
              </button>
            </div>
          </DialogActions>
        </Dialog>
      </Wrapper>
    </>
  );
};
export default Signup;
