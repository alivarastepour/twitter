import {
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  TextField,
} from "@mui/material";
import Dialog from "@mui/material/Dialog";
import CloseIcon from "@mui/icons-material/Close";
import Logo from "../Logo";
import { Wrapper } from "./signup.styles";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  DAYS,
  isLeapYear,
  YEAR,
  MONTH,
  calculateDaysCount,
} from "./calenderHandler";
import Select from "../Select";

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
            <div style={{ display: "flex", justifyContent: "flex-start" }}>
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
                display: "flex",
                flexDirection: "column",
                marginTop: "30px",
              }}
            >
              <div>
                <TextField fullWidth label="name" />
              </div>
              <div>
                <TextField fullWidth label="phone" />
              </div>
              <div>use email instead</div>
              <div>Date of birth</div>
              <div>
                This will not be shown publicly. Confirm your own age, even if
                this account is for a business, a pet, or something else.
              </div>
              <div style={{ display: "flex" }}>
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
                    width={100}
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
            <Button>next</Button>
          </DialogActions>
        </Dialog>
      </Wrapper>
    </>
  );
};
export default Signup;
